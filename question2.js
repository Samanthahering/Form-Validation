class Mouth{
    constructor(man){
        this.man = man
    }
    open(){
        console.log(`${this.man} mouth is open`)
    }
    close(){
        console.log(`${this.man} mouth is closed`)
    }
}

class Doctor extends Mouth{
    checkup(){
        console.log(`${this.man} needs a checkup`)
    }
}

//only the doctor and the man have access to the man's methods
//the doctor also has access to his own methods
// let man = new Mouth('John')
// man.open()
// man.close()
// let doc = new Doctor('John')
// doc.open()
// doc.close()
// doc.checkup()