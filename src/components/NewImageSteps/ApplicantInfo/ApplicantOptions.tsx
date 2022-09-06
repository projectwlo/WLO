import {Switch} from "@mui/material";
import {Field} from "formik";
import {useIntl} from "react-intl";
import {Col, FormGroup, Label, Row} from "reactstrap";
import {MessageUtils} from "../../../assets/translations/strings/messages";

interface AplicantOptionsProps {
    errors?: any;
    values?: any;
}

export function AplicantOptions(props: AplicantOptionsProps) {
    const intl = useIntl();
    const {errors} = props;
    return (
        <div>
            <Row>
                <Col>
                    <section>
                        <Label className="label-form" for="Pws_Tip_person">
                            {MessageUtils["who_accredits_motorcycle"]}
                        </Label>
                        <Field as="select"
                               className='form-control-application'
                               name="Pws_Tip_person">
                            <option>{errors && errors.Pws_Tip_person ? errors.Pws_Tip_person : 'Seleccione...'}</option>
                            <option value={'N'}>{'Natural'}</option>
                            <option value={'J'}>{'Juridico'}</option>
                        </Field>
                    </section>
                </Col>
                <Col>
                    <FormGroup>
                        <Label className="label-form" for="Pws_Tip_ocupa">
                            {MessageUtils["placeholder_occupation_type"]}
                        </Label>
                        <Field as="select"
                               className='form-control-application'
                               name="Pws_Tip_ocupa">
                            <option>{errors.Pws_Tip_ocupa ? errors.Pws_Tip_ocupa : 'Seleccione...'}</option>
                            <option value={'1'}>{'ASALARIADO'}</option>
                            <option value={'2'}>{'EMPRESARIO'}</option>
                        </Field>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label className="label-form" for="Pws_Fideliza">
                            {MessageUtils["loyalty"]}
                        </Label>
                        <div className="col-3 toggle-peps">{intl.formatMessage({id: "button_no"})}<Field
                            name="Pws_Fideliza" component={Switch}
                            type="checkbox"/>{intl.formatMessage({id: "button_yes"})}</div>
                    </FormGroup>
                </Col>
                <Col/>
                <Col/>
                <Col/>
                <Col/>
                <Col/>
            </Row>
        </div>
    )
}