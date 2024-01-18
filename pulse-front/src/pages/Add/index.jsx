import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { SearchContext } from "../../context/SearchContext";
import { Helmet } from "react-helmet-async";
const Add = () => {
  const [data, setData] = useState([]);
  const {search,handleSearch} = useContext(SearchContext)
  async function GetFetch() {
    try {
      await fetch("http://localhost:3100/menus")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  async function handleSubmit(values) {
    await fetch("http://localhost:3100/menus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    await GetFetch();
  }
  async function deleteItem(id) {
    await fetch("http://localhost:3100/menus/"+id,{method:"DELETE"})
    await GetFetch()
  }
  return (
    <>
    <Helmet>
      <title>Add</title>
    </Helmet>
      <section id="add">
        <div className="add_container">
          <div className="add_content">
            <div className="add_title">
              <i class="fa-solid fa-cannabis"></i>
              <div className="add_title_content">
                <div className="line"></div>
                <h2>Add Element</h2>
                <div className="line"></div>
              </div>
            </div>
            <Formik
              initialValues={{ name: "", price: "" }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                price: Yup.number().required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                handleSubmit(values)
                resetForm()
                setSubmitting(false);
              }}
            >
              <Form>
                <label htmlFor="name">First Name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" />

                <label htmlFor="price">Price</label>
                <Field name="price" type="text" />
                <ErrorMessage name="price" />

                <button type="submit">Submit</button>
              </Form>
            </Formik>
            <input type="text" onChange={handleSearch} />
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data
                  .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
                  .map((x) => (
                    <tr>
                      <td>{x.name}</td>
                      <td>{x.price}</td>
                      <td>
                        <i class="fa-solid fa-trash" onClick={()=>deleteItem(x._id)}></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;
