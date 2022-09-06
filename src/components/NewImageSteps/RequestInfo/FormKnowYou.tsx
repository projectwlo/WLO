import './request-info.scss';
import {useIntl} from "react-intl";
import { Field } from 'formik';
import { typeIdentification } from '../../../__mocks__/data';
import _ from 'lodash';
import { WLOCreditAPIService } from '../../../services';
interface FormKnowYouProps {
    errors?: any,
    values?: any,
}
export function FormKnowYou(props: FormKnowYouProps) {
    const {errors, values} = props;
    const intl = useIntl();

    const handleSearch = async () => {
        if (!_.isEmpty(values.Pws_Tip_Identificacion!) || !_.isEmpty(values.Pws_Identificacion!)) {
            const person = await WLOCreditAPIService.consultaSolicitud({
                Pws_Tip_Identificacion: values.Pws_Tip_Identificacion!,
                Pws_Identificacion: values.Pws_Identificacion!
            });
            if (person.payload.result === "1") {
                localStorage.setItem('person', JSON.stringify(person.payload.data.datos_persona.Datos_persona[0]))
            }
            else {
                localStorage.setItem('person', JSON.stringify(person))
            }
        }
    }

    return (
        <div className={'row'}>
            <div className={"title-medium-red"}>{intl.formatMessage({id: "form_credit_information_title"})}</div>
            <div className={"subtitle-medium"}>{intl.formatMessage({id: "form_credit_information_subtitle"})}</div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-center flex-grow-12"}>
                    <Field id={"Pws_Nombres"}
                           name={"Pws_Nombres"}
                           className={'form-know-you-item-input-large'}
                           placeholder={intl.formatMessage({id: "placeholder_field_name"})}/>
                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-right flex-grow-6"}>
                <Field as="select"
                        id={"Pws_Tip_Identificacion"}
                        name={"Pws_Tip_Identificacion"}
                        className={'form-know-you-item-input-small'}>
                                    <option>{errors && errors.Pws_Tip_Identificacion ? errors.Pws_Tip_Identificacion : intl.formatMessage({id: "placeholder_identification_type"})}</option>
                                    {typeIdentification && typeIdentification.WS_TIPOS_IDENTIFICACION_IResult.LstTiposIdent.Datos_TiposIdentificacion.map((item) => {
                                        return (
                                            <option value={item.s_codigo}>{item.s_descripcion}</option>
                                        )
                                    })}
                                </Field>
                </div>
                <div className={"flex-container-form-know-you-item-left flex-grow-6"}>
                    <Field id={"Pws_Identificacion"}
                           onBlur={handleSearch}
                           name={"Pws_Identificacion"}
                           className={'form-know-you-item-input-small'}
                           placeholder={errors.Pws_Identificacion ? errors.Pws_Identificacion : intl.formatMessage({id: "placeholder_document_number"})}/>
                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-right flex-grow-6"}>
                    <Field id={"Pws_Telefono1"}
                           name={"Pws_Telefono1"}
                           className={'form-know-you-item-input-small'}
                           placeholder={errors.Pws_Telefono1 ? errors.Pws_Telefono1 : intl.formatMessage({id: "placeholder_phone_1"})}/>
                </div>
                <div className={"flex-container-form-know-you-item-left flex-grow-6"}>
                    <Field id={"Pws_Correo"}
                           name={"Pws_Correo"}
                           className={'form-know-you-item-input-small'}
                           placeholder={errors.Pws_Correo ? errors.Pws_Correo : intl.formatMessage({id: "placeholder_mail"})}/>
                </div>
            </div>
            <div className={'flex-container-form-know-you'}>
                <div className={"flex-container-form-know-you-item-right flex-grow-6"}>
                    <Field id={"Pws_Telefono2"}
                           name={"Pws_Telefono2"}
                           className={'form-know-you-item-input-small'}
                           placeholder={errors.Pws_Telefono2 ? errors.Pws_Telefono2 : intl.formatMessage({id: "placeholder_phone_2"})}/>
                </div>
                <div className={"flex-container-form-know-you-item-left flex-grow-6"}>
                    <Field id={"mail_confirmation"}
                           name={"mail_confirmation"}
                           className={'form-know-you-item-input-small'}
                           placeholder={intl.formatMessage({id: "placeholder_mail_confirmation"})}/>
                </div>
            </div>
        </div>

    )
}