// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract PostsContract{
    struct Posts {
        uint256 postId;
        address creator;
        string content;
        uint256 creationTime;
        uint256 likes;
        string[] comments;
    }

    Posts[] public posts;
    

    mapping(address => uint256[]) public userPosts;


    function newPost(string memory _content) public payable {
        uint256 postId = posts.length;
        posts.push(Posts(postId, msg.sender, _content, block.timestamp, 0, new string[](0)));
        userPosts[msg.sender].push(postId);

    }

    function likePost(uint _postId) public {
        Posts storage post = posts[_postId];
        post.likes++;

    }

    function addComment(uint _postId, string memory comment) public {
        Posts storage post = posts[_postId];
        post.comments.push(comment);
    }

    function getUserPosts(address _userAddress) public view returns(uint256[] memory) {
        return userPosts[_userAddress];
    }

    function getPost(uint256 _postId) public view returns(
        address creator,
        string memory content,
        uint256 creationTime,
        uint256 likes,
        string[] memory comments
    ) {
        Posts storage post = posts[_postId];
        return (
            post.creator,
            post.content,
            post.creationTime,
            post.likes,
            post.comments
        );
    }
}