class User{
    constructor(email, password){
        this.email = email;
        this.password = password;   
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value.toUpperCase();
    }

    get password(){
        return this._password;
    }
    set password(value){
        if(value.length < 6){
            throw new Error("Password should be at least 6 characters");
        }
        this._password = value;
    }
}
const Utpal = new User("utpal@await", "123456");
console.log(Utpal.email);
console.log(Utpal.password);
