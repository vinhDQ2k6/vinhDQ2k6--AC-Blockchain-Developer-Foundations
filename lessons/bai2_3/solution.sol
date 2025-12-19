// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Welcome {
    // 1. Biến greeting dạng string, khai báo public
    string public greeting;

    // 2. Constructor truyền vào giá trị khởi tạo cho greeting
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // 3. Hàm getGreeting() trả về greeting
    // view: hàm chỉ đọc dữ liệu, không sửa đổi state
    // returns (string memory): trả về kiểu string
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
