import Fab from '@mui/material/Fab';
import {MessageUtils} from "../../../assets/translations/strings/messages";
import './credit-information.scss';
import {Col, Label, Row} from "reactstrap";
import {Chip} from "@mui/material";
import {terms, typeCredit, typeIdentification} from '../../../__mocks__/data';
import {Desktop, Mobile, Tablet} from "../../../utils/breakpoints";
import {Field, FormikErrors} from "formik";
import React from 'react';
import * as _ from 'lodash';
import {WLOCreditAPIService} from '../../../services';
import toast from 'react-hot-toast';
import {useIntl} from "react-intl";

interface CreditInformationProps {
    errors?: any;
    values?: any;
}

export function CreditInformation(props: CreditInformationProps) {
    const {errors} = props;
    const intl = useIntl();
    const [valueQuote, setValueQuote] = React.useState('');
    const [valueToFinance, setValueToFinance] = React.useState(0);
    let solicitud = JSON.parse(localStorage.getItem('solitudInfo') as string);
    const handleSearch = async () => {
        if (!_.isEmpty(solicitud.Pws_Tip_Identificacion!) || !_.isEmpty(solicitud.Pws_Identificacion!)) {
            const person = await WLOCreditAPIService.consultaSolicitud({
                Pws_Tip_Identificacion: solicitud.Pws_Tip_Identificacion!,
                Pws_Identificacion: solicitud.Pws_Identificacion!
            });
            if (person.payload.result === "1") {
                localStorage.setItem('person', JSON.stringify(person.payload.data.datos_persona.Datos_persona[0]))
            }
            else {
                localStorage.setItem('person', JSON.stringify(person))
            }
        }
    }
    const handleCalculatedQuote = async () => {
        const montoVehiculo = localStorage.getItem('R_s_precio_comer') as string;
        let montoVehiculoValidated: number = montoVehiculo ? +montoVehiculo : 0;
        let plazo: string;
        if (solicitud) {
            if (_.isEmpty(solicitud.credit_option!) || _.isEmpty(solicitud.Pws_Val_pla!) || _.isEmpty(solicitud.Pws_Val_cuoini!)) {
                toast.error('Debe indicar los valores [Opción de Crédito, Plazo y Valor cuota inicial] para poder calcular');
            }
            else {
                plazo = "mensual";
                const simulador = await WLOCreditAPIService.getSimulador({
                    pws_monto: montoVehiculo,
                    pws_nro_cuotas: "5",
                    pws_fecha_sol: new Date().toDateString(),
                    pws_cod_credi: "1",
                    pws_form_plazo: plazo,
                    pws_identific: solicitud.Pws_Identificacion,
                    pws_form_periodic: plazo
                });
                const valorToFinanciar = parseFloat(montoVehiculo) - parseFloat(solicitud.Pws_Val_cuoini!);
                valorToFinanciar.toLocaleString('es-CO', {style: 'currency',currency: 'COP', minimumFractionDigits: 2});
                const valorQuote = simulador.payload.data.R_Val_cuota;
                valorQuote.toLocaleString('es-CO', {style: 'currency',currency: 'COP', minimumFractionDigits: 2});
                setValueToFinance(valorToFinanciar);
                setValueQuote(valorQuote);
                localStorage.setItem('valorFinanciar', valorToFinanciar.toString());
                localStorage.setItem('valorCuota', simulador.payload.data.R_Val_cuota);
                toast.success('Se ha generado un nuevo calculo de cuota');
            }
        }
    }
    const renderDesktopTablet = () => {
        return (
            <div className="flex-container">
                <div className="flex-item-left">
                    <img src={require('../../../assets/images/group254.png')} alt={''}/>
                </div>
                <div className="flex-item-right">
                    <h1 className="title-red">{intl.formatMessage({id: "form_credit_information_title"})}</h1>
                    <h3 className="sub-title">{intl.formatMessage({id: "form_credit_information_subtitle"})}</h3>
                    <Row>
                        <section>
                            <Field
                                className='form-control-credit'
                                name="Pws_Nombres"
                                placeholder={errors.Pws_Nombres ? errors.Pws_Nombres : intl.formatMessage({id: "placeholder_field_name"})}
                            />
                        </section>
                        <Col md={6}>
                            <section>
                                <Field as="select"
                                       className='form-control-50-credit'
                                       name="Pws_Tip_Identificacion">
                                    <option>{errors.Pws_Tip_Identificacion ? errors.Pws_Tip_Identificacion : intl.formatMessage({id: "placeholder_identification_type"})}</option>
                                    {typeIdentification && typeIdentification.WS_TIPOS_IDENTIFICACION_IResult.LstTiposIdent.Datos_TiposIdentificacion.map((item) => {
                                        return (
                                            <option value={item.s_codigo}>{item.s_descripcion}</option>
                                        )
                                    })}
                                </Field>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section>
                                <Field
                                    className='form-control-50-credit'
                                    name="Pws_Identificacion"
                                    onBlur={handleSearch}
                                    placeholder={errors.Pws_Identificacion ? errors.Pws_Identificacion : intl.formatMessage({id: "placeholder_identification"})}
                                />
                            </section>
                        </Col>
                        <Col md={6}>
                            <section>
                                <Field
                                    className='form-control-50-credit'
                                    name="Pws_Telefono1"
                                    placeholder={errors.Pws_Telefono1 ? errors.Pws_Telefono1 : intl.formatMessage({id: "placeholder_phone_1"})}
                                />
                            </section>
                        </Col>
                        <Col md={6}>
                            <section>
                                <Field
                                    className='form-control-50-credit'
                                    name="Pws_Telefono2"
                                    placeholder={intl.formatMessage({id: "placeholder_phone_2"})}
                                />
                            </section>
                        </Col>
                        <Col md={6}>
                            <section>
                                <Field
                                    className='form-control-50-credit'
                                    name="Pws_Correo"
                                    placeholder={errors.Pws_Correo ? errors.Pws_Correo : intl.formatMessage({id: "placeholder_mail"})}
                                />
                            </section>
                        </Col>
                        <Col md={6}>
                            <section>
                                <Field
                                    className='form-control-50-credit'
                                    name="mail_confirmation"
                                    placeholder={errors.mail_confirmation ? errors.mail_confirmation : intl.formatMessage({id: "placeholder_mail_confirmation"})}
                                />
                            </section>
                        </Col>
                        <br/>
                        <h1 className="title-message">{intl.formatMessage({id: "form_credit_information_promotion_title"})}</h1>
                        <h1 className="title-message-product-red">{localStorage.getItem('R_s_nom_prod') || ''}</h1>
                        <h1 className="title-message-price">{localStorage.getItem('R_s_precio_comer') || ''}</h1>
                        <section>
                            <Chip className={"chip-message-mobile"}
                                  label={intl.formatMessage({id: "form_credit_information_promotion_subtitle"})}
                                  color="error"/>
                        </section>
                        <br/>
                        <section>
                            <h3 className="sub-title">{intl.formatMessage({id: "option_credit"})}</h3>
                            <Field as="select"
                                   className='form-control-50-credit'
                                   name="credit_option">
                                <option>{errors.credit_option ? errors.credit_option : intl.formatMessage({id: "option_credit"})}</option>
                                {typeCredit && typeCredit.WS_LINEAS_CREDITOResult.ListLineaCredito.Datos_LineasCredito.map((item) => {
                                    return (
                                        <option value={item.s_codigo}>{item.s_nombre}</option>
                                    )
                                })}
                            </Field>
                        </section>
                        <h3 className="sub-title">{intl.formatMessage({id: "form_credit_information_selection"})}</h3>
                        <br/>
                        <Col md={6}>
                            <section>
                                <Label className="label-form" for="Pws_Val_pla">
                                    {intl.formatMessage({id: "term"})}
                                </Label>
                                <br/>
                                <Field as="select"
                                       className='form-control-50-credit'
                                       name="Pws_Val_pla">
                                    <option>{errors.Pws_Val_pla ? errors.Pws_Val_pla : intl.formatMessage({id: "term"})}</option>
                                    {terms && terms.WS_PERIODOResult.ListPerido.Datos_Periodo.map((item) => {
                                        return (
                                            <option value={item.s_codigo}>{item.s_descripcion}</option>
                                        )
                                    })}
                                </Field>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section>
                                <Label className="label-form" for="Pws_Val_cuoini">
                                {intl.formatMessage({id: "initial_quote_value"})}
                                </Label>
                                <br/>
                                <Field
                                    className='form-control-50-credit'
                                    name="Pws_Val_cuoini"
                                    placeholder={errors.Pws_Val_cuoini ? errors.Pws_Val_cuoini : intl.formatMessage({id: "initial_quote_value"})}
                                />
                            </section>
                        </Col>
                        <Col md={6}>
                            <section>
                                <Label className="label-form" for="Pws_Val_finan">
                                {intl.formatMessage({id: "value_to_finance"})}
                                </Label>
                                <br/>
                                <Field
                                    className='form-control-50-credit'
                                    name="Pws_Val_finan"
                                    disabled
                                    placeholder={intl.formatMessage({id: "value_to_finance"})}
                                    value={valueToFinance}
                                />
                            </section>
                        </Col>
                        <Col md={6}>
                            <section>
                                <Label className="label-form" for="Pws_Val_cuo">
                                {intl.formatMessage({id: "value_of_quote"})}
                                </Label>
                                <br/>
                                <Field
                                    className='form-control-50-credit'
                                    name="Pws_Val_cuo"
                                    disabled
                                    placeholder={intl.formatMessage({id: "value_of_quote"})}
                                    value={valueQuote}
                                />
                            </section>
                        </Col>
                        <br/>
                        <br/>
                        <br/>
                        <Col md={6}>
                            <section>
                                <Fab className="form-control-small-button" variant="extended"
                                     size="medium"
                                     color="error" aria-label="add" onClick={handleCalculatedQuote}>
                                    {intl.formatMessage({id: "button_calculate_quote"})} {'  '}
                                </Fab>
                            </section>
                        </Col>
                        <br/>
                        <br/>
                        <br/>
                        <Col md={6}>
                            <section>
                                <Fab className="form-control-small-button" variant="extended"
                                     size="medium"
                                     color="error" aria-label="add">
                                    {intl.formatMessage({id: "button_send_mail"})}
                                </Fab>
                            </section>
                        </Col>
                        <h3 className="sub-mobile-title">{intl.formatMessage({id: "form_credit_information_note"})}</h3>
                    </Row>

                </div>

            </div>
        )
    }
    const renderMobile = () => {
        return (
            <div>

                <Row>
                    <section>
                        <Field
                            className='form-control-mobile-credit'
                            name="Pws_Nombres"
                            placeholder={errors.Pws_Nombres ? errors.Pws_Nombres : intl.formatMessage({id: "placeholder_field_name"})}
                        />
                    </section>
                    <section>
                        <Field as="select"
                               className='form-control-mobile-credit'
                               name="Pws_Tip_Identificacion">
                            <option value={0}>{errors.Pws_Tip_Identificacion ? errors.Pws_Tip_Identificacion : intl.formatMessage({id: "placeholder_identification_type"})}</option>
                            {typeIdentification && typeIdentification.WS_TIPOS_IDENTIFICACION_IResult.LstTiposIdent.Datos_TiposIdentificacion.map((item) => {
                                return (
                                    <option value={item.s_codigo}>{item.s_descripcion}</option>
                                )
                            })}
                        </Field>
                    </section>
                    <section>
                        <Field
                            className='form-control-mobile-credit'
                            name="Pws_Identificacion"
                            onBlur={handleSearch}
                            placeholder={errors.Pws_Identificacion ? errors.Pws_Identificacion : intl.formatMessage({id: "placeholder_identification"})}
                        />
                    </section>
                    <section>
                        <Field
                            className='form-control-mobile-credit'
                            name="Pws_Telefono1"
                            placeholder={errors.Pws_Telefono1 ? errors.Pws_Telefono1 : intl.formatMessage({id: "placeholder_phone_1"})}
                        />
                    </section>
                    <section>
                        <Field
                            className='form-control-mobile-credit'
                            name="Pws_Telefono2"
                            placeholder={MessageUtils["placeholder_phone_2"]}
                        />
                    </section>
                    <section>
                        <Field
                            className='form-control-mobile-credit'
                            name="Pws_Correo"
                            placeholder={errors.Pws_Correo ? errors.Pws_Correo : intl.formatMessage({id: "placeholder_mail"})}
                        />
                    </section>
                    <section>
                        <Field
                            className='form-control-mobile-credit'
                            name="mail_confirmation"
                            placeholder={intl.formatMessage({id: "placeholder_mail_confirmation"})}
                        />
                    </section>
                    <br/>
                    <div>
                        <img src={require('../../../assets/images/390_DUKE.png')} alt={''}/>
                    </div>
                    <h1 className="title-message-mobile">{intl.formatMessage({id: "form_credit_information_promotion_title"})}</h1>
                    <h1 className="title-message-product-red">{localStorage.getItem('R_s_nom_prod') || ''}</h1>
                    <h1 className="title-message-price">{localStorage.getItem('R_s_precio_comer') || ''}</h1>
                    <section>
                        <Chip className={"chip-message-mobile"}
                              label={intl.formatMessage({id: "form_credit_information_promotion_subtitle"})}
                              color="error"/>
                    </section>
                    <br/>
                    <br/>
                    <h3 className="sub-title">{intl.formatMessage({id: "option_credit"})}</h3>
                    <section>
                        <Label className="label-form" for="credit_option">
                        {intl.formatMessage({id: "option_credit"})}
                        </Label>
                        <br/>
                        <Field as="select"
                               className='form-control-mobile-credit'
                               name="credit_option">
                            <option>{errors.credit_option ? errors.credit_option : intl.formatMessage({id: "option_credit"})}</option>
                                {typeCredit && typeCredit.WS_LINEAS_CREDITOResult.ListLineaCredito.Datos_LineasCredito.map((item) => {
                                    return (
                                        <option value={item.s_codigo}>{item.s_nombre}</option>
                                    )
                                })}
                        </Field>
                    </section>
                    <section>
                        <Label className="label-form" for="Pws_Val_pla">
                            {intl.formatMessage({id: "term"})}
                        </Label>
                        <br/>
                        <Field as="select"
                               className='form-control-mobile-credit'
                               name="Pws_Val_pla">
                            <option>{errors.Pws_Val_pla ? errors.Pws_Val_pla : intl.formatMessage({id: "term"})}</option>
                                    {terms && terms.WS_PERIODOResult.ListPerido.Datos_Periodo.map((item) => {
                                        return (
                                            <option value={item.s_codigo}>{item.s_descripcion}</option>
                                        )
                                    })}
                        </Field>
                    </section>
                    <section>
                        <Label className="label-form" for="Pws_Val_cuoini">
                            {intl.formatMessage({id: "initial_quote_value"})}
                        </Label>
                        <br/>
                        <Field
                            className='form-control-mobile-credit'
                            name="Pws_Val_cuoini"
                            placeholder={errors.Pws_Val_cuoini ? errors.Pws_Val_cuoini : intl.formatMessage({id: "initial_quote_value"})}
                        />
                    </section>
                    <section>
                        <Label className="label-form" for="Pws_Val_finan">
                            {intl.formatMessage({id: "value_to_finance"})}
                        </Label>
                        <br/>
                        <Field
                            className='form-control-mobile-credit'
                            name="Pws_Val_finan"
                            disabled
                            placeholder={intl.formatMessage({id: "value_to_finance"})}
                            value={valueToFinance}
                        />
                    </section>
                    <section>
                        <Label className="label-form" for="Pws_Val_cuo">
                        {intl.formatMessage({id: "value_of_quote"})}
                        </Label>
                        <br/>
                        <Field
                            className='form-control-mobile-credit'
                            name="Pws_Val_cuo"
                            disabled
                            placeholder={intl.formatMessage({id: "value_of_quote"})}
                            value={valueQuote}
                        />
                    </section>
                    <br/>
                    <br/>
                    <br/>
                    <section>
                        <Fab className="form-control-small-button" variant="extended" onClick={handleCalculatedQuote} size="medium"
                             color="error" aria-label="add" type="submit">
                            {intl.formatMessage({id: "button_calculate_quote"})} {'  '}
                        </Fab>
                    </section>
                    <br/>
                    <br/>
                    <br/>
                    <section>
                        <Fab className="form-control-small-button" variant="extended" size="medium"
                             color="error" aria-label="add">
                            {intl.formatMessage({id: "button_send_mail"})}
                        </Fab>
                    </section>
                    <br/>
                    <br/>
                    <br/>
                    <h3 className="sub-mobile-title">{intl.formatMessage({id: "form_credit_information_note"})}</h3>
                </Row>
            </div>
        )
    }

    return (
        (
            <>
                <Desktop>
                    {renderDesktopTablet()}
                </Desktop>
                <Tablet>
                    {renderDesktopTablet()}
                </Tablet>
                <Mobile>
                    {renderMobile()}
                </Mobile>
            </>
        )

    )
}