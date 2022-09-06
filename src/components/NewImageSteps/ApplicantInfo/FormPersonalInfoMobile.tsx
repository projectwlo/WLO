import {Field} from "formik";
import {useEffect, useState} from "react";
import {useIntl} from "react-intl";
import {cities, civilStatus, estractos, nivelEstudios, typeVivienda} from "../../../__mocks__/data";
import {FormSpouseMobile} from "./ModalSpouse/FormSpouseMobile";

interface FormPersonalInfoMobileProps {
    errors?: any;
    values?: any;
}

export function FormPersonalInfoMobile(props: FormPersonalInfoMobileProps) {
    const {errors, values} = props;
    const intl = useIntl();
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
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
        "idTransaccion": ""
        , "nuip": ""
        , "codigoErrorDatosCedula": ""
        , "primerApellido": ""
        , "particula": " "
        , "segundoApellido": ""
        , "primerNombre": ""
        , "segundoNombre": ""
        , "municipioExpedicion": ""
        , "departamentoExpedicion": ""
        , "fechaExpedicion": ""
        , "estadoCedula": ""
        , "numeroResolucion": ""
        , "anioResolucion": ""
    }
    const [persona, setPersona] = useState(datosPersona as any);

    useEffect(() => {
        const personaLocal = JSON.parse(localStorage.getItem('person')!);

        if (personaLocal) {
            setPersona(personaLocal);
        }


    }, []);


    const handleCallModalConyugue = (e: { target: { value: string; }; }) => {
        if (e.target.value === "1") {
            setModal(!modal);
        }
    }

    return (
        <div className="row container-border">
            <div className="row">
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_field_names"})}</div>
                        <div className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Nombres}</div>
                    </div>
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_field_last_names"})}</div>
                        <div
                            className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Apellidos1 + ' ' + persona.Pws_Apellidos2}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_identification_type"})}</div>
                        <div
                            className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Tip_Identificacion}</div>
                    </div>
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_identification"})}</div>
                        <div
                            className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Identificacion}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_expedition_date"})}</div>
                        <div className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Fec_expe}</div>
                    </div>
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_expedition_place"})}</div>
                        <div className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Lugar_exp}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_date_birth"})}</div>
                        <div className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Fec_nacime}</div>
                    </div>
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_marital_status"})}</div>
                        <Field as="select" onClick={handleCallModalConyugue}
                               className={'form-know-you-item-input-xs display-flex'}
                               name="Pws_Estado_Civil"
                        >
                            <option>{errors && errors.Pws_Estado_Civil ? errors.Pws_Estado_Civil : intl.formatMessage({id: "placeholder_marital_status"})}</option>
                            {civilStatus && civilStatus.WS_TIPO_ESTADO_CIVIL_IResult.listEstCivil.Datos_EstCivil.map((item, index: number) => {
                                return (
                                    <option value={item.s_codigo}>{item.s_descripcion}</option>
                                )
                            })}
                        </Field>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "residence_address"})}</div>
                        <Field id={"Pws_Direccion_res"}
                               name={"Pws_Direccion_res"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "enter"})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "department"})}</div>

                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Departamento"
                        >
                            <option>{errors && errors.Pws_Departamento ? errors.Pws_Departamento : intl.formatMessage({id: "form_financial_city_foreign_currency"})}</option>
                            {cities && cities.WS_CIUDAD_IResult.ListCiudad.Datos_Ciudad.map((item, index: number) => {
                                return (
                                    <option value={item.s_codigo}>{item.s_nombre}</option>
                                )
                            })}
                        </Field>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "form_financial_city_foreign_currency"})}</div>

                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Ciudad_res"
                        >
                            <option>{errors && errors.Pws_Ciudad_res ? errors.Pws_Ciudad_res : intl.formatMessage({id: "form_financial_city_foreign_currency"})}</option>
                            {cities && cities.WS_CIUDAD_IResult.ListCiudad.Datos_Ciudad.map((item, index: number) => {
                                return (
                                    <option value={item.s_codigo}>{item.s_nombre}</option>
                                )
                            })}
                        </Field>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_mobile_phone_1"})}</div>
                        <div className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Telefono1}</div>
                    </div>
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_mobile_phone_2"})}</div>
                        <div className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Telefono2}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_mail"})}</div>
                        <div className={"label-fields-peps-mobile-ligth display-flex"}>{persona.Pws_Correo}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "gender"})}</div>
                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Genero">
                            <option>{errors && errors.Pws_Genero ? errors.Pws_Genero : intl.formatMessage({id: "placeholder_dropdown"})}</option>
                            <option value={'F'}>{'Femenino'}</option>
                            <option value={'M'}>{'Masculino'}</option>
                        </Field>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_social_stratum"})}</div>
                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Estrato_per">
                            <option>{errors && errors.Pws_Estrato_per ? errors.Pws_Estrato_per : intl.formatMessage({id: "placeholder_dropdown"})}</option>
                            {estractos && estractos.WS_ESTRACTOS_SOCResult.estratos_soc.Datos_estratos_soc.map((item, index: number) => {
                                return (
                                    <option value={item.i_codigo}>{item.c_descripcion}</option>
                                )
                            })}
                        </Field>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_number_of_people_in_charge"})}</div>
                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Per_cargo">
                            <option>{errors && errors.Pws_Per_cargo ? errors.Pws_Per_cargo : intl.formatMessage({id: "placeholder_dropdown"})}</option>
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
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_type_of_housing"})}</div>
                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Tip_vivienda">
                            <option>{errors && errors.Pws_Tip_vivienda ? errors.Pws_Tip_vivienda : intl.formatMessage({id: "placeholder_dropdown"})}</option>
                            {typeVivienda && typeVivienda.WS_TIPOVIVIENDAResult.tip_viv.datos_tip_vivi.map((item, index: number) => {
                                return (
                                    <option value={item.i_codigo}>{item.c_descripcion}</option>
                                )
                            })}
                        </Field>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_educational_level"})}</div>

                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Niv_estudio">
                            <option>{errors && errors.Pws_Niv_estudio ? errors.Pws_Niv_estudio : intl.formatMessage({id: "placeholder_dropdown"})}</option>
                            {nivelEstudios && nivelEstudios.WS_TIPOS_NIV_ESTUDIO_IResult.listTipoNivEstudio.Datos_TiposNivelEstudio.map((item, index: number) => {
                                return (
                                    <option value={item.s_codigo}>{item.s_descripcion}</option>
                                )
                            })}
                        </Field>
                    </div>
                </div>
                <FormSpouseMobile values={values} errors={errors} show={modal} onHide={toggle}/>
            </div>
        </div>
    )
}