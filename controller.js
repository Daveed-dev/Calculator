import { btnContainer, display, clear, deleteButton } from './var.js';
import * as model from './model.js';

display.addEventListener('keydown', (e) => e.preventDefault());

btnContainer.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  const value = btn.textContent;
  const lastvalue = display.value.trim().slice(-1);

  if (btn.classList.contains('btn-operators'))
    model.handleOperators(value, lastvalue);
  if (btn.classList.contains('equal')) model.handleEqual(value, lastvalue);
  if (btn.classList.contains('btn-option')) model.handleNum(value, lastvalue);
});

/////////////////////////////////
//// LISTENERS
clear.addEventListener('click', function () {
  display.value = '';
});

deleteButton.addEventListener('click', function () {
  display.value = display.value.trim().slice(0, -1).trimEnd();
});
