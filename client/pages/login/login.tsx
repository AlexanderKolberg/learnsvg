import { Alert, AlertIcon, AlertTitle, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import FormTextInput from "../../components/Common/FormTextInput";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const { login } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (values: any) => {
    try {
      await login(values.email, values.password);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Layout>
      <main>
        <h1>Log in</h1>
        {error ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Error login in</AlertTitle>
          </Alert>
        ) : (
          ""
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
            <FormTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder=""
            />
            <FormTextInput
              label="Password"
              type="password"
              name="password"
              placeholder=""
            />
            <Button type="submit">Log in</Button>
          </Form>
        </Formik>
        Dont have an account? <Link href="/login/signup">Sign up</Link>
      </main>
    </Layout>
  );
};

export default Login;
