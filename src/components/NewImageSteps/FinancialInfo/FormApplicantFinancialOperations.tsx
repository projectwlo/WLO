import {useIntl} from "react-intl";
import React from "react";
import {FormPeps} from "./ModalPeps/FormPeps";
import { Field } from "formik";
import { Switch } from 'formik-mui';

interface FormApplicantFinancialOperationsProps {
    errors?: any;
    values?: any;
}

export function FormApplicantFinancialOperations(props: FormApplicantFinancialOperationsProps) {
    const {errors, values} = props;
    const [modalShow, setModalShow] = React.useState(false);
    const intl = useIntl();

    return (
        <div className={"row"}>
            <div className="row">
                <div className={"subtitle-medium display-flex"}>{intl.formatMessage({id: "form_financial_operations_title"})}</div>
                <br/>
                <br/>
            </div>
            <div className="row">
                <div className="col-8 questions-peps">{intl.formatMessage({id: "form_financial_foreign_currency"})}</div>
                <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_moneda_ext" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                {/* <div className="col-3 toggle-peps"><Toggle key={"s_moneda_ext"}/></div> */}
            </div>
            <div className={"row"}>
                <div className="col-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_foreign_currency_which"})}</div>
                    <Field id={"s_monext_oper"}
                           name={"s_monext_oper"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "describe"})}/>
                </div>
                <div className="col-4">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_currency"})}</div>
                    <Field id={"s_tip_monext"}
                           name={"s_tip_monext"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "describe"})}/>
                </div>
            </div>

            <div className="row">
                <div className="col-8 questions-peps">
                    {intl.formatMessage({id: "form_financial_bill_foreign_currency"})}</div>
                    <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_cuent_ext" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                {/* <div className="col-3 toggle-peps">
                    <Toggle key={"s_cuent_ext"}/></div> */}
            </div>
            <div className={"row"}>
                <div className="col-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_bank_foreign_currency"})}</div>
                    <Field id={"s_cuen_extban"}
                           name={"s_cuen_extban"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_bank_foreign_currency"})}/>
                </div>
                <div className="col-4">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_number_foreign_currency"})}</div>
                    <Field id={"s_cuen_extnum"}
                           name={"s_cuen_extnum"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_number_foreign_currency"})}/>
                </div>
            </div>
            <div className={"row"}>
                <div className="col-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_country_foreign_currency"})}</div>
                    <Field id={"s_cuen_extpais"}
                           name={"s_cuen_extpais"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_country_foreign_currency"})}/>
                </div>
                <div className="col-4">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_city_foreign_currency"})}</div>
                    <Field id={"s_cuen_extciudad"}
                           name={"s_cuen_extciudad"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_city_foreign_currency"})}/>
                </div>
            </div>
            <div className={'row'}>
                <div className="col-3"/>
                <div className="col-2">
                    <br/>
                    <div className={"form-know-you-item-button"} onClick={() => setModalShow(true)}>
                        {intl.formatMessage({id: "button_answer"})}
                    </div>
                </div>
            </div>
            <FormPeps 
                show={modalShow}
                errors={errors}
                values={values}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}