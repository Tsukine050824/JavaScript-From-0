// Super: làm cha của tất cả các lớp khác
// Super có thể là một lớp trừu tượng (abstract class) hoặc một lớp thông thường
// Super có thể chứa các phương thức và thuộc tính chung mà các lớp con sẽ kế thừa
// Super giúp tái sử dụng mã và duy trì tính nhất quán trong các lớp con
// Super có thể định nghĩa các phương thức trừu tượng mà các lớp con phải triển khai
// Super có thể cung cấp các phương thức và thuộc tính mặc định mà các lớp con có thể sử dụng hoặc ghi đè
// Super giúp tổ chức mã theo cách có cấu trúc và dễ bảo trì hơn
// Ví dụ: 
class Animal {
    constructor( name, age ){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`${this.name} is moving at a speed of ${this.speed} km/h`);
    }
}
class Dog extends Animal {
    constructor(name, age, barkSound,runSpeed){
        super(name, age);
        this.barkSound = barkSound;
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`${this.name} is running`);
        super.move(this.runSpeed); // Gọi phương thức move từ lớp cha
    }
}
class Cat extends Animal {
    constructor(name, age, meowSound, runSpeed){
        super(name, age);
        this.meowSound = meowSound;
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`${this.name} is running`);
        super.move(this.runSpeed); // Gọi phương thức move từ lớp cha
    }
}

const dog = new Dog('Buddy', 3, 'Woof', 20);
const cat = new Cat('Whiskers', 2, 'Meow', 15);

console.log(dog); // Dog { name: 'Buddy', age: 3, barkSound: 'Woof' }
console.log(cat); // Cat { name: 'Whiskers', age: 2, meowSound: 'Meow' }
// Trong ví dụ trên, lớp Animal là lớp cha (superclass) của các lớp Dog và Cat. Các lớp con kế thừa các thuộc tính name và age từ lớp cha, đồng thời thêm các thuộc tính riêng của chúng là barkSound và meowSound.
// Điều này giúp tái sử dụng mã và duy trì tính nhất quán trong các lớp con.
// Ngoài ra, nếu cần, lớp Animal có thể định nghĩa các phương thức chung mà các lớp con có thể sử dụng hoặc ghi đè.

