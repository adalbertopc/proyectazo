import React from 'react';
import PostCard from './PostCard';

const PostsContainer = ({ posts }) => {
	console.log(posts);
	return posts.map(
		({ profilePicture, name, username, postContent }, index) => (
			<PostCard
				key={index}
				profilePicture={profilePicture}
				name={name}
				username={username}
				content={postContent}
			/>
		)
	);
};

export default PostsContainer;
