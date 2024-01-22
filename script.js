let currentValue = '';

function displayValue(value) {
  currentValue += value
  document.getElementById('display').value = currentValue;
}

function calculate() {

    let exp = document.getElementById('display').value;    

    if (exp === exp) {
      exp = exp.replace(/x/g, '*')  
      exp = eval(exp)

      document.getElementById('display').value = exp;
    }
}

function clearDisplay() {
  currentValue = '';
  document.getElementById('display').value = currentValue;
}