import {IconCertify} from "../../../assets/icons";
import "./DocumentsInformation.scss";
import React, {useEffect} from "react";
import {useIntl} from "react-intl";
import toast from "react-hot-toast";
import {ModalReferences} from "./ModalReferences/ModalReferences";
import {MenuBar} from "../../shared/Menubar/Menubar";

interface DocumentsInformationProps {
}

export function DocumentsInformation(_props: DocumentsInformationProps) {
    const intl = useIntl();
    const [modalShow, setModalShow] = React.useState(false);
    const toggle = () => setModalShow(!modalShow);

    useEffect(() => {
    }, []);


    const handleFileInputChange = (e: any) => {
        const target = e.target
        if (target.files && target.files[0]) {
            const maxAllowedSize = 5 * 1024 * 1024;
            if (target.files[0].size > maxAllowedSize) {
                toast.error('Seleccione un archivo de tamaño máximo 5mb.');
                target.value = ''
            }
        }
        let file = '';
        file = e.target.files[0];
        getBase64(file)
            .then(result => {
                console.log("File Is", file, result);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getBase64 = (file: any) => {
        return new Promise(resolve => {
            let baseURL: string | ArrayBuffer | null = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    return (
        <div className="row">
            <h1 className="title-red">{intl.formatMessage({id: "form_documents_information_title"})}</h1>
            <div className="flex-container-documents-table">
                <div id={"global"}>
                    <table className="table table-sm">
                        <thead>
                        <tr>
                            <th scope="col" className={"title-table-references"}>Tipo de referencia</th>
                            <th scope="col" className={"title-table-references"}>Parentesco</th>
                            <th scope="col" className={"title-table-references"}>Nombre completo</th>
                            <th scope="col" className={"title-table-references"}>Télefono fijo</th>
                            <th scope="col" className={"title-table-references"}>Teléfono móvil</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                        <div className={"form-know-you-item-button"} onClick={toggle}>
                            {intl.formatMessage({id: "add_reference"})}
                        </div>
                    </table>

                </div>
            </div>
            <div className="flex-container-documents">
                <div className="file-input">
                    <input
                        type="file"
                        name="file-input"
                        id="file-input"
                        className="file-input__input"
                        accept="image/*,.pdf"
                        onChange={handleFileInputChange}
                    />
                    <label className="file-input__label" htmlFor="file-input">
                        <br/>
                        <IconCertify fill="currentColor"/>
                        <br/>
                        <br/>
                        <span>{'Certificado laboral y/o certificado de contador'}</span>
                        <br/>
                        <br/>
                    </label>
                </div>
                <div className="file-input">
                    <input
                        type="file"
                        name="file-input"
                        id="file-input"
                        className="file-input__input"
                        onChange={handleFileInputChange}
                    />
                    <label className="file-input__label" htmlFor="file-input">
                        <br/>
                        <IconCertify/>
                        <br/>
                        <br/>
                        <span>{'Certificado ingresos y retenciones o declaración de renta'}</span>
                        <br/>
                    </label>
                </div>
                <div className="file-input">
                    <input
                        type="file"
                        name="file-input"
                        id="file-input"
                        className="file-input__input"
                        onChange={handleFileInputChange}
                    />
                    <label className="file-input__label" htmlFor="file-input">
                        <br/>
                        <IconCertify/>
                        <br/>
                        <br/>
                        <span>{'Fotocopia tarjeta de propiedad del vehículo'}</span>
                        <br/>
                        <br/>
                    </label>
                </div>
                <ModalReferences
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}