class User{
    constructor(username){
        this.username = username
    }
    logME(){
        console.log(`USERNAME is ${this.username}`)
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`COURSE ADDED ${this.username}`);
        
    }
}
const chai = new Teacher("chai", "chai@teacher.com", "123")  

chai.addCourse()


const masalaChai = new User("masalaChai")
//masalaChai.addCourse()
masalaChai.logME()
chai.logME()

console.log(chai===masalaChai)
console.log(chai instanceof Teacher);

// const masalaChai = new User("masalaChai")
// masalaChai.addCourse() // Removed: User does not have addCourse method
