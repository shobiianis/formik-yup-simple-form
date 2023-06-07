import React from 'react'
import { useFormik } from "formik";
import SignUpSchema from '../Schema';


const Form = () => {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      pswd: '',
      confirmPswd: ''
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, action) => {
      
      console.log(values);
      action.resetForm();
    }
  })
  console.log(errors)



  return (
    <form onSubmit={handleSubmit}>

      <div style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: "10% 0 0 25%" }}>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name='name'
          placeholder="Name"
          value={values.name}     //ye teen lines same hongi bas initial values .name .email .pswd .confirmPswd
          onChange={handleChange}  //lena hoga same as at is
          onBlur={handleBlur} />
          
          {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p> // ye error ki line hai k jab error honge to it will be seen there
                    ) : null //error humne khud nae likhne provided hai already
                  } 
   
        <label htmlFor="email">email</label>
        <input type="text" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>

        {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}

        <label htmlFor="pswd">password</label>
        <input type="password" name='pswd' value={values.pswd} onChange={handleChange} onBlur={handleBlur}
         />

        {errors.email && touched.email ? (
                      <p className="form-error">{errors.pswd}</p>
                    ) : null}

        <label htmlFor="confirmPswd">confirm password</label>
        <input type="password" name='confirmPswd' value={values.confirmPswd} onChange={handleChange} onBlur={handleBlur}/>
        
        {errors.email && touched.email ? (
                      <p className="form-error">{errors.confirmPswd}</p>
                    ) : null}

 
        <button type='Submit' >Submit</button>
        </div>
    </form>
  )
}

export default Form