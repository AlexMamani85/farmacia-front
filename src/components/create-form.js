import { Formik, Form, Field, ErrorMessage } from 'formik';

const CreateForm = () =>{

return(
    <div>
      <Formik
        initialValues={{ name: '', quantity: '', price: '', laboratory: '' }}
        
        validate={(values) => {
          const errors = {};

          // !!!! --->>> validaciones regex de las Values <<<---
          const regexSentences = {
            name: /([a-zA-Z0-9_\s]+)/,
            quantity: /\d{1,5}$/,
            price: /\d{1,4}$/,
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

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <>
          <Form>
            <div className="mb-3">
              <label for="name" className="col-sm-2 col-form-label">name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div div className="mb-3">
              <label for="quantity" className="col-sm-2 col-form-label">quantity</label>
              <Field type="number" name="quantity" min="1" max="10000" step="1"/>
              <ErrorMessage name="quantity" component="div" />
            </div>
            <div div className="mb-3">
              <label for="price" className="col-sm-2 col-form-label">price</label>
              <Field type="number" step="0.01" name="price" min="0.1" max="1000" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div div className="mb-3">
              <label for="laboratory" className="col-sm-2 col-form-label">Choose a laboratory:</label>

              <select name="laboratory" id="laboratory">
                <option value="Genfar">Genfar</option>
                <option value="GSK">GSK</option>
                <option value="Hersil">Hersil</option>
                <option value="FarmaIndustria”">FarmaIndustria</option>
              </select>
              <ErrorMessage name="password" component="div" />
            </div>

            {/*  name: '', quantity: '', price: '', laboratory: '' */}
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