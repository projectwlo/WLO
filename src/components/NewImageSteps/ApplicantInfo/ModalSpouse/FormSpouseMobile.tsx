import {useIntl} from "react-intl";
import {Modal} from "react-bootstrap";
import toast from "react-hot-toast";
import {WLOCreditAPIService} from "../../../../services";
import * as _ from 'lodash';
import {Field} from "formik";
import {typeIdentification} from "../../../../__mocks__/data";

interface FormSpouseMobileProps {
    typeIdentification?: string,
    identification?: string,
    requestNumber?: string,
    show: boolean;
    onHide: () => void;
    errors?: any;
    values?: any;
}

export function FormSpouseMobile(props: FormSpouseMobileProps) {
    const {show, onHide, errors, values} = props;
    const intl = useIntl();
    const handleSaveConyugue = async () => {
        if (!_.isEmpty(values.Pws_Con_Tip_identif!) || !_.isEmpty(values.Pws_Con_nomsol!) || !_.isEmpty(values.Pws_Con_identif!) || !_.isEmpty(values.Pws_Con_tel!)) {
            if (values.Pws_Estado_Civil === "1") {
                const numSolicitud = localStorage.getItem('Pws_Num_solicitud') as string;
                const conyugue = {
                    Pws_Num_solicitud: numSolicitud,
                    Pws_Identificacion: values.Pws_Identificacion,
                    Pws_Tip_Identificacion: values.Pws_Tip_Identificacion,
                    Pws_Con_Tip_identif: values.Pws_Con_Tip_identif,
                    Pws_Con_nomsol: values.Pws_Con_nomsol,
                    Pws_Con_identif: values.Pws_Con_identif,
                    Pws_Con_tel: values.Pws_Con_tel,
                }
                const result = await WLOCreditAPIService.addConyugue(conyugue)
                if (result.payload.result === "1") {
                    toast.success('Se ha guardado de manera exitosa');
                }
            } else {
                toast.error('Debe seleccionar una opción del combo Estado Civil');
            }
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
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
                                className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "full_name_spouse"})}</div>
                            <input id={"Pws_Con_nomsol"}
                                   name={"Pws_Con_nomsol"}
                                   className={'form-know-you-item-input-mobile-x3 display-flex'}
                                   placeholder={intl.formatMessage({id: "enter"})}/></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div
                                className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_identification_type"})}</div>
                            <Field as="select"
                                   id={"Pws_Con_Tip_identif"}
                                   name={"Pws_Con_Tip_identif"}
                                   className={'form-know-you-item-input-xxs display-flex'}>
                                <option>{errors && errors.Pws_Tip_Identificacion ? errors.Pws_Tip_Identificacion : intl.formatMessage({id: "enter"})}</option>
                                {typeIdentification && typeIdentification.WS_TIPOS_IDENTIFICACION_IResult.LstTiposIdent.Datos_TiposIdentificacion.map((item) => {
                                    return (
                                        <option value={item.s_codigo}>{item.s_descripcion}</option>
                                    )
                                })}
                            </Field>
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
                                   className={'form-know-you-item-input-mobile-x3 display-flex'}
                                   placeholder={intl.formatMessage({id: "enter"})}/></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div
                                className={"label-fields-peps-mobile display-flex"}>{intl.formatMessage({id: "placeholder_phone_2"})}</div>
                            <Field id={"Pws_Con_tel"}
                                   name={"Pws_Con_tel"}
                                   className={'form-know-you-item-input-mobile-x3 display-flex'}
                                   placeholder={intl.formatMessage({id: "enter"})}/>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"/>
                        <div className="col">
                            <div className={"form-know-you-item-button-gray"} onClick={handleSaveConyugue}>
                                {intl.formatMessage({id: "button_continue"})}
                            </div>
                        </div>
                        <div className="col"/>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}