import {Form, Field, Formik} from 'formik';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Row} from 'reactstrap';
import {AppRoutes} from '../../Router';
import '../Login/Login.scss';
import * as Yup from "yup";
import {Fab} from '@mui/material';
import {typeIdentification} from '../../__mocks__/data';
import './login-firma.scss';

interface LoginFirmaProps {
}

export function LoginFirma(props: LoginFirmaProps) {
    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        const datosFirma = {
            "Pws_Identificacion": values.Pws_Identificacion,
            "Pws_Tip_Identificacion": values.Pws_Tip_Identificacion,
            "email": values.email
        }
        localStorage.setItem('firma', JSON.stringify(datosFirma));
        navigate(AppRoutes.VIEW_DOCUMENT, {replace: true});
    };
    useEffect(() => {
        document.body.classList.add('body-login');
        return () => {
            document.body.classList.remove('body-login');
        };
    }, []);


    const initialValues = {
        Pws_Tip_Identificacion: '',
        Pws_Identificacion: '',
        email: '',
    };

    const validationSchema = Yup.object().shape({
        Pws_Tip_Identificacion: Yup.string()
            .required('Por favor seleccione el tipo de identificación'),
        Pws_Identificacion: Yup.string().required('Por favor ingrese el número de identificación'),
        email: Yup.string()
            .required('Por favor ingrese su correo'),
    })

    return (
        <>
            <div className='img-logo'/>
            <div className='title-login'>{'Antes que todo validemos tu identidad'}</div>
            <div className='subtitle-login'>{'Ingresa los siguientes datos para continuar'}</div>
            <div className='login-container'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ }) => (
                        <>
                            <Form>
                                <Row>
                                    <section>
                                        <Field as="select"
                                               className='form-control-50-credit'
                                               name="Pws_Tip_Identificacion">
                                            <option>{'Tipo de documento'}</option>
                                            {typeIdentification && typeIdentification.WS_TIPOS_IDENTIFICACION_IResult.LstTiposIdent.Datos_TiposIdentificacion.map((item) => {
                                                return (
                                                    <option value={item.s_codigo}>{item.s_descripcion}</option>
                                                )
                                            })}
                                        </Field>
                                        <div className='form-control-login-text'>{'Documento'}</div>
                                        <br/>
                                    </section>
                                    <section>
                                        <Field
                                            className='form-control-50-credit'
                                            id="Pws_Identificacion"
                                            name="Pws_Identificacion"
                                            type="text"
                                            placeholder='Número de documento'
                                        />
                                        <br/>
                                        <h4 className="title-firma">{'Inserta una dirección de correo electrónico y tu número de celular para  enviarte el código de validación.'}</h4>
                                        <br/>

                                    </section>

                                    <section>
                                        <Field
                                            className='form-control-50-credit'
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder='Correo'
                                        />
                                        <br/>
                                    </section>
                                    <section>
                                        <Field
                                            className='form-control-50-credit'
                                            id="numero_telefonico"
                                            name="numero_telefonico"
                                            type="text"
                                            placeholder='Número Télefonico'
                                        />
                                        <br/>
                                    </section>
                                    <section>
                                        <br/>
                                        <Fab className="form-control-small-button" variant="extended" type='submit'
                                             size="medium"
                                             color="neutral" aria-label="add">
                                            {'Continuar'}
                                        </Fab>
                                    </section>
                                </Row>
                            </Form>
                        </>
                    )}
                </Formik>

            </div>
        </>
    )
}