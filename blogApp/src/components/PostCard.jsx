import { Link } from "react-router-dom"
import databaseService from "../appwrite/config";

const PostCard = ({$id, title, featuredImage}) => {
    const imagePreview = databaseService.getFilePreview(featuredImage);
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4 max-w-xs">
                <div className="w-full justify-center mb-4">
                    <img src={imagePreview} alt={title} className="rounded-xl w-full object-cover" />
                </div>
                <h2 className="text-xl font-bold">
                    {title}
                </h2>
            </div>
        </Link>
    )
}


export default PostCard;