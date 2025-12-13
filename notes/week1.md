# Tuần 1: Nhập môn Blockchain & Web3 (Giải thích theo phương pháp Feynman)

Tài liệu này tổng hợp các kiến thức cơ bản về Blockchain được giải thích bằng ngôn ngữ đơn giản, dễ hiểu dành cho người mới bắt đầu hoặc lập trình viên chưa biết về blockchain.

---

## 1.1: Blockchain là gì và vì sao đặc biệt?

### Blockchain là gì?

Hãy tưởng tượng về một **cuốn sổ cái kế toán (ledger)** dùng để ghi chép các giao dịch (ai chuyển tiền cho ai).

-   **Cách cũ (Ngân hàng/Web2):** Chỉ có Ngân hàng giữ cuốn sổ cái này. Bạn phải tin tưởng tuyệt đối vào Ngân hàng. Nếu Ngân hàng bị hack hoặc nhân viên sửa đổi số liệu, bạn có thể mất tiền.
-   **Cách mới (Blockchain):** Cuốn sổ cái này được photo ra hàng nghìn bản và phát cho **tất cả mọi người** trong mạng lưới cùng giữ. Mỗi khi có giao dịch mới, tất cả mọi người cùng cập nhật vào cuốn sổ của mình.
    => **Blockchain** chính là cuốn sổ cái kỹ thuật số được chia sẻ và đồng bộ hóa trên toàn cầu, không ai nắm quyền kiểm soát duy nhất.

### Tính chất nổi bật của blockchain

1.  **Phi tập trung (Decentralized):** Không có "ông trùm" (như Google, Facebook hay Ngân hàng) nắm quyền sinh sát. Quyền lực thuộc về cộng đồng.
2.  **Không thể sửa đổi (Immutable):** Một khi bút sa gà chết. Dữ liệu đã ghi vào block thì không thể tẩy xóa hay sửa đổi. Muốn sửa 1 dòng, phải sửa tất cả các bản sao trên thế giới cùng lúc (điều này là bất khả thi).
3.  **Minh bạch (Transparent):** Ai cũng có thể xem lịch sử giao dịch (biết ví A chuyển cho ví B bao nhiêu), nhưng không biết ai là chủ nhân của ví đó (tính ẩn danh).

### So sánh blockchain với hệ thống Web2

| Đặc điểm     | Web2 (Truyền thống)                   | Blockchain (Web3)                          |
| :----------- | :------------------------------------ | :----------------------------------------- |
| **Lưu trữ**  | Server tập trung (Centralized Server) | Phân tán khắp nơi (Distributed Ledger)     |
| **Niềm tin** | Tin vào công ty (Google, Bank)        | Tin vào thuật toán & mã nguồn (Code)       |
| **Dữ liệu**  | Công ty sở hữu dữ liệu của bạn        | Bạn sở hữu dữ liệu của mình                |
| **Bảo mật**  | Hack server là lấy được hết           | Phải hack >51% máy tính toàn cầu (rất khó) |

### Các thành phần kỹ thuật chính

Để vận hành "cuốn sổ cái" này, cần 3 thành phần:

1.  **Mạng lưới ngang hàng (P2P Network):** Các máy tính kết nối trực tiếp với nhau để chia sẻ sổ cái.
2.  **Cơ chế đồng thuận (Consensus):** Luật chơi để mọi người thống nhất xem giao dịch nào là hợp lệ (ví dụ: bỏ phiếu).
3.  **Mật mã học (Cryptography):** Ổ khóa và chìa khóa số để bảo vệ tài sản và danh tính.

### Blockchain hoạt động như thế nào? (Quy trình đơn giản)

1.  **Yêu cầu:** A muốn gửi tiền cho B.
2.  **Phát tán:** Yêu cầu này được loa phường thông báo cho cả mạng lưới.
3.  **Xác thực:** Các máy tính (thợ đào) kiểm tra xem A có đủ tiền không.
4.  **Đóng gói:** Giao dịch hợp lệ được đóng gói vào một cái hộp gọi là **Block**.
5.  **Nối chuỗi:** Cái hộp này được khóa lại và móc nối vào cái hộp trước đó (tạo thành **Chain**).
6.  **Hoàn tất:** Tiền của B hiện lên trong ví, sổ cái của mọi người đều được cập nhật.

### Kết luận

Blockchain không chỉ là tiền ảo. Nó là một công nghệ giúp con người **trao đổi giá trị** (tiền, tài sản, quyền sở hữu) trên môi trường internet mà **không cần tin tưởng lẫn nhau** hay thông qua trung gian.

---

## 1.2: Lịch sử Blockchain từ Bitcoin đến Web3

### Giai đoạn hình thành ý tưởng (1991–2008)

-   Trước khi Bitcoin ra đời, các nhà khoa học đã nghĩ đến việc dùng thuật toán để đánh dấu thời gian (timestamp) cho các tài liệu số để không ai sửa đổi được ngày tháng. Đây là "ông tổ" của ý tưởng chuỗi khối.

### Bitcoin và Blockchain 1.0 (2009–2014) - Kỷ nguyên Tiền tệ

-   **Sự kiện:** Satoshi Nakamoto tung ra Bitcoin.
-   **Đặc điểm:** Blockchain lúc này chỉ làm đúng một việc: **Ghi chép giao dịch tiền tệ**. Nó giống như một cái máy tính bỏ túi (calculator), chỉ biết cộng trừ tiền.
-   **Mục tiêu:** Tạo ra tiền tệ phi tập trung, không cần ngân hàng trung ương.

### Ethereum và Blockchain 2.0 (2015–2019) - Kỷ nguyên Hợp đồng thông minh

-   **Sự kiện:** Vitalik Buterin thấy Bitcoin quá giới hạn (chỉ biết tính tiền). Anh tạo ra Ethereum.
-   **Đặc điểm:** Ethereum cho phép chạy các đoạn code trên blockchain, gọi là **Smart Contract**.
-   **Ví dụ:** Thay vì chỉ chuyển tiền, bạn có thể lập trình: "Nếu ngày mai trời mưa, tự động chuyển 10 đồng cho A".
-   **So sánh:** Nếu Bitcoin là cái máy tính bỏ túi, thì Ethereum là cái **Smartphone** - cài được đủ loại ứng dụng (App).

### Web3 và Blockchain 3.0 (2020–nay) - Kỷ nguyên Internet giá trị

-   **Đặc điểm:** Mở rộng khả năng của blockchain để giải quyết các vấn đề về tốc độ, phí giao dịch và kết nối các blockchain lại với nhau.
-   **Web3:** Là tầm nhìn về một Internet mới, nơi người dùng thực sự sở hữu thông tin và tài sản của mình (Identity, Data, NFT) thay vì để các ông lớn Big Tech nắm giữ.

### Tóm tắt 3 thế hệ

1.  **Gen 1 (Bitcoin):** Vàng kỹ thuật số (Lưu trữ giá trị).
2.  **Gen 2 (Ethereum):** Nền tảng lập trình (Hợp đồng thông minh).
3.  **Gen 3 (Polkadot, Solana, v.v.):** Internet phi tập trung (Nhanh hơn, rẻ hơn, kết nối hơn).

---

## 1.3: Thành phần kỹ thuật: block, transaction, hash, chain (Góc nhìn Web2 vs Web3)

_Lưu ý: Phần này tập trung so sánh tư duy phát triển phần mềm giữa Web2 và Web3._

### Nhắc lại Web2 quen thuộc

-   Trong Web2 (ví dụ: Facebook, Shopee), mô hình chính là **Client - Server**.
-   **Client (Người dùng):** Dùng trình duyệt/app gửi yêu cầu.
-   **Server (Máy chủ):** Xử lý logic, đọc ghi vào **Database (Cơ sở dữ liệu)** tập trung do công ty quản lý.
-   **Nhược điểm:** Server sập là hết chơi. Công ty buồn buồn khóa tài khoản là mất hết.

### Web3 thay đổi những gì?

-   Trong Web3, **Server** và **Database** được thay thế (hoặc bổ sung) bằng **Blockchain**.
-   Không có một máy chủ đơn lẻ nào chứa dữ liệu. Dữ liệu nằm trên hàng ngàn máy tính (Nodes).
-   Logic nghiệp vụ không nằm kín trong Server của công ty, mà nằm công khai trên **Smart Contract**.

### So sánh nhanh Web2 vs Web3

| Thành phần     | Web2                                            | Web3                                                     |
| :------------- | :---------------------------------------------- | :------------------------------------------------------- |
| **Backend**    | Node.js, Python, Java... chạy trên Server riêng | Smart Contracts (Solidity, Rust...) chạy trên Blockchain |
| **Database**   | MySQL, MongoDB (Admin có toàn quyền)            | Blockchain Ledger (Không ai có quyền sửa xóa tùy tiện)   |
| **Đăng nhập**  | Email/Password, OAuth (Google, FB)              | Ví điện tử (Metamask, Private Key)                       |
| **Thanh toán** | Cổng thanh toán (Stripe, Paypal)                | Chuyển tiền trực tiếp (Native Token)                     |

### Ví dụ

-   **Web2 (Game Võ Lâm):** Bạn nhặt được thanh kiếm quý. Thanh kiếm đó thực chất là một dòng trong database của nhà phát hành game VNG. VNG đóng cửa game -> Thanh kiếm biến mất.
-   **Web3 (Game NFT):** Bạn nhặt được thanh kiếm NFT. Thanh kiếm đó là một token trên Blockchain. Game đóng cửa, thanh kiếm vẫn nằm trong ví của bạn, bạn có thể mang sang game khác hoặc bán lấy tiền.

### Vai trò mới của Backend Developer

-   **Web2 Dev:** Viết API, quản lý Database, lo bảo mật server.
-   **Web3 Dev:**
    -   Viết **Smart Contract**: Code một khi đã đẩy lên (deploy) là không sửa được nữa -> Cần cực kỳ cẩn thận, bug là mất tiền thật.
    -   Hiểu về **Gas fee**: Tối ưu code để người dùng tốn ít phí giao dịch nhất.
    -   Tương tác với Blockchain (RPC, Web3.js/Ethers.js) thay vì chỉ query SQL.

---

## 1.4: Cơ chế hoạt động: xác nhận giao dịch, block, miner

### Giao dịch diễn ra như thế nào?

Khi bạn bấm "Gửi tiền":

1.  Bạn dùng **Private Key** (chữ ký bí mật) để ký vào giao dịch -> Chứng minh "Tôi là chủ ví này".
2.  Giao dịch được gửi vào một "phòng chờ" (Mempool).

### Đưa giao dịch vào Block

-   Các **Miner (Thợ đào)** hoặc **Validator** sẽ vào phòng chờ, nhặt các giao dịch, kiểm tra xem chữ ký có đúng không, tiền có đủ không.
-   Họ gom nhiều giao dịch lại, xếp vào một cái thùng gọi là **Block**.

### Xác nhận và thêm vào chuỗi (Mining/Consensus)

-   Để cái thùng (Block) này được chấp nhận, Miner phải giải một bài toán khó (với Bitcoin - Proof of Work) hoặc đặt cọc tiền uy tín (với Ethereum - Proof of Stake).
-   Người chiến thắng sẽ được quyền gắn Block mới vào chuỗi (Chain) và nhận phần thưởng.
-   **Hash (Hàm băm):** Mỗi Block đều có một dấu vân tay số (Hash) duy nhất. Block sau sẽ chứa dấu vân tay của Block trước. Điều này tạo nên sự liên kết chặt chẽ (Chain).

### Tính nhất quán của mạng

-   Vì ai cũng giữ một bản sổ cái, làm sao biết bản nào đúng?
-   **Quy tắc:** "Chuỗi nào dài nhất (hoặc nặng nhất) là chuỗi đúng".
-   Nếu một kẻ gian cố tình tạo ra một nhánh sổ cái giả, hắn phải làm việc nhanh hơn tất cả những người còn lại cộng lại để chuỗi của hắn dài hơn -> Rất khó.

### Tấn công 51%

-   Là khi một nhóm kẻ xấu chiếm được hơn 50% sức mạnh tính toán của cả mạng lưới.
-   Lúc này, họ có quyền: Chặn giao dịch, hoặc "tiêu đôi" (double-spending) - tức là tiêu 1 đồng tiền 2 lần.
-   Tuy nhiên, với các mạng lớn như Bitcoin hay Ethereum, chi phí để tấn công 51% là khổng lồ, lớn hơn nhiều so với lợi ích thu được.

---

## 1.5: UTXO vs Account model (CKB vs Ethereum)

Đây là 2 cách để blockchain ghi nhớ xem "Ai có bao nhiêu tiền".

### Mô hình Account (Ethereum, Ngân hàng)

-   **Cách hoạt động:** Giống hệt tài khoản ngân hàng.
-   **Ví dụ:** Ví A có 100 đồng.
    -   A chuyển 10 đồng cho B.
    -   Hệ thống cập nhật: Ví A còn 90, Ví B thêm 10.
-   **Ưu điểm:** Dễ hiểu, dễ lập trình Smart Contract phức tạp.
-   **Nhược điểm:** Khó xử lý song song (phải chờ giao dịch trước xong mới tính tiếp được số dư).

### Mô hình UTXO (Bitcoin, CKB)

-   **UTXO** = Unspent Transaction Output (Đầu ra giao dịch chưa chi tiêu).
-   **Cách hoạt động:** Giống như **Ví tiền mặt** chứa các tờ tiền lẻ. Không có con số "Tổng số dư" được lưu trong database, mà số dư được tính bằng cách đếm tổng các tờ tiền bạn đang có.
-   **Ví dụ:** Bạn có một tờ 100k (đây là 1 UTXO). Bạn mua gói xôi 10k.
    -   Bạn không thể xé tờ 100k ra. Bạn phải đưa cả tờ 100k (Input).
    -   Hệ thống sẽ trả lại cho bạn một tờ 90k (Output mới) và đưa người bán tờ 10k (Output mới).
    -   Tờ 100k cũ coi như đã "tiêu" và bị hủy.
-   **Ưu điểm:** Bảo mật cao hơn, riêng tư hơn, và đặc biệt là **có thể xử lý song song** (vì các tờ tiền độc lập với nhau).

### So sánh nhanh

| Đặc điểm             | Account Model (ETH)       | UTXO Model (BTC, CKB)    |
| :------------------- | :------------------------ | :----------------------- |
| **Tư duy**           | Số dư tài khoản (Balance) | Các tờ tiền lẻ (Cash)    |
| **Trạng thái**       | Toàn cục (Global State)   | Cục bộ (Local State)     |
| **Khả năng mở rộng** | Khó hơn (xử lý tuần tự)   | Dễ hơn (xử lý song song) |

### Ứng dụng

-   **Account Model:** Phù hợp cho các DApp cần trạng thái phức tạp (DeFi, Game).
-   **UTXO Model:** Phù hợp cho thanh toán đơn giản, bảo mật cao, hoặc các blockchain thế hệ mới (như Nervos CKB) kết hợp UTXO với khả năng lập trình để tối ưu hiệu suất.
