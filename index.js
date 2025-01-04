 
 let name='dan';
 console.log(name);
let person ={
    Name:'dan',
    second:'maina',
    age:'30',
    gender:'male'
}
person.location='nakuru'
console.log(person);
document.getElementById("demo").innerHTML=person.Name + ' ' + person.age;
person.fullname = function(){
    return this.Name+'   '+this.second ;
};
document.getElementById("nam").innerHTML=person.fullname()
