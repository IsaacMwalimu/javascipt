/*Arithmetic operators * These are operators that help in doing mathematical operations
*Examples of arithmetic operators are:
* ->Addition (+)
* ->Subtraction (-)
* ->Division (/)
* ->Multiplication (*)
* ->Modulus (%)
*/ 

let x = 57;
let y = 21;

let total = x+y; //This will add the two variables
let difference = x-y; //This will subtract the two variables
let div = x/y; //This will divide the two variables
let multi = x*y; //This will multiply the two variables
let mod = x%y; //This will provide the reminder of the two variables


let book1 = 120;
let book2 = 120;
let book3 = 120;
let noteBook1 = 30;
let noteBook2 = 30;
let total1 = 5000;

let answer = total1-noteBook1-noteBook2-book1-book2-book3;

let change;
alert(answer);


/**comparison operators* They are used to compare values
 * Examples of comparison operators are
 * greater than (>)
 * less than (<)
 * greater than or equal to (>=)
 * less than or equal to (<=)
 * equal to (==)
 * not equal to (!=)
 * strict equal to (===)*/

let p = 10;
let q = 5;

alert(p > q); //greater than
alert(p < q); //less than
alert(p>=q); //greater than or equal to
alert(p <=q);//less than or equal to
alert(p == q);//equal to
alert(p != q);//not equal to
alert(p === q);//strict equal to 

let temp = 20;

if(temp>30){
    console.log("its hot outside");
}
else if(temp>15 && temp <=30){
    console.log("its warm outside");
}
else{
    console.log("its cold outside");
}

let time = 8;

if(time>6 || time<=20){
    console.log("its during the day");
}
else{
    console.log("its during the night");
}



/*control statements
*In JavaScript, control statements are programming
 constructs that enable you to control the flow of
  execution within your code. They determine which
   code blocks are executed based on specified conditions 
   or how many times certain code blocks are repeated.
    Control statements in JavaScript include conditional 
    statements (like if, else, switch), loops
     (like for, while, do-while).*/

     
/*examples and syntax 
    *if
        if(condition){
            execution;
        }
    *if else
            if(condition){
            execution;
            }
            else(){

        }
    *if else if
            if(condition){
            execution;
            }
            else if(condition){
                execution;
            }
            else{
                execution;
            }
    *switch
    */



// if statements example
let num = 10;

if(num<10){
    alert(num);
}

// if else statement example
let age =17;

if(age>=18){
    alert("i am an adult");
}
else{
    alert("am still a kid");
}

// if else if statements example
let a =50;

if(a<=49){
    alert('my number is <=49');
}
else if(a==50){
    alert('my no. is actuall=to 50');
}
else{
    alert('i just have a stupid no.');
}