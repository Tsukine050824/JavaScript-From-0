// Getters: là các phương thức đặc biệt của đối tượng, được sử dụng để truy cập và trả về giá trị của các thuộc tính của đối tượng.
// Setters: là các phương thức đặc biệt của đối tượng, được sử dụng để thiết lập hoặc cập nhật giá trị của các thuộc tính của đối tượng.

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.log("Width must be positive");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.log("Height must be positive");
        }
    }
    get width() {
        return `${this._width.toFixed(2)}cm`;
    }
    get height() {
        return `${this._height.toFixed(2)}cm`;
    }
    get area() {
        return `${(this._height * this._width).toFixed(2)}cm²`;
    }
}
const rectangle = new Rectangle(10, 20);


console.log(rectangle.height); // 10
console.log(rectangle.width); // 20
console.log(rectangle.area); // 200

// Sử dụng setter để thay đổi giá trị của thuộc tính
// Ví dụ khác: 
class Person {
    constructor(Firstname, Lastname, age) {
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.age = age;
    }
    set Firstname(newFirstname) {
        if (typeof newFirstname === 'string' && newFirstname.length > 0) {
            this._Firstname = newFirstname;
        }
        else {
            console.log("Firstname must be a non-empty string");
        }
    }
    set Lastname(newLastname) {
        if (typeof newLastname === 'string' && newLastname.length > 0) {
            this._Lastname = newLastname;
        }
        else {
            console.log("Lastname must be a non-empty string");
        }
    }
    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.log("Age must be a non-negative number");
        }
    }
    get Firstname() {
        return this._Firstname;
    }
    get Lastname() {
        return this._Lastname;
    }
    get Fullname() {
        return `${this._Firstname} ${this._Lastname}`;
    }
    get age() {
        return this._age;
    }
}


const person = new Person("John", "Doe", 30);
console.log(person.Firstname); // John
console.log(person.Lastname); // Doe
console.log(person.Fullname); // John Doe
console.log(person.age); // 30