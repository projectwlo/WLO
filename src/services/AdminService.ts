import axios from "axios";

export class AdminService {
    static async getCargos(): Promise<any> {
        try {
            const { data } = await axios.get(`http://localhost:3030/api/v1/soap/admin/cargos`);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async getTipoContrato(): Promise<any> {
        try {
            const { data } = await axios.get(`http://localhost:3030/api/v1/soap/admin/tipocontrato`);
            return data;
        } catch (e) {
            throw e;
        }
    }
    
    static async getEstadosCiviles(): Promise<any> {
        try {
            const { data } = await axios.get(`http://localhost:3030/api/v1/soap/admin/estadosciviles`);
            return data;
        } catch (e) {
            throw e;
        }
    }
    
    static async getCiudades(): Promise<any> {
        try {
            const { data } = await axios.get(`http://localhost:3030/api/v1/soap/admin/ciudades`);
            return data;
        } catch (e) {
            throw e;
        }
    }
    
    static async getProfesiones(): Promise<any> {
        try {
            const { data } = await axios.get(`http://localhost:3030/api/v1/soap/admin/profesiones`);
            return data;
        } catch (e) {
            throw e;
        }
    }
}