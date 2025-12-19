# Tuần 2: Smart Contract & Công cụ phát triển (Giải thích theo phương pháp Feynman)

Tài liệu này giải thích về Smart Contract, sự khác biệt giữa Web2 và Web3, và cách sử dụng công cụ Remix, dành cho người mới bắt đầu.

---

## 2.1 & 2.2: So sánh Web2 vs Web3 – Từ Backend đến Smart Contract

### Smart Contract là gì?

Hãy tưởng tượng về một **chiếc máy bán nước tự động (Vending Machine)**.

-   **Cách hoạt động:** Bạn bỏ tiền vào -> Bạn chọn nước -> Máy tự động nhả nước ra.
-   **Đặc điểm:** Không cần người bán hàng đứng đó. Máy hoạt động theo quy tắc đã lập trình sẵn: "Nếu đủ tiền thì nhả nước". Không ai có thể mặc cả với cái máy.

**Smart Contract (Hợp đồng thông minh)** chính là chiếc máy bán nước đó, nhưng nằm trên Blockchain. Nó là những đoạn mã (code) tự động chạy khi các điều kiện được thỏa mãn, không cần ai can thiệp hay giám sát.

### Ví dụ liên hệ Web2 vs Web3

Hãy lấy ví dụ về việc **Mua bán nhà đất**:

-   **Web2 (Cách truyền thống):**

    -   Bạn cần một **người môi giới** và **phòng công chứng**.
    -   Bạn chuyển tiền cho môi giới -> Môi giới giữ tiền -> Bên bán sang tên sổ đỏ -> Môi giới chuyển tiền cho bên bán.
    -   **Rủi ro:** Môi giới ôm tiền chạy, hoặc làm giấy tờ giả. Bạn phải **tin tưởng con người**.

-   **Web3 (Dùng Smart Contract):**
    -   Bạn gửi tiền vào Smart Contract (chiếc hộp kính trong suốt).
    -   Bên bán gửi sổ đỏ kỹ thuật số (NFT) vào Smart Contract.
    -   Khi Smart Contract thấy "Đã đủ tiền" và "Đã có sổ", nó **tự động** tráo đổi: Tiền về bên bán, Sổ về bên mua.
    -   **Lợi ích:** Không cần môi giới. Không ai lừa được ai. Bạn **tin tưởng vào code**.

### Cấu trúc của một Smart Contract

Nếu bạn là dân lập trình (hoặc biết chút ít về Excel), hãy hình dung Smart Contract giống như một **Class** (Lớp đối tượng) hoặc một file Excel được khóa lại.

Nó gồm 3 phần chính:

1.  **Dữ liệu (State Variables):** Giống như các ô chứa dữ liệu trong Excel. Ví dụ: `Số dư = 100`. Đây là bộ nhớ lâu dài của hợp đồng.
2.  **Hàm (Functions):** Giống như các công thức hoặc nút bấm. Ví dụ: `Hàm ChuyenTien()`. Khi bấm nút này, dữ liệu sẽ thay đổi.
3.  **Sự kiện (Events):** Giống như tiếng chuông thông báo "Ting!" khi giao dịch hoàn tất để mọi người biết.

### Điểm mạnh và điểm yếu

| Đặc điểm        | Điểm mạnh (Ưu điểm)                          | Điểm yếu (Nhược điểm)                                                                                 |
| :-------------- | :------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| **Tự động hóa** | Chạy 24/7, không nghỉ lễ, không đình công.   | Nếu code sai logic, nó vẫn chạy sai mãi mãi (rất nguy hiểm).                                          |
| **Minh bạch**   | Ai cũng đọc được luật chơi (code).           | Lộ bí mật kinh doanh nếu không biết cách giấu.                                                        |
| **Bất biến**    | Không ai sửa được luật chơi sau khi đã chạy. | **Không thể sửa lỗi (Bug)**. Sai là đập đi xây lại, không có chuyện "Update bản vá" dễ dàng như Web2. |

### Ứng dụng Smart Contract trong thực tế

1.  **DeFi (Tài chính phi tập trung):** Ngân hàng không người lái. Tự động cho vay, tính lãi suất.
2.  **NFT (Tài sản số):** Chứng nhận quyền sở hữu tranh ảnh, vật phẩm game, vé xem ca nhạc.
3.  **Voting (Bầu cử):** Bỏ phiếu minh bạch, không ai có thể gian lận phiếu bầu.

---

## 2.3: Triển khai và kiểm tra contract với Remix

### Remix là gì?

Nếu bạn muốn viết văn bản, bạn dùng Microsoft Word (cần cài đặt) hoặc Google Docs (dùng ngay trên web).

-   **Remix IDE** chính là **Google Docs dành cho lập trình viên Blockchain**.
-   Bạn không cần cài đặt gì cả. Chỉ cần mở trình duyệt, vào trang web Remix là có thể viết code, biên dịch và chạy thử Smart Contract ngay lập tức.

### Các bước triển khai Contract (Quy trình làm bánh)

Để đưa một Smart Contract vào hoạt động, ta đi qua 3 bước giống như làm bánh:

1.  **Viết Code (Trộn bột):**

    -   Viết các dòng lệnh bằng ngôn ngữ **Solidity** (ngôn ngữ phổ biến nhất cho Ethereum).
    -   Ví dụ: Viết quy tắc cho cái máy bán nước.

2.  **Biên dịch - Compile (Nướng bánh):**

    -   Máy tính không hiểu tiếng Anh/Solidity. Cần một bước dịch code sang ngôn ngữ máy (Bytecode) để Blockchain hiểu được.
    -   Nếu code có lỗi cú pháp, bước này sẽ báo đỏ (bánh cháy).

3.  **Triển khai - Deploy (Bày bán):**
    -   Đẩy đoạn mã máy (Bytecode) lên mạng lưới Blockchain.
    -   Lúc này, Smart Contract sẽ có một **địa chỉ ví riêng** (giống như nhà có số nhà). Ai muốn dùng thì gửi yêu cầu đến địa chỉ đó.

### Kiểm tra giao dịch

Trên Remix, sau khi Deploy, bạn sẽ thấy một bảng điều khiển với các nút bấm tương ứng với các hàm bạn đã viết.

-   **Nút màu cam:** Là hàm có thay đổi dữ liệu (Ghi chép). Bấm vào sẽ tốn phí (tiền giả trên testnet).
-   **Nút màu xanh:** Là hàm chỉ xem dữ liệu (Đọc). Bấm vào miễn phí.
-   **Logs:** Bên dưới màn hình sẽ hiện ra các dòng thông báo xanh (thành công) hoặc đỏ (thất bại) chi tiết về những gì vừa xảy ra.

### Một số lưu ý quan trọng

1.  **Testnet vs Mainnet:**
    -   **Testnet:** Mạng thử nghiệm. Dùng tiền giả (faucet). Sai thì làm lại, không mất gì. Luôn test kỹ ở đây trước.
    -   **Mainnet:** Mạng chính thức. Dùng tiền thật. Sai là mất tiền thật.
2.  **Gas Fee (Phí xăng):**
    -   Mọi thao tác thay đổi dữ liệu trên Blockchain đều tốn phí trả cho thợ đào.
    -   Code càng rườm rà, chạy càng tốn xăng. Hãy viết code gọn gàng (tối ưu Gas).
