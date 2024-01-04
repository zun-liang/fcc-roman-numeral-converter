const inputEl = document.getElementById("number") as HTMLInputElement;
const convertBtn = document.getElementById("convert-btn") as HTMLButtonElement;
const outputEl = document.getElementById("output") as HTMLDivElement;

const convert = (event: Event) => {
  event.preventDefault();
  const inputVal = inputEl.value;
  const inputNum = Number(inputVal);
  if (inputVal === "") {
    outputEl.textContent = "Please enter a valid number";
    outputEl.classList.add("alert");
  } else if (inputVal === "-1" || inputNum < 1) {
    outputEl.textContent = "Please enter a number greater than or equal to 1";
    outputEl.classList.add("alert");
  } else if (inputNum >= 4000) {
    outputEl.textContent = "Please enter a number less than or equal to 3999";
    outputEl.classList.add("alert");
  } else {
    let output = "";
    let remaining = inputNum;
    while (remaining >= 1) {
      if (remaining >= 1000) {
        const thousand = Math.floor(remaining / 1000);
        for (let i = 0; i < thousand; i++) {
          output += "M";
        }
        remaining -= thousand * 1000;
      } else if (remaining >= 900) {
        output += "CM";
        remaining -= 900;
      } else if (remaining >= 500) {
        output += "D";
        remaining -= 500;
      } else if (remaining >= 400) {
        output += "CD";
        remaining -= 400;
      } else if (remaining >= 100) {
        const hundred = Math.floor(remaining / 100);
        for (let i = 0; i < hundred; i++) {
          output += "C";
        }
        remaining -= hundred * 100;
      } else if (remaining >= 90) {
        output += "XC";
        remaining -= 90;
      } else if (remaining >= 50) {
        output += "L";
        remaining -= 50;
      } else if (remaining >= 40) {
        output += "XL";
        remaining -= 40;
      } else if (remaining >= 10) {
        const ten = Math.floor(remaining / 10);
        for (let i = 0; i < ten; i++) {
          output += "X";
        }
        remaining -= ten * 10;
      } else if (remaining >= 9) {
        output += "IX";
        remaining -= 9;
      } else if (remaining >= 5) {
        output += "V";
        remaining -= 5;
      } else if (remaining >= 4) {
        output += "IV";
        remaining -= 4;
      } else {
        for (let i = 0; i < remaining; i++) {
          output += "I";
          remaining -= 1;
        }
      }
    }
    outputEl.textContent = output;
  }
  outputEl.classList.remove("hidden");
};

convertBtn.addEventListener("click", convert);
