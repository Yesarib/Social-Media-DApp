import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract("0x74F8cf1AEF14Bf71bE5A8ce32c094B53B46921dF")
    const { mutateAsync: createPost } = useContractWrite(contract, 'newPost')
    const { mutateAsync: likePost } = useContractWrite(contract, 'likePost')

    const address = useAddress();
    const connect = useMetamask();

    const publishPost = async (content,imageUrl) => {
        console.log(content);
        try {
            const data = await createPost({
                args:[
                    content.content,
                    content.imageUrl
                ]
            });
            console.log("DATA => " + data);
        } catch (error) {
            console.log(error);
        }
    }

    const getPosts = async() => {
        const posts = await contract.call('getAllPosts');

        const parsePosts = posts.map((post,i) => ({
            creator: post.creator,
            content: post.content,
            likes: post.likes,
            comments: post.comments,
            image: post.imageUrl

        }));

        console.log(parsePosts);
        return parsePosts;

    }

    // const publishLike = async(postId) => {
    //     try {
    //         const data = await likePost({
    //             args:[
    //                 postId.postId
    //             ]
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <StateContext.Provider value={{address, contract, connect, createPost: publishPost, getPosts, }}>
            {children}
        </StateContext.Provider>
    )

    
}



export const useStateContext = () => useContext(StateContext)