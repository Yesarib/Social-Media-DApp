import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context";

const Flow = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const { address, contract, getPosts } = useStateContext();

    const fetchPosts = async() => {
        setIsLoading(true);

        const data = await getPosts();

        setPosts(data);
        setIsLoading(false)
    }
    console.log(posts);
    useEffect(() => {
        if (contract) fetchPosts();
    }, [address, contract])
    return (
        <div className="w-full flex flex-col items-center justify-center text-center text-white font-thin">
            
            {posts?.map((post) => {
                return(
                    <div key={"post"} className="w-2/3 mt-16 mb-10 border border-gray-600 rounded-3xl">
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
                                0
                            </div>
                            <div className="flex justify-evenly">
                                <div className="mt-3">
                                    Like
                                </div>
                                <div className="mt-3">
                                    Comments
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
                
            })}
        </div>
    )
}

export default Flow