'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import classes from './createBlog.module.css';

const CreateBlog = () => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<h2>Create Post</h2>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Title...'
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						placeholder='Description...'
						onChange={(e) => setDesc(e.target.value)}
					/>
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value='Nature'>Nature</option>
						<option value='Mountain'>Mountain</option>
						<option value='Ocean'>Ocean</option>
						<option value='Wildlife'>Wildlife</option>
						<option value='Forest'>Forest</option>
					</select>
					<label htmlFor='image'>
						Upload Image <AiOutlineFileImage />
					</label>
					<input
						id='image'
						type='file'
						style={{ display: 'none' }}
						onChange={(e) => setPhoto(e.target.files[0])}
					/>
					<button className={classes.createBlog}>Create</button>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};
export default CreateBlog;
