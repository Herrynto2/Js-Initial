const fibo = require('./src/AppFibo')
const data = require('./src/AppArr')
const { username, password } = require('./src/AppValidate')



//Fibonacci
console.log(fibo(10) || "");

//Return Object
console.log(new data("Heri", "082184783116", "herryheryanto22@gmail.com"));

//validate
console.log(username("herry2"));
console.log(password("12345678"));
