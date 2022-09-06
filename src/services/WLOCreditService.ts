import axios from "axios";
import {WloCreditoService} from "../types";

export class WLOCreditAPIService {

    static async addConyugue(conyugue: Partial<WloCreditoService.ConyugueRequest>): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/requests/conyuge`, conyugue);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async addCodeudor(codeudor: Partial<WloCreditoService.CodeudorRequest>): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/requests/codeudor`, codeudor);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async addSolicitudPersona(solicitudPersona: Partial<WloCreditoService.SolicitudPersonaRequest>): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/requests/person`, solicitudPersona);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async addSolicitud(solicitud: Partial<WloCreditoService.SolicitudRequest>): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/requests/`, solicitud);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async consultaSolicitud(solicitud: Partial<WloCreditoService.SolicitudRequest>): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/requests/consulta`, solicitud);
            if (data.payload.result === '-4' || data.payload.result === '-3') {
                const {data} = await WLOCreditAPIService.consultaANI(solicitud.Pws_Identificacion!, solicitud.Pws_Identificacion!, solicitud.Pws_Tip_Identificacion!);
                return data;
            }
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async getAccessTokenANI(): Promise<any> {
        try {
            const body = {
                "idAplicacion": "85d2ca22-0f99-4d23-965d-70ad1afdce30",
                "usuario": "usu_EBS",
                "contrasena": "riPNstFiJo",
            }
            const {data} = await axios.post(`https://apippagare.olimpiait.com:8091/Login`, body);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async consultaANI(idProcesoCliente: string, documento: string, tipoDocumento: string): Promise<any> {
        try {
            const formatedTipoDocumento = WLOCreditAPIService.getTipoDocumentoCygnusToANI(tipoDocumento);
            const accessToken = await WLOCreditAPIService.getAccessTokenANI();
            const config = {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": accessToken,
                },
            };
            const body = {
                "idProcesoCliente": idProcesoCliente,
                "documento": documento,
                "tipoDocumento": formatedTipoDocumento
            };
            const {data} = await axios.post(`https://apippagare.olimpiait.com:8091/ANI/ConsultaANI`, body, config);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async addPeps(peps: Partial<WloCreditoService.PepsRequest>): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/operations/peps`, peps);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async addReferences(referencias: Partial<WloCreditoService.ReferenciasRequest>): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/operations/references`, referencias);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async addFinancialInformation(financialInformation: Partial<WloCreditoService.OperacionesFinancierasRequest>): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/operations/financial`, financialInformation);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async sendEmailModelo(): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/emails`);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async sendOTP(body: any): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/reg-otp`, body);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async addDocument(): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/emails`);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async addReference(): Promise<any> {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/emails`);
            return data;
        } catch (e) {
            throw e;
        }
    }


    static getTipoDocumentoCygnusToANI(tipoDocumento: string) {
        switch (tipoDocumento) {
            case '13':
                return 'CC'
            case '22':
                return 'CE'
            case '31':
                return 'NIT'
            default:
                return 'CC'
        }
    }

    static async getInventario(inventarioRequest: WloCreditoService.InventarioRequest) {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/inventory`, inventarioRequest);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async getSimulador(simuladorRequest: Partial<WloCreditoService.SimuladorCreditoRequest>) {
        try {
            const {data} = await axios.post(`http://localhost:3030/api/v1/soap/simulador-credito/liq`, simuladorRequest);
            return data;
        } catch (e) {
            throw e;
        }
    }

}