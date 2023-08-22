import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { money } from '../assets'
import { useStateContext } from "../context";


const Post = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createPost } = useStateContext();
  const [content, setContent] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await createPost({content, target: ethers.utils.parseUnits(content,18)});
      setIsLoading(false);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col items-center justify-center text-center text-white font-thin">
        <div className="mt-10 w-2/3 bg-gray-900  rounded-3xl justify-center items-center flex flex-col">
          <div className="flex mt-5">
            <div className="w-16 h-16 bg-slate-600 rounded-full"></div>
            <input
              className="w-96 h-16 ml-10  rounded-2xl bg-slate-600 divide-slate-10 pl-4 placeholder:italic placeholder:text-slate-400 "
              type="text"
              name="post"
              id="post"
              placeholder="Write What You Want..."
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mt-5 mb-5 flex justify-start items-start space-x-20">
            <div className="flex ">
              <img
                className="w-8"
                src="https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png"
                alt="photo"
              />
              <h1 className="text-[18px] tracking-wider ml-2 mt-1 "> Photo </h1>
            </div>
            <div className="flex ">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/512/4503/4503915.png"
                alt="photo"
              />

              <h1 className="text-[18px] tracking-wider ml-2 mt-1 "> Video </h1>
            </div>
            <div className="flex ">
              <img
                className="w-8"
                src="https://static.thenounproject.com/png/118540-200.png"
                alt="photo"
              />

              <h1 className="text-[18px] tracking-wider ml-2 mt-1 ">
                {" "}
                Activity{" "}
              </h1>
            </div>
          </div>
          <div className="flex justify-end items-end mb-5">
            <button className="w-36 h-8 bg-slate-600 rounded-3xl text-[20px] tracking-widest font-medium">
              {" "}
              Post{" "}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Post;
