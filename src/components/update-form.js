import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import {updateProduct} from '../context/product-services'

const UpdateForm = () =>{
    const navigate = useNavigate()
  return(


    <div>


      <Formik
        initialValues={{ id: 'CP123', name: '', quantity: '', price: '', laboratory: 'Genfar' }}
        
        validate={(values) => {
          const errors = {};

          const regexSentences = {
            id: /[C][P]\d{3}$/,
            name: /([a-zA-Z0-9_\s]+)/,
            quantity: /\d{1,5}$/,
            price: /\d{1,4}$/,
            laboratory: /\w{1,}/,
            }

          function verificarObjectRegex(objeto){
            objeto.map(texto=>{
            if (!regexSentences[texto].test(values[texto])) {
              errors[texto] = "Not valid "+texto;
            }
           })
          }
          verificarObjectRegex(Object.keys(values))

          function addInfoError(variable,message){
            if (errors[variable]){
              errors[variable]=errors[variable]+message
              }
            }
            addInfoError("id", ", starts with CP and continues with 3 numbers");
            addInfoError("name", ", at least a letter");
            addInfoError("quantity", ", between 1 and 5 numbers");
            addInfoError("price", ", between 1 and 4 numbers");
          return errors;
        }}


        onSubmit={(values) => {
          // alert(JSON.stringify(values, null, 2));
          setTimeout(() => {
            values.id=Number(values.id.slice(2,));
            const {id,...data} = values
            updateProduct(id,values);
            // navigate('/');
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
              <label htmlFor="id" className="col-sm-2 col-form-label">Product ID:</label>
              <Field type="text" name="id" />
              {errors.id && touched.id && 
                <p style={{color:"red"}}>{errors.id}</p>}
            </div>
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

              <Field as="select" id="laboratory" defaultValue='GSK' name="laboratory" >
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
  export default UpdateForm;