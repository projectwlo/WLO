import { FormikErrors } from "formik";
import {ApplicantInformation, CreditInformation, DocumentsInformation, FinancialInfoContainer, FinancialInformation, PersonalInfoContainer, RequestInfoContainer} from "../..";

interface RenderContainerProps {
    errors?: FormikErrors<{}>
    values?: any;
    step: 'credit_information' | 'person_information' | 'finance_information' | 'reference_information';
}

export function RenderContainer(props: RenderContainerProps) {
    const {step, errors, values} = props;
    const renderOption = () => {
        switch (step) {
            case 'credit_information':
                // return <CreditInformation/>    
                return <RequestInfoContainer errors={errors} values={values}/>
            case 'person_information':
                // return <ApplicantInformation/>
                 return <PersonalInfoContainer errors={errors} values={values}/>
            case 'finance_information':
                // return <FinancialInformation/>
                 return <FinancialInfoContainer errors={errors} values={values}/>
            case 'reference_information':
                return <DocumentsInformation/>
        }
    };
    return (
        <div>{renderOption()}</div>
    )
}