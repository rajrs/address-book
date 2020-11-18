import React from 'react';
 import { useFormik } from 'formik';
 import { Formik, Form, Field, FieldArray,ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 const AddContacts = () => (
  <div>
 
    <Formik
      initialValues={{
        name: '',
        email: '',
        list: []                    
    }}
    validationSchema={Yup.object().shape({
        name: Yup.string().max(15, 'Must be 15 characters or less')                      
          .required('name is required'),
          email: Yup.string()
          .email('Invalid email address')
          .required('Required')
      
  })} 
      onSubmit={(values) => alert(JSON.stringify(values, null, 2)) }   
      render={({ values }) => (
        <Form>
    <div className="form-group">
                            <label htmlFor="username">user Name</label>
                            <Field as="select" name="username"   selected={values.username}  className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')}>
                                <option value="" >Choose a User Name</option>
                                {this.state.users.map(user => (<option key={user} value={user}>{user}</option>))}
                                </Field>
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>

          <FieldArray
            name="list"
            render={arrayHelpers => (
              
              <div>
                {console.log(arrayHelpers)}
                {values.list && values.list.length > 0 ? (
                  values.list.map((list, index) => (
                    <div key={index}>
                      <Field name={`list.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push( {mobile:0,label:''})} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all friends from the list */}
                    Add a friend
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);
  

 export default  AddContacts