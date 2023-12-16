import { useContext } from "react";
import { AuthContext } from "../providers/authProvider.jsx";

const Comment = ({comment}) => {

	const { auth } = useContext(AuthContext);

	return (
		<div className="p-2 comm">
			<div className="">
				<h6 className="tit mb-2">{comment.author.username}</h6>
				<p className="commentBody">{comment.description}</p>
			</div>
		</div>
	)
}

export { Comment };
