import {Form, Field, Formik} from 'formik';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Row} from 'reactstrap';
import {AppRoutes} from '../../Router';
import './login-firm-17.scss';
import * as Yup from "yup";
import {Fab} from '@mui/material';
import {typeIdentification} from '../../__mocks__/data';
import {MenuBar} from '../../components/shared/Menubar/Menubar';
import './login-firm-17.scss';

interface LoginFirmaProps {
}

export function LoginFirma17(props: LoginFirmaProps) {
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
        document.body.classList.add('body-login17');
        return () => {
            document.body.classList.remove('body-login17');
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
        <div className="loginfirma17">
            <MenuBar display={'dn'}/>
            <div className='loginfirm'>
                <div className='img-logo'/>
                <div className='title-login'>{'Antes que todo validemos tu identidad'}</div>
                <div className='subtitle-login'>{'Ingresa los siguientes datos para continuar'}</div>
                <div className='login-container'>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {() => (
                            <>
                                <Form>
                                    <Row>
                                        <section>
                                            <Field as="select"
                                                className='form-control-50-credit'
                                                name="Pws_Tip_Identificacion">
                                                <option>{'Tipo de documento'}</option>
                                                {typeIdentification && typeIdentification.WS_TIPOS_IDENTIFICACION_IResult.LstTiposIdent.Datos_TiposIdentificacion.map((item,i) => {
                                                    return (
                                                        <option key={i} value={item.s_codigo}>{item.s_descripcion}</option>
                                                    )
                                                })}
                                            </Field>
                                        </section>
                                        <section>
                                            <div className='form-control-login-text'>{'Documento'}</div>
                                            <Field
                                                className='form-control-50-credit'
                                                id="Pws_Identificacion"
                                                name="Pws_Identificacion"
                                                type="text"
                                                placeholder='Número de documento'
                                            />
                                            <br/>
                                        </section>
                                        <section>
                                            <h4 className="title-firma">{'Inserta una dirección de correo electrónico y tu número de celular para  enviarte el código de validación.'}</h4>
                                            <Field
                                                className='form-control-50-credit'
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder='Correo electrónico'
                                            />
                                            <br/>
                                            <Field
                                                className='form-control-50-credit'
                                                id="numero_telefonico"
                                                name="numero_telefonico"
                                                type="text"
                                                placeholder='Celular'
                                            />
                                            <br/>
                                        </section>
                                        <section>
                                            <Fab className="form-control-small-button" variant="extended" type='submit'
                                                size="medium"
                                                color="neutral" aria-label="add">
                                                {'Ingresar'}
                                            </Fab>
                                        </section>
                                    </Row>
                                </Form>
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}