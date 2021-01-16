const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./img/taco-negro.jpg",
  },
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./img/taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./img/taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./img/bota-negra.jpg",
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./img/bota-azul.jpg",
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./img/bota-azul.jpg",
  },
  {
    nombre: "Bota azul",
    tipo: "bota",
    color: "azul",
    img: "./img/bota-azul.jpg",
  },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./img/zapato-rojo.jpg",
  },
];

const form = document.forms[0];
const listado = document.getElementById("lista-de-productos");

productos.forEach((zapato) => {
  listado.innerHTML += `
  <div class="contenedorProducto">
  <div class="foto"><img src="${zapato.img}"></div>
  <div class="titulo">${zapato.nombre}</div>
  </div>
  `;
});

// EJERCICIO ===> :

form.onsubmit = (e) => {
  e.preventDefault(); // me permite que el form no se envie de una, y se pierdan los datos
  validadDatos();
};

const filtro = document.querySelector("#filtro");
const selectTipo = document.querySelector("#tipo");
const selectColor = document.querySelector("#color");

// selectColor.onchange = () => {
//   validadDatos();
// };

const validadDatos = () => {
  console.log(filtro.value); // idem al anterior con .value
  console.log(selectTipo.value); // me muestra en la consola lo que se selecciono
  console.log(selectColor.value); // idem al anterior con .value

  const zapatosFiltrados = productos.filter((zapato) => {
    if (selectTipo.value && selectColor.value) {
      return (
        selectTipo.value === zapato.tipo && selectColor.value === zapato.color
      );
    } else if (selectTipo.value) {
      return selectTipo.value === zapato.tipo;
    } else if (selectColor.value) {
      return selectColor.value === zapato.color;
    } else {
      return zapato;
    }
  });
  // " " => false
  // "cualquier cosa" => true

  const filtrarXNombre = productos.filter((zapato) => {
    if (filtro.value && selectTipo.value && selectColor) {
      return (
        filtro.value === zapato.nombre &&
        selectTipo.value === zapato.tipo &&
        selectColor.value === zapato.color
      );
    } else if (filtro.value.includes(zapato.nombre.toLowerCase())) {
      return filtro.value;
    }
  });
  //console.log(filtrarXNombre);

  console.log(zapatosFiltrados);

  listado.innerHTML = "";

  zapatosFiltrados.forEach((zapato) => {
    listado.innerHTML += `
    <div class="contenedorProducto">
    <div class="foto"><img src="${zapato.img}"></div>
    <div class="titulo">${zapato.nombre}</div>
    </div>
    `;
  });
};

// .map => lo que retorno se vuelve un miembro del nuevo array
// .forEach
// .filter => lo que retorno es una condicion que deben cumplir los elementos para formar parte del nuevo array
// .every
// .some

// funciones puras
// crear un array nuevo
// primero filtrar en js y luego pasar eso a html
