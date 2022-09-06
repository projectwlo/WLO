import '../financial-info.scss';
import {useIntl} from "react-intl";
import {Modal} from "react-bootstrap";
import { Field } from 'formik';
import { Switch } from 'formik-mui';
import { WLOCreditAPIService } from '../../../../services';

interface FormPepsProps {
    typeIdentification?: string,
    identification?: string,
    requestNumber?: string
    show: boolean;
    onHide: () => void;
    errors?: any;
    values?: any;
}


export function FormPeps(props: FormPepsProps) {
    const {errors, values} = props;
    const intl = useIntl();

    const handleSavePeps = async () => {
        console.log('values', values)
        const numSolicitud = localStorage.getItem('Pws_Num_solicitud') as string;
        const peps = {
            s_num_solicitud: numSolicitud,
            s_identificacion: values.Pws_Identificacion,
            s_tipo_identificacion: values.Pws_Tip_Identificacion,
            s_pep_recpublic: values.s_pep_recpublic ? "1" : "0",
            s_pep_poderpublic: values.s_pep_poderpublic ? "1" : "0",
            s_pep_reconpublic: values.s_pep_reconpublic ? "1" : "0",
            s_pep_pubexpue: values.s_pep_pubexpue ? "1" : "0",
            s_pep_seggraconsa: values.s_pep_seggraconsa ? "1" : "0",
            s_pep_nompepseg: values.s_pep_nompepseg,
            s_pep_paren: values.s_pep_paren,
            s_pep_identif: values.s_pep_identif,
        }

        const result = await WLOCreditAPIService.addPeps(peps);
        console.log(result);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className={'row'}>
                    <div className={'row'}>
                        <div className="col-8 questions-peps">{intl.formatMessage({id: "peps_question_1"})}</div>
                        <div className="col-1"/>
                        <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_recpublic" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                    </div>
                    <div className={'row'}>
                        <div className="col-8 questions-peps">{intl.formatMessage({id: "peps_question_2"})}</div>
                        <div className="col-1"/>
                        <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_poderpublic" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                    </div>
                    <div className={'row'}>
                        <div className="col-8 questions-peps">{intl.formatMessage({id: "peps_question_3"})}</div>
                        <div className="col-1"/>
                        <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_reconpublic" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                    </div>
                    <div className={'row'}>
                        <div className="col-8 questions-peps">{intl.formatMessage({id: "peps_question_4"})}</div>
                        <div className="col-1"/>
                        <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_pubexpue" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                    </div>
                    <div className={'row'}>
                        <div className="col-8 questions-peps">{intl.formatMessage({id: "peps_question_5"})}</div>
                        <div className="col-1"/>
                        <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field name="s_pep_seggraconsa" component={Switch} type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                    </div>
                    <div className={'row'}>
                        <div className={"flex-container-peps"}>
                            <div className={"flex-container-peps-left"}>
                                <div
                                    className={"label-fields-peps"}>{intl.formatMessage({id: "placeholder_field_name"})}</div>
                                <Field id={"s_pep_nompepseg"}
                                       name={"s_pep_nompepseg"}
                                       className={'form-know-you-item-input-medium'}
                                       placeholder={intl.formatMessage({id: "placeholder_field_name"})}/>
                            </div>
                            <div className={"flex-container-peps-left"}>
                                <div className={"label-fields-peps"}>{intl.formatMessage({id: "relationship"})}</div>
                                <Field as="select"
                                          className={'form-know-you-item-input-medium'}
                                           name="s_pep_paren">
                                        <option>{intl.formatMessage({id: "relationship"})}</option>
                                        <option value={'PADRE'}>{'PADRE'}</option>
                                        <option value={'MADRE'}>{'MADRE'}</option>
                                        <option value={'HIJO(A)'}>{'HIJO(A)'}</option>
                                        <option value={'HERMANO(A)'}>{'HERMANO(A)'}</option>
                                        <option value={'ABUELO(A)'}>{'ABUELO(A)'}</option>
                                        <option value={'TIO(A)'}>{'TIO(A)'}</option>
                                    </Field>
                            </div>
                            <div className={"flex-container-peps-left"}>
                                <div
                                    className={"label-fields-peps"}>{intl.formatMessage({id: "identification_card"})}</div>
                                <Field id={"s_pep_identif"}
                                       name={"s_pep_identif"}
                                       className={'form-know-you-item-input-xs'}
                                       placeholder={intl.formatMessage({id: "identification_card"})}/>
                            </div>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className="col-4"/>
                        <div className="col-4 questions-peps">
                            <div className={"form-know-you-item-button"} onClick={handleSavePeps}>
                                {intl.formatMessage({id: "button_continue"})}
                            </div>
                        </div>
                        <div className="col-3"/>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}