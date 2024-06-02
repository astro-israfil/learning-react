import { useState, useEffect } from "react";
import databaseService from "../appwrite/config";
import {Container, PostCard} from "../components";

const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        databaseService.getPosts([])
            .then((res) => setPosts(res.documents))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap gap-4">
                {
                    posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))
                }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts;