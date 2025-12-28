# Tuần 3: Solidity Cơ Bản & Triển khai Testnet (Giải thích theo phương pháp Feynman)

Tài liệu này đi sâu vào ngôn ngữ lập trình Solidity và quy trình đưa ứng dụng lên mạng thử nghiệm (Testnet), tiếp tục sử dụng cách giải thích đơn giản, dễ hiểu.

---

## 3.1: Kiểu dữ liệu và biến trong Solidity

### Biến trong Solidity (Variables)

Hãy tưởng tượng bộ nhớ của Smart Contract giống như một **cái tủ kho**.

-   **State Variables (Biến trạng thái):** Là những chiếc hộp được cất cố định trong tủ kho. Dữ liệu lưu ở đây sẽ tồn tại mãi mãi trên Blockchain. Việc ghi chép vào đây rất tốn kém (tốn Gas).
    -   _Ví dụ:_ Số dư tài khoản ngân hàng.
-   **Local Variables (Biến cục bộ):** Là những ghi chú tạm thời trên tờ giấy nháp khi đang tính toán. Tính xong thì vứt đi. Dữ liệu này không lưu lên Blockchain, nên dùng rất rẻ hoặc miễn phí.

### Kiểu dữ liệu cơ bản (Data Types)

_(Tham khảo từ Solidity Docs - Types)_

Mỗi chiếc hộp trong kho chỉ đựng được một loại đồ vật nhất định.
**Lưu ý quan trọng:** Trong Solidity, không có `null` hay `undefined`. Nếu bạn khai báo biến mà không gán giá trị, nó sẽ tự động lấy **Giá trị mặc định (Default Value)**.

1.  **`uint` (Unsigned Integer):** Số nguyên dương (không âm).
    -   _Ví dụ:_ `uint256 age = 25;` (Tuổi không thể âm).
    -   _Mặc định:_ `0`.
2.  **`int` (Integer):** Số nguyên (có thể âm).
    -   _Ví dụ:_ `int256 temperature = -5;` (Nhiệt độ).
    -   _Mặc định:_ `0`.
3.  **`bool` (Boolean):** Đúng hoặc Sai (True/False).
    -   _Ví dụ:_ `bool isPaid = true;` (Đã trả tiền chưa?).
    -   _Mặc định:_ `false`.
4.  **`address`:** Địa chỉ ví hoặc địa chỉ hợp đồng.
    -   _Ví dụ:_ `address owner = 0x123...;` (Giống số tài khoản ngân hàng).
    -   _Mặc định:_ `0x0000...0000` (Địa chỉ rỗng).
5.  **`string`:** Chuỗi ký tự (văn bản).
    -   _Ví dụ:_ `string name = "Vinh";`
    -   _Mặc định:_ `""` (Chuỗi rỗng).

### Quy tắc đặt tên và Tối ưu Storage (Mẹo nhà nghề)

1.  **Quy tắc đặt tên (Naming Convention):**
    Việc đặt tên biến hợp lý giúp code dễ đọc và tránh lỗi nhầm lẫn (Shadowing).

    -   **Không có gạch dưới (`variableName`):**

        -   Dùng cho **Biến State Public**: `uint public age;`
        -   Dùng cho **Biến Local** (biến tạm trong hàm): `uint tempResult = 1;`

    -   **Gạch dưới ở đầu (`_variableName`):**

        -   Dùng cho **Tham số hàm (Arguments)**: Để phân biệt với biến state.
            _Ví dụ:_ `function setAge(uint _age) { age = _age; }`
        -   Dùng cho **Biến State Private/Internal**: Để đánh dấu "đây là biến nội bộ, người ngoài không nên đụng vào".
            _Ví dụ:_ `uint private _secretNumber;`

    -   **Gạch dưới ở đuôi (`variableName_`):**
        -   Ít gặp hơn, thường dùng để **tránh trùng tên** với các từ khóa của hệ thống hoặc tên hàm có sẵn.
        -   _Ví dụ:_ Bạn muốn đặt tên biến là `block` (nhưng `block` là từ khóa hệ thống), nên đặt là `block_`.

2.  **Tối ưu Storage (Xếp gạch vào kho):**

-   Bộ nhớ Blockchain (Storage) được chia thành các ngăn (slot), mỗi ngăn rộng 32 bytes (256 bits).
-   **Nguyên tắc:** Solidity sẽ cố gắng nhét các biến nhỏ vào chung một ngăn để tiết kiệm chỗ (và tiết kiệm Gas).
-   **Ví dụ Tệ (Tốn 3 ngăn):**
    ```solidity
        uint128 a; // Ngăn 1 (còn thừa chỗ)
        uint256 b; // Ngăn 2 (vì b quá to không nhét chung với a được)
        uint128 c; // Ngăn 3
    ```
-   **Ví dụ Tốt (Tốn 2 ngăn):**
    ```solidity
        uint128 a; // Ngăn 1
        uint128 c; // Ngăn 1 (nhét chung với a được vì 128+128 = 256)
        uint256 b; // Ngăn 2
    ```
    => **Mẹo:** Hãy khai báo các biến có kích thước nhỏ (uint128, uint64, bool, address) nằm cạnh nhau.

### Visibility cho biến (Ai được nhìn thấy hộp?)

-   **`public`:** Ai cũng xem được. Hệ thống tự động tạo một hàm để mọi người tra cứu giá trị này.
-   **`private`:** Chỉ có hợp đồng này mới xem và dùng được. Giống như cuốn nhật ký bí mật.
-   **`internal`:** Chỉ hợp đồng này và các hợp đồng con (kế thừa) mới xem được. Giống như bí mật gia truyền.

### Ví dụ minh họa

```solidity
contract ViTien {
    // State variable: Lưu mãi mãi
    uint public soDu = 100;

    function tinhToan() public pure {
        // Local variable: Chỉ sống trong hàm này
        uint tamTinh = 5 + 5;
    }
}
```

---

## 3.2: Hàm, cấu trúc control flow, visibility

### Khai báo hàm (Functions)

Hàm giống như một **công thức nấu ăn** hoặc một **cái máy**. Bạn đưa nguyên liệu vào (Input), máy xử lý, và cho ra món ăn (Output).

### Visibility của hàm (Ai được bấm nút chạy máy?)

1.  **`public`:** Ai gọi cũng được (cả người ngoài lẫn người trong nhà).
2.  **`external`:** Chỉ người ngoài mới gọi được. Người trong nhà (các hàm khác trong cùng contract) không gọi trực tiếp được. Giống như cái chuông cửa (bạn không đứng trong nhà mà bấm chuông cửa của chính mình).
3.  **`internal`:** Chỉ người trong nhà và con cái gọi được.
4.  **`private`:** Chỉ người trong nhà gọi được.

### State Mutability (Hàm này có sửa dữ liệu không?)

_(Tham khảo từ Solidity Docs - Functions)_

-   **`view`:** Hàm chỉ **Đọc** dữ liệu từ Blockchain, không sửa gì cả. (Miễn phí Gas nếu gọi từ ngoài).
    -   _Ví dụ:_ Xem số dư.
-   **`pure`:** Hàm **Tinh khiết**, không đọc cũng không sửa dữ liệu Blockchain. Chỉ tính toán dựa trên tham số đầu vào.
    -   _Ví dụ:_ Hàm cộng 2 số `a + b`.
-   **Không ghi gì cả:** Hàm có thể Đọc và Sửa dữ liệu. (Tốn Gas).
-   **`payable`:** Hàm có thể nhận tiền (ETH) gửi kèm.

### So sánh `view` vs `pure` (Giải thích theo Feynman)

Hãy tưởng tượng bạn có một cuốn sổ bí mật (State) trên kệ:

-   `view`: Là khi bạn cầm cuốn sổ ra ngoài xem một dòng thông tin và đặt cuốn sổ lại mà không hằn thêm chữ nào. Bạn đã **đọc** sổ nhưng không thay đổi gì. Mọi người có thể hỏi bạn "Cuốn sổ nói gì?" và bạn đọc cho họ nghe. Nếu họ chỉ hỏi (không yêu cầu ghi), thì việc này giống như hỏi ai đó qua điện thoại — **không tốn tiền** (không tốn gas) khi thực hiện ngoài chuỗi.

-   `pure`: Là khi bạn làm một phép tính trên giấy nháp, ví dụ cộng hai số bạn có trên tay, mà **không mở cuốn sổ** hay không dùng bất kỳ thông tin nào từ cuốn sổ đó. Bạn chỉ dùng dữ liệu do người ta đưa cho bạn. Vì bạn không nhìn vào sổ và cũng không ghi lên sổ, đây là hàm **tinh khiết**.

Kết luận ngắn gọn:

-   `view` = Đọc state, không sửa.
-   `pure` = Không đọc state, không sửa — chỉ dùng input.

Ví dụ code (Solidity):

```solidity
uint public count;

function getCount() public view returns (uint) {
    return count; // đọc state
}

function add(uint a, uint b) public pure returns (uint) {
    return a + b; // không đọc state, chỉ tính toán
}
```

Lưu ý về Gas:

-   Khi bạn gọi `view` hoặc `pure` từ bên ngoài bằng cách "call" (ví dụ trong Remix nhấn nút), đó là một cuộc gọi đọc — **không tốn gas**.
-   Nhưng nếu bạn gọi những hàm này như một phần của một giao dịch (tức là gọi từ một hàm thay đổi state khác trong quá trình thực thi giao dịch), thì chúng vẫn tiêu tốn gas vì toàn bộ giao dịch phải được thực thi trên mạng.

Khi dùng trong thực tế:

-   Dùng `pure` cho các hàm tiện ích toán học, xử lý chuỗi, chuyển đổi dữ liệu.
-   Dùng `view` cho các getter hoặc các phép kiểm tra trạng thái trước khi quyết định hành động.

### Cấu trúc điều kiện & Xử lý lỗi

_(Tham khảo từ Solidity Docs - Control Structures)_

-   **`if / else`:** Giống hệt các ngôn ngữ khác. "Nếu trời mưa thì nghỉ, ngược lại thì đi làm".
-   **`require` (Phổ biến nhất):** Kiểm tra điều kiện đầu vào.
    -   _Cách hoạt động:_ `require(điều kiện, "Thông báo lỗi");`
    -   Nếu sai -> **Hoàn tác (Revert)** toàn bộ, trả lại tiền Gas thừa.
    -   _Ví dụ:_ `require(msg.sender == owner, "Khong phai chu nha");`
-   **`revert`:** Giống `require` nhưng dùng cho các logic phức tạp hơn (ví dụ trong `if/else`).
    -   _Ví dụ:_ `if (soDu < 10) { revert("Khong du tien"); }`
-   **`assert`:** Dùng để kiểm tra các lỗi nghiêm trọng (bug) mà lẽ ra không bao giờ được xảy ra. Nếu `assert` sai, nghĩa là code của bạn bị hỏng nặng.

### Trả về giá trị với `return`

-   Hàm có thể trả về một hoặc nhiều giá trị.
-   Trong Solidity, bạn phải khai báo trước kiểu dữ liệu sẽ trả về bằng từ khóa `returns (...)`.

---

## 3.3: Deploy & debug contract đầu tiên trên testnet

Đến lúc thực hành thật. Chúng ta sẽ không dùng máy ảo (Remix VM) nữa mà dùng mạng thử nghiệm (Testnet) giống hệt mạng thật nhưng tiền là miễn phí.

### Bước 1: Kết nối Remix với MetaMask

1.  Cài ví **MetaMask** trên trình duyệt.
2.  Trên Remix, tab **Deploy**, phần **Environment**, chọn **"Injected Provider - MetaMask"**.
3.  MetaMask sẽ hiện lên hỏi "Cho phép kết nối không?", bấm **Connect**.

### Bước 2: Nhận test ETH (Faucet)

Để chạy được trên Testnet, bạn cần "xăng" (ETH giả).

1.  Chuyển MetaMask sang mạng **Sepolia** hoặc **Holesky** (thường có sẵn trong list mạng).
2.  Google từ khóa: "Sepolia Faucet" hoặc "Holesky Faucet".
3.  Dán địa chỉ ví của bạn vào, bấm "Send me ETH". Chờ một chút tiền sẽ về ví.

### Bước 3: Deploy contract thật

1.  Quay lại Remix, bấm **Deploy**.
2.  Lần này, MetaMask sẽ bật lên yêu cầu xác nhận giao dịch. Bạn sẽ thấy tốn một khoản phí Gas (nhưng là tiền giả).
3.  Bấm **Confirm**. Chờ vài giây đến vài phút để thợ đào xác nhận.

### Bước 4: Kiểm tra và Debug

-   Sau khi deploy thành công, contract sẽ hiện ở dưới.
-   Bạn có thể copy địa chỉ contract và dán vào **Etherscan (Sepolia version)** để xem contract của mình trên "Sổ cái công khai".
-   **Debug:** Nếu giao dịch thất bại (nút đỏ), hãy đọc kỹ thông báo lỗi trong phần Console của Remix. Thường là do `require` chặn lại (ví dụ: không đủ tiền, không đúng quyền).

---

### Tài liệu tham khảo gốc (Tiếng Anh)

-   Types: [Solidity Docs - Types](https://docs.soliditylang.org/en/latest/types.html)
-   State Variables: [Solidity Docs - State Variables](https://docs.soliditylang.org/en/latest/contracts.html#state-variables)
-   Functions: [Solidity Docs - Functions](https://docs.soliditylang.org/en/latest/contracts.html#functions)
-   Visibility: [Solidity Docs - Visibility](https://docs.soliditylang.org/en/latest/contracts.html#visibility-and-getters)
-   Control Structures: [Solidity Docs - Control Structures](https://docs.soliditylang.org/en/latest/control-structures.html)

### Note

-   Học lại toán dung lượng
-   Tập khai báo nhóm dữ liệu
-   Đọc ref về solidity
