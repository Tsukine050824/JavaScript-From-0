// Closure: là một hàm có thể ghi nhớ và truy cập phạm vi từ hàm cha của nó ngay cả sau khi hàm cha đã kết thúc thực thi.

function outerFunction(){
    let message = "Hello from outer function!";
    function innerFunction(){
        console.log(message);
    }
    innerFunction(); // Gọi hàm bên trong
}
outerFunction(); // Gọi hàm bên ngoài
// Kết quả: "Hello from outer function!"
// Giải thích: Trong ví dụ trên, innerFunction là một closure vì nó có thể truy cập biến message từ outerFunction ngay cả sau khi outerFunction đã kết thúc thực thi.
// Closure rất hữu ích trong việc tạo ra các hàm với trạng thái riêng tư và trong lập trình hàm.
// Chúng cho phép bạn tạo ra các hàm có thể ghi nhớ thông tin từ phạm vi bên ngoài của chúng.
// Ví dụ về Closure trong JavaScript:
function makeCounter() {
    let count = 0; // Biến riêng tư
    function increment() {
        count++;
        console.log(`Count: ${count}`);
    }

    return {increment}; // Trả về hàm increment
}

const counter = makeCounter(); // Tạo một bộ đếm mới
counter.increment();
// Kết quả: Count: 1
counter.increment();
// Kết quả: Count: 2
// Giải thích: Trong ví dụ trên, hàm makeCounter tạo ra một biến riêng tư count và trả về hàm increment. Mỗi khi gọi counter.increment(), nó sẽ tăng giá trị của count và in ra giá trị hiện tại. Biến count được giữ lại trong phạm vi của closure, cho phép nó duy trì trạng thái giữa các lần gọi hàm.
// Closure cũng có thể được sử dụng để tạo ra các hàm với tham số mặc định hoặc để tạo ra các hàm với các biến cục bộ riêng biệt.
// Ví dụ về Closure khác: 
function createScoreManager() {
    let score = 0;
function increaseScore(points) {
    score += points;
    console.log(`Score: ${score}`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`Score: ${score}`);
}

function getScore() {
    return score;
}
    return { increaseScore, decreaseScore, getScore };
}

const scoreManager = createScoreManager();

scoreManager.increaseScore(10); // Score: 10
scoreManager.decreaseScore(5);
// Score: 5
console.log(`Current Score: ${scoreManager.getScore()}`); // Current Score: 5
// Giải thích: Trong ví dụ trên, các hàm increaseScore, decreaseScore và getScore đều có thể truy cập và thay đổi biến score từ phạm vi bên ngoài của chúng. Điều này cho phép chúng duy trì trạng thái của điểm số trong suốt quá trình thực thi chương trình.