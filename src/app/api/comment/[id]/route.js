import db from '@/lib/db';
import { verifyJwtToken } from '@/lib/jwt';
import Comment from '@/models/Comment';

// get comment

export async function GET(req, ctx) {
	await db.connect();

	// blog id
	const id = ctx.params.id;
	try {
		const comments = await Comment.find({ blogId: id }).populate('authorId');
		return new Response(JSON.stringify(comments), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify(null), { status: 500 });
	}
}

// delete a comment

export async function DELETE(req, ctx) {
	await db.connect();
	const id = ctx.params.id;
	const accessToken = req.headers.get('authorization');
	const token = accessToken.split(' ')[1];
	const decodedToke = verifyJwtToken(token);

	if (!accessToken || !decodedToke) {
		return new Response(
			JSON.stringify({ error: 'unathorized (wrong or expired token' }),
			{ status: 403 }
		);
	}
	try {
		const comment = await Comment.findById(id).populate('authorId');
		if (comment.authorId._id.toString() !== decodedToke._id.toString()) {
			return new Response(
				JSON.stringify({ msg: 'Only author can delete his blog' }),
				{ status: 401 }
			);
		}
		await Comment.findByIdAndDelete(id);
		return new Response(
			JSON.stringify({ msg: 'Successfully deleted comment' }),
			{ status: 200 }
		);
	} catch (error) {
		return new Response(JSON.stringify(null), { status: 500 });
	}
}
