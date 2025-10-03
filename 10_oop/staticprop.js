class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }
    static createId(){
        return`123`
    }
}

const Utpal = new User("Utpal")
//console.log(Utpal.createId())

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}

const samsung = new Teacher("samsung", "samsung@gmail.com", "12345")
console.log(samsung.createId())
samsung.logMe()
