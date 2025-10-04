const User={
    _email:"utpal@gmail.com",
    _password:"12345",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }

}

const tea = Object.create(User)
console.log(tea.email);
