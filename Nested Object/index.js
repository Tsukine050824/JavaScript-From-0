// Nested Object: là một object bên trong một object khác
const person = {
    fullName: " John Doe",
    age: 30,
    isMarried: false,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}

console.log(person.fullName); 
console.log(person.address.city); 
console.log(person.hobbies); 
console.log(person.address); 
console.log(person.address.street); 
console.log(person.age); 
console.log(person.isMarried); 

for (const property in person.address) {
    console.log(person.address[property]);
}



// Ví dụ khác: 

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("John Do", 31, "456 Main St", "Oakland", "USA");
const person2 = new Person("Jan Smith", 27, "345 Sub Line", "Los Angeles", "USA");
const person3 = new Person("Alice Johnson", 29, "789 Oak St", "Chicago", "USA");
console.log(person1.address.city);