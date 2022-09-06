import { Field } from "formik";
import {useIntl} from "react-intl";
import { Switch } from 'formik-mui';
import './financial-info.scss';

interface FormPepsMobileProps {
    typeIdentification?: string,
    identification?: string,
    requestNumber?: string
    errors?: any;
    values?: any;
}

export function FormPepsMobile(props: FormPepsMobileProps) {
    const {errors, values} = props;
    const intl = useIntl();
    return (
        <div className={'row'}>
            <div className={"title-peps-form-mobile"}>{intl.formatMessage({id: "form_financial_pep_title"})}<br/></div>
            <div
                className={"subtitle-peps-form-mobile"}>{intl.formatMessage({id: "form_financial_pep_subtitle"})}</div>
            <div className={'row'}>
                <div className="col-8 questions-peps-mobile">{intl.formatMessage({id: "peps_question_1"})}</div>
                <div className="col-1 toggle-peps-mobile">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_recpublic" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                {/* <div className="col-1 toggle-peps-mobile"><Toggle key={"s_pep_recpublic"}/></div> */}
            </div>
            <div className={'row'}>
                <div className="col-8 questions-peps-mobile">{intl.formatMessage({id: "peps_question_2"})}</div>
                <div className="col-1 toggle-peps-mobile">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_poderpublic" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>

                {/* <div className="col-1 toggle-peps-mobile"><Toggle  key={"s_pep_poderpublic"}/></div> */}
            </div>
            <div className={'row'}>
                <div className="col-8 questions-peps-mobile">{intl.formatMessage({id: "peps_question_3"})}</div>
                <div className="col-1 toggle-peps-mobile">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_reconpublic" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>

                {/* <div className="col-1 toggle-peps-mobile"><Toggle  key={"s_pep_reconpublic"}/></div> */}
            </div>
            <div className={'row'}>
                <div className="col-8 questions-peps-mobile">{intl.formatMessage({id: "peps_question_4"})}</div>
                <div className="col-1 toggle-peps-mobile">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_pubexpue" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>

                {/* <div className="col-1 toggle-peps-mobile"><Toggle  key={"s_pep_pubexpue"}/></div> */}
            </div>
            <div className={'row'}>
                <div className="col-8 questions-peps-mobile">{intl.formatMessage({id: "peps_question_5"})}</div>
                <div className="col-1 toggle-peps-mobile">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_seggraconsa" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>

                {/* <div className="col-1 toggle-peps-mobile"><Toggle  key={"s_pep_seggraconsa"}/></div> */}
            </div>
            <div className={'row'}>
                <div className="col-12">
                    <div
                        className={"label-fields-peps-mobile"}>{intl.formatMessage({id: "placeholder_field_name"})}</div>
                    <Field id={"s_pep_nompepseg"}
                           name={"s_pep_nompepseg"}
                           className={'form-know-you-item-input-mobile-x2'}
                           placeholder={intl.formatMessage({id: "placeholder_field_name"})}/>
                </div>
            </div>
            <div className={'row'}>
                <div className="col-12">
                    <div className={"label-fields-peps-mobile"}>{intl.formatMessage({id: "relationship"})}</div>
                    <Field id={"s_pep_paren"}
                           name={"s_pep_paren"}
                           className={'form-know-you-item-input-mobile-x2'}
                           placeholder={intl.formatMessage({id: "relationship"})}/>
                </div>
            </div>
            <div className={'row'}>
                <div className="col-12">
                    <div
                        className={"label-fields-peps-mobile"}>{intl.formatMessage({id: "identification_card"})}</div>
                    <Field id={"s_pep_identif"}
                           name={"s_pep_identif"}
                           className={'form-know-you-item-input-mobile-x2'}
                           placeholder={intl.formatMessage({id: "identification_card"})}/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    )
}