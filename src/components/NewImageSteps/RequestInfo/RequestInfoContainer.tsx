import {FormKnowYouMobile} from "./FormKnowYouMobile";
import {FormCreditSimulatorMobile} from "./FormCreditSimulatorMobile";
import {FormKnowYou} from "./FormKnowYou";
import {FormCreditSimulator} from "./FormCreditSimulator";
import { Desktop, Mobile, Tablet } from "../../../utils/breakpoints";

interface FinancialInformationContainerProps {
    typeIdentification?: string,
    identification?: string,
    costProduct?: string,
    nameProduct?: string,
    errors?: any,
    values?: any,
}
export function RequestInfoContainer(props: FinancialInformationContainerProps) {
    const {errors, values} = props;
    return (
        <>
            <Desktop>
                <div className="flex-container">

                     <div className="flex-item-left">
                    <img src={require('../../../assets/images/group254.png')} alt={''}/>
                </div>
                <div className="flex-item-right">
                    <FormKnowYou errors={errors} values={values}/>
                    <FormCreditSimulator errors={errors} values={values}/>
                </div>

                </div>

                
               
                    
            </Desktop>
            <Tablet>
                <>
                    <FormKnowYouMobile errors={errors} values={values}/>
                    <FormCreditSimulatorMobile  errors={errors} values={values}/>
                </>
            </Tablet>
            <Mobile>
                <>
                    <FormKnowYouMobile errors={errors} values={values}/>
                    <FormCreditSimulatorMobile errors={errors} values={values}/>
                </>
            </Mobile>
        </>
    )
}