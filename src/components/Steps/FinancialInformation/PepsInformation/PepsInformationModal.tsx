import {Fab} from "@mui/material";
import { Field } from "formik";
import { Switch } from "formik-mui";
import {Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import { WLOCreditAPIService } from "../../../../services";
import "./PepsInformationModal.scss";

interface PepsInformationProps {
    show: boolean;
    handleClose: () => any;
    errors?: any;
    values?: any;
}

export function PepsInformationModal(props: PepsInformationProps) {
    const {show, handleClose, values, errors} = props;
    
    const handleSavePeps = async () => {
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
    }
    
    return (
        <div>
            <Modal size="lg" style={{maxWidth: '800px', width: '80%', height: '623px'}} isOpen={show}
                   toggle={handleClose}>
                <ModalHeader toggle={handleClose}> </ModalHeader>
                <ModalBody>
                    <Form>
                        <div className="flex-flex-container-peps">
                            <div className="flex-item-left-peps">
                                <Row>
                                    <Col md={10}>
                                        <div
                                            className="text-question">{'¿Por tu cargo manejas recursos públicos?'}</div>
                                    </Col>
                                    <Col md={2}>
                                    <div className="label-form">{'SI'}<Field name="s_pep_recpublic" component={Switch} type="checkbox"/>{'NO'}</div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col md={10}>
                                        <div
                                            className="text-question">{'¿Por tu cargo o actividad ejerces algún grado de poder público?'}</div>
                                    </Col>
                                    <Col md={2}>
                                    <div className="label-form">{'SI'}<Field name="s_pep_poderpublic" component={Switch} type="checkbox"/>{'NO'}</div>

                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col md={10}>
                                        <div className="text-question">{'¿Gozas de reconocimiento público?'}</div>
                                    </Col>
                                    <Col md={2}>
                                    <div className="label-form">{'SI'}<Field name="s_pep_reconpublic" component={Switch} type="checkbox"/>{'NO'}</div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col md={10}>
                                        <div
                                            className="text-question">{'Tienes algún vínculo con una persona considerada públicamente expuesta?'}</div>
                                    </Col>
                                    <Col md={2}>
                                    <div className="label-form">{'SI'}<Field name="s_pep_pubexpue" component={Switch} type="checkbox"/>{'NO'}</div>

                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col md={10}>
                                        <div
                                            className="text-question">{'¿Tienes 2° de afinidad y 2° de consanguinidad (Padres, hermanos, esposa, primos, suegros, cuñados o concuñados) con PEP?'}</div>
                                    </Col>
                                    <Col md={2}>
                                    <div className="label-form">{'SI'}<Field name="s_pep_seggraconsa" component={Switch} type="checkbox"/>{'NO'}</div>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col md={4}><FormGroup>
                                        <Label className="label-form" for="foreign_currency_which">
                                            {'Nombres y apellidos'}
                                        </Label>
                                        <Field
                                            className='form-control-application'
                                            id="s_pep_nompepseg"
                                            name="s_pep_nompepseg"
                                            placeholder={'Nombres y apellidos'}
                                            type="text"
                                        />
                                    </FormGroup></Col>
                                    <Col md={4}><FormGroup>
                                        <Label className="label-form" for="s_pep_paren">
                                            {'Parentesco'}
                                        </Label>
                                        <Field as="select"
                                           className='form-control-application'
                                           name="s_pep_paren">
                                        <option>{'Parentesco'}</option>
                                        <option value={'1'}>{'Hermano'}</option>
                                        <option value={'2'}>{'Padre'}</option>
                                        <option value={'3'}>{'Madre'}</option>
                                        <option value={'4'}>{'Abuelo'}</option>
                                        <option value={'5'}>{'Tio'}</option>
                                        <option value={'6'}>{'Hijo'}</option>
                                    </Field>
                                    </FormGroup></Col>
                                    <Col md={4}><FormGroup>
                                        <Label className="label-form" for="s_pep_identif">
                                            {'Cédula'}
                                        </Label>
                                        <Field
                                            className='form-control-application'
                                            id="s_pep_identif"
                                            name="s_pep_identif"
                                            placeholder={'Cédula'}
                                            type="text"
                                        />
                                    </FormGroup></Col>
                                </Row>
                                <Row>
                                    <Col md={5}><FormGroup>
                                    </FormGroup></Col>
                                    <Col md={4}><FormGroup>
                                        <Fab className="form-control-small-button" variant="extended" size="medium"
                                             color="error" aria-label="add">
                                            {'Continuar'}
                                        </Fab>
                                    </FormGroup></Col>
                                    <Col md={4}><FormGroup>
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