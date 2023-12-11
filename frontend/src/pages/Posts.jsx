import { useEffect, useState } from "react";
import { domain } from "../configs/utils";
import { PostItem } from "../components/PostItem";

const Posts = () => {

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`${domain}/posts`);
			const fetchedPosts = await response.json();
			if (fetchedPosts.length) {
				setPosts(fetchedPosts);
				console.log("los posts: ", posts);
			}
		}
		fetchPosts();
	}, []);

	return (
		<div>
			<p>Acá están las mejores publicaciones sobre viajes...</p>
			<div>
				{console.log("los posts en return: ", posts)}
				{posts.map((post) => <PostItem post={post} key={post._id} /> )}
			</div>
		</div>
	)
  }
  
  export default Posts;
