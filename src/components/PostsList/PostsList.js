import AddPostForm from "../AddPostForm/AddPostForm";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import { postSelector } from "../../redux/reducer";


function PostsList () {
    const postsInfo = useSelector(postSelector);

    return (
        <div>
            <AddPostForm />
            {postsInfo.map((post, index) => <Post postsInfo={post} key={index} /> )}
        </div>
    )
}

export default PostsList;