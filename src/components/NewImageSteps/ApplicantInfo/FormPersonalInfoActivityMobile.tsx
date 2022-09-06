import {Field} from "formik";
import {useIntl} from "react-intl";
import {cities, typeContract} from "../../../__mocks__/data";

interface FormPersonalInfoActivityMobileProps {
    errors?: any;
    values?: any;
}

export function FormPersonalInfoActivityMobile(props: FormPersonalInfoActivityMobileProps) {
    const {errors} = props;
    const intl = useIntl();
    return (
        <div className="row container-border">
            <div className="row">
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_company_name"})}</div>
                        <Field id={"Pws_Nom_empre"}
                               name={"Pws_Nom_empre"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "placeholder_company_name"})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_date_of_admission"})}</div>
                        <Field id={"Pws_fec_ingemp"}
                               name={"Pws_fec_ingemp"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "placeholder_date_of_admission"})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_type_of_contract"})}</div>
                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Tip_contra">
                            <option>{errors && errors.Pws_Tip_contra ? errors.Pws_Tip_contra : intl.formatMessage({id: "placeholder_type_of_contract"})}</option>
                            {typeContract && typeContract.WS_TIPO_CONTRATO_IResult.listTipoContr.Datos_TipoContrato.map((item, index: number) => {
                                return (
                                    <option value={item.s_codigo}>{item.s_descripcion}</option>
                                )
                            })}
                        </Field>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_labor_old"})}</div>
                        <Field id={"Pws_Ant_labo"}
                               name={"Pws_Ant_labo"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "placeholder_labor_old"})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_job_that_performs"})}</div>
                        <Field id={"Pws_Car_emp"}
                               name={"Pws_Car_emp"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "placeholder_job_that_performs"})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_direct_boss"})}</div>
                        <Field id={"Pws_Nom_Jefedi"}
                               name={"Pws_Nom_Jefedi"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "placeholder_direct_boss"})}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_company_address"})}</div>
                        <Field id={"Pws_Direc_emp"}
                               name={"Pws_Direc_emp"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "placeholder_company_address"})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "form_financial_city_foreign_currency"})}</div>
                        <Field as="select"
                               className={'form-know-you-item-input-mobile display-flex'}
                               name="Pws_Ciud_emp"
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
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_phone_1"})}</div>
                        <Field id={"Pws_tel_emp1"}
                               name={"Pws_tel_emp1"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "placeholder_phone_1"})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div
                            className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_phone_2"})}</div>
                        <Field id={"Pws_tel_emp2"}
                               name={"Pws_tel_emp2"}
                               className={'form-know-you-item-input-mobile display-flex'}
                               placeholder={intl.formatMessage({id: "placeholder_phone_2"})}/>
                    </div>
                </div>
            </div>
        </div>
    )
}