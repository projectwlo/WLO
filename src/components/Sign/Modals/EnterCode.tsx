import {Modal} from "react-bootstrap";
import {useIntl} from "react-intl";
import React, { useEffect } from "react";
import './modals.scss';
import { WLOCreditAPIService } from "../../../services";

interface EnterCodeProps {
    show: boolean;
    onHide: () => void;
    errors?: any;
    values?: any;
}

export function EnterCode(props: EnterCodeProps) {
    const {} = props;
    

    // useEffect(() => {
       
    // }, []);


    const handleSaveReference = () => {
        alert('Añadiendo refeerence');
    }
    const intl = useIntl();
    const [modalShow, setModalShow] = React.useState(false);
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
                <h3 className="sub-title">{'Al ingresar el código, aceptas ser consultado en listas restrictivas y sagrilaft.\n' +
                    'Por favor inserta aquí:'}</h3>
                <div className="flex-container-modals">
                    <div>
                        <input maxLength={1}  className={"input-code-general"} type="text"/>
                    </div>
                    <div>
                        <input maxLength={1}  className={"input-code-general"} type="text"/>
                    </div>
                    <div>
                        <input maxLength={1} className={"input-code-general"} type="text"/>
                    </div>
                    <div>
                        <input maxLength={1}  className={"input-code-general"} type="text"/>
                    </div>
                    <div>
                        <input maxLength={1}  className={"input-code-general"} type="text"/>
                    </div>
                    <div>
                        <input maxLength={1}  className={"input-code-general"} type="text"/>
                    </div>
                </div>
                <br/>
                <div className={"form-know-you-item-button"} onClick={() => setModalShow(true)}>
                    {'Continuar'}
                </div>
            </Modal.Body>
        </Modal>
    )
}