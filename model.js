import { display, state } from './var.js';

export const handleNum = function (num, lastvalue) {
  if (num === '.') {
    const operators = ['+', '-', '/', '*'];
    const lastValue = display.value.trim().split(' ').pop();
    if (
      lastValue.includes('.') ||
      lastValue === '' ||
      operators.includes(lastValue)
    )
      return;
  }
  if (lastvalue === '.' || !isNaN(lastvalue)) display.value += num;
  else display.value += ` ${num}`;
};

export const handleOperators = function (operator, lastvalue) {
  const operators = ['+', '-', '/', '*'];
  if (display.value == '') return;
  if (operators.includes(lastvalue) || lastvalue === '=') return;

  display.value += ` ${operator}`;
};

export const handleEqual = function (action, lastvalue) {
  const operators = ['+', '-', '/', '*'];
  if (display.value == '') return;
  if (operators.includes(lastvalue)) return;

  const trimmed = display.value.trim();
  const trimmedSplit = trimmed.split(' ');

  const num = trimmedSplit.filter((p) => !operators.includes(p));
  const ope = trimmedSplit.filter((p) => operators.includes(p));
  if (num.length < 2 || ope.length < 1) return;

  const result = parseFloat(eval(display.value).toFixed(5));

  display.value = `${result}`;
  state.isResult = true;
};

export const handleDelete = function () {
  display.value = display.value.trim().slice(0, -1).trimEnd();
};
