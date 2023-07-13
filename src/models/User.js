import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Username is Required'],
			unique: true,
		},
		password: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose?.models?.User || mongoose.model('User', UserSchema);
