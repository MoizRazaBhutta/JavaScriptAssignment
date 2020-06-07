//Chapter 1
//Task No 1
alert("Welcome to the website");

//Task No 2
alert("Error! Please enter a valid password");

//Task No 3
alert("Welcome to JS Land...  \nHappy Coding!");

//Task No 4
alert("Welcome to JS Land...");
alert("Happy coding!");

//Task No 5
console.log("Hello... I can run JS through my web browser's console");


//Chapter 2
//Task No 1
var userName;

//Task No 2
var myName="Abdul Moiz Raza";

//Task No 3
var message;
message="Hello World";
alert(message);

//Task No 4
var name='John Doe';
var age="15 years old";
var course="Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);

//Task No 5
var message = "PIZZA";
alert(message + "\n" + message.slice(0, 4) + "\n" + message.slice(0, 3) + "\n" + message.slice(0, 2) + "\n" + message.slice(0, 1));

//Task No 6
var email="moizraza@gmail.com";
alert("My email is:"+email);

//Task No 7
var book="A smarter way to learn Javascript";
alert("I am trying to learn from the book"+book);

//Task No 8
document.write("Yah! I can write HTML content through Javascript");

//Task No 9 
var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(string);

//Chapter 3
//Task 1
var age=10;
alert("I am"+age+"years old");

//Task 2
var n = localStorage.getItem('on_load_counter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("on_load_counter", n);
nums = n.toString().split('').map(Number);
for (var i of nums) {
    alert("You have visited this site " + n + " times")
}

//Task 3
var birthYear = 1998;
document.write("My birth year is " + birthYear + "<br>" + "Data type of the declared variable is number" + "<br>");

//Task 4
var visitorname = "John Doe";
var product = "T-shirt(s)";
var quantity = 5;
document.write("<br>" + visitorname + " ordered " + quantity + " " + product + "(s) on XYZ Clothing store <br>");

//Chapter 4
//Task 1
var FirstName='Moiz',LastName='Raza',city="Karachi";

//Task 2
var name, $name, _name, $age, age;
var 1name, 3, alert, 4age, console;

//Task 3
document.write("<h1>Rules for naming JS variables<br></h1><p>Variable names can only contain numbes, $ and _. For example : $my_1stVariable <br> Variables must begin with a letter, $ or _. For example:  $name, _name or name<br>Variable names are case sensitive <br> Variable names should not be JS keywords<br></p>");

//Chapter 5
//Task 1
var a=Number(prompt("Enter First Number:"));
var b=Number(prompt("Enter Second Number:"));
var ans=a+b;

document.write("Sum of"+a+"and"+b+"is "+ans);

//Task 2
var a=Number(prompt("Enter First Number:"));
var b=Number(prompt("Enter Second Number:"));
var ans=a-b;

document.write("Subraction of"+b+"from"+a+"is "+ans);

var a=prompt("Enter First Number:");
var b=prompt("Enter Second Number:");
var ans=a*b;

document.write("Product of"+a+"and"+b+"is "+ans);

var a=prompt("Enter First Number:");
var b=prompt("Enter Second Number:");
var ans=a/b;

document.write("Division of"+a+"and"+b+"is "+ans);

var a=prompt("Enter First Number:");
var b=prompt("Enter Second Number:");
var ans=a%b;

document.write("Modulus of"+a+"and"+b+"is "+ans);

//Task 3
var a;
document.write("Value after declaration is " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a = ++a;
document.write("Value after increment is: " + a + "<br>");
a = a + 7;
document.write("Value after addition is: " + a + "<br>");
a = --a;
document.write("Value after decrement is: " + a + "<br>");
a = a / 3;
document.write("The remainder is: " + a + "<br>");

//Task 4
var ticketPrice = 600;
var cost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a moive is: " + cost + " PKR" + "<br>");

//Task 5
var num=4;
var ans;

for (var i=1;i<=10;i++){
    ans=num*i;
    document.write(num+"x"+i+"="+ans);
}

//Task 6
var celsiusTemp = 25;
farhenheit = (celsiusTemp - 9 / 5) + 32;
document.write(celsiusTemp + "◦C is " + farhenheit + "◦F" + "<br>");
var farhenheit = 70;
celsiusTemp = (frameElement - 32) * 5 / 9;
document.write(farhenheit + "◦F is " + celsiusTemp + "◦C" + "<br>");

//Task 7
var priceItem1 = 650;
var priceItem2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
var total = (priceItem1 * quantity1) + (priceItem2 * quantity2);
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is" + quantity1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is" + quantity2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
document.write("Total cost of your order is " + total + "<br>");

//Task 8
var totalMarks = 1100;
var marksObtained = 904;
percentage = (marksObtained / totalMarks) * 100;
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "<br>");

//Task 9 
var dollars = 10;
var riyals = 25;
pkr = (dollars * 104.80) + (riyals * 28);
document.write("Total cureency in PKR: " + pkr + "<br>");

//Task 10
var x = 10;
ans = ((x + 5) * 10) / 2;
document.write("Result of arithmetic operation is: " + ans + "<br>");

//Task 11
var currentYear = 2020;
var birthYear = 1996;
age = currentYear - birthYear;
document.write("Current year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>")
document.write("Your age is : " + age + "<br>");

//Task 12
var radius = 20;
const pi = 3.142;
circumference = 2 * pi * radius;
document.write("The circumference is : " + circumference + "<br>");
area = pi * radius * radius;
document.write("The area is: " + area + "<br>");

//Task 13
var favoriteSnack = "Chocolates";
var currentAge = 23;
var maximumAge = 70;
var amountDay = 3;
total = (maximumAge - currentAge) * (3 * 365);
document.write("Favourite snack : " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Maximum age: " + maximumAge + "<br>");
document.write("You will need " + total + " " + favoriteSnack + " to last you until the ripe age of " + maximumAge + "<br>");

//Chapters 6-9
//Task 1
var a = 10;
document.write("Result: <br> The value of a is : " + a + "<br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a++ is: " + a + "<br><br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br><br>")

//Task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("Result is: " + result + "<br><br>");

//Task 3
var name = prompt("Enter your name: ");
alert("Greetings " + name);

//Task 5
var display;
var multiplier = Number(prompt("Enter a number: "));
if (multiplier == 0) {
    multiplier = 5;
    for (i = 1; i <= 10; i++) {
        var result = i * multiplier;
        display = multiplier + " * " + i + " = " + result + "<br>";
        document.write(display);
    }
} else {
    for (i = 1; i <= 10; i++) {
        var result = i * multiplier;
        display = multiplier + " * " + i + " = " + result + "<br>";
        document.write(display);
    }
}

//Task 6
var subject1 = prompt("Enter Subject 1: ");
var subject2 = prompt("Enter Subject 2: ");
var subject3 = prompt("Enter Subject 3: ");

var totalMarks = 100;

var obtained1 = prompt("Obtained Marks in " + subject1);

var obtained2 = prompt("Obtained Marks in " + subject2);
var obtained3 = prompt("Obtained Marks in " + subject3);

var percentage1 = (obtained1 / totalMarks) * 100;
var percentage2 = (obtained2 / totalMarks) * 100;
var percentage3 = (obtained3 / totalMarks) * 100;

document.write("<table>< br ><tr><td><b>Subject</b> </td><td><b>Total Marks</b> </td><td><b>Obtained Marks</b> </td><td><b>Percentage</b> </td></tr><tr><td><script>document.write(subject1)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained1)</script></td><td><script>document.write(percentage1 = " % ")</script></td></tr><tr><td><script>document.write(subject2)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained2)</script></td><td><script>document.write(percentage2 + " % ")</script></td>/tr><tr><td><script>document.write(subject3)</script></td><td><script>document.write(totalMarks)</script></td><td><script>document.write(obtained3)</script></td><td><script>document.write(percentage3 + " % ")</script></td></tr><tr><td></td><td><script>document.write(totalMarks*3)</script></td><td><script>document.write(obtained1 + obtained2 + obtained3)</script></td><td><script>document.write((percentage1 + percentage2 + percentage3) / 3 + " % ")</script></td></tr></table >");

//Chapter 9-11
//Task 1
var city = prompt("Enter your city: ");
if (city == "Karachi") {
    alert("Welcome to city of lights");
}

//Task 2
var gender = prompt("Enter your gender: ");
if (gender == "Male") {
    alert("Good Morning, Sir")
}
else if (gender == "Female") {
    alert("Good Mornign, Ma'am")
}

//Task 3
var signalColor = prompt("Emter the color of the traffic signal: ");
if (signalColor == "Red") {
    alert("Must stop");
}
else if (signalColor == "Yellow") {
    alert("Ready to move");
}
else if (signalColor == "Green") {
    alert("Move now")
}

//Task 4
var currentFuel = Number(prompt("Remaining fuel in liters"));
if (currentFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

//Task 5
// a
var a = 4; if (++a === 5) { alert("given condition for variable a is true"); }

// b
var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }

// c
var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }

// d
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }

// e
if (true) { alert("True"); } if (false) { alert("False"); }

// f
if ("car" < "cat") { alert("car is smaller than cat"); }

//Task 6
var English = prompt("English Number")
var Urdu = prompt("Urdu Number")
var Mathematics = prompt("Mathematics Number")

if (English <= 100 && Urdu <= 100 && Mathematics <= 100) {
    var obtainedMarks = English + Urdu + Mathematics;
    var totalMarks = 300;

    let percentage = obtainedMarks / totalMarks * 100;

    percentage = percentage.toFixed(2);


    if (percentage >= 80) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  A-one `);
        document.write(`<h2>Remarks Excellent `);
    }

    else if (percentage >= 70) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  A `);
        document.write(`<h2>Remarks Good `);
    }

    else if (percentage >= 60) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  B `);
        document.write(`<h2>Remarks You need to improve`);
    }

    else if (percentage < 60) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  Fail `);
        document.write(`<h2>Remarks sorry `);
    }

}

//Task 7
var secretNumber = 7;
var userSecretNumber = +prompt("Enter Your secret Number")
if (secretNumber === userSecretNumber) {
    alert('bongo')
}
else if (secretNumber++ === userSecretNumber) {
    alert('Close enough to the correct answer.')
}

//Task 8
var divisibleNumber = prompt("Enter Divisible Number")
if (divisibleNumber % 3 === 0) {
    alert("Number is Divisible by 3")
}

document.write("<p>9. Write a program that checks whether the given input is an even number or an odd number. </p><br>");
var num = +prompt("Enter your Number i will tell you it is even or odd")
if (num % 2 == 0) {
    alert('Even Number');
} else {
    alert('Odd Number');
}

//Task 10
var temperature = prompt("Enter Your Temperature");
if (temperature > 40) {
    alert("It is too hot outside")
}
else if (temperature > 30) {
    alert("The Weather today is Normal.")
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.")
}
else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.")
}

//Task 11
var inputOne = parseInt(prompt("Enter First Number"))
var inputtwo = parseInt(prompt("Enter Last Number"))
var operation = prompt("+, -, *, /, %")

if (operation === "+") {
    alert(inputOne + inputtwo)
}
else if (operation === "-") {
    alert(inputOne - inputtwo)
}

else if (operation === "*") {
    alert(inputOne * inputtwo)
}
else if (operation === "/") {
    alert(inputOne / inputtwo)
}
else if (operation === "%") {
    alert(inputOne % inputtwo)
}

//Chapter 12-13
//Task 1
var userNumber = parseInt(prompt("Select one Number in given Number 65, 90, 97, 122"))
if (userNumber === 65) {
    document.write("You select Capital Letter  'A' Alphabet")
}
else if (userNumber === 90) {
    document.write("You select Capital letter 'Z' Alphabet")
}
else if (userNumber === 97) {
    document.write("You select small Letter 'a' Alphabet")
} else if (userNumber === 122) {
    document.write("You select small letter 'z' Alphabets")
}
else {
    document.write("Please select in given number")

}

//Task 2
if (25 > 21) {
    document.write("larger number is 25 <br>");
}
if ('abc' === 'abc') {
    document.write("both string are Same<br>");
}
else {
    document.write("both string are different<br>")
}

//Task 3
var userInput = parseInt(prompt("Enter the positive, negative or zero number<br>"))
if (userInput == 5) {
    document.write("You Select Positive Number<br>")
}

else if (userInput == -5) {
    document.write("You Select Negative Number<br>")
}
if (userInput === 0) {
    document.write("You Select Zero Number<br>")
}

//Task 4
var vowelWord = prompt("Enter Your desire Letter")
vowelWord = vowelWord.toLowerCase();
if (vowelWord === 'a' || vowelWord === 'e' || vowelWord === 'i' || vowelWord === 'o' || vowelWord === 'u') {
    alert("You selected Vowel Word")
}
else {
    alert("Your selected Word is not Vowel Word")

}

//Task 5
var password = "Javascript";
var userPassword = prompt("Enter Your Password");
if (userPassword == null || userPassword == '') {
    alert("please Enter Your Password")
}
else if (userPassword === password) {
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Your typed wrong Password")
}

//Task 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

//Task 7
var times = 1900;
if (times >= 0000 && times < 1200) {
    document.write("<br /> Good Morning")
}

else if (times >= 1200 && times < 1700) {
    document.write("<br /> Good AfterNoon")
}

else if (times >= 1700 && times < 2100) {
    document.write("<br /> Good Evening")
}

else if (times >= 2100 && times < 2359) {
    document.write("<br /> Good Night")
}

//Chapter 14-16
//Task 1
var studentName = [];

//Task 3
var stringArray = ['moiz', 'raza', 'Pakistan', 'Karachi']

//Task 4
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Task 5
var booleanArray = [true, false, false, true]

//Task 6
var mixedArray = ['myname ', 'pakisan', 'moiz', 1, 5, 0, 8, 9, true, false]

//Task 7
var educationArray = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
for (var i = 0; i < educationArray.length; i++) {
    document.write(i + "  " + educationArray[i] + "<br>")
}

//Task 8
var studentName = ['hamza', 'salman', 'arsalan']
var studentScore = [320, 230, 480];

var percentagestudent1 = studentScore[0] * 100 / 500;
var percentagestudent2 = studentScore[1] * 100 / 500;
var percentagestudent3 = studentScore[2] * 100 / 500;
var percentagestudents = [percentagestudent1, percentagestudent2, percentagestudent3]

for (let index = 0; index < studentName.length; index++) {
    document.write(`Score of ${studentName[index]} is ${studentScore[index]}.
Percentage : ${percentagestudents[index]} %<br>`)
}

//Task 9 
var colorName = ['red', 'green', 'blue', 'white', 'orange'];
for (let index = 0; index < colorName.length; index++) {
    document.write(colorName[index] + "<br>")
}

var userColor = prompt("Enter your Favorite Color");

if (userColor != '' && userColor != undefined) {
    // colorName.splice(0, 0, userColor)
    colorName.unshift(userColor)
    document.write(colorName + "</br>");

}

var userColor2 = prompt("Enter your Second Favorite Color");

if (userColor2 != '' && userColor2 != undefined) {
    // colorName.splice(0, 0, userColor)
    colorName.push(userColor2)
    document.write(colorName + "</br>");

}

colorName.unshift("pink")
colorName.unshift("skyblue")
document.write("<h3>New Updated Array: " + colorName + "</h3><br />")

colorName.shift()
document.write("<h3> First item removed and now New Updated Array: " + colorName + "</h3><br />")

colorName.pop()
document.write("<h3> Last item removed and now New Updated Array: " + colorName + "</h3><br />")

var userColorName = prompt("Enter your color name")
var userColorposition = parseInt(prompt("Enter which index you want to add color name"))
colorName.splice(userColorposition, 0, userColorName)
document.write("<h3>" + colorName + "</h3>")

var userdeleteColor = prompt("Enter which index you want to delete color ")
var userColorposition = parseInt(prompt("Enter how many colors you want to delete"))
colorName.splice(userdeleteColor, userColorposition)
document.write("<h3>" + colorName + "</h3><br>")


//Task 10
var sortArray = [120, 350, 220, 450, 100, 650, 300];
document.write("Score of Students " + sortArray + "<br />")
document.write(" Ordered Score of Students  " + sortArray.sort())

//Task 11
var cities = ['karachi', 'lahore', 'quetta', 'islamabad', 'Multan', 'peshawar']
var selectedcities = cities.slice(2, 5);
document.write("<br>Cities List  " + cities + "<br />")
document.write("Cities List " + selectedcities + "<br />")

//Task 12
var arr = ['This', 'is', 'my', 'cat'];
var stringArray = arr.join(" ")
document.write(arr)
document.write(stringArray)

//Task 13
var fifoarray = [];
fifoarray.push('keyboard')
fifoarray.push('mouse')
fifoarray.push('printer')
fifoarray.push('monitor')
document.write("<h3>DEVICES: <br /> " + fifoarray + " </h3>")

var out1 = fifoarray.shift()
var out2 = fifoarray.shift()
var out3 = fifoarray.shift()
var out4 = fifoarray.shift()
document.write("<h3>Out: <br /> " + out1 + " </h3>")
document.write("<h3>Out: <br /> " + out2 + " </h3>")
document.write("<h3>Out: <br /> " + out3 + " </h3>")
document.write("<h3>Out: <br /> " + out4 + " </h3>")

//Task 14
var lifoArray = [];
lifoArray.unshift('monitor')
lifoArray.unshift('printer')
lifoArray.unshift('mouse')
lifoArray.unshift('keyboard')

document.write("<h3>DEVICES: <br /> " + lifoArray + " </h3>")

var out1 = lifoArray.pop()
var out2 = lifoArray.pop()
var out3 = lifoArray.pop()
var out4 = lifoArray.pop()
document.write("<h3>Out: <br /> " + out1 + " </h3>")
document.write("<h3>Out: <br /> " + out2 + " </h3>")
document.write("<h3>Out: <br /> " + out3 + " </h3>")
document.write("<h3>Out: <br /> " + out4 + " </h3>")

//Task 15
var mobilesCompanies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
document.write(`<select><option>${mobilesCompanies[0]}</option><option>${mobilesCompanies[1]}</option><option>${mobilesCompanies[2]}</option><option>${mobilesCompanies[3]}</option><option>${mobilesCompanies[4]}</option><option>${mobilesCompanies[5]}</option></select>`)


//Chapter 17-20
//Task 1
var multiArr=[[1,2],
[2,3]];

//Task 2
var multiArr[[0,1,2,3],
[1,0,1,2],
[2,1,0,1]];

//Task 3
for(var i=1;i<=10;i++){
    document.write(i+"<br>");
}

//Task 4
var num=+prompt("Enter table number");
var times=+prompt('Enter length of table');

for (i=1;i<=times;i++){
    ans=num*i;
    document.write(num+"times"+i+"="+ans);
}

//Task 5
var fruits=["apple","banana","mango","orange","strawberry"];
for (var i=0;i<fruits.length;i++){
    document.write("Element at index" + i +"is "+fruits[i]);
}

//Task 6 
var arr=[]
for(var i=1;i<=15;i++){
    arr.push(i)
}
document.write("counting:"+arr);

var arr1=[]
for(var i=10;i>=0;i--){
    arr1.push(i)
}
document.write("Reverse counting:"+arr1);

var arr2=[]
for(var i=0;i<=20;i=i+2){
    arr2.push(i)
}
document.write("Even counting:"+arr2);

var arr3=[]
for(var i=1;i<=20;i=i+2){
    arr3.push(i)
}
document.write("Odd counting:"+arr3);

var arr4=[]
for(var i=0;i<=20000;i=i+2000){
    arr4.push(i)
}
document.write("Series counting:"+arr2);

//Task 7
var A = ['cake', 'apple pie','cookie', 'chips', 'patties']
var name=prompt("Enter a word");

for(var i=0;i<A.lenght;i++){
    if(name===A[i]){
        document.write(name+"is available at index"+i+"in our bakery")
    }
    else{
        document.write("sorry your item is not available")
    }
}

//Task 8
var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= array[0];

for (i=0; i<array.lenght;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}

document.write(largest+"is the largest num in array");

//Task 9
var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var smallest= array[0];

for (i=0; i<array.lenght;i++){
    if (array[i]<smallest) {
        var smallest=array[i];
    }
}

document.write(smallest+"is the smallest num in array");

//Task 10
var arr=[]
for (var i=1;i<=20;i++){
    ans=5*i;
    arr.push(ans);
}
document.write(arr+"is the list of multiple of 5");
