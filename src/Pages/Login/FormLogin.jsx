import { Formik, Form } from "formik";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import CustomTexfield from "../../shared/Components/Imputs/CustomTexfield";
import CustomButton from "../../shared/Components/Buttons/CustomButton";

const FormLogin = ({ handleSubmit }) => {
  return (
    <Formik
      validateOnChange
      validateOnMount
      initialValues={{
        documento: "",
      }}
      validationSchema={Yup.object().shape({
        documento: Yup.number().required("Ingrese su numero de documento"),
      })}
      onSubmit={handleSubmit}>
      {({ values, errors, isSubmitting, handleChange }) => {
        const disabledSubmit = Object.keys(errors).length > 0;
        return (
          <Form>
            <Grid container spacing={5} sx={{ p: 2 }}>
              <Grid item xs={12} md={12}>
                <CustomTexfield
                  type="number"
                  name={"documento"}
                  label={"Ingrese su numero de documento"}
                  required={true}
                  error={!!errors.documento}
                  value={values.documento}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <CustomButton
                  name={"Ingresar"}
                  disabledButton={disabledSubmit || isSubmitting}
                  isSubmitting={isSubmitting}
                  type={"submit"}
                />
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormLogin;
