let a=3;                   //For exicute arithmatic operations of using varibles.
var b=5;
const v= 5;
//const v=5; //const value cannot redeclare               // we can't use in the scoped const value because const variable is constant.
const y = 6;
const z = v + y;
console.log(z)
var b=6;
{
    const v=7;             //
    const y=9;
    const z=v+y;
    console.log(z)
}
    {
        let a=4;            //we can use let and var variables in blocked scoped
        var b=7;
        x=a+b;               //Addition of two numbers.
        console.log(x)
    }
    {
         x=b-a;               //Substraction of two numbers.
        console.log(x)
    }
    {
         x=a*b;              //Multiplication of two numbers.
        console.log(x)
    }
    {
        x=a/b;              //Division of two numbers.
        console.log(x)
    }
    {
        x=a%b;              //Modulus of two numbers.
        console.log(x)
    }
    {
         x=a**b;              //Exponatiation of two numbers.
        console.log(x)
    }
    {   
        a++;                 //Increment of a.
        x=a;              
        console.log(x)
    }
    {   var b=6;
        b--;                //decrement of b.
         x=b;
        console.log(x)
    }
    