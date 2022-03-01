import React from 'react';
import { useFormik } from 'formik';

const Formik = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmpassword:'',
    },
    onSubmit: value => {
      alert(JSON.stringify(value, null,3));
      
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label >Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="email">Password</label>
      
       <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value
        ={formik.values.password}
      />
<label htmlFor="email">Confirm Password</label>
     <input
        id="confirmpassword"
        name="confirmpassword"
        type="confirmpassword"
        onChange={formik.handleChange}
        value={formik.values.confirmpassword}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Formik;