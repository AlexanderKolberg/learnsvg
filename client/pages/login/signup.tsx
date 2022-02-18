import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import FormTextInput from "../../components/Common/FormTextInput";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../contexts/AuthContext";

const SignUp = () => {
  YupPassword(Yup);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    confirmEmail: Yup.string()
      .email()
      .required()
      .oneOf([Yup.ref("email"), null], "Emails must match"),
    password: Yup.string().password().required("Required"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const { signup } = useAuth();
  const handleSubmit = (values: any) => {
    signup(values.email, values.password);
  };
  return (
    <Layout>
      <main>
        <h1>Sign Up</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            handleSubmit(values);
          }}
        >
          <Form>
            <FormTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder=""
            />

            <FormTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder=""
            />
            <FormTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder=""
            />
            <FormTextInput
              label="Confirm Email"
              name="confirmEmail"
              type="email"
              placeholder=""
            />
            <FormTextInput
              label="Password"
              type="password"
              name="password"
              placeholder=""
            />
            <FormTextInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder=""
            />

            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      </main>
    </Layout>
  );
};

export default SignUp;
