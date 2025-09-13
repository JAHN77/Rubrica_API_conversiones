const categorySelect = document.getElementById("units"); 
const unitSelects = document.getElementsByClassName("unit_options");
const inputs = document.getElementsByClassName("units_converts");

const unidades = {
  temp: ["Celsius", "Fahrenheit", "Kelvin"],
  long: ["Meters", "Kilometers", "Centimeters", "Miles", "Feet", "Inches"]
};

// para saber cuál input fue el último editado (0 = izq, 1 = der)
let ultimoInput = 0;

function actualizarSelects() {
  const categoria = categorySelect.value;
  const opciones = unidades[categoria];

  Array.from(unitSelects).forEach(select => {
    select.innerHTML = "";
    opciones.forEach(unidad => {
      let option = document.createElement("option");
      option.value = unidad.toLowerCase();
      option.textContent = unidad;
      select.appendChild(option);
    });
  });

  sincronizarUnidades();
  convertir(ultimoInput); // recalcula de inmediato usando el último input
}

function sincronizarUnidades() {
  const [select1, select2] = unitSelects;
  if (select1.value === select2.value) {
    for (let option of select2.options) {
      if (option.value !== select1.value) {
        select2.value = option.value;
        break;
      }
    }
  }
}

async function convertir(indice) {
  const value = inputs[indice].value;
  if (!value) return;

  const fromUnit = unitSelects[indice].value;
  const toUnit = unitSelects[indice === 0 ? 1 : 0].value;

  try {
    const response = await fetch(`/convert/${fromUnit}-to-${toUnit}/${value}`);
    if (!response.ok) throw new Error("Error en la conversión");

    const data = await response.json();

    inputs[indice === 0 ? 1 : 0].value = data[toUnit];
  } catch (error) {
    console.error("Error:", error);
    inputs[indice === 0 ? 1 : 0].value = "";
  }
}

categorySelect.addEventListener("change", actualizarSelects);

Array.from(unitSelects).forEach(select => {
  select.addEventListener("change", () => {
    sincronizarUnidades();
    convertir(ultimoInput); // usa siempre el input que estaba activo
  });
});

Array.from(inputs).forEach((input, index) => {
  input.addEventListener("input", () => {
    ultimoInput = index; // guardamos cuál input fue modificado
    convertir(index);
  });
});

actualizarSelects();
