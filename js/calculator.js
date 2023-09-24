function calculate(){
    let firstNumber = prompt("Input first number:");
    let secondNumber = prompt("Input second number:");
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    const sum = firstNumber + secondNumber;
    const difference = firstNumber - secondNumber;
    const product = firstNumber * secondNumber;
    const quotient = firstNumber / secondNumber;
    let max = 0;
    if (firstNumber>secondNumber) {
      max = firstNumber; }
    else {
      max = secondNumber; }
    alert(
        `Результат:
        Сумма - ${sum},
        Разность - ${difference},
        Произведение - ${product},
        Деление - ${quotient},
        Максимум - ${max}`
      );
    }

