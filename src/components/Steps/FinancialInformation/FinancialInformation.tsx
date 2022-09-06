import {Box, Fab, Grid} from "@mui/material";
import {useState} from "react";
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {MessageUtils} from "../../../assets/translations/strings/messages";
import {PepsInformationModal} from "./PepsInformation/PepsInformationModal";
import "./FinancialInformation.scss";
import { Field } from "formik";
import {
    Switch
  } from 'formik-mui';

interface FinancialInformationProps {
    errors?: any;
    values?: any;
}

export function FinancialInformation(_props: FinancialInformationProps) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Box>
                <Grid container>
                    <Grid item xs={12} md={12} xl={12}>
                        <h1 className="title-red">{MessageUtils["form_financial_information_title"]}</h1>
                        <h3 className="sub-title">{MessageUtils["form_credit_information_subtitle"]}</h3>
                    </Grid>
                </Grid>
                <br/>
            </Box>
            <Form>
                <div className="flex-container-financial">
                    <div className="flex-financial-item-left">
                        <h3 className="sub-title-left">{MessageUtils["form_financial_information_subtitle"]}</h3>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="main_income">
                                        {MessageUtils["form_financial_main_income"]}
                                    </Label>
                                    <Field
                                        className="form-control-application"
                                        id="s_ingreso_principal"
                                        name="s_ingreso_principal"
                                        placeholder="$"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                          
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="s_otros_ingresos">
                                        {MessageUtils["form_financial_other_income"]}
                                    </Label>
                                    <Field
                                        className="form-control-application"
                                        id="s_otros_ingresos"
                                        name="s_otros_ingresos"
                                        placeholder="$"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={6}>
                            <FormGroup>
                            <Label className="label-form" for="s_otros_egresos">
                                {MessageUtils["form_financial_expenditure_value"]}
                            </Label>
                            <Field
                                className="form-control-application"
                                id="s_otros_egresos"
                                name="s_otros_egresos"
                                placeholder="$"
                                type="text"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label className="label-form" for="s_arriendo">
                                {'Arriendo'}
                            </Label>
                            <Field
                                className="form-control-application"
                                id="s_arriendo"
                                name="s_arriendo"
                                placeholder="$"
                                type="text"
                            />
                        </FormGroup>
                        </Col>
                        </Row>
                        <FormGroup>
                            <Field
                                className="form-control-application"
                                id="s_concep_otr_ingre"
                                name="s_concep_otr_ingre"
                                placeholder={MessageUtils["form_financial_other_income_placeholder"]}
                                type="textarea"
                            />
                        </FormGroup>
                        <h3 className="sub-title-left">{MessageUtils["form_financial_applicant_properties"]}</h3>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="income_tax_filer">
                                        {MessageUtils["form_financial_income_tax_filer"]}
                                    </Label>
                                    <br/>
                                    <div className="label-form">{'SI'}<Field name="s_declarante_ren" component={Switch} type="checkbox"/>{'NO'}</div>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                    <div className="flex-financial-item-right">
                        <h3 className="sub-title-left">{MessageUtils["form_financial_operations_title"]}</h3>
                        <br/>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <div className="label-form">{MessageUtils["form_financial_foreign_currency"]}</div>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                <div className="label-form">{'SI'}<Field name="s_moneda_ext" component={Switch} type="checkbox"/>{'NO'}</div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="s_monext_oper">
                                        {MessageUtils["form_financial_foreign_currency_which"]}
                                    </Label>
                                    <Field
                                        className="form-control-application"
                                        id="s_monext_oper"
                                        name="s_monext_oper"
                                        placeholder="Describe"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="s_tip_monext">
                                        {MessageUtils["form_financial_currency"]}
                                    </Label>
                                    <Field
                                        className="form-control-application"
                                        id="s_tip_monext"
                                        name="s_tip_monext"
                                        placeholder="Describe"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <div
                                        className="label-form">{MessageUtils["form_financial_bill_foreign_currency"]}</div>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                <div className="label-form">{'SI'}<Field name="s_cuent_ext" component={Switch} type="checkbox" />{'NO'}</div>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="foreign_currency_which">
                                        {MessageUtils["form_financial_bank_foreign_currency"]}
                                    </Label>
                                    <Field
                                        className="form-control-application"
                                        id="s_cuen_extban"
                                        name="s_cuen_extban"
                                        placeholder={MessageUtils["form_financial_bank_foreign_currency"]}
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="number_foreign_currency">
                                        {MessageUtils["form_financial_number_foreign_currency"]}
                                    </Label>
                                    <Field
                                        className="form-control-application"
                                        id="s_cuen_extnum"
                                        name="s_cuen_extnum"
                                        placeholder={MessageUtils["form_financial_number_foreign_currency"]}
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="s_cuen_extpais">
                                        {MessageUtils["form_financial_country_foreign_currency"]}
                                    </Label>
                                    <Field
                                        className="form-control-application"
                                        id="s_cuen_extpais"
                                        name="s_cuen_extpais"
                                        placeholder={MessageUtils["form_financial_country_foreign_currency"]}
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label className="label-form" for="s_cuen_extciudad">
                                        {MessageUtils["form_financial_city_foreign_currency"]}
                                    </Label>
                                    <Field
                                        className="form-control-application"
                                        id="s_cuen_extciudad"
                                        name="s_cuen_extciudad"
                                        placeholder={MessageUtils["form_financial_city_foreign_currency"]}
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Fab className="form-control-small-button" variant="extended" size="medium" color="error"
                             aria-label="add" onClick={toggle}>
                            {MessageUtils["button_answer"]}
                        </Fab>
                    </div>
                </div>
            </Form>
            <PepsInformationModal show={modal} handleClose={toggle}/>
        </div>
    )
}