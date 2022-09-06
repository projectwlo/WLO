import * as React from 'react';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import {StepIconProps} from '@mui/material/StepIcon';
import {MessageUtils} from '../../../assets/translations/strings/messages';
import {AccountCircle, ArrowBack, ArrowForward, AttachMoney, UploadFileSharp} from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import {CreditInformation, RenderContainer} from '../..';
import * as Yup from "yup";
import {Form, Formik} from 'formik';
import {WLOCreditAPIService} from '../../../services';
import toast from 'react-hot-toast';

interface WizardProps {

}

export function Wizard(_props: WizardProps) {

    const Item = styled(Paper)(({theme}) => ({
        padding: theme.spacing(4),
        textAlign: 'center',
    }));

    const initialValuesCompleted = {
        step1: false,
        calculatedQuote: false,
        sendMail: false,
        step2: false,
        conyugue: false,
        step3: false,
        peps: false,
        step4: false,
        docs: false
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const [stepsCompleted, setStepsCompleted] = React.useState();

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = async (values: any, formikBag: { setSubmitting: any; }) => {
        const valorFinanciar = localStorage.getItem('valorFinanciar') as string;
        const valorCuota = localStorage.getItem('valorCuota') as string;
        if (activeStep == 0) {
            const result = await WLOCreditAPIService.addSolicitud({
                Pws_Identificacion: values.Pws_Identificacion,
                Pws_Tip_Identificacion: values.Pws_Tip_Identificacion,
                Pws_Val_cuoini: values.Pws_Val_cuoini,
                Pws_Fideliza: "0",
                Pws_Val_cuo: valorFinanciar,
                Pws_Val_finan: valorCuota,
                Pws_Correo: values.Pws_Correo,
                Pws_Apellidos1: values.Pws_Nombres,
                Pws_Telefono1: values.Pws_Telefono1,
                Pws_Telefono2: values.Pws_Telefono2,
                Pws_Nombres: values.Pws_Nombres,
                Pws_Val_pla: values.Pws_Val_pla,
                Pws_fec_solicitud: new Date().toLocaleDateString(),
                Pws_Tip_Estado: "1",
                Pws_Tip_Perfil: "1",
                Pws_Tip_Person: "N"
            });
            toast.success('Hemos generado una nueva solicitud');
            if (result.payload.result === "1") {
                const solicitudResult = await WLOCreditAPIService.addSolicitud({
                    Pws_Identificacion: values.Pws_Identificacion,
                    Pws_Tip_Identificacion: values.Pws_Tip_Identificacion});
                    localStorage.setItem('Pws_Num_solicitud', solicitudResult.payload.data.Datos_Sol.Datos_Sol[0].Pws_num_solicitud);
            }
        }
        
        if (activeStep == 1) {
            const personaRequest = {
                Pws_Identificacion: values.Pws_Identificacion,
                Pws_Tip_Identificacion: values.Pws_Tip_Identificacion,
                Pws_Tip_Estado: values.Pws_Tip_Estado,
                Pws_Tip_Perfil: "1",
                Pws_Tip_person: values.Pws_Tip_person,
                Pws_Tip_ocupa: values.Pws_Tip_ocupa,
                Pws_Nombres: values.Pws_Nombres,
                Pws_Apellidos1: values.Pws_Apellidos1,
                Pws_Apellidos2:values.Pws_Apellidos2,
                Pws_Telefono1: values.Pws_Telefono1,
                Pws_Telefono2: values.Pws_Telefono2,
                Pws_Correo: values.Pws_Correo,
                Pws_Fec_expe: values.Pws_Fec_expe,
                Pws_Lugar_exp: values.Pws_Lugar_exp,
                Pws_Fec_nacime: values.Pws_Fec_nacime,
                Pws_Estado_Civil: values.Pws_Estado_Civil,
                Pws_Direccion_res: values.Pws_Direccion_res,
                Pws_Departamento: values.Pws_Departamento,
                Pws_Ciudad_res: values.Pws_Ciudad_res,
                Pws_Genero: values.Pws_Genero,
                Pws_Estrato_per: values.Pws_Estrato_per,
                Pws_Per_cargo: values.Pws_Per_cargo,
                Pws_Tip_vivienda: values.Pws_Tip_vivienda,
                Pws_Niv_estudio: values.Pws_Niv_estudio,
                Pws_Nom_empre: values.Pws_Nom_empre,
                Pws_fec_ingemp: values.Pws_fec_ingemp,
                Pws_Fideliza: "0",
                Pws_Tip_contra: values.Pws_Tip_contra,
                Pws_Ant_labo: values.Pws_Ant_labo,
                Pws_Car_emp: values.Pws_Car_emp,
                Pws_Nom_Jefedi: values.Pws_Nom_Jefedi,
                Pws_Direc_emp: values.Pws_Direc_emp,
                Pws_Ciud_emp: values.Pws_Ciud_emp,
                Pws_tel_emp1: values.Pws_tel_emp1,
                Pws_tel_emp2: values.Pws_tel_emp2,
            }
            const result = await WLOCreditAPIService.addSolicitudPersona(personaRequest);
            console.log(result);
            toast.success('Hemos generado una nueva solicitud persona');
        }

        if (activeStep == 2) {
            const numSolicitud = localStorage.getItem('Pws_Num_solicitud') as string;
            const operFinancieras = {
                s_num_solicitud: numSolicitud,
                s_identificacion: values.Pws_Identificacion,
                s_tipo_identificacion: values.Pws_Tip_Identificacion,
                s_ingreso_principal: values.s_ingreso_principal,
                s_otros_ingresos: values.s_otros_ingresos,
                s_otros_egresos: values.s_otros_egresos,
                s_arriendo: values.s_arriendo,
                s_concep_otr_ingre: values.s_concep_otr_ingre,
                s_declarante_ren: values.s_declarante_ren ? "1" : "0",
                s_moneda_ext: values.s_moneda_ext ? "1" : "0",
                s_monext_oper: values.s_monext_oper,
                s_tip_monext: values.s_tip_monext,
                s_cuent_ext: values.s_cuent_ext,
                s_cuen_extban: values.s_cuen_extban,
                s_cuen_extnum: values.s_cuen_extnum,
                s_cuen_extpais: values.s_cuen_extpais,
                s_cuen_extciudad: values.s_cuen_extciudad}
            const result = await WLOCreditAPIService.addFinancialInformation(operFinancieras);
            toast.success('Hemos añadido la información financiera a su solicitud.');
        }


        setTimeout(() => {
            console.log('guardando step 1 de 4', values);
        }, 1000);

        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const onSubmit = (values: any, formikBag: { setSubmitting: any; }) => {
        const {setSubmitting} = formikBag;
        if (!isLastStep()) {
            setSubmitting(false);
            handleNext(values, formikBag);
            return;
        }
        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    const ColorlibConnector = styled(StepConnector)(({theme}) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 16,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor:
                    '#D0021B',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor:
                    '#D0021B',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            backgroundColor:
                theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#4A4A4A',
            borderRadius: 1,
        },
    }));

    const ColorlibStepIconRoot = styled('div')<{
        ownerState: { completed?: boolean; active?: boolean };
    }>(({theme, ownerState}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#4A4A4A',
        zIndex: 1,
        color: '#fff',
        width: '35px',
        height: '35px',
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
            backgroundColor:
                '#D0021B',
            boxShadow: '#D0021B',
        }),
        ...(ownerState.completed && {
            backgroundColor:
                ' #D0021B',
        }),
    }));

    function ColorlibStepIcon(props: StepIconProps) {
        const {active, completed, className} = props;

        const icons: { [index: string]: React.ReactElement } = {
            1: <Check/>,
            2: <AccountCircle/>,
            3: <AttachMoney/>,
            4: <UploadFileSharp/>
        };

        return (
            <ColorlibStepIconRoot ownerState={{completed, active}} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        );
    }

    const steps = [
        {
            key: 'credit_information',
            label: MessageUtils["button_step_credit_information"],
            initialValues: {
                Pws_Nombres: '',
                Pws_Tip_Identificacion: '',
                Pws_Identificacion: '',
                Pws_Telefono1: '',
                Pws_Correo: '',
                Pws_Telefono2: '',
                mail_confirmation: '',
                pws_cod_credi: '',
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
                pws_cod_credi: Yup.string()
                    .required('Por favor seleccione un opción de crédito'),
                Pws_Val_cuoini: Yup.number()
                    .required('Por favor ingrese el valor de la cuota inicial').positive().integer(),
                Pws_Val_pla: Yup.string()
                    .required('Por favor indique el plazo')
            })
        },
        {
            key: 'person_information',
            label: MessageUtils["button_step_person_information"],
            initialValues: {
                "Pws_Tip_person": "",
                "Pws_Tip_ocupa": "",
                "Pws_Estado_Civil":"",
                "Pws_Direccion_res": "",
                "Pws_Departamento": "",
                "Pws_Ciudad_res": "",
                "Pws_Genero": "",
                "Pws_Estrato_per": "",
                "Pws_Per_cargo": "",
                "Pws_Tip_vivienda": "",
                "Pws_Niv_estudio": "",
                "Pws_Nom_empre": "",
                "Pws_fec_ingemp": "",
                "Pws_Tip_contra": "",
                "Pws_Ant_labo": "",
                "Pws_Car_emp": "",
                "Pws_Nom_Jefedi": "",
                "Pws_Direc_emp": "",
                "Pws_Ciud_emp": "",
                "Pws_tel_emp1": "",
                "Pws_tel_emp2": "",
                "Pws_Con_Tip_identif": "",
                "Pws_Con_nomsol": "",
                "Pws_Con_identif": "",
                "Pws_Con_tel": "",
            },
            validationSchema: Yup.object().shape({
                Pws_Tip_person: Yup.string().required('Ingrese'),
                Pws_Tip_ocupa: Yup.string().required('Ingrese'),
                Pws_Estado_Civil: Yup.string().required('Ingrese'),
                Pws_Direccion_res: Yup.string().required('Ingrese'),
                Pws_Departamento: Yup.string().required('Ingrese'),
                Pws_Ciudad_res: Yup.string().required('Ingrese'),
                Pws_Genero: Yup.string().required('Ingrese'),
                Pws_Estrato_per: Yup.string().required('Ingrese'),
                Pws_Per_cargo: Yup.string().required('Ingrese'),
                Pws_Tip_vivienda: Yup.string().required('Ingrese'),
                Pws_Niv_estudio: Yup.string().required('Ingrese'),
                Pws_Nom_empre: Yup.string().required('Ingrese'),
                Pws_fec_ingemp: Yup.string().required('Ingrese'),
                Pws_Tip_contra: Yup.string().required('Ingrese'),
                Pws_Ant_labo: Yup.string().required('Ingrese'),
                Pws_Car_emp: Yup.string().required('Ingrese'),
                Pws_Nom_Jefedi: Yup.string().required('Ingrese'),
                Pws_Direc_emp: Yup.string().required('Ingrese'),
                Pws_Ciud_emp: Yup.string().required('Ingrese'),
                Pws_tel_emp1: Yup.string().required('Ingrese'),
                Pws_tel_emp2: Yup.string().required('Ingrese'),
                Pws_Con_Tip_identif: Yup.string().when('Pws_Estado_Civil', {
                    is: "1",
                    then: Yup.string().required('Ingrese'),
                }),
                Pws_Con_nomsol: Yup.string().when('Pws_Estado_Civil', {
                    is: "1",
                    then: Yup.string().required('Ingrese'),
                }),
                Pws_Con_tel: Yup.string().when('Pws_Estado_Civil', {
                    is: "1",
                    then: Yup.string().required('Ingrese'),
                }),
               
            })
        },
        {
            key: 'finance_information',
            label: MessageUtils["button_step_finance_information"],
            initialValues: {
                s_ingreso_principal: '',
                s_otros_ingresos: '',
                s_otros_egresos: '',
                s_arriendo: '',
                s_concep_otr_ingre: '',
                s_declarante_ren: '',
                s_moneda_ext: '',
                s_monext_oper: '',
                s_tip_monext: '',
                s_cuent_ext: '',
                s_cuen_extban: '',
                s_cuen_extnum: '',
                s_cuen_extpais: '',
                s_cuen_extciudad: '',
                s_pep_recpublic: '',
                s_pep_poderpublic: '',
                s_pep_reconpublic: '',
                s_pep_pubexpue: '',
                s_pep_seggraconsa: '',
                s_pep_nompepseg: '',
                s_pep_paren: '',
                s_pep_identif: '',
            },
            validationSchema: Yup.object().shape({
                s_ingreso_principal: Yup.string().required('Ingrese'),
                s_otros_ingresos: Yup.string().required('Ingrese'),
                s_otros_egresos: Yup.string().required('Ingrese'),
                s_arriendo: Yup.string().required('Ingrese'),
                s_concep_otr_ingre: Yup.string().required('Ingrese'),
                s_declarante_ren: Yup.string().required('Ingrese'),
                s_moneda_ext: Yup.boolean().required('Ingrese'),
                s_monext_oper: Yup.string().required('Ingrese'),
                s_tip_monext: Yup.string(),
                s_cuent_ext: Yup.string().required('Ingrese'),
                s_cuen_extban: Yup.string().required('Ingrese'),
                s_cuen_extnum: Yup.string().required('Ingrese'),
                s_cuen_extpais: Yup.string().required('Ingrese'),
                s_cuen_extciudad: Yup.string().required('Ingrese'),
                s_pep_recpublic: Yup.string(),
                s_pep_poderpublic: Yup.string(),
                s_pep_reconpublic: Yup.string(),
                s_pep_pubexpue: Yup.string(),
                s_pep_seggraconsa: Yup.string(),
                s_pep_nompepseg: Yup.string(),
                s_pep_paren: Yup.string(),
                s_pep_identif: Yup.string(),
            })
        },
        {
            key: 'reference_information',
            label: MessageUtils["button_step_reference_information"],
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
        }];

    const initialValues = steps.reduce(
        (values, {initialValues}) => ({
            ...values,
            ...initialValues
        }),
        {}
    );

    const validationSchema = steps[activeStep].validationSchema

    return (

        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({isSubmitting, touched, values, errors}) => (
                    <>
                        <Form>
                            <Stack direction={{xs: 'column', sm: 'row'}}
                                   spacing={{xs: 1, sm: 2, md: 4}} justifyContent="space-between">
                                <Item elevation={0}>
                                    <Fab variant="extended" color="neutral" aria-label="add" disabled={activeStep === 0}
                                         onClick={handleBack}>
                                        <ArrowBack sx={{mr: 1}}/>
                                        {'Atrás'}
                                    </Fab>
                                </Item>
                                <Item elevation={0}>
                                    <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector/>}>
                                        {steps.map((item) => (
                                            <Step key={item.label}>
                                                <StepLabel StepIconComponent={ColorlibStepIcon}>
                                                    <p className="step">{item.label}</p>
                                                </StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Item>
                                <Item elevation={0}>
                                    <Fab variant="extended" color="error" aria-label="add" disabled={isSubmitting}
                                         type="submit">
                                        {isLastStep() ? 'Procesar' : 'Siguiente'}
                                        <ArrowForward sx={{mr: 1}}/>
                                    </Fab>
                                </Item>
                            </Stack>
                            <RenderContainer errors={errors} values={values} step={steps[activeStep].key as any}/>
                        </Form>
                        {/*  <pre>{JSON.stringify(values, null, 2)}</pre> */}
                        {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                        {localStorage.setItem('solitudInfo', JSON.stringify(values, null, 2))}
                    </>
                )}
            </Formik>
        </div>
    );
}