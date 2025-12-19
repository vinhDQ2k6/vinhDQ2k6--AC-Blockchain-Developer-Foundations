export class SmartContract {
	// 🧠 Feynman Explanation:
	// Hãy tưởng tượng 'message' giống như nội dung được viết trên một tấm bảng thông báo công cộng.
	// Bất kỳ ai cũng có thể đọc nó, nhưng chỉ có những hành động cụ thể mới thay đổi được nó.
	private message: string;

	// 🏗️ Constructor:
	// Giống như việc bạn dựng tấm bảng lên lần đầu tiên và viết dòng chữ đầu tiên lên đó.
	constructor(initialMessage: string) {
		this.message = initialMessage;
	}

	// ✍️ updateMessage:
	// Giống như việc bạn cầm phấn xóa dòng chữ cũ và viết dòng chữ mới lên bảng.
	// Trong Blockchain, hành động này tốn phí (gas) vì bạn đang thay đổi dữ liệu lưu trữ.
	public updateMessage(newMsg: string): void {
		this.message = newMsg;
	}

	// 👁️ getMessage:
	// Giống như việc mọi người đi ngang qua và nhìn vào tấm bảng để đọc nội dung.
	// Hành động này thường miễn phí vì bạn chỉ "xem" chứ không "sửa".
	public getMessage(): string {
		return this.message;
	}
}
