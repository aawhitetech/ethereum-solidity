// SPDX-License-Identifier: MIT
// Specifies the version of Solidity that our code is written with
pragma solidity ^0.8.9;

// Defines a new contract (Class) that will have some number of methods and variables
contract Inbox {
    // Declares all of the instance variables (and their types) that will exist in this contract
    string public message;

    // Defines different functions tha will be members of this contract
    // Constructor
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}