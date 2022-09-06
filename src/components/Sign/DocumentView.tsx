import React from "react";
import {useIntl} from "react-intl";
import {DocumentDemo} from "../../assets/icons";
import { WLOCreditAPIService } from "../../services";
import { EnterCode } from "./Modals/EnterCode";
import {SignSuccess} from "./Modals/SignSuccess";

export function PDFView() {
    const intl = useIntl();
    const [modalShow, setModalShow] = React.useState(false);
    const handleSendOtp = () => {
        const numSolicitud = localStorage.getItem('Pws_Num_solicitud') as string;
        const firma = localStorage.getItem('firma');
        const datosFirma = JSON.parse(firma as string)
       
        const dataDefault = {
            Pws_Num_solicitud: numSolicitud,
            Pws_Identificacion: datosFirma.Pws_Identificacion,
            Pws_Tip_Identificacion: datosFirma.Pws_Tip_Identificacion,
            Pws_Fec_gen: new Date().toString(),
            Pws_estado_resotp: "1",
            Pws_Tip_val: "1",
            email: datosFirma.email,
        };

        (async () => {
            const regOTP = await WLOCreditAPIService.sendOTP(dataDefault);
            console.log(regOTP);
        })();

        setModalShow(true);
    }
    
    return (

        <div className="row">
            <div className="row">
                <br/>
                <h1 className="title-red">{'VISUALIZACIÓN DEL DOCUMENTO A FIRMAR'}</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <DocumentDemo/>
                <br/>
                <br/>
                <div className="col">
                    <br/><br/><br/>
                    <div className={"form-know-you-item-button"} onClick={handleSendOtp}>
                        {'Firmar Documento'}
                    </div>
                </div>
                <EnterCode
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}