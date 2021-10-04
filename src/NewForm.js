import "./App.css";

import * as Yup from "yup";

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

import React from "react";
import { Table } from "react-bootstrap";

const NewForm = () => (
  <div>
    <h3>Organzation Form (Dyanamic users - Array of Object) </h3>
    <hr />
    <Formik
      initialValues={{
        users: [
          {
            firstName: "",
            lastName: "",
            email: "",
          },
        ],
      }}
      validationSchema={Yup.object({
        users: Yup.array().of(
          Yup.object().shape({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            email: Yup.string()
              .required("email required")
              .email("Enter valid email"),
          })
        ),
      })}
      onSubmit={(values) => console.log(values)}
      render={({ values }) => (
        <Form className="form-row">
          <h5>Form </h5>

          <FieldArray
            name="users"
            render={(arrayHelpers) => {
              const users = values.users;
              return (
                <div className="">
                  {users && users.length > 0
                    ? users.map((user, index) => (
                        <div key={index} className="d-flex">
                          <div className="m-2">
                            <Field
                              placeholder="Enter First Name"
                              name={`users.${index}.firstName`}
                            />
                            <p className="text-danger">
                              <ErrorMessage name={`users.${index}.firstName`} />
                            </p>
                          </div>
                          <div className="m-2">
                            <Field
                              placeholder="Enter Last Name"
                              name={`users.${index}.lastName`}
                            />
                            <p className="text-danger">
                              <ErrorMessage name={`users.${index}.lastName`} />
                            </p>
                          </div>
                          <div className="m-2">
                            <Field
                              placeholder="Enter Email"
                              name={`users.${index}.email`}
                            />
                            <p className="text-danger">
                              <ErrorMessage name={`users.${index}.email`} />
                            </p>
                          </div>
                          <br />

                          <div className="d-flex">
                            <button
                              className="m-2 btn btn-danger"
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="m-2 btn btn-primary"
                              onClick={() =>
                                arrayHelpers.push({
                                  firstName: "",
                                  lastName: "",
                                  email: "",
                                })
                              } // insert an empty string at a position
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))
                    : null}
                  <div className="m-2">
                    <button className="btn btn-primary" type="submit">
                      Form Submit
                    </button>
                  </div>
                </div>
              );
            }}
          />
          <div>
            <Table bordered size="sm">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {values.users.map((data) => (
                  <tr>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <hr />
        </Form>
      )}
    />
  </div>
);
export default NewForm;
