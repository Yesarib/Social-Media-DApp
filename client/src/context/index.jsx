import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract("0x5093FF34015C9CEB6d07333a6C5C5D1c4fb2998e")
    const { mutateAsync: createPost } = useContractWrite(contract, 'createPost')

    const address = useAddress();
    const connect = useMetamask();

    const publishPost = async (content) => {
        try {
            const data = await createPost({
                args:[
                    content
                ]
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StateContext.Provider value={{address, contract, connect, createPost: publishPost }}>
            {children}
        </StateContext.Provider>
    )
}



export const useStateContext = () => useContext(StateContext)