import {Form, Field, Formik} from 'formik';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Row} from 'reactstrap';
import {AppRoutes} from '../../Router';
import './Login.scss';
import * as Yup from "yup";
import {Fab} from '@mui/material';
import {typeIdentification} from '../../__mocks__/data';
import {WloCreditoService} from '../../types';
import { AuthService } from '../../services';
import toast from 'react-hot-toast';

interface LoginProps {
}

export function Login(props: LoginProps) {
    const navigate = useNavigate();

    const handleSubmit = async (values: any) => {
        const Pws_Tip_perfil = localStorage.getItem('idProfile') as string;
        const userLogin: WloCreditoService.LoginRequest = {
            Pws_Identificacion: values.Pws_Identificacion,
            Pws_Tip_identificacion: values.Pws_Tip_Identificacion,
            Pws_clave_usu: values.Pws_clave_usu,
            Pws_Tip_perfil: Pws_Tip_perfil,
            Pws_Tip_Canal: "1",
            Pws_Tip_cambio: "1",
        }
        const result = await AuthService.login(userLogin);
        if(result.payload.Ws_LoginResult.Resultado === '-3') {
            toast.error('Favor valide sus datos');
        }
        else {
            toast.success('Bienvenido');
            navigate(AppRoutes.MENU_USER, {replace: true});
         }

        
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
        Pws_clave_usu: '',
    };

    const validationSchema = Yup.object().shape({
        Pws_Tip_Identificacion: Yup.string()
            .required('Por favor seleccione el tipo de identificación'),
        Pws_Identificacion: Yup.string().required('Por favor ingrese el número de identificación'),
        Pws_clave_usu: Yup.string()
            .required('Por favor ingrese su clave'),
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
                                        <div className='form-control-login-text'>{'Contraseña'}</div>
                                        <br/>
                                    </section>

                                    <section>
                                        <Field
                                            className='form-control-50-credit'
                                            id="Pws_clave_usu"
                                            name="Pws_clave_usu"
                                            type="password"
                                            placeholder='Contraseña'
                                        />
                                        <div className='form-control-login-lost-password'>{'Olvide mi contraseña'}</div>
                                        <br/>
                                    </section>
                                    <section>
                                        <Fab className="form-control-small-button" variant="extended" type='submit'
                                             size="medium"
                                             color="neutral" aria-label="add">
                                            {'Continuar'}
                                        </Fab>
                                    </section>
                                    {/*  <div className='form-control-button-login-continue' onClick={handleSubmit(values,isSubmitting)}>
                            <div className='form-control-button-login-text'>{'Continuar'}</div>
                        </div> */}
                                </Row>
                            </Form>
                        </>
                    )}
                </Formik>

            </div>
        </>
    )
}