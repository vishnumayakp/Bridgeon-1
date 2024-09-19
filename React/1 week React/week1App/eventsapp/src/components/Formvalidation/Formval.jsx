import React, { useEffect, useState } from 'react'
import { Button, Form} from 'react-bootstrap';
import './Form.css'

function Formval() {
  const initialValues={name:"", email:"", password:"", confirm:""}
  const [formValues, setFormValues]=useState(initialValues)
const [formErrors, setFormErrors]=useState({})
const [isSubmit, setIsSubmit]=useState(false)


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormValues({...formValues, [name]:value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(()=>{
    if(Object.keys(formErrors).length===0 && isSubmit){
      setFormValues(initialValues);
    }
  },[formErrors,isSubmit])


  const validate=(values)=>{
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.name){
      errors.name="Username Required*"
    }if(!values.email){
      errors.email="email Required*"
    }else if(!regex.test(values.email)){
      errors.email="This is not the valid email format"
    }
    if(!values.password){
      errors.password="Password Required*"
    }else if(values.password.length < 4){
      errors.password="password must be minimum 4 characters"
    }else if(values.password.length >10 ){
      errors.password="password cannot exceed more than 10 characters"
    }
    if(!values.confirm){
      errors.confirm="confirm password Required*"
    }else if(values.password !== values.confirm){
      errors.password="Entered wrong password*"
    }
    return errors
  }

  return (
    <div className='main-cont'>
      <div className='container'> 
      {Object.keys(formErrors).length===0 && isSubmit? (<div className='msg-success'>Login Successful ✅</div>):
     ( <pre>{JSON.stringify(formValues,undefined,2)}</pre>)}
      
        
            <Form onSubmit={handleSubmit}>
            <Form.Control  type="text" name="name" placeholder='Enter FullName' value={formValues.name} onChange={handleChange}/>
            <span>{formErrors.name}</span>
            <Form.Control type="text" name="email" placeholder='Enter email' value={formValues.email} onChange={handleChange}/>
            <span>{formErrors.email}</span>
            <Form.Control type="password" name="password" placeholder='Enter Password' value={formValues.password} onChange={handleChange}/>
            <span>{formErrors.password}</span>
            <Form.Control type="password" name="confirm" placeholder='Confirm Password' value={formValues.confirm} onChange={handleChange}/>
            <span>{formErrors.confirm}</span>
            <Button type='submit' className='btn'>Submit</Button>
            </Form>
      </div>
    </div>
  )
}

export default Formval
