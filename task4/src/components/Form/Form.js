import { useFormik} from 'formik'
function validate(values){
   const errors = {};
   if (!values.name) {
     errors.name = 'Required';
   } 
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
   
 
   if (!/^\d+$/.test(values.phone)) {
     errors.phone = 'Required';
   } else if (values.phone.length < 12) {
     errors.lastName = 'Must be 12 characters or less';
   }
 
   return errors;
 };
function getStyles(errors) {
    if (errors) {
      return 'errorStyle'
    }
  }
function Form() {
    const formik = useFormik({
        initialValues: {name: '', email:'', phone: ''},
        validate,
        onSubmit: values => {
            console.log('submit', values)
        },        
    })
    return(
        <div>
            <form className="Form" onSubmit={formik.handleSubmit}>
                <div className="form-component">
                    <label htmlFor='name' >Enter name:</label>
                    <input id='name' className={getStyles(formik.errors.name)} type='text' name='name' placeholder="Name" onChange={formik.handleChange} onBlur = { formik . handleBlur } value={formik.values.name}/>
                    {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
                
                <div className="form-component">
                    <label htmlFor='email'>Enter email:</label>
                    <input id='email' type='email' className={getStyles(formik.errors.email)} name='email' placeholder="Email"  onChange={formik.handleChange} value={formik.values.email}/>
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                
                <div className="form-component">
                    <label htmlFor='phone'>Enter phone:</label>
                    <input id='phone' type='text' className={getStyles(formik.errors.phone)} name='phone' placeholder="Phone"  onChange={formik.handleChange} value={formik.values.phone}/>
                    {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
                </div>
                <input className="btn-submit" type="submit" value="Submit"/>
            </form>    
        </div> 
    )
}
export default Form