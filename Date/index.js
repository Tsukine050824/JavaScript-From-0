// Date: là một đối tượng tích hợp trong JavaScript, được sử dụng để làm việc với ngày và giờ.
// Nó cung cấp các phương thức để lấy, thiết lập và định dạng ngày và giờ.
// Thứ tự tham số: Năm, Tháng (0-11), Ngày (1-31), Giờ (0-23), Phút (0-59), Giây (0-59), Mili giây (0-999)
const now = new Date(1700000000000); // Tạo một đối tượng Date mới với thời gian hiện tại
console.log(now); // In ra thời gian hiện tại


const year = now.getFullYear(); // Lấy năm hiện tại
const month = now.getMonth() + 1; // Lấy tháng hiện tại (tháng bắt đầu từ 0, nên cần cộng thêm 1)
const date = now.getDate(); // Lấy ngày hiện tại
const hours = now.getHours(); // Lấy giờ hiện tại
const minutes = now.getMinutes(); // Lấy phút hiện tại
const seconds = now.getSeconds(); // Lấy giây hiện tại
const dayOfWeek = now.getDay(); // Lấy thứ trong tuần (0-6, 0 là Chủ Nhật, 1 là Thứ Hai, ...)

console.log(`${dayOfWeek}/${date}/${month}/${year} ${hours}:${minutes}:${seconds}`); // In ra thời gian theo định dạng dd/mm/yyyy hh:mm:ss

// Tạo một đối tượng Date từ chuỗi
const dateString = new Date("2025-12-05 22:52:54");
console.log(dateString); // In ra thời gian từ chuỗi

const date1 = new Date("2025-12-05");
const date2 = new Date("2025-12-07");
 
if (date1 < date2) {
    console.log("date1 nhỏ hơn date2");
} else if (date1 > date2) {
    console.log("date1 lớn hơn date2");
} else {
    console.log("date1 bằng date2");
}

