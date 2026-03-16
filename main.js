// import { btnContainer, display, clear, deleteClass } from './var.js';

// btnContainer.addEventListener('click', function (e) {
//   const btn = e.target.closest('.btn');
//   if (!btn) return;

//   const value = btn.textContent;
//   const lastvalue = display.value.trim().slice(-1);

//   if (btn.classList.contains('btn-operators'))
//     handleOperators(value, lastvalue);
//   if (btn.classList.contains('equal')) handleAction(value, lastvalue);
//   if (btn.classList.contains('btn-option')) handleNum(value, lastvalue);
// });

// const handleOperators = function (operator, lastvalue) {
//   const operators = ['+', '-', '/', '*'];
//   if (display.value == '') return;
//   if (operators.includes(lastvalue) || lastvalue === '=') return;

//   display.value += ` ${operator}`;
// };

// const handleAction = function (action, lastvalue) {
//   const operators = ['+', '-', '/', '*'];
//   if (display.value == '') return;
//   if (operators.includes(lastvalue) || lastvalue === '=') return;

//   const trimmed = display.value.trim();
//   const trimmedSplit = trimmed.split(' ');

//   const num = trimmedSplit.filter((p) => !operators.includes(p));
//   const ope = trimmedSplit.filter((p) => operators.includes(p));
//   if (num.length < 2 || ope.length < 1) return;

//   display.value += ' ' + action + ' ';
//   //   const result = eval(display.value);
//   //   display.value = result;
// };

// const handleNum = function (num, lastvalue) {
//   if (isNaN(lastvalue)) display.value += ` ${num}`;
//   else display.value += num;
// };

// clear.addEventListener('click', function () {
//   display.value = '';
// });

// deleteClass.addEventListener('click', function () {
//   display.value = display.value.trim().slice(0, -1).trimEnd();
// });
