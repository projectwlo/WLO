import {Box, Fab, Grid, Switch} from "@mui/material";
import {useEffect, useState} from "react";
import {Form, Row, Col, Label, FormGroup, Input} from "reactstrap";
import {MessageUtils} from "../../../assets/translations/strings/messages";
import {SpouseInformation} from "./SpouseInformation/SpouseInformation";
import './ApplicantInformation.scss';
import '../CreditInformation/credit-information.scss';
import {Field} from "formik";
import {cargos, cities, civilStatus, estractos, nivelEstudios, typeContract, typeVivienda} from "../../../__mocks__/data";
import { useIntl } from "react-intl";

interface ApplicantInformationProps {
    errors?: any;
    values?: any;
}

export function ApplicantInformation(props: ApplicantInformationProps) {
    const { errors, values} = props;
    const intl = useIntl();
    const datosPersona = {
        "Pws_i_codigo": "?",
        "Pws_Identificacion": "?",
        "Pws_Tip_Identificacion": "?",
        "Pws_Tip_Estado": "?",
        "Pws_Tip_Perfil": "?",
        "Pws_Tip_person": "?",
        "Pws_Tip_ocupa": "?",
        "Pws_Nombres": "?",
        "Pws_Apellidos1": "?",
        "Pws_Apellidos2": "?",
        "Pws_Telefono1": "?",
        "Pws_Telefono2": "?",
        "Pws_Correo": "?",
        "Pws_Fec_expe": "?",
        "Pws_Lugar_exp": "?",
        "Pws_Fec_nacime": "?",
        "Pws_Estado_Civil": "?",
        "Pws_Direccion_res": "?",
        "Pws_Departamento": "?",
        "Pws_Ciudad_res": "?",
        "Pws_Genero": "?",
        "Pws_Estrato_per": "?",
        "Pws_Per_cargo": "?",
        "Pws_Tip_vivienda": "?",
        "Pws_Niv_estudio": "?",
        "Pws_Nom_empre": "?",
        "Pws_fec_ingemp": "?",
        "Pws_Tip_contra": "?",
        "Pws_Ant_labo": "?",
        "Pws_Car_emp": "?",
        "Pws_Nom_Jefedi": "?",
        "Pws_Direc_emp": "?",
        "Pws_Ciud_emp": "?",
        "Pws_tel_emp1": "?",
        "Pws_tel_emp2": "?",
        "idTransaccion":""
        ,"nuip":""
        ,"codigoErrorDatosCedula":""
        ,"primerApellido":""
        ,"particula":" "
        ,"segundoApellido":""
        ,"primerNombre":""
        ,"segundoNombre":""
        ,"municipioExpedicion":""
        ,"departamentoExpedicion":""
        ,"fechaExpedicion":""
        ,"estadoCedula":""
        ,"numeroResolucion":""
        ,"anioResolucion":""}
    
    const defaultValues = {
        "idTransaccion": "",
        "nuip": "",
        "codigoErrorDatosCedula": "",
        "primerApellido": "",
        "particula": "",
        "segundoApellido": "",
        "primerNombre": "",
        "segundoNombre": "",
        "municipioExpedicion": "",
        "departamentoExpedicion": "",
        "fechaExpedicion": "",
        "estadoCedula": "",
        "numeroResolucion": "",
        "anioResolucion": ""
    }

    const [modal, setModal] = useState(false);
    const [persona, setPersona] = useState(datosPersona as any);

    useEffect(() => {
        const personaLocal = JSON.parse(localStorage.getItem('person')!);

        if (personaLocal) {
            setPersona(personaLocal);
        }


    }, []);
    const toggle = () => setModal(!modal);


   

    return (
        <div><Box>
            <Grid container>
                <Grid item xs={12} md={12} xl={12}>
                    <h1 className="title-red">{MessageUtils["form_applicant_information_title"]}</h1>
                    <h3 className="sub-title">{MessageUtils["form_credit_information_subtitle"]}</h3>
                </Grid>
            </Grid>
        </Box>
            <Form>
                <div className="flex-container-options">
                    <div className="flex-item-left-options">
                        <Row>
                            <Col md={4}>
                                <section>
                                    <Label className="label-form" for="Pws_Tip_person">
                                        {MessageUtils["who_accredits_motorcycle"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Tip_person">
                                        <option>{errors.Pws_Tip_person ? errors.Pws_Tip_person : 'Seleccione...'}</option>
                                        <option value={'N'}>{'Natural'}</option>
                                        <option value={'J'}>{'Juridico'}</option>
                                    </Field>
                                </section>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Tip_ocupa">
                                        {MessageUtils["placeholder_occupation_type"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Tip_ocupa">
                                        <option>{errors.Pws_Tip_ocupa ? errors.Pws_Tip_ocupa : 'Seleccione...'}</option>
                                        <option value={'1'}>{'ASALARIADO'}</option>
                                        <option value={'2'}>{'EMPRESARIO'}</option>
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Fideliza">
                                        {MessageUtils["loyalty"]}
                                    </Label>
                                    <div className="label-form">{MessageUtils["button_yes"]}<Switch defaultChecked
                                                                                                    color="error"/>{MessageUtils["button_no"]}
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="flex-item-right-options"></div>
                    <div className="flex-item-left-options"></div>
                </div>
                <div className="flex-container-application">

                    <div className="flex--application-item-left">
                        <h3 className="sub-title-left">{MessageUtils["form_financial_information_subtitle"]}</h3>
                        <Row>
                            <Col md={1}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {MessageUtils["placeholder_field_names"]}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle" for="main_income">
                                        {persona.Pws_Nombres || persona.primerNombre}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {MessageUtils["placeholder_field_last_names"]}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle" for="main_income">
                                        {persona.Pws_Apellidos1! + ' ' +  persona.Pws_Apellidos2!  || persona.primerApellido + ' ' + persona.segundoApellido}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {MessageUtils["placeholder_identification_type"]}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle" for="main_income">
                                        {persona.Pws_Tip_Identificacion}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {MessageUtils["placeholder_identification"]}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle" for="main_income">
                                        {persona.Pws_Identificacion  || persona.nuip}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {MessageUtils["placeholder_expedition_date"]}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle" for="main_income">
                                        {persona.Pws_Fec_expe  || persona.fechaExpedicion}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form">
                                        {MessageUtils["placeholder_expedition_place"]}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle">
                                        {persona.Pws_Lugar_exp  || persona.departamentoExpedicion}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label className="label-form">
                                        {MessageUtils["placeholder_date_birth"]}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle">
                                        {persona.Pws_Fec_nacime}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <section>
                                    <Label className="label-form" for="Pws_Estado_Civil">
                                        {MessageUtils["placeholder_marital_status"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Estado_Civil"
                                           >
                                        <option>{errors.Pws_Estado_Civil ? errors.Pws_Estado_Civil : 'Seleccione...'}</option>
                                        {civilStatus && civilStatus.WS_TIPO_ESTADO_CIVIL_IResult.listEstCivil.Datos_EstCivil.map((item, index: number) => {
                                            return (
                                                <option value={item.s_codigo}>{item.s_descripcion}</option>
                                            )
                                        })}
                                    </Field>
                                </section>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Direccion_res">
                                        {'Dirección residencia'}
                                    </Label>
                                    <Field
                                        className='form-control-application'
                                        id="Pws_Direccion_res"
                                        name="Pws_Direccion_res"
                                        type="text"
                                        placeholder={errors.Pws_Direccion_res ? errors.Pws_Direccion_res : 'Dirección residencia'}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Departamento">
                                        {'Departamento'}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Departamento">
                                        <option>{errors.Pws_Departamento ? errors.Pws_Departamento : 'Departamento'}</option>
                                        {cities && cities.WS_CIUDAD_IResult.ListCiudad.Datos_Ciudad.map((item, index: number) => {
                                            return (
                                                <option value={item.s_codigo}>{item.s_nombre}</option>
                                            )
                                        })}
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Ciudad_res">
                                        {'Ciudad'}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Ciudad_res">
                                        <option>{errors.Pws_Ciudad_res ? errors.Pws_Ciudad_res : 'Ciudad'}</option>
                                        {cities && cities.WS_CIUDAD_IResult.ListCiudad.Datos_Ciudad.map((item, index: number) => {
                                            return (
                                                <option value={item.s_codigo}>{item.s_nombre}</option>
                                            )
                                        })}
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {'Teléfono móvil 1'}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle" for="main_income">
                                        {persona.Pws_Telefono1}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {'Teléfono móvil 2'}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle" for="main_income">
                                        {persona.Pws_Telefono2}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {'Email'}
                                    </Label>
                                    <br/>
                                    <Label className="label-form-detalle" for="main_income">
                                        {persona.Pws_Correo}
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={1}>

                            </Col>
                            <Col md={2}>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <section>
                                    <Label className="label-form" for="Pws_Genero">
                                        {MessageUtils["placeholder_gender"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Genero">
                                        <option>{errors.Pws_Genero ? errors.Pws_Genero : 'Seleccione...'}</option>
                                        <option value={'F'}>{'Femenino'}</option>
                                        <option value={'M'}>{'Masculino'}</option>
                                    </Field>
                                </section>
                            </Col>
                            <Col md={1}>
                                <section>
                                    <Label className="label-form" for="Pws_Estrato_per">
                                        {MessageUtils["placeholder_social_stratum"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Estrato_per">
                                        <option>{errors.Pws_Estrato_per ? errors.Pws_Estrato_per : 'Seleccione...'}</option>
                                        {estractos && estractos.WS_ESTRACTOS_SOCResult.estratos_soc.Datos_estratos_soc.map((item, index: number) => {
                                            return (
                                                <option value={item.i_codigo}>{item.c_descripcion}</option>
                                            )
                                        })}
                                    </Field>
                                </section>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="number_of_people_in_charge">
                                        {MessageUtils["placeholder_number_of_people_in_charge"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Per_cargo">
                                        <option>{errors.Pws_Per_cargo ? errors.Pws_Per_cargo : 'Seleccione...'}</option>
                                        <option value={'1'}>{'1'}</option>
                                        <option value={'2'}>{'2'}</option>
                                        <option value={'3'}>{'3'}</option>
                                        <option value={'4'}>{'4'}</option>
                                        <option value={'5'}>{'5'}</option>
                                        <option value={'6'}>{'6'}</option>
                                        <option value={'7'}>{'6'}</option>
                                        <option value={'8'}>{'6'}</option>
                                        <option value={'9'}>{'6'}</option>
                                        <option value={'10'}>{'10'}</option>
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Tip_vivienda">
                                        {MessageUtils["placeholder_type_of_housing"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Tip_vivienda">
                                        <option>{errors.Pws_Tip_vivienda ? errors.Pws_Tip_vivienda : 'Seleccione...'}</option>
                                        {typeVivienda && typeVivienda.WS_TIPOVIVIENDAResult.tip_viv.datos_tip_vivi.map((item, index: number) => {
                                            return (
                                                <option value={item.i_codigo}>{item.c_descripcion}</option>
                                            )
                                        })}
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Niv_estudio">
                                        {MessageUtils["placeholder_educational_level"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Niv_estudio">
                                        <option>{errors.Pws_Niv_estudio ? errors.Pws_Niv_estudio : 'Seleccione...'}</option>
                                        {nivelEstudios && nivelEstudios.WS_TIPOS_NIV_ESTUDIO_IResult.listTipoNivEstudio.Datos_TiposNivelEstudio.map((item, index: number) => {
                                            return (
                                                <option value={item.s_codigo}>{item.s_descripcion}</option>
                                            )
                                        })}
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                </FormGroup>
                            </Col>
                            <Col md={1}>
                                <FormGroup>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Fab className="form-control-small-button" variant="extended" size="medium"
                                         color="error" aria-label="add" onClick={toggle}>
                                        {MessageUtils["placeholder_spouse"]}
                                    </Fab>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="flex-container-application">
                    <div className="flex--application-item-left">
                        <h3 className="sub-title-left">{'Actividad del solicitante'}</h3>
                        <Row>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Nom_empre">
                                        {MessageUtils["placeholder_company_name"]}
                                    </Label>
                                    <Field
                                        className='form-control-application'
                                        id="Pws_Nom_empre"
                                        name="Pws_Nom_empre"
                                        type="text"
                                        placeholder={errors.Pws_Nom_empre ? errors.Pws_Nom_empre : 'Nombre empresa'}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {MessageUtils["placeholder_date_of_admission"]}
                                    </Label>
                                    <Field
                                        className='form-control-application'
                                        id="Pws_fec_ingemp"
                                        name="Pws_fec_ingemp"
                                        type="text"
                                        placeholder={errors.Pws_fec_ingemp ? errors.Pws_fec_ingemp : MessageUtils["placeholder_date_of_admission"]}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {MessageUtils["placeholder_type_of_contract"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Tip_contra">
                                        <option>{errors.Pws_Tip_contra ? errors.Pws_Tip_contra : 'Seleccione...'}</option>
                                        {typeContract && typeContract.WS_TIPO_CONTRATO_IResult.listTipoContr.Datos_TipoContrato.map((item, index: number) => {
                                            return (
                                                <option value={item.s_codigo}>{item.s_descripcion}</option>
                                            )
                                        })}
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Ant_labo">
                                        {MessageUtils["placeholder_labor_old"]}
                                    </Label>
                                    <Field
                                        className='form-control-application'
                                        id="Pws_Ant_labo"
                                        name="Pws_Ant_labo"
                                        type="select"
                                        placeholder={errors.Pws_Ant_labo ? errors.Pws_Ant_labo : 'Antiguedad'}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Car_emp">
                                        {MessageUtils["placeholder_job_that_performs"]}
                                    </Label>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Car_emp">
                                        <option>{errors.Pws_Car_emp ? errors.Pws_Car_emp : 'Seleccione...'}</option>
                                        {cargos && cargos.WS_CARGOS_IResult.ListCargos.Datos_Cargos.map((item, index: number) => {
                                            return (
                                                <option value={item.s_codigo}>{item.s_descripcion}</option>
                                            )
                                        })}
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Nom_Jefedi">
                                        {MessageUtils["placeholder_direct_boss"]}
                                    </Label>
                                    <Field
                                        className='form-control-application'
                                        id="Pws_Nom_Jefedi"
                                        name="Pws_Nom_Jefedi"
                                        type="text"
                                        placeholder={errors.Pws_Nom_Jefedi ? errors.Pws_Nom_Jefedi : MessageUtils["placeholder_direct_boss"]}
                                    />
                                </FormGroup>
                            </Col>
                    
                        </Row>
                        <Row>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Direc_emp">
                                        {MessageUtils["placeholder_company_address"]}
                                    </Label>
                                    <Field
                                        className='form-control-application'
                                        id="Pws_Direc_emp"
                                        name="Pws_Direc_emp"
                                        type="text"
                                        placeholder={errors.Pws_Direc_emp ? errors.Pws_Direc_emp : MessageUtils["placeholder_company_address"]}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_Ciud_emp">
                                        {MessageUtils["form_financial_city_foreign_currency"]}
                                    </Label>
                                    <br/>
                                    <Field as="select"
                                           className='form-control-application'
                                           name="Pws_Ciud_emp">
                                        <option>{errors.Pws_Ciud_emp ? errors.Pws_Ciud_emp : 'Seleccione...'}</option>
                                        {cities && cities.WS_CIUDAD_IResult.ListCiudad.Datos_Ciudad.map((item, index: number) => {
                                            return (
                                                <option value={item.s_codigo}>{item.s_nombre}</option>
                                            )
                                        })}
                                    </Field>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_tel_emp1">
                                        {MessageUtils["placeholder_phone_1"]}
                                    </Label>
                                    <Field
                                        className='form-control-application'
                                        id="Pws_tel_emp1"
                                        name="Pws_tel_emp1"
                                        type="text"
                                        placeholder={errors.Pws_tel_emp1 ? errors.Pws_tel_emp1 : MessageUtils["placeholder_phone_1"]}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label className="label-form" for="Pws_tel_emp2">
                                        {MessageUtils["placeholder_phone_2"]}
                                    </Label>
                                    <Field
                                        className='form-control-application'
                                        id="Pws_tel_emp2"
                                        name="Pws_tel_emp2"
                                        type="text"
                                        placeholder={errors.Pws_tel_emp2 ? errors.Pws_tel_emp2 : MessageUtils["placeholder_phone_2"]}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Form>
            <SpouseInformation values={values} errors={errors} show={modal} handleClose={toggle}/>
        </div>

    )
}
