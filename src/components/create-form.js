import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import {createProduct} from '../context/product-services'
const CreateForm = () =>{
  const navigate = useNavigate()
return(
    <div>
      <Formik
        initialValues={{ name: 'abc', quantity: '1', price: '1.99', laboratory: 'Genfar' }}
        
        validate={(values) => {
          const errors = {};

          // !!!! --->>> validaciones regex de las Values <<<---
          const regexSentences = {
            name: /([a-zA-Z0-9_\s]+)/,
            quantity: /\d{1,5}$/,
            price: /\d{1,4}$/,
            laboratory: /\w{1,}/,
            }

          // !!!! --->>> STATIC, no es necesario cambiar, verificarRegex es una funcion <<<---
          function verificarObjectRegex(objeto){
            objeto.map(texto=>{
            if (!regexSentences[texto].test(values[texto])) {
              errors[texto] = "Not valid "+texto;}
           })
          }
          // !!!! --->>> STATIC, no es necesario cambiar (solo usa las keys del objeto Values, osea los campos) <<<---
          verificarObjectRegex(Object.keys(values))

          // !!!! --->>> si se necesita se agrega mas Info al mensaje de error <<<---
          function addInfoError(variable,message){
            if (errors[variable]){
              errors[variable]=errors[variable]+message
              }
            }
            addInfoError("name", ", at least a letter")
            addInfoError("quantity", ", between 1 and 5 numbers")
            addInfoError("price", ", between 1 and 4 numbers")
          return errors;
        }}


        onSubmit={(values) => {
          // alert(JSON.stringify(values, null, 2));
          setTimeout(() => {
            createProduct(values);
            navigate('/');
          }, 400);
        }}
      >
        {({   values,
              errors,
              touched,
              onSubmit,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting, }) => (
          <>
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">name</label>
              <Field type="text" name="name" />
              {errors.name && touched.name && 
                <p style={{color:"red"}}>{errors.name}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="col-sm-2 col-form-label">quantity</label>
              <Field type="number" name="quantity" min="1" max="10000" step="1"/>
              {errors.quantity && touched.quantity && 
                <p style={{color:"red"}}>{errors.quantity}</p>}
            </div>
            <div  className="mb-3">
              <label htmlFor="price" className="col-sm-2 col-form-label">price</label>
              <Field type="number" step="0.01" name="price" min="0.1" max="1000" />
              {errors.price && touched.price && 
                <p style={{color:"red"}}>{errors.price}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="laboratory" className="col-sm-2 col-form-label">Choose a laboratory:</label>

              <Field as="select" id="" defaultValue='GSK' name="laboratory" >
                <option value="Genfar">Genfar</option>
                <option value="GSK">GSK</option>
                <option value="Hersil">Hersil</option>
                <option value="FarmaIndustria”">FarmaIndustria</option>
              </Field>
              {errors.laboratory && touched.laboratory && 
                <p style={{color:"red"}}>{errors.laboratory}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
          </>
        )}
      </Formik>

    </div>
)} 
export default CreateForm;