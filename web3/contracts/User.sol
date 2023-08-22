// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract UserContract{
    struct User{
        uint id;
        address userAddress;
        string userName;
        bool verified;
    }

    mapping(address => User) public users;
    uint256 public nextUserId = 1;

    event UserRegistered(uint256 id, string username, address userAddress);

    modifier onlyNewUser(address _userAddress) {
        require(users[_userAddress].userAddress == address(0), "User already exists");
        _;
    }

    function newUser(string memory _userName) public payable onlyNewUser(msg.sender) {
    // Eğer gerekiyorsa, burada gerekli validasyonları yapabilirsiniz.
    require(msg.value >= 0.1 ether, "Insufficient funds");

    users[msg.sender] = User(nextUserId, msg.sender, _userName, false);
    nextUserId++;

    emit UserRegistered(users[msg.sender].id, _userName, msg.sender);
}

    function verifyUser(address _userAddress) public {
        users[_userAddress].verified = true;
    }

    function getUser(address _userAddress) public view returns(uint id, address userAddress, string memory userName, bool verified){
        User memory user = users[_userAddress];
        return (user.id, user.userAddress, user.userName, user.verified);
    }
}