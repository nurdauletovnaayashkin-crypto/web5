const box = document.getElementById("box");

if (box) {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "#FF2E93";
    box.style.color = "#ffffff";
  });

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "#FFD6EB";
    box.style.color = "#4A0A33";
  });
}

const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

if (liveInput && liveOutput) {
  liveInput.addEventListener("keyup", () => {
    liveOutput.textContent = liveInput.value || "...";
  });
}

function calc(op) {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  let res = 0;

  if (op === '+') res = n1 + n2;
  if (op === '-') res = n1 - n2;
  if (op === '*') res = n1 * n2;
  if (op === '/') res = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";

  document.getElementById("calcResult").textContent = res;
}