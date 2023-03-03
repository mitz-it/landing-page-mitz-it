import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Client } from '@microsoft/microsoft-graph-client';

const client = Client.init({
    authProvider: (done) => {
        done(null, {
            accessToken: 'SEU_TOKEN_DE_ACESSO',
        });
    },
});

const initialValues = { name: '', email: '', subject: '', message: '' }

const ContactForm = () => (
    <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
            name: Yup.string().required('O nome é obrigatório'),
            email: Yup.string()
                .email('Endereço de e-mail inválido')
                .required('O e-mail é obrigatório'),
            subject: Yup.string().required('O assunto é obrigatório'),
            message: Yup.string().required('A mensagem é obrigatória'),
        })}
        onSubmit={({ name, email, subject, message }, { setSubmitting, resetForm }) => {
            const mail = {
                message: {
                    subject: `${name} - ${subject}`,
                    body: {
                        contentType: 'Text',
                        email: email,
                        content: message,
                    },
                    toRecipients: [
                        {
                            emailAddress: {
                                address: process.env.EMAIL,
                            },
                        },
                    ],
                },
            };
            
            /* descomentar assim que obter o token e o email correto para autenticacao
            client.api('/me/sendMail').post({ message: mail }, (error, response) => {
                console.log(response)
                if (error) {
                    toast.error('📩 Houve um erro, tente mais tarde', {
                        position: "top-right",
                        autoClose: 6000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        progressClassName: "mitz-progress-bar",
                        className: "mitz-toast"
                    });
                } else {
                    toast('📩 E-mail enviado, em breve retornaremos o seu contato.', {
                        position: "top-right",
                        autoClose: 6000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        progressClassName: "mitz-progress-bar",
                        className: "mitz-toast"
                    });
                }
            });
             */

            toast('📩 E-mail enviado, em breve retornaremos o seu contato.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                progressClassName: "mitz-progress-bar",
                className: "mitz-toast"
            });
            // Envie o formulário para o destinatário aqui
            
            console.log(mail);
            setSubmitting(false);
            resetForm({values: initialValues})
        }}
    >
        <Form className="mitz-form">
            <div className="mitz-row-2-column">
                <div className="mitz-column">
                    <Field className="mitz-input" name="name" placeholder="Nome" />
                    <div className="mitz-msg-error">
                        <ErrorMessage name="name" />
                    </div>
                </div>
                <div className="mitz-column">
                    <Field className="mitz-input" name="email" type="email" placeholder="E-mail" />
                    <div className="mitz-msg-error">
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>
            <div className="mitz-row">
                <Field className="mitz-input" name="subject" placeholder="Assunto" />
                <div className="mitz-msg-error">
                    <ErrorMessage name="subject" />
                </div>
            </div>
            <div className="mitz-row">
                <Field className="mitz-textarea" name="message" as="textarea" placeholder="Mensagem" />
                <div className="mitz-msg-error">
                    <ErrorMessage name="message" />
                </div>
            </div>
            <div className="mitz-row">
                <button className="mitz-button" type="submit">Enviar</button>
            </div>
        </Form>
    </Formik>
);

export default ContactForm;
