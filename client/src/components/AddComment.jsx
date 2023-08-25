import React, { useState } from 'react'
import { useStateContext } from '../context'

const AddComment = ({ pId, comments }) => {
    console.log(comments);
    const { newComment } = useStateContext();
    const [comment, setComment] = useState("");
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            await newComment({pId,comment})
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-start items-start mb-5'>
                    <input className='w-2/3 h-10 pl-2 mt-5 ml-5 border-2 bg-transparent rounded-2xl' type="text" placeholder='Add Comment' onChange={(e) => setComment(e.target.value)} />
                    <button className='ml-16 mt-5 border-2 bg-transparent rounded-xl w-36 h-10'> Comment </button>
                </div>
                <div>
                    {comments?.map((c,index) => (
                        <div key={index} className='text-white justify-start text-start items-start text-[16px] mt-5 mb-5 ml-5'>
                            {c}
                        </div>
                    ))}
                </div>
            </form>
            
        </div>
    )
}

export default AddComment