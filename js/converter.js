// ここからコードを書いてください
const lengthUnit = [
  { name: "meter", base: 1 },
  { name: "kilometer", base: 1000 },
  { name: "centimeter", base: 0.01 },
  { name: "millimeter", base: 0.001 },
  { name: "inch", base: 0.0254 },
  { name: "foot", base: 0.3048 },
  { name: "yard", base: 0.9144 },
  { name: "mile", base: 1609.344 },
];

const setupConverter = () => {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  lengthUnit.forEach((unit) => {
    const fromOption = document.createElement("option");
    fromOption.value = unit.base;
    fromOption.textContent = unit.name;

    const toOption = document.createElement("option");
    toOption.value = unit.base;
    toOption.textContent = unit.name;

    converterFrom.appendChild(fromOption);
    converterTo.appendChild(toOption);
  });
  converterFrom.selectedIndex = 0;
  converterTo.selectedIndex = 1;

  const convert = () => {
    const inputValue = parseFloat(converterInput.value);

    if (isNaN(inputValue)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }

    const fromBase = parseFloat(converterFrom.value);
    const toBase = parseFloat(converterTo.value);

    const convertedResult = (inputValue * fromBase) / toBase;

    converterResult.textContent =
      `${inputValue} ${converterFrom.options[converterFrom.selectedIndex].text} = ` +
      `${convertedResult.toFixed(3)} ` +
      `${converterTo.options[converterTo.selectedIndex].text}`;
  };

  converterForm.addEventListener("input", (event) => {
    convert();
  });

  convert();
};

export { setupConverter };
