import {Modal} from "react-bootstrap";
import {Field} from "formik";
import {typeIdentification} from "../../../../__mocks__/data";
import {useIntl} from "react-intl";

interface ModalReferences {
    show: boolean;
    onHide: () => void;
    errors?: any;
    values?: any;
}

export function ModalReferences(props: ModalReferences) {
    const {} = props;
    const handleSaveReference = () => {
        alert('Añadiendo refeerence');
    }
    const intl = useIntl();
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-center"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <div className="title-modal-spouse">
                        {intl.formatMessage({id: "spouse_data"})}
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'row'}>
                    <div className="row">
                        <div className="col">
                            <div
                                className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "relationship"})}</div>
                            <Field as="select"
                                   className={'form-know-you-item-input-medium'}
                                   name="s_ref_parentes">
                                <option>{intl.formatMessage({id: "relationship"})}</option>
                                <option value={'PADRE'}>{'PADRE'}</option>
                                <option value={'MADRE'}>{'MADRE'}</option>
                                <option value={'HIJO(A)'}>{'HIJO(A)'}</option>
                                <option value={'HERMANO(A)'}>{'HERMANO(A)'}</option>
                                <option value={'ABUELO(A)'}>{'ABUELO(A)'}</option>
                                <option value={'TIO(A)'}>{'TIO(A)'}</option>
                            </Field>
                        </div>
                        <div className="col">
                            <div
                                className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_identification_type"})}</div>
                            <Field as="select"
                                   className={'form-know-you-item-input-medium'}
                                   name="s_ref_tipo">
                                <option>{intl.formatMessage({id: "relationship"})}</option>
                                <option value={'1'}>{'PADRE'}</option>
                                <option value={'2'}>{'MADRE'}</option>
                            </Field>
                        </div>
                        <div className="col">
                            <div
                                className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "identification_spouse"})}</div>
                            <Field id={"Pws_Con_identif"}
                                   name={"Pws_Con_identif"}
                                   className={'form-know-you-item-input-xs display-flex'}
                                   placeholder={intl.formatMessage({id: "enter"})}/></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div
                                className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_phone_1"})}</div>
                            <Field id={"Pws_Con_tel"}
                                   name={"Pws_Con_tel"}
                                   className={'form-know-you-item-input-xs display-flex'}
                                   placeholder={intl.formatMessage({id: "placeholder_phone_1"})}/></div>
                        <div className="col">
                            <div
                                className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_phone_2"})}</div>
                            <Field id={"Pws_Con_tel"}
                                   name={"Pws_Con_tel"}
                                   className={'form-know-you-item-input-xs display-flex'}
                                   placeholder={intl.formatMessage({id: "placeholder_phone_2"})}/>
                            <br/>
                        </div>
                        <div className="col"/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={"form-know-you-item-button"} onClick={props.onHide}>
                                {intl.formatMessage({id: "button_cancel"})}
                            </div>
                        </div>
                        <div className="col">

                        </div>
                        <div className="col">
                            <div className={"form-know-you-item-button-gray"} onClick={handleSaveReference}>
                                {intl.formatMessage({id: "button_continue"})}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}