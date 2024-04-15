import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { useRouteLoaderData } from "react-router-dom";
import { ROUTE_IDS } from "../../helpers/vars";
import { convertirObjeto } from "../../helpers/functions";
import materiasAll from "../../../jsons/materia_profesor.json";

const headersTable = [
  { key: "nombre", name: "Materia" },
  { key: "profesor.nombre", name: "Profesor" },
  { key: "creditos", name: "Creditos", align: "center" },
  {
    key: "checkButton",
    name: "Seleccionar Materia",
    align: "center",
  },
];
const useMicuentaPage = () => {
  const { usuario } = useRouteLoaderData(ROUTE_IDS.LOGGEDUSER);
  // hooks
  console.log({ usuario });
  const [selectedMaterias, setSelectedMaterias] = useState(usuario?.materias);
  const [materias, setMaterias] = useState([]);
  const [totalCreditos, setTotalCreditos] = useState([]);

  // useefect para obtener la data de materias en db del usuario
  useEffect(() => {
    const materiasConPrev = usuario?.materias.map((mat) => ({
      ...mat,
      prev: true,
    }));
    const materiasUnicas = materiasAll.reduce((acc, current) => {
      const exists = materiasConPrev.some((item) => item.id === current.id);
      if (!exists) acc.push(current);
      return acc;
    }, []);
    setMaterias([...materiasConPrev, ...materiasUnicas]);
  }, [usuario]);

  const tableBodyData = () => {
    const prevMaterias = usuario?.materias;
    let creditosSeleccionados = usuario?.materias?.reduce(
      (total, materia) => total + materia.creditos,
      usuario.totalCreditos
    );
    const materiasSeleccionadas = new Set(prevMaterias.map((mat) => mat.id));
    const profesoresSeleccionados = {};
    prevMaterias.forEach((mat) => {
      profesoresSeleccionados[mat.profesor.id] = true;
    });

    return materiasAll?.map((materia) => {
      const isChecked = materiasSeleccionadas.has(materia.id);
      const mismoProfesorSeleccionado =
        profesoresSeleccionados[materia.profesor.id];
      const disabled =
        (creditosSeleccionados + materia.creditos > 10 && !isChecked) ||
        (mismoProfesorSeleccionado && !isChecked);
      const handleChecked = () => {
        setSelectedMaterias([...prevMaterias, materia]);
        creditosSeleccionados += materia.creditos;
        profesoresSeleccionados[materia.profesor.id] = true;
      };
      const handleUnChecked = () => {
        setSelectedMaterias(
          prevMaterias.filter((mat) => mat.id !== materia.id)
        );
        creditosSeleccionados -= materia.creditos;
        delete profesoresSeleccionados[materia.profesor.id];
      };

      return {
        ...convertirObjeto(materia),
        checkButton: (
          <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, padding: 0 }}
            checked={isChecked}
            disabled={disabled}
            onClick={(e) => {
              const checked = e.target.checked;
              checked ? handleChecked() : handleUnChecked();
              setTotalCreditos(creditosSeleccionados);
            }}
          />
        ),
      };
    });
  };

  return {
    usuario,
    materias,
    selectedMaterias,
    totalCreditos,
    setMaterias,
    table: {
      actionButtons: [],
      headersTable,
      tableBodyData,
      // materias?.map((elem) => ({
      //   ...convertirObjeto(elem),
      //   checkButton: (
      //     <>
      //       <Checkbox defaultChecked={!!elem?.prev} />
      //     </>
      //   ),
      // })),
      inputFilter: false,
      pagination: false,
      resetTableOnChange: false,
    },
  };
};

export default useMicuentaPage;
