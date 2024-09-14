//for genrics 
//<T> is idntifier.
// function users(data:string):string
// {
//     return data
// }
// console.log(users("Hardik",12)) //in this code we have to error only string can be accses.so,

function users<T>(data:T):T
{
    return data
}
console.log(users({name:"Hardik",age:20}.age))