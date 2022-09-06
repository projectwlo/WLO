import {FormPersonalInfo} from "./FormPersonalInfo";
import {FormPersonalInfoActivity} from "./FormPersonalInfoActivity";
import {FormPersonalInfoMobile} from "./FormPersonalInfoMobile";
import {FormPersonalInfoActivityMobile} from "./FormPersonalInfoActivityMobile";
import { Desktop, Mobile, Tablet } from "../../../utils/breakpoints";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { MessageUtils } from "../../../assets/translations/strings/messages";
import { Field } from "formik";
import { Switch } from "@mui/material";
import { AplicantOptions } from "./ApplicantOptions";

interface PersonalInfoContainerProps {
    errors?: any;
    values?: any;
}

export function PersonalInfoContainer(props: PersonalInfoContainerProps) {
    const {errors, values} = props;
    return  (
            <>
                <Desktop>
                    <AplicantOptions values={values} errors={errors}/>
                    <FormPersonalInfo values={values} errors={errors}/>
                    <FormPersonalInfoActivity values={values}  errors={errors}/>
                </Desktop>
                <Tablet>
                <AplicantOptions values={values} errors={errors}/>
                    <FormPersonalInfo values={values} errors={errors}/>
                    <FormPersonalInfoActivity values={values} errors={errors}/>
                </Tablet>
                <Mobile>
                <AplicantOptions values={values} errors={errors}/>
                    <FormPersonalInfoMobile values={values} errors={errors}/>
                    <FormPersonalInfoActivityMobile values={values} errors={errors}/>
                </Mobile>
            </>
        )
}