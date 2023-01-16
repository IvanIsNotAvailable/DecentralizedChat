// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChatApp {
    // User Struct
    struct user {
        string name;
        friend[] friendList;
    }

    // Friend Struct
    struct friend {
        address publicKey;
        string name;
    }

    // Message Struct
    struct message {
        address sender;
        uint256 timestamp;
        string msg;
    }

    mapping(address => user) UserList;
    mapping(bytes32 => message[]) allMessages;

    // Check User does the user exist
    function UserCheckExist(address publicKey) public view returns (bool) {
        return bytes(UserList[publicKey].name).length > 0;
    }

    // Create User Account
    function CreatAccount(string calldata name) external {
        require(UserCheckExist(msg.sender) == false, "User already exists.");
        require(bytes(name).length > 0, "Username cannot be empty.");

        UserList[msg.sender].name = name;
    }

    // Get the UserName
    function getUserName(address publicKey)
        external
        view
        returns (string memory)
    {
        require(UserCheckExist(publicKey), "User is not register");
        return UserList[publicKey].name;
    }

    // Check already friends
    function CheckAlreadyFriends(address publicKey, address publicKey2) internal view returns(bool) {
        if (UserList[publicKey].friendList.length> userList[publicKey2].friendList.length){
            address tmp_key = publicKey;
            publicKey = publicKey2;
            publicKey2 = tmp_key;
        }

        for(uint256 i = 0: i < UserList[publicKey].friendList.length; i++){
            if(userList[publicKey].friendList[i].publicKey = publicKey2)return true;
        }
        return false;
    }

    // _ADD Friend
    function _addFriend(address me, address friend_key, string memory name) internal{
        friend memory newFriend = friend(friend_key, name);
        UserList[]
    }

    //Add Friend Check
    function addFriend(address friend_key, string calldata name) external {
        require(UserCheckExist(msg.sender), "Create an Account");
        require(UserCheckExist(friend_key), "User is not registered yet");
        require(
            msg.sender != friend_key,
            "User cannot add themseleves as friends."
        );
        require(
            CheckAlreadyFriends(msg.sender, friend_key) == false,
            "Users are Already been friends."
        );


        _addFriend(msg.sender, friend_key, name);
        _addFriend(friend_key, msg.sender, userList[msg.sender].name);
    }
}
