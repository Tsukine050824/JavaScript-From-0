// Inheritance: là một khái niệm trong lập trình hướng đối tượng (OOP) cho phép một lớp (class) kế thừa các thuộc tính và phương thức từ một lớp khác.
// Điều này giúp tái sử dụng mã nguồn và tạo ra các cấu trúc phân cấp giữa các lớp.
// Trong JavaScript, bạn có thể sử dụng từ khóa `extends` để tạo một lớp con kế thừa từ một lớp cha.
// Ví dụ:

class Animal {
    alive = true; // thuộc tính của lớp cha
    eat() { // phương thức của lớp cha
        console.log(`The ${this.name} is eating.`);
    }
    sleep() { // phương thức của lớp cha
        console.log(`The ${this.name} is sleeping.`);
    }

}

class Rabbit extends Animal { // Rabbit kế thừa từ Animal
    name = 'Rabbit'; // thuộc tính riêng của lớp con
    run() { // phương thức riêng của lớp con
        console.log('The rabbit is running.');
    }
}
class Dog extends Animal { // Dog kế thừa từ Animal
    name = 'Dog'; // thuộc tính riêng của lớp con
    bark() { // phương thức riêng của lớp con
        console.log('The dog is barking.');
    }
}
class Cat extends Animal { // Cat kế thừa từ Animal
    name = 'Cat'; // thuộc tính riêng của lớp con
    meow() { // phương thức riêng của lớp con
        console.log('The cat is meowing.');
    }
}

const rabbit = new Rabbit();
const dog = new Dog();
const cat = new Cat();
console.log(rabbit.alive); // true, kế thừa thuộc tính từ Animal
console.log(dog.alive); // true, kế thừa thuộc tính từ Animal
console.log(cat.alive); // true, kế thừa thuộc tính từ Animal
rabbit.eat(); // The Rabbit is eating., kế thừa phương thức từ Animal
dog.sleep(); // The Dog is sleeping., kế thừa phương thức từ Animal
cat.eat(); // The Cat is eating., kế thừa phương thức từ Animal
rabbit.run(); // The Rabbit is running., phương thức riêng của Rabbit
dog.bark(); // The Dog is barking., phương thức riêng của Dog
cat.meow(); // The Cat is meowing., phương thức riêng của Cat
// Trong ví dụ trên, lớp `Animal` là lớp cha với các thuộc tính và phương thức chung.
// Các lớp `Rabbit`, `Dog`, và `Cat` là các lớp con kế thừa từ `Animal` và có thể sử dụng các thuộc tính và phương thức của lớp cha.
// Bạn cũng có thể thêm các thuộc tính và phương thức riêng cho các lớp con nếu cần thiết.