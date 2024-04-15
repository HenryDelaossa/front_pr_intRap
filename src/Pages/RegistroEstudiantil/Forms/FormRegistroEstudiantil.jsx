import { useFormik } from "formik";
import { Grid } from "@mui/material";
import CustomTexfield from "../../../shared/Components/Imputs/CustomTexfield";
import CustomButton from "../../../shared/Components/Buttons/CustomButton";
import Maintable from "../../../shared/Components/Tables/MainTable";
import useFormRegistroEstudiantil from "../Hooks/useFormRegistroEstudiantil";
import MiniDashBoard from "../../../shared/Components/MiniDashBoard";
const FormRegistroEstudiantil = ({ materias, handleSubmit }) => {
  const { table, initialValuesForm, validationSchemaForm } =
    useFormRegistroEstudiantil({
      materiasData: materias,
    });
  // formik config
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    handleSubmit: formikHandleSubmit,
  } = useFormik({
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: true,
    initialValues: initialValuesForm,
    validationSchema: validationSchemaForm,
    onSubmit: handleSubmit,
  });

  const hasErrorForm = Object.values(errors).length > 0;
  const dataMiniDashBoard = Object.entries(values).map(([key, val]) => ({
    key,
    val,
  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form
          id="formRegistroEstudiantil"
          onSubmit={(e) => {
            e.preventDefault();
            formikHandleSubmit(values);
          }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomTexfield
                name={"nombre"}
                label={"Ingrese su nombre"}
                required={true}
                value={values.nombre}
                onChange={handleChange}
                error={!!errors.nombre}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTexfield
                name={"apellido"}
                label={"Ingrese su apellido"}
                required={true}
                value={values.apellido}
                onChange={handleChange}
                error={!!errors.apellido}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTexfield
                name={"documento"}
                label={"Ingrese su documento"}
                required={true}
                type="number"
                value={values.documento}
                onChange={handleChange}
                error={!!errors.documento}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTexfield
                name={"ciudad"}
                label={"Ingrese su ciudad"}
                required={true}
                value={values.ciudad}
                onChange={handleChange}
                error={!!errors.ciudad}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={4}>
        <MiniDashBoard data={dataMiniDashBoard} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Maintable
          {...{
            ...table,
            tableBodyData: table.tableBodyData(setFieldValue, values.materias),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} sx={{ width: "90%", margin: "0 auto" }}>
          <Grid item xs={12} md={12}>
            <CustomButton
              disabledButton={hasErrorForm || isSubmitting}
              type={"submit"}
              isSubmitting={isSubmitting}
              name={"Confirmar Registro"}
              form="formRegistroEstudiantil"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormRegistroEstudiantil;
