interface userInterface{
    /*
    name:string
    email:string
    age:number
    */

    payInvoice()
    register()
}

// I am practicing git staging

class User implements userInterface{
    
    name:string
    email:string
    age:number
    

    constructor(name:string,email:string,age:number){
        this.name = name
        this.email = email
        this.age = age
        console.log('User created-' + this.name)
    }

    register(){
        console.log(this.name + ' is now registered')
    }
    payInvoice(){
        console.log(this.name+ ' paid invoice')
    }
}

class Member extends User{
    id:number

    constructor(id:number,name:string,email:string,age:number )
    {
        super(name,email, age)
        this.id=id
    }

    payInvoice(){
        super.payInvoice()
    }
}
//let john = new User('John Doe', 'jdoe@mail.com',34)

//console.log(john.age)

//john.register()

let mike:User = new Member(1,'Mike Smith', 'mi@email.com',56)


mike.payInvoice()