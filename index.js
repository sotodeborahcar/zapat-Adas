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
  // window.navigateTo("www.falsobanco.com") // => envia el formulario a una direccion distinta a la que se muestra
  validadDatos();
};

const filtro = document.querySelector("#filtro");
const selectTipo = document.querySelector("#tipo");
const selectColor = document.querySelector("#color");

// selectColor.onchange = () => { // permite que la busqueda sea al momento de buscar y sin tener que hacer click en el boton filtrar
//   validadDatos();
// };

const validadDatos = () => {
  console.log(filtro.value); // idem al anterior con .value
  console.log(selectTipo.value); // me muestra en la consola lo que se selecciono
  console.log(selectColor.value); // idem al anterior con .value

  // const zapatosFiltradosPorTexto = productos.filter((zapato) => {
  //   if (!filtro.value) {
  //     // ! significa si no existe
  //     return zapato;
  //   }
  //   return filtro.value === zapato.tipo || filtro.value === zapato.color;
  // });

  // // copia del array productos:

  // const zapatosFiltradosPorSelect = zapatosFiltradosPorTexto.filter(
  //   (zapato) => {
  //     if (selectTipo.value && selectColor.value) {
  //       // si selectTipo.value existe...y tambien selectColor.value... retornar tal cosa
  //       return (
  //         selectTipo.value === zapato.tipo && selectColor.value === zapato.color
  //       );
  //     } else if (selectTipo.value) {
  //       return selectTipo.value === zapato.tipo;
  //     } else if (selectColor.value) {
  //       return selectColor.value === zapato.color;
  //     } else {
  //       return zapato;
  //     }
  //   }
  // );
  // " " => false
  // "cualquier cosa" => true

  // ==> 🟡 🟡 🟡 FORMA MAS CORRECTA DE ESCRIBIR EL CODIGO 🟡 🟡 🟡 <==

  // FILTRO EL ARRAY POR EL INPUT:

  const filtrarPorInput = (zapato) => {
    if (!filtro.value) {
      return zapato;
    }
    return filtro.value === zapato.tipo || filtro.value === zapato.color;
  };

  // FILTRO EL ARRAY POR LOS SELECT DE COLOR Y TIPO:

  const filtrarPorSelect = (zapato) => {
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
  };

  // CONCATENADO DE AMBOS FILTROS:

  const zapatosFiltrados = productos
    .filter(filtrarPorInput)
    .filter(filtrarPorSelect);

  console.log(zapatosFiltrados); // muestro los zapatos filtrados arriba

  // UNION DE JS Y HTML:

  listado.innerHTML = ""; // limpio el HTML para que no se vean los zapatos anteriores no filtrados
  zapatosFiltrados.forEach((zapato) => {
    // recorro el array nuevo creado "zapatosFiltradosPorSelect"
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
