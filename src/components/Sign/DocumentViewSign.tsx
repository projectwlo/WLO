import React from "react";
import {useIntl} from "react-intl";
import {DocumentDemo} from "../../assets/icons";

export function PDFViewSign() {
    const intl = useIntl();

    const handleSendOtp = () => {

    }

    return (
        <div className="row">
            <div className="row">
                <br/>
                <h1 className="title-red">{'VISUALIZACIÓN DEL DOCUMENTO FIRMADO'}</h1>
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
                        {'Descargar Documento'}
                    </div>
                </div>
            </div>
        </div>
    )
}