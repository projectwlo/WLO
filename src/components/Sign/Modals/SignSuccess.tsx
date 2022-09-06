import {Modal} from "react-bootstrap";
import {useIntl} from "react-intl";
import React from "react";
import {Check} from "../../../assets/icons";

interface SignSuccessProps {
    show: boolean;
    onHide: () => void;
}

export function SignSuccess(props: SignSuccessProps) {
    const {} = props;
    const handleSaveReference = () => {
        alert('Añadiendo refeerence');
    }
    const intl = useIntl();
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-center"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <Check/>
                </div>
                <br/>
                <h3 className="sub-title">{'Has firmado correctamente para la autorización de los datos. Espera un momento...'}</h3>
                <br/>
                <div className={"form-know-you-item-button"}>
                    {'Aceptar'}
                </div>
            </Modal.Body>
        </Modal>
    )
}