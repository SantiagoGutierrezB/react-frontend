import React, { useState } from "react";
import "./App.css";

import ButtonFilter from "./components/buttons/ButtonFilter";
import RangeFilter from "./components/ranges/RangeFilter";
import Button from "./components/buttons/Button";

function App() {
  const [formas, setFormas] = useState([
    { name: "REDONDO", img: "/img/Forma/redondo.png" },
    { name: "PRINCESA", img: "/img/Forma/princesa.png" },
    { name: "ESMERALDA", img: "/img/Forma/esmeralda.png" },
    { name: "ÓVALO", img: "/img/Forma/ovalo.png" },
    { name: "MARQUESA", img: "/img/Forma/marquesa.png" },
    { name: "PERA", img: "/img/Forma/pera.png" },
    { name: "ASSCHER", img: "/img/Forma/asscher.png" },
    { name: "CORAZÓN", img: "/img/Forma/corazon.png" },
    { name: "COJÍN", img: "/img/Forma/cojin.png" },
    { name: "BAGUETTE", img: "/img/Forma/baguette.png" },
    { name: "TRILLÓN", img: "/img/Forma/trillon.png" },
    { name: "RADIANTE", img: "/img/Forma/radiante.png" },
  ]);

  const [colores, setColores] = useState([
    { name: "TRANSPARENTE", img: "/img/Color/incoloro.png" },
    { name: "CASI INCOLORO", img: "/img/Color/casi-incoloro.png" },
    {
      name: "LIGERMANETE AMARILLO",
      img: "/img/Color/ligeramente-amarillo.png",
    },
    { name: "AMARILLO CLARO", img: "/img/Color/amarillo-claro.png" },
  ]);

  const [claridades, setClaridades] = useState([
    { name: "PERFECTA", img: "/img/Claridad/perfecta.png" },
    {
      name: "IMPERFECCIONES NO VISIBLES",
      img: "/img/Claridad/imperfecciones-no-visibles.png",
    },
    {
      name: "IMPERFECCIONES VISIBLES A 10X",
      img: "/img/Claridad/imperfecciones-10x.png",
    },
    {
      name: "IMPERFECCIONES VISIBLES A SIMPLE VISTA",
      img: "/img/Claridad/imperfecciones-simple-vista.png",
    },
  ]);

  const [cortes, setCortes] = useState([
    { name: "EXELENTE (MÁXIMO BRILLO)", img: "/img/Corte/excelente.png" },
    { name: "MUY BUENO (MUY BRILLANTE)", img: "/img/Corte/muy-bueno.png" },
    { name: "BUENO (BRILLANTE)", img: "/img/Corte/bueno.png" },
    { name: "REGULAR (POCO BRILLANTE)", img: "/img/Corte/regular.png" },
  ]);

  const [quilataje, setQuilataje] = useState([0, 30]);

  const [precio, setPrecio] = useState([200, 5000000]);

  const quilatajePequeno = "/img/Quilataje/pequeno.png";
  const quilatajeGrande = "/img/Quilataje/grande.png";

  const onBuscar = () => {
    const selectedForma = formas.filter((forma) => {
      return forma.selected;
    });
    const selectedColor = colores.filter((color) => {
      return color.selected;
    });
    const selectedClaridad = claridades.filter((claridad) => {
      return claridad.selected;
    });
    const selectedCorte = cortes.filter((corte) => {
      return corte.selected;
    });

    if (
      selectedForma.length > 0 &&
      selectedColor.length > 0 &&
      selectedClaridad.length > 0 &&
      selectedColor.length > 0
    ) {
      console.log({
        forma: selectedForma[0].name,
        color: selectedColor[0].name,
        claridad: selectedClaridad[0].name,
        corte: selectedCorte[0].name,
        quilataje,
        precio,
      });
    } else {
      console.log("Faltan valores");
    }
  };

  const onLimpiar = () => {
    const formaButtons = formas.map((forma) => {
      return { ...forma, selected: false };
    });

    const colorButtons = colores.map((color) => {
      return { ...color, selected: false };
    });

    const claridadButtons = claridades.map((claridad) => {
      return { ...claridad, selected: false };
    });

    const corteButtons = cortes.map((corte) => {
      return { ...corte, selected: false };
    });

    setFormas(formaButtons);
    setColores(colorButtons);
    setClaridades(claridadButtons);
    setCortes(corteButtons);
    setQuilataje([0, 30]);
    setPrecio([200, 5000000]);
  };

  return (
    <>
      <div className="container">
        <div className="col">
          <ButtonFilter
            setState={setFormas}
            title="forma"
            buttons={formas}
            tooltip="Selecciona una forma"
          />
          <ButtonFilter
            setState={setColores}
            title="color"
            buttons={colores}
            tooltip="Selecciona un color"
          />
          <ButtonFilter
            setState={setClaridades}
            title="claridad"
            buttons={claridades}
            tooltip="Selecciona una claridad"
          />
        </div>
        <div className="col">
          <ButtonFilter
            setState={setCortes}
            title="corte"
            buttons={cortes}
            tooltip="Selecciona un corte"
          />
          <RangeFilter
            setState={setQuilataje}
            title="quilataje"
            ranges={quilataje}
            tooltip="Ajusta el quilataje"
            from={0}
            to={30}
            imageFrom={quilatajePequeno}
            imageTo={quilatajeGrande}
            step={0.1}
          />
          <RangeFilter
            setState={setPrecio}
            title="precio"
            ranges={precio}
            tooltip="Ajusta el precio"
            from={200}
            to={5000000}
            step={100}
          />
        </div>
      </div>
      <div className="footer">
        <Button title="buscar" color="blue" clicked={onBuscar} />
        <Button title="limpiar" color="white" clicked={onLimpiar} />
      </div>
    </>
  );
}

export default App;
