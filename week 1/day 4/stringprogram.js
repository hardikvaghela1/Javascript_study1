const FullName=prompt("Enter the Fullname :");
const Email=prompt("Enter the email : ");
function name(){
    console.log(FullName.replace("","MR."))
    console.log(FullName.toUpperCase())
    console.log(FullName.length)
}
console.log(name())
function email(){
    console.log(Email.toLowerCase())
    console.log(Email.concat("@gmail.com"))
}
console.log(email())