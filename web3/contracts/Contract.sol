// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./User.sol";
import "./Posts.sol";

contract Contract {
    UserContract public userContract;
    PostsContract public socialMediaContract;

    constructor(address _userAddress, address _socialMediaAddress) {
        userContract = UserContract(_userAddress);
        socialMediaContract = PostsContract(_socialMediaAddress);
    }

    function createUser(string memory _userName) public {
        userContract.newUser(_userName);
    }

    function createPost(string memory _content) public payable {
        socialMediaContract.newPost(_content);
    }

    function likePost(uint256 _postId) public {
        socialMediaContract.likePost(_postId);
    }

    function addComment(uint256 _postId, string memory _comment) public {
        socialMediaContract.addComment(_postId, _comment);
    }
}