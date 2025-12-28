# Tuần 1: Nhập môn Blockchain & Web3 (Giải thích theo phương pháp Feynman)

Tài liệu này tổng hợp các kiến thức cơ bản về Blockchain được giải thích bằng ngôn ngữ đơn giản, dễ hiểu dành cho người mới bắt đầu hoặc lập trình viên chưa biết về blockchain.

---

## 1.1: Blockchain là gì và vì sao đặc biệt?

### Blockchain là gì?

Hãy tưởng tượng về một **cuốn sổ cái kế toán (ledger)** dùng để ghi chép các giao dịch (ai chuyển tiền cho ai).

-   **Cách cũ (Ngân hàng/Web2):** Chỉ có Ngân hàng giữ cuốn sổ cái này. Bạn phải tin tưởng tuyệt đối vào Ngân hàng. Nếu Ngân hàng bị hack hoặc nhân viên sửa đổi số liệu, bạn có thể mất tiền.
-   **Cách mới (Blockchain):** Cuốn sổ cái này được photo ra hàng nghìn bản và phát cho **tất cả mọi người** trong mạng lưới cùng giữ. Mỗi khi có giao dịch mới, tất cả mọi người cùng cập nhật vào cuốn sổ của mình.
    => **Blockchain** chính là cuốn sổ cái kỹ thuật số được chia sẻ và đồng bộ hóa trên toàn cầu, không ai nắm quyền kiểm soát duy nhất.

### Vấn đề cốt lõi: Chi tiêu hai lần (Double Spending)

_(Tham khảo từ Bitcoin Whitepaper)_

-   Trong thế giới kỹ thuật số, việc copy một file ảnh hay file nhạc rất dễ dàng.
-   Tiền điện tử cũng là một dạng file số. Nếu tôi gửi cho bạn 1 đồng Bitcoin (file số), làm sao đảm bảo tôi không copy file đó để gửi tiếp cho người khác?
-   **Giải pháp:** Blockchain giải quyết việc này bằng cách công khai lịch sử giao dịch cho tất cả mọi người. Nếu tôi đã tiêu đồng tiền đó rồi, cả mạng lưới sẽ biết và từ chối giao dịch thứ hai của tôi. Đây là đột phá lớn nhất của Satoshi Nakamoto.

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
-   **EVM (Ethereum Virtual Machine):** _(Tham khảo từ Ethereum Docs)_ Hãy coi Ethereum là một **"Máy tính thế giới" (World Computer)** khổng lồ. Thay vì mỗi người chạy code trên máy riêng, tất cả cùng thuê chung một cái máy tính siêu lớn này để chạy ứng dụng. EVM chính là bộ não xử lý mọi dòng code đó.
-   **Turing Completeness (Tính đầy đủ Turing):** _(Tham khảo từ Ethereum Whitepaper)_
    -   Bitcoin giống như một chiếc máy tính bỏ túi đơn giản, chỉ có thể thực hiện các phép tính cộng trừ cơ bản (không có vòng lặp phức tạp).
    -   Ethereum giống như một chiếc máy tính thực thụ, có thể chạy bất kỳ chương trình nào, bất kỳ vòng lặp nào (miễn là bạn có đủ tiền trả phí Gas). Đây là sự khác biệt lớn nhất giúp Ethereum tạo ra cả một hệ sinh thái ứng dụng phong phú.
-   **DAO (Tổ chức tự trị phi tập trung):** _(Tham khảo từ Ethereum Whitepaper)_
    -   Hãy tưởng tượng một công ty không có giám đốc, không có nhân viên, chỉ có các dòng code điều hành.
    -   Mọi quyết định (như chi tiêu tiền, thay đổi luật) đều được thực hiện tự động dựa trên sự bỏ phiếu của cộng đồng, không ai có thể gian lận hay biển thủ công quỹ.
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

_(Tham khảo từ Ethereum Docs - Consensus Mechanisms)_

Để mạng lưới thống nhất với nhau, cần giải quyết 2 vấn đề chính:

1.  **Sybil Resistance (Chống giả mạo danh tính):**

    -   Nếu việc tạo danh tính (ID) là miễn phí, một kẻ xấu có thể tạo ra hàng triệu ID giả để thao túng mạng lưới (tấn công Sybil).
    -   **Giải pháp:** Bắt buộc người tham gia phải bỏ ra một cái gì đó có giá trị.
        -   **Proof of Work (PoW):** Bỏ ra **Sức mạnh tính toán (Điện năng)**. Giống như mua vé số, ai mua nhiều vé (máy mạnh) thì dễ trúng, nhưng tốn tiền.
        -   **Proof of Stake (PoS):** Bỏ ra **Tiền đặt cọc (Stake)**. Ai đặt cọc nhiều tiền thì được tin tưởng. Nếu gian lận, tiền cọc bị tịch thu (Slashing).

2.  **Chain Selection Rule (Quy tắc chọn chuỗi):**
    -   Khi có 2 thợ đào cùng tìm ra block mới cùng lúc, chuỗi sẽ bị tách làm đôi (Fork). Mạng lưới phải chọn đi theo nhánh nào?
    -   **Bitcoin (Nakamoto Consensus):** Chọn **Chuỗi dài nhất** (hoặc nặng nhất - tốn nhiều công sức đào nhất).
    -   **Ethereum (Gasper):** Chọn chuỗi có nhiều sự ủng hộ (attestations) nhất từ các Validator.

-   **Hash (Hàm băm):** Mỗi Block đều có một dấu vân tay số (Hash) duy nhất. Block sau sẽ chứa dấu vân tay của Block trước. Điều này tạo nên sự liên kết chặt chẽ (Chain).

### Tính hoàn tất (Finality)

_(Tham khảo từ Ethereum Docs)_

-   **Probabilistic Finality (Bitcoin):** Bạn không bao giờ chắc chắn 100% giao dịch đã an toàn. Nhưng càng nhiều block được nối thêm vào sau block chứa giao dịch của bạn, xác suất bị đảo ngược càng thấp. (Thường chờ 6 block là an toàn).
-   **Economic Finality (Ethereum PoS):** Sau một khoảng thời gian (khoảng 15 phút), block sẽ được đóng dấu "Finalized". Muốn đảo ngược block này, kẻ tấn công phải chấp nhận mất ít nhất 1/3 tổng số tiền đang đặt cọc trong mạng lưới (hàng tỷ USD).

### Phí Gas (Nhiên liệu cho mạng lưới)

_(Tham khảo từ Ethereum Docs)_

-   Để chạy code trên "Máy tính thế giới" (EVM), bạn phải trả tiền thuê. Phí này gọi là **Gas**.
-   **Tại sao cần Gas?** Để ngăn chặn ai đó viết một vòng lặp vô tận (infinite loop) làm treo máy tính của cả thế giới. Mỗi dòng code chạy đều tốn một ít xăng, hết xăng thì xe (chương trình) dừng lại.

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
-   **Phân loại tài khoản (Ethereum Docs):**
    -   **EOA (Externally Owned Account):** Tài khoản do người dùng kiểm soát bằng Private Key (ví dụ: ví Metamask của bạn). Có thể khởi tạo giao dịch.
    -   **Contract Account:** Tài khoản chứa code (Smart Contract). Không có Private Key, chỉ hoạt động khi có ai đó gọi đến nó.
-   **Cấu tạo một tài khoản:** _(Tham khảo Ethereum Docs)_
    Mỗi tài khoản giống như một hồ sơ cá nhân gồm 4 mục:
    1.  **Nonce:** Số đếm số lượng giao dịch đã thực hiện. Giống như số thứ tự hóa đơn, để đảm bảo giao dịch không bị lặp lại (Replay Attack).
    2.  **Balance:** Số dư tiền (ETH).
    3.  **Storage:** Ngăn chứa dữ liệu bền vững (chỉ dành cho Smart Contract).
    4.  **CodeHash:** Mã lập trình (chỉ dành cho Smart Contract).
-   **Ví dụ:** Ví A có 100 đồng.
    -   A chuyển 10 đồng cho B.
    -   Hệ thống cập nhật: Ví A còn 90, Ví B thêm 10.

### Mô hình UTXO (Bitcoin, CKB)

-   **UTXO** = Unspent Transaction Output (Đầu ra giao dịch chưa chi tiêu).
-   **Cách hoạt động:** Giống như **Ví tiền mặt** chứa các tờ tiền lẻ. Không có con số "Tổng số dư" được lưu trong database, mà số dư được tính bằng cách đếm tổng các tờ tiền bạn đang có.
-   **Ví dụ:** Bạn có một tờ 100k (đây là 1 UTXO). Bạn mua gói xôi 10k.
    -   Bạn không thể xé tờ 100k ra. Bạn phải đưa cả tờ 100k (Input).
    -   Hệ thống sẽ trả lại cho bạn một tờ 90k (Output mới) và đưa người bán tờ 10k (Output mới).
    -   Tờ 100k cũ coi như đã "tiêu" và bị hủy.
-   **Cell Model (Nervos CKB):** _(Tham khảo Nervos KB)_
    -   Hãy tưởng tượng UTXO của Bitcoin là cái hộp chỉ đựng được tiền.
    -   **Cell** của Nervos là cái hộp "thần kỳ" hơn (Generalized UTXO): Nó có thể đựng tiền, đựng code, hoặc đựng dữ liệu bất kỳ.
    -   Đây là bản nâng cấp của UTXO, giúp nó vừa bảo mật như Bitcoin, vừa thông minh như Ethereum.

### So sánh chuyên sâu (Determinism & Parallelism)

_(Tham khảo Nervos KB)_

1.  **Tính xác định (Determinism):**

    -   **UTXO:** Khi bạn tạo giao dịch, bạn chỉ định rõ "Tôi tiêu tờ tiền A". Nếu tờ tiền A chưa bị tiêu, giao dịch chắc chắn thành công. Kết quả rất rõ ràng ngay từ đầu.
    -   **Account:** Bạn nói "Trừ 10 đồng trong ví tôi". Nhưng từ lúc bạn bấm nút đến lúc thợ đào xử lý, có thể một giao dịch khác (ví dụ trả phí định kỳ) đã trừ tiền của bạn rồi -> Giao dịch có thể thất bại bất ngờ hoặc kết quả khác dự tính.

2.  **Khả năng song song (Parallelism):**
    -   **UTXO:** Hai người A và B tiêu 2 tờ tiền khác nhau -> Máy tính xử lý cùng lúc được (Song song). Đây là lý do các blockchain UTXO mở rộng tốt hơn.
    -   **Account:** Hai người cùng gửi tiền vào ví C -> Máy tính phải xếp hàng xử lý từng người một để cập nhật số dư ví C (Tuần tự). Nếu không sẽ bị lỗi tính toán.

### So sánh nhanh

| Đặc điểm             | Account Model (ETH)       | UTXO Model (BTC, CKB)    |
| :------------------- | :------------------------ | :----------------------- |
| **Tư duy**           | Số dư tài khoản (Balance) | Các tờ tiền lẻ (Cash)    |
| **Trạng thái**       | Toàn cục (Global State)   | Cục bộ (Local State)     |
| **Khả năng mở rộng** | Khó hơn (xử lý tuần tự)   | Dễ hơn (xử lý song song) |

### Ứng dụng

-   **Account Model:** Phù hợp cho các DApp cần trạng thái phức tạp (DeFi, Game).
-   **UTXO Model:** Phù hợp cho thanh toán đơn giản, bảo mật cao, hoặc các blockchain thế hệ mới (như Nervos CKB) kết hợp UTXO với khả năng lập trình để tối ưu hiệu suất.
