import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";
import AddComment from "./AddComment";



const Flow = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);
    const [posts, setPosts] = useState([]);

    const { address, contract, getPosts, likePost } = useStateContext();

    const fetchPosts = async() => {
        setIsLoading(true);

        const data = await getPosts();

        setPosts(data);
        setIsLoading(false)
    }

    const likePosts = async(id) => {
        const data = await likePost({id});
        console.log(data);
    }

    console.log(posts[0]?.comments);
    useEffect(() => {
        if (contract) fetchPosts();
    }, [address, contract])
    return (
        <div className="w-full flex flex-col items-center justify-center text-center text-white font-thin">
            
            {posts?.map((post) => {
                return(
                    <div key={post.pId} className="w-2/3 mt-16 mb-10 border border-gray-600 rounded-3xl">
                        <div className="mt-2 mb-2 mr-2 ml-2">
                            <div className="justify-start text-start ml-3 mr-3 mt-10 font-medium text-[17px]">
                                {post.creator}
                            </div>
                            <div className="flex flex-col justify-center items-center ml-3 mr-3">
                                <p className="mr-10 mt-5 justify-start text-start font-normal text-[17px] text-gray-200"> {post.content} </p>
                                <img className="mt-5 rounded-2xl" src={post?.image} alt="" />
                            </div>
                            <div className="flex justify-center text-center items-center ">
                                <div className="mt-5 bg-gray-600 w-5/6 h-0.5"></div>
                            </div>
                            <div className="text-start justify-start items-start ml-3 mr-3 mt-3">
                                {post.likes.toNumber()}
                            </div>
                            <div className="flex justify-evenly">
                                <div className="mt-3">
                                    <button onClick={() => likePosts(post.pId)}> <img className="w-6" src="https://static-00.iconduck.com/assets.00/heart-icon-512x441-zviestnn.png" alt="" /> </button>
                                </div>
                                <div className="mt-3">
                                    <button  onClick={() => setShowAddComment(!showAddComment)}>
                                        Comments

                                    </button>
                                </div>
                            </div>
                            <div>
                                {showAddComment && <AddComment pId={post.pId} comments={post?.comments} />}
                            </div>
                        </div>
                        
                    </div>
                )
                
            })}
        </div>
    )
}

export default Flow