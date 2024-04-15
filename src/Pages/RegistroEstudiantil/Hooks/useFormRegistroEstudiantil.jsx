import * as Yup from "yup";
import { convertirObjeto } from "../../../helpers/functions";
import { Checkbox } from "@mui/material";

const useFormRegistroEstudiantil = ({ materiasData }) => {
  const initialValuesForm = {
    nombre: "",
    apellido: "",
    documento: "",
    ciudad: "",
    materias: [],
    totalCreditos: 0,
  };
  const validationSchemaForm = Yup.lazy(() =>
    Yup.object().shape({
      nombre: Yup.string().required("El nombre es requerido"),
      apellido: Yup.string().required("El apellido es requerido"),
      documento: Yup.number().required("El documento es requerido"),
      ciudad: Yup.string().required("La nombre es requerida"),
      totalCreditos: Yup.number()
        .max(9, "Su cantidad todal de creditos dispoibles es de 10 maximo")
        .min(3, "debe seleccionar al menos una materia para inscribir")
        .required(""),
    })
  );
  const headersTable = [
    { key: "nombre", name: "Materia" },
    { key: "profesor.nombre", name: "Profesor" },
    { key: "creditos", name: "Creditos", align: "center" },
    { key: "checkButton", name: "Seleccionar Materia", align: "center" },
  ];

  return {
    initialValuesForm,
    validationSchemaForm,
    table: {
      headersTable,
      actionButtons: [],
      tableBodyData: (setterVal, prevMaterias) => {
        let creditosSeleccionados = prevMaterias.reduce(
          (total, materia) => total + materia.creditos,
          0
        );
        const materiasSeleccionadas = new Set(
          prevMaterias.map((mat) => mat.id)
        );
        const profesoresSeleccionados = {};
        prevMaterias.forEach((mat) => {
          profesoresSeleccionados[mat.profesor.id] = true;
        });

        return materiasData.map((materia) => {
          const isChecked = materiasSeleccionadas.has(materia.id);
          const mismoProfesorSeleccionado =
            profesoresSeleccionados[materia.profesor.id];
          const disabled =
            (creditosSeleccionados + materia.creditos > 10 && !isChecked) ||
            (mismoProfesorSeleccionado && !isChecked);
          const handleChecked = () => {
            setterVal("materias", [...prevMaterias, materia]);
            creditosSeleccionados += materia.creditos;
            profesoresSeleccionados[materia.profesor.id] = true;
          };
          const handleUnChecked = () => {
            setterVal(
              "materias",
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
                  setterVal("totalCreditos", creditosSeleccionados);
                }}
              />
            ),
          };
        });
      },
      inputFilter: false,
      pagination: false,
      resetTableOnChange: false,
    },
  };
};

export default useFormRegistroEstudiantil;
