// sum
var sum1 = 3;
var sum2 =  5;
var total1 = sum1 + sum2;
console.log (total1);
document.write ("sum of 3 and 5 is " + total1 + "</br>");

// Subtraction
var sub1 = 3;
var sub2 = 5;
var total2 = sub1 - sub2;
console.log (total2);
document.write ("subtract of 3 and 5 is " + total2 + "</br>");

// Multiplication
var mul1 = 3;
var mul2 = 5;
var total3 = mul1 * mul2;
console.log (total3);
document.write ("multiplication of 3 and 5 is " + total3 + "</br>");

// Division
var div1 = 3;
var div2 = 5;
var total4 = div1 / div2;
console.log (total4);
document.write ("division of 3 and 5 is " + total4 + "</br>");

// Modulus
var mod1 = 3;
var mod2 = 5;
var total5 = mod1 % mod2;
console.log (total5);
document.write ("modulus of 3 and 5 is " + total5 + "</br>");

// variable undifined
var myName
console.log (myName);
document.write ( "Value after variable declaration is " + myName + "</br>");

// initialize variable
var num = 5;
console.log (num);
document.write ("initial value: " + num + "<br>");

// increament value
var num1 =++num;
console.log (num1);
document.write ("Value after increament is : " + num1 + "</br>");

// Addition Value
var num2 = num1 + 7;
console.log (num2);
document.write ("Value after addition is : " + num2 + "</br>");

// Decrement Value
var num3 = --num2;
console.log (num3);
document.write ("Value after decreament is : " + num3 + "</br>");

// Dividing variable
var num4 = num3 % 3
console.log (num4);
document.write ("the reminder is : " + num4 + "</br>");

// movie ticket
document.write ("<h1>Movie ticket</h1>");
var ticketPkr = 600;
var qty = 5;
console.log (ticketPkr * qty);
document.write ("Total Cost to buy " + qty + " tickets to a movie is " + ticketPkr * qty + "</br>");

// Table
document.write ("<h1>Table 0f 4</h1>");
var tableOf4 = 4;
console.log (4 * 1);
console.log (4 * 2);
console.log (4 * 3);
console.log (4 * 4);
console.log (4 * 5);
console.log (4 * 6);
console.log (4 * 7);
console.log (4 * 8);
console.log (4 * 9);
console.log (4 * 10);
document.write ("4 * 1 = 4" + "</br>")
document.write ("4 * 2 = 8" + "</br>")
document.write ("4 * 3 = 12" + "</br>")
document.write ("4 * 4 = 16" + "</br>")
document.write ("4 * 5 = 20" + "</br>")
document.write ("4 * 6 = 24" + "</br>")
document.write ("4 * 7 = 28" + "</br>")
document.write ("4 * 8 = 32" + "</br>")
document.write ("4 * 9 = 36" + "</br>")
document.write ("4 * 10 = 40" + "</br>")

// Temperature converter
document.write ("<h1>Temperature converter</h1>");
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
console.log (fahrenheit);
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
console.log (celsius2)
document.write (celsius + "°C is " + fahrenheit + "°F" + "</br>")
document.write (fahrenheit2 + "°F is " + celsius2 + "°C" + "</br>")

// Shopping Cart
document.write ("<h1>Shopping Cart</h1>");
var itm1Price = 650;
var itm1Qty = 3;
var item1Total = itm1Price * itm1Qty;
console.log(item1Total);
var itm2Price = 100;
var itm2Qty = 7;
var item2Total = itm2Price * itm2Qty;
console.log(item2Total);
var shippingCharges = 100;
var totalCost = (item1Total + item2Total + shippingCharges);
console.log (totalCost);
document.write ("Price of item 1 is " + itm1Price  + "</br>");
document.write ("Quantity of item 1 is " + itm1Qty + "</br>");
document.write ("Price of item 2 is " + itm2Price + "</br>");
document.write ("Quantity of item 2 is " + itm2Qty + "</br>");
document.write ("Shipping charges is " + shippingCharges + "</br>");
document.write ("Total cost of your order is " + totalCost + "</br>");

// MarkSheet
document.write ("<h1>MarkSheet</h1>");
var totalMarks = 980;
var marksObtained = 804;
var percentage = marksObtained * 100 / totalMarks;
console.log(percentage);
document.write ("Total marks: " + totalMarks + "</br>");
document.write ("Marks obtained: " + marksObtained + "</br>");
document.write ("Percentage " + percentage + "</br>");

// Currency in PKR
document.write ("<h1>Currency in PKR</h1>");
var usDollar = 10;
var dollarPakRs = 104.80;
var totalUsDollarRs = usDollar * dollarPakRs;
console.log(totalUsDollarRs);
var saudiRiyal = 25;
var riyalPakRs = 28;
var totalRiyalRs = saudiRiyal * riyalPakRs;
console.log(totalRiyalRs);
var totalCurrency = totalUsDollarRs + totalRiyalRs;
document.write ("Total Currency in PKR: " + totalCurrency + "</br>")

// Arithmetic sequence
document.write ("<h1>Arithmetic sequence</h1>");
var someNumber = 21;
var add = 5;
var multiply = 10;
var divide = 2;
var total = someNumber + add * multiply / divide;
console.log(total);
document.write ("Some Number: " + someNumber + "</br>");
document.write ("Add: " + add + "</br>");
document.write ("Multiply: " + multiply + "</br>");
document.write ("Divide: " + divide + "</br>");
document.write ("The answer of arithmetic sequence is " + total + "</br>");

// Age Calculator
document.write ("<h1>Age Calculator</h1>");
var currentYear = 2024;
var birthYear = 2003;
var yourAge = currentYear - birthYear;
console.log(yourAge);
document.write ("Current Year: " + currentYear + "</br>")
document.write ("Birth Year: " + birthYear + "</br>")
document.write ("Your Age is " + yourAge + "</br>")

// The Geometrizer
document.write ("<h1>The Geometrizer</h1>");
var radius = 20
var circumference = 2 * 3.142 * radius;
console.log(circumference);
var areaOfCircle = radius * radius * 3.142;
console.log(areaOfCircle);
document.write ("Radius of Circle: " + radius + "</br>");
document.write ("The Circumference is " + circumference + "</br>");
document.write ("The Area is: " + areaOfCircle + "</br>")

// The Lifetime Supply Calculator
document.write ("<h1>The Lifetime Supply Calculator</h1>");
var snack = " Chocolate chip";
var currentAge = 21;
var maxAge = 65;
var remainAge = maxAge - currentAge;
var snackPerDay = 3;
var totalSnack = (maxAge - currentAge) * snackPerDay;
console.log(totalSnack);
document.write ("Favourite Snack: " + snack + "</br>");
document.write ("Current Age: " + currentAge + "</br>");
document.write ("Estimated Maximum Age: " + maxAge + "</br>");
document.write ("Amount of Snacks Per Day " + snackPerDay + "</br>");
document.write ("Amount of Snacks Per Day " + totalSnack + " chocolate chip to last you until the rip old age of " + remainAge + "</br>");  
