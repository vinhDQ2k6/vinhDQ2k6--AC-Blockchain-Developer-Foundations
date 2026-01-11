import { ethers } from "ethers";

async function main() {
	console.log("📡 Đang thiết lập kết nối vệ tinh...");
	const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia.publicnode.com");
	// Địa chỉ contract và ABI
	const contractAddress = "0x41d0Ad4E6227062B59CA673B418Fc00E3A2d10Cf";
	const abi = ["function getCount() public view returns (uint)"];
	// Kết nối tới contract
	const contract = new ethers.Contract(contractAddress, abi, provider);

	console.log("🎯 Đang nhắm mục tiêu vào Contract...");
	const count = await contract.getCount();
	console.log("Current count:", count.toString());
}

main().catch(console.error);
