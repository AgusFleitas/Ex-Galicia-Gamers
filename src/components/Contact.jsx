import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./Contact.css";

const Contact = () => {
  // Estado para la confirmación al enviar.
  const [send, setSend] = useState(false);

  return (
    <section id="contacto" className='w-full'>
      <h2 className='text-5xl text-center font-bold text-balance'>
        Contáctanos
      </h2>
      <h3>Juntos daremos comienzo a tu sueño</h3>
      <div className='app-container'>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phonenumber: "",
            message: "",
          }}
          validate={(values) => {
            let errors = {};

            // Validación nombre.
            if (!values.name) {
              errors.name = "Por favor, coloca tu nombre.";
            } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,40}$/.test(values.name)) {
              errors.name =
                "El nombre solo puede contener letras mayúsculas y minúsculas. No puede tener números ni caracteres especiales.";
            }

            // Validación correo.
            if (!values.email) {
              errors.email = "Por favor, escribe tu correo electrónico.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errors.email =
                "El correo ingresado no es válido, por favor, vuelve a intentarlo.";
            }

            // Validación número.
            if (!values.phonenumber) {
              errors.phonenumber = "Por favor, ingresa tu número de teléfono.";
            } else if (
              !/^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/.test(values.phonenumber)
            ) {
              errors.phonenumber =
                "El número ingresado no es válido, por favor, vuelve a intentarlo.";
            }

            // Validación mensaje.
            if (!values.message) {
              errors.message = "Por favor, escribe un mensaje.";
            } else if (/<[^>]*>/g.test(values.message)) {
              errors.message =
                "Hay caracteres no válidos en el cuerpo del mensaje. Por favor, vuelve a intentarlo.";
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            setSend(true);
            setTimeout(() => setSend(false), 5000);
            console.log("Your request has been sended!");
          }}
        >
          {({ errors }) => (
            <Form className='form'>
              <div>
                <h4>Formulario de contacto</h4>
                <p className='form-description'>
                  Puedes enviarnos tus datos junto con una consulta o mensaje
                  para que sepamos con anticipación cuáles son tus dudas, o
                  bien, puedes optar por detallar tus datos y nosotros te
                  contactamos para darte toda la información que necesites.
                </p>
                <div className='field-container'>
                  <label htmlFor='name'>Nombre:</label>
                  <Field
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Escribe aquí tu nombre'
                  />
                  <ErrorMessage
                    name='name'
                    component={() => <div className='error'>{errors.name}</div>}
                  />
                </div>
                <div className='field-container'>
                  <label htmlFor='name'>Correo electrónico:</label>
                  <Field
                    type='email'
                    name='email'
                    id='email'
                    placeholder='tucorreo@gmail.com'
                  />
                  <ErrorMessage
                    name='email'
                    component={() => (
                      <div className='error'>{errors.email}</div>
                    )}
                  />
                </div>
                <div className='field-container'>
                  <label htmlFor='country'>Número de télefono:</label>
                  <Field
                    type='text'
                    name='phonenumber'
                    id='phonenumber'
                    placeholder='+34 1234 56789'
                  />
                  <ErrorMessage
                    name='phonenumber'
                    component={() => (
                      <div className='error'>{errors.phonenumber}</div>
                    )}
                  />
                </div>
                <div className='field-container'>
                  <label htmlFor='message'>Mensaje:</label>
                  <Field
                    name='message'
                    id='message'
                    as='textarea'
                    className='message-box'
                    placeholder='Escribe aquí tu mensaje o consulta.'
                  />
                  <ErrorMessage
                    name='message'
                    component={() => (
                      <div className='error'>{errors.message}</div>
                    )}
                  />
                </div>
              </div>
              <button
                type='submit'
                disabled={send || Object.keys(errors).length > 0}
              >
                Enviar solicitud
              </button>
              {send && (
                <p className='success'>
                  ¡Solicitud de contacto enviada con éxito!
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
