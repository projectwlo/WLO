import { Field } from "formik";
import {useIntl} from "react-intl";
import {FormPepsMobile} from "./FormPepsMobile";
import { Switch } from 'formik-mui';

interface FormApplicantFinancialOperationsMobileProps {
    errors?: any;
    values?: any;
}

export function FormApplicantFinancialOperationsMobile(props: FormApplicantFinancialOperationsMobileProps) {
    const {errors, values} = props;
    const intl = useIntl();

    return (
        <div className={"row container-border"}>
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
                <div className="col-5-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_foreign_currency_which"})}</div>
                    <Field id={"s_monext_oper"}
                           name={"s_monext_oper"}
                           className={'form-know-you-item-input-xxs-mobile display-flex'}
                           placeholder={intl.formatMessage({id: "describe"})}/>
                </div>
                <div className="col-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_currency"})}</div>
                    <Field id={"s_tip_monext"}
                           name={"s_tip_monext"}
                           className={'form-know-you-item-input-xxs-mobile display-flex'}
                           placeholder={intl.formatMessage({id: "describe"})}/>
                </div>
            </div>

            <div className="row">
                <div className="col-8 questions-peps">
                    {intl.formatMessage({id: "form_financial_bill_foreign_currency"})}</div>
                    <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_cuent_ext" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
               {/*  <div className="col-3 toggle-peps">
                    <Toggle key={"s_cuent_ext"}/></div> */}
            </div>
            <div className={"row"}>
                <div className="col-5-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_bank_foreign_currency"})}</div>
                    <Field id={"s_cuen_extban"}
                           name={"s_cuen_extban"}
                           className={'form-know-you-item-input-xxs-mobile display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_bank_foreign_currency"})}/>
                </div>
                <div className="col-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_number_foreign_currency"})}</div>
                    <Field id={"s_cuen_extnum"}
                           name={"s_cuen_extnum"}
                           className={'form-know-you-item-input-xxs-mobile display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_number_foreign_currency"})}/>
                </div>
            </div>
            <div className={"row"}>
                <div className="col-5-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_country_foreign_currency"})}</div>
                    <Field id={"s_cuen_extpais"}
                           name={"s_cuen_extpais"}
                           className={'form-know-you-item-input-xxs-mobile display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_country_foreign_currency"})}/>
                </div>
                <div className="col-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_city_foreign_currency"})}</div>
                    <Field id={"s_cuen_extciudad"}
                           name={"s_cuen_extciudad"}
                           className={'form-know-you-item-input-xxs-mobile display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_city_foreign_currency"})}/>
                    <br/>
                </div>
            </div>
            <FormPepsMobile/>
        </div>
    )
}