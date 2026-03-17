import { btnContainer, display, clear, state } from './var.js';
import * as model from './model.js';

display.addEventListener('keydown', (e) => e.preventDefault());

btnContainer.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  const value = btn.textContent;
  const lastvalue = display.value.trim().slice(-1);

  if (state.isResult) return;
  if (btn.classList.contains('btn-operators'))
    model.handleOperators(value, lastvalue);
  if (btn.classList.contains('equal')) model.handleEqual(value, lastvalue);
  if (btn.classList.contains('btn-option')) model.handleNum(value, lastvalue);
  if (btn.classList.contains('delete')) model.handleDelete();
});

/////////////////////////////////
//// LISTENERS
clear.addEventListener('click', function () {
  display.value = '';
  state.isResult = false;
});
