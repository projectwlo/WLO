import { useState} from "react";
import {Button, Step, StepLabel, Stepper} from "@mui/material";
import {Form, Formik} from "formik";
import {MessageUtils} from "../../../assets/translations/strings/messages";
import {CreditInformation} from "../../Steps/CreditInformation/CreditInformation";
import * as Yup from "yup";
import * as React from "react";

const steps = [
    {
        key: 'credit_information',
        label: MessageUtils["button_step_credit_information"],
        component: <CreditInformation/>,
        initialValues: {
            Pws_Nombres: '',
            Pws_Tip_Identificacion: '',
            Pws_Identificacion: '',
            Pws_Telefono1: '',
            Pws_Correo: '',
            Pws_Telefono2: '',
            mail_confirmation: '',
            credit_option: '',
            Pws_Val_pla: '',
            Pws_Val_cuoini: '',
            Pws_Val_finan: '',
            Pws_Val_cuo: '',
        },
        validationSchema: Yup.object().shape({
            Pws_Nombres: Yup.string().required('Por favor ingrese su nombre'),
            Pws_Tip_Identificacion: Yup.string()
                .required('Por favor seleccione el tipo de identificación'),
            Pws_Identificacion: Yup.string().required('Por favor ingrese el número de identificación'),
            Pws_Telefono1: Yup.string().required('Por favor ingrese su número telefonico'),
            Pws_Telefono2: Yup.string(),
            Pws_Correo: Yup.string()
                .email('Email inválido').required('Por favor ingrese su correo'),
            mail_confirmation: Yup.string()
                .oneOf([Yup.ref('Pws_Correo'), null], 'El correo de confirmación debe coincidir con su correo'),
            credit_option: Yup.string()
                .required('Por favor seleccione un opción de crédito'),
            Pws_Val_cuoini: Yup.number()
                .required('Por favor ingrese el valor de la cuota inicial').positive().integer(),
            Pws_Val_pla: Yup.string()
                .required('Por favor indique el plazo'),
            Pws_Val_finan: Yup.number()
                .required('Por favor ingrese el valor a financiar').positive().integer(),
            Pws_Val_cuo: Yup.number()
                .required('Por favor ingrese el valor de la cuota inicial').positive().integer(),
        })
    },
   ];

export function StepperAction() {
    const [activeStep, setActiveStep] = useState(0);

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const handlePrev = () => {
        setActiveStep(Math.max(activeStep - 1, 0));
    };

    const handleNext = () => [
        setActiveStep(Math.min(activeStep + 1, steps.length - 1))
    ];

    const onSubmit = (values: any, formikBag: { setSubmitting: any; }) => {
        const { setSubmitting } = formikBag;

        if (!isLastStep()) {
            setSubmitting(false);
            handleNext();
            return;
        }

        console.log(values);

        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    };

    const initialValues = steps.reduce(
        (values, { initialValues }) => ({
            ...values,
            ...initialValues
        }),
        {}
    );
    const ActiveStep = steps[activeStep];
    const validationSchema = ActiveStep.validationSchema;

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ isSubmitting, touched, values }) => (
                <>
                    <Form>
                        <Stepper alternativeLabel activeStep={activeStep}>
                            {steps.map((step, index) => (
                                <Step key={index}>
                                    <StepLabel>{steps[index].label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Button
                            disabled={activeStep === 0 || isSubmitting}
                            onClick={handlePrev}
                        >
                            Previous
                        </Button>
                        <Button disabled={isSubmitting} type="submit">
                            {isLastStep() ? 'Submit' : 'Next'}
                        </Button>
                        <Stepper activeStep={activeStep}>
                            {steps.map((step, index) => {
                                const Component = steps[index].component;
                                return (<div>{Component}</div>)
                            })}
                        </Stepper>
                    </Form>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(touched, null, 2)}</pre>
                </>
            )}
        </Formik>
    )
}