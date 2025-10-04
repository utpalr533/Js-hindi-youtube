function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()    
        },
        set: function(value){
            this._email = value
        }
    })}
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()    
        },
        set: function(password){
            this._password = password
        }
    })

    const chai = new User("chai@gmail.com", "12345")
    console.log(chai.email);
    console.log(chai.password);
    
    