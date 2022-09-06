import {Fab} from "@mui/material";
import { Field } from "formik";
import _ from "lodash";
import toast from "react-hot-toast";
import {Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import { WLOCreditAPIService } from "../../../../services";
import { typeIdentification } from "../../../../__mocks__/data";
import './SpouseInformation.scss';

interface SpouseInformationProps {
    show: boolean;
    handleClose: () => any;
    errors?: any;
    values?: any;
}

export function SpouseInformation(props: SpouseInformationProps) {
    const {show, handleClose, errors, values} = props;
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
            }
            else {
                toast.error('Debe seleccionar una opción del combo Estado Civil');
            }
        }
    }

    return (
        <div>
            <Modal size="lg" style={{maxWidth: '800px', width: '80%', height: '623px'}} isOpen={show}
                   toggle={handleClose}>
                <ModalHeader toggle={handleClose}>
                    <div className="title-modal-conyuge">{'Datos del cónyugue'}</div>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <div className="flex-flex-container-peps">
                            <div className="flex-item-left-peps">
                                <Row>
                                    <Col md={5}><FormGroup>
                                        <Label className="label-form" for="Pws_Con_nomsol">
                                            {'Nombre completo (Cónyugue)'}
                                        </Label>
                                        <Field
                                            id="Pws_Con_nomsol"
                                            className='form-control-application'
                                            name="Pws_Con_nomsol"
                                            placeholder={errors.Pws_Con_nomsol ? errors.Pws_Con_nomsol : "Nombre completo"}
                                            type="text"
                                        />
                                    </FormGroup></Col>
                                    <Col md={3}><FormGroup>
                                        <Label className="label-form" for="Pws_Con_Tip_identif">
                                            {'Tipo Documento'}
                                        </Label>
                                        <Field as="select"
                                      className='form-control-application'
                                       name="Pws_Con_Tip_identif">
                                    <option>{errors.Pws_Con_Tip_identif ? errors.Pws_Con_Tip_identif : 'Seleccione...'}</option>
                                    {typeIdentification && typeIdentification.WS_TIPOS_IDENTIFICACION_IResult.LstTiposIdent.Datos_TiposIdentificacion.map((item) => {
                                        return (
                                            <option value={item.s_codigo}>{item.s_descripcion}</option>
                                        )
                                    })}
                                </Field>
                                    </FormGroup></Col>
                                    <Col md={3}><FormGroup>
                                        <Label className="label-form" for="Pws_Con_identif">
                                            {'Identificación (Cónyugue)'}
                                        </Label>
                                        <Field
                                            id="Pws_Con_identif"
                                            className='form-control-application'
                                            name="Pws_Con_identif"
                                            placeholder={errors.Pws_Con_identif ? errors.Pws_Con_identif : "Número"}
                                            type="text"
                                        />
                                    </FormGroup></Col>
                                </Row>
                                <Row>
                                    <Col md={5}><FormGroup>
                                        <Label className="label-form" for="Pws_Con_tel">
                                            {'Teléfono 1'}
                                        </Label>
                                        <Field
                                            id="Pws_Con_tel"
                                            className='form-control-application'
                                            name="Pws_Con_tel"
                                            placeholder={errors.Pws_Con_tel ? errors.Pws_Con_tel : "Teléfono 1"}
                                            type="text"
                                        />
                                    </FormGroup></Col>
                                    <Col md={5}><FormGroup>
                                        <Label className="label-form" for="Pws_Con_tel_2">
                                            {'Teléfono 2'}
                                        </Label>
                                        <Field
                                            id="Pws_Con_tel_2"
                                            className='form-control-application'
                                            name="Pws_Con_tel_2"
                                            placeholder={'Teléfono 2'}
                                            type="text"
                                        />
                                    </FormGroup></Col>
                                </Row>
                                <Row>
                                    <Col md={4}><Fab className="form-control-small-button" variant="extended"
                                                     size="medium" color="error" aria-label="add">
                                        {'Cancelar'}
                                    </Fab><FormGroup>
                                    </FormGroup></Col>
                                    <Col md={4}><FormGroup>
                                    </FormGroup></Col>
                                    <Col md={4}><Fab className="form-control-small-button" variant="extended"
                                                     size="medium" color="neutral" aria-label="add" onClick={handleSaveConyugue}>
                                        {'Siguiente'}
                                    </Fab><FormGroup>
                                    </FormGroup></Col>
                                </Row>
                            </div>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}