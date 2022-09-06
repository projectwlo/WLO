import {useIntl} from "react-intl";
import {useEffect} from "react";
import { Field } from "formik";
import React from "react";
import _ from "lodash";
import toast from "react-hot-toast";
import { WLOCreditAPIService } from "../../../services";
import { terms, typeCredit } from "../../../__mocks__/data";

interface FormCreditSimulatorProp {
    typeIdentification?: string,
    identification?: string,
    costProduct?: string,
    nameProduct?: string,
    errors?: any,
    values?: any,
}
export function FormCreditSimulatorMobile(props: FormCreditSimulatorProp) {
    const {errors, values} = props;
    const [valueQuote, setValueQuote] = React.useState(0);
    const [valueToFinance, setValueToFinance] = React.useState(0);
    const intl = useIntl();

    const handleSendEmail = () => {
        if (_.isEmpty(values.pws_cod_credi!) || _.isEmpty(values.Pws_Val_pla!) || _.isEmpty(values.Pws_Val_cuoini!) || _.isEmpty(values.Pws_Correo!)) {
            toast.error('Debe indicar los valores [Correo, Opción de Crédito, Plazo y Valor cuota inicial] para poder calcular');
        }
        else {
            toast.success('En breve enviaremos la cotización.');
        }
    }

    const handleCalculatedQuote = async () => {
        const montoVehiculo = localStorage.getItem('R_s_precio_comer') as string;
        let plazo: string;
        if (values) {
            if (_.isEmpty(values.pws_cod_credi!) || _.isEmpty(values.Pws_Val_pla!) || _.isEmpty(values.Pws_Val_cuoini!)) {
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
                    pws_identific: "1001778505",
                    pws_form_periodic: plazo
                });
                const valorToFinanciar = parseFloat(montoVehiculo) - parseFloat(values.Pws_Val_cuoini!);
                const valorQuote = simulador.payload.data.R_Val_cuota;
                setValueToFinance(valorToFinanciar);
                setValueQuote(valorQuote);
                localStorage.setItem('valorFinanciar', valorToFinanciar.toString());
                localStorage.setItem('valorCuota', simulador.payload.data.R_Val_cuota);
                toast.success('Se ha generado un nuevo calculo de cuota');
            }
        }
    }

    return (
        <div className={'row'}>
            <div>
                <img src={require('../../../assets/images/390_DUKE.png')} alt={''}/>
            </div>
            <div className={"title-large-bold-mobile"}>{intl.formatMessage({id: "form_credit_information_promotion_title"})}</div>
            <div id={"model-product"} className={"title-large-red-mobile"}>{localStorage.getItem('R_s_nom_prod') || ''}</div>
            <div id={"price-product"} className={"title-large-mobile"}>{localStorage.getItem('R_s_precio_comer') || ''}</div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>

                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>
                    <div className={"subtitle-medium-mobile"}>{intl.formatMessage({id: "option_credit"})}</div>
                    <Field as="select"
                                    id={"pws_cod_credi"}
                                   className={'form-know-you-item-input-mobile'}
                                   name="pws_cod_credi">
                                <option>{errors.credit_option ? errors.credit_option : intl.formatMessage({id: "option_credit"})}</option>
                                {typeCredit && typeCredit.WS_LINEAS_CREDITOResult.ListLineaCredito.Datos_LineasCredito.map((item) => {
                                    return (
                                        <option value={item.s_codigo}>{item.s_nombre}</option>
                                    )
                                })}
                            </Field>
                </div>
            </div>
            <div className="col-3"/>
            <div className="col-6">
                <div className={"subtitle-medium-mobile"}>{intl.formatMessage({id: "form_credit_information_selection"})}</div>
            </div>
            <div className="col-3"/>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>
                    <Field id={"Pws_Val_cuoini"}
                           name={"Pws_Val_cuoini"}
                           placeholder={intl.formatMessage({id: "placeholder_initial_quote_symbol"})}
                           className={'form-know-you-item-input-mobile'}/>
                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>
                <Field as="select" id={"Pws_Val_pla"}
                                   className={'form-know-you-item-input-mobile'}
                                   name="Pws_Val_pla">
                                    <option>{errors.Pws_Val_pla ? errors.Pws_Val_pla : intl.formatMessage({id: "term"})}</option>
                                    {terms && terms.WS_PERIODOResult.ListPerido.Datos_Periodo.map((item) => {
                                        return (
                                            <option value={item.s_codigo}>{item.s_descripcion}</option>
                                        )
                                    })}
                                </Field>
                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>
                    <Field id={"Pws_Val_finan"}
                           name={"Pws_Val_finan"}
                           disabled
                           value={valueToFinance}
                           placeholder={intl.formatMessage({id: "it_is_calculated_automatically"})}
                           className={'form-know-you-item-input-mobile'}/>
                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>
                    <Field id={"Pws_Val_cuo"}
                           name={"Pws_Val_cuo"}
                           disabled
                           value={valueQuote}
                           placeholder={intl.formatMessage({id: "it_is_calculated_automatically"})}
                           className={'form-know-you-item-input-mobile'}/>
                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>
                    <div className={"form-know-you-item-button"} onClick={handleCalculatedQuote}>
                        {intl.formatMessage({id: "button_calculate_quote"})}
                    </div>
                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>
                    <div className={"form-know-you-item-button"} onClick={handleSendEmail}>
                        {intl.formatMessage({id: "button_send_mail"})}
                    </div>
                </div>
            </div>
            <div className="col-3"/>
            <div className="col-6">
                <div className={"subtitle-medium-mobile"}>
                    {intl.formatMessage({id: "form_credit_information_note"})}
                </div>
            </div>
            <div className="col-4"/>
        </div>
    )
}