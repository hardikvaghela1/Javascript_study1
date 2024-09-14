//string,boolean,number,array,enum,tuple,any,object.

//for string
//let Name: string = "Hardik";
//Name=1;            //once you give type than you can't change.
//console.log(Name)


//for boolean 
//let signin : boolean = true;
//signin="hardik";      //once you give type than you can't change.
//console.log(signin)

//for number
//const a:number=2;
//console.log(a)

//for array
// let number=[1,2,3,4,"hardik",true];     //once you declare an array than you assign multiple type data.(koi bhi type me error nhi dega.)
// let arr2:string[]=["Hardik","Prince"];   //array declare as [].
// let arr3:boolean[]=[true,false];
// console.log(number)
// console.log(arr2)
// console.log(arr3)

//for any
//let a:any = ["Hardik",234,true]; 
// a="prince";
// a="35"
// console.log(a)

//for object
// let person:{
//     name : string,
//     age  : number,
//     location :string,
// };
// person={
//     name :"hardik",
//     age :20,
//     location:"gandhinagar"     //you cann't assign out of scope.
// };
// console.log(person.name,person.age,person.location)
//console.log(person.skill) //when you no assign skil ts can get error.


//for enum is custom(fixed) data type (isme jo data dala hoga vhi aayega uske alava koi data nhi dikhayega.)
// enum monthofyear {
//     JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC
// };
// let month:monthofyear=monthofyear.SEP;
// if(month === monthofyear.SEP){
//     console.log("Its September month.")
// }else{
//     console.log("Its not September month.")
// }


//for tuple 
// const details:{
//     id:number,
//     rollno:number,
//     nameandmobileno:[string,number]     //you cannot change the after you assign type. 
// }={
//     id:12,
//     rollno:211250107054,
//     nameandmobileno:["Hardik",9510522687]
// }
// console.log(details.nameandmobileno)
// console.log(details.id)
