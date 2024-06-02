import { useState, useEffect } from "react";
import databaseService from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";
import { PostForm } from "../components";


const EditPost = () => {
    const [post, setPost] = useState({});
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            databaseService.getPost(slug)
                .then((res) => {
                    setPost(res)
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);
    return Object.entries.length ? (
        <div className="py-8">
            <PostForm post={post} />
        </div>
    ) : null;
}

export default EditPost;