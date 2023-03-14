export class Person {
    id: number;
    age: number;
    name?: string;
    city?: string;
  
    constructor(id : number, name: string, age: number, city: string) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.city = city;
    }
}