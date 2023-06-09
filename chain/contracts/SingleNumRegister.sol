// SPDX-License-Identifier: UNLICENSED 

pragma solidity ^0.5.16;

contract SingleNumRegister {
    struct StoreNumber {
        address from;
        uint256 number;
    }

    StoreNumber[] public storeNumbers;

    function set(uint256 num) public {
        storeNumbers.push(StoreNumber(msg.sender, num));
    }

    function get() public view returns (uint256) {
        uint256 index = storeNumbers.length - 1;
        return storeNumbers[index].number;
    }
}