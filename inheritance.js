class Parent{
    constructor() {
        this.fatherName = "Sabuz Khan";
    }
}
class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
    
const baby = new Child("kamal");
const baby2 = new Child("rana");
console.log(baby.getFullName());
console.log(baby2.getFullName());
