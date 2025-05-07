let a = 8;
let b = 0;
let sign = "/";
let result;

if (b != 0) {
  switch (sign) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
    default:
      result = "Неверный оператор";
  }
} else {
  result = "Делить на 0 нельзя!";
}

console.log(result);
