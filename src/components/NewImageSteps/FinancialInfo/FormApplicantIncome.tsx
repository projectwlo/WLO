import { Field } from "formik";
import {useIntl} from "react-intl";
import './financial-info.scss';
import { Switch } from 'formik-mui';


interface FormApplicantIncomeProps {
    errors?: any;
    values?: any;
}

export function FormApplicantIncome(props: FormApplicantIncomeProps) {
    const {errors, values} = props;
    const intl = useIntl();
    return (
        <div className={"row"}>
            <div className="row">
                <div className={"subtitle-medium display-flex"}>{intl.formatMessage({id: "form_financial_information_subtitle"})}</div>
                <br/>
                <br/>
            </div>
            <div className={"row"}>
                <div className="col-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_main_income"})}</div>
                    <Field id={"s_ingreso_principal"}
                           name={"s_ingreso_principal"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "placeholder_initial_quote_symbol"})}/>
                </div>
                <div className="col-4">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_other_income"})}</div>
                    <Field id={"s_otros_ingresos"}
                           name={"s_otros_ingresos"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "placeholder_initial_quote_symbol"})}/>
                </div>
            </div>
            <div className={"row"}>
                <div className="col-5">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_expenditure_value"})}</div>
                    <Field id={"s_otros_egresos"}
                           name={"s_otros_egresos"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "placeholder_initial_quote_symbol"})}/>
                </div>
                <div className="col-4">
                    <div
                        className={"label-fields-peps"}>{intl.formatMessage({id: "rental_value"})}</div>
                    <Field id={"s_arriendo"}
                           name={"s_arriendo"}
                           className={'form-know-you-item-input-smaller display-flex'}
                           placeholder={intl.formatMessage({id: "placeholder_initial_quote_symbol"})}/>
                </div>
            </div>
            <div className={"row"}>
                <div className="col-8">
                    <br/>
                    <Field id={"s_concep_otr_ingre"}
                           name={"s_concep_otr_ingre"}
                           className={'form-know-you-item-input-text-area display-flex'}
                           placeholder={intl.formatMessage({id: "form_financial_other_income_placeholder"})}/>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className={"subtitle-medium display-flex"}>{intl.formatMessage({id: "form_financial_applicant_properties"})}</div>
            <br/>
            </div>
            <div className="row">
                <div
                    className={"label-fields-peps"}>{intl.formatMessage({id: "form_financial_income_tax_filer"})}</div>
                    <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_declarante_ren" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
             
                {/* <div className="col-3"><Toggle key={"s_declarante_ren"}/></div> */}
            </div>
        </div>
    )
}