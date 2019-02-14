import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import "./styles.css";

function App({ values, handleChange }) {
  return (
    <Form className="App">
      <Field type="email" name="email" placeholder="Email" /> <br />
      <Field type="password" name="password" placeholder="Password" /> <br />
      <label>
        <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        you can join our newsletter
      </label>
      <br />
      <Field component="select" name="plan">
        <option value="free">Free</option>
        <option value="premium">Premium</option>
      </Field>
      <button type="submit">Submit</button>
    </Form>
  );
}

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || true,
      plan: plan || "free"
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(9)
      .required()
  }),

  handleSubmit({ email, password, newsletter, plan }) {
    console.log(email, password, newsletter, plan);
  }
})(App);

const rootElement = document.getElementById("root");
ReactDOM.render(<FormikApp />, rootElement);
