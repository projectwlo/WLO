import {FormApplicantIncome} from "./FormApplicantIncome";
import {FormApplicantFinancialOperations} from "./FormApplicantFinancialOperations";
import {FormApplicationIncomeMobile} from "./FormApplicationIncomeMobile";
import {FormApplicantFinancialOperationsMobile} from "./FormApplicantFinancialOperationsMobile";
import { Desktop, Mobile, Tablet } from "../../../utils/breakpoints";

interface FinancialInfoContainerProps {
    errors?: any;
    values?: any;
}
export function FinancialInfoContainer(props: FinancialInfoContainerProps) {
    const {errors, values} = props;
    return (
        <>
            <Desktop>
                <div className="row ">
                    <div className="col-xl container-border">
                        <FormApplicantIncome errors={errors} values={values}/>
                    </div>
                    <div className="col-xl container-border">
                        <FormApplicantFinancialOperations errors={errors} values={values}/>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className="row ">
                    <div className="col-lg container-border">
                        <FormApplicantIncome errors={errors} values={values}/>
                    </div>
                    <div className="col-lg container-border">
                        <FormApplicantFinancialOperations errors={errors} values={values}/>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <>
                    <FormApplicationIncomeMobile errors={errors} values={values}/>
                    <FormApplicantFinancialOperationsMobile errors={errors} values={values}/>
                </>
            </Mobile>
        </>
    )
}
