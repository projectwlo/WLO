import axios from "axios";
import { WloCreditoService } from "../types";

export class AuthService {
    static async getPerfiles(): Promise<any> {
        try {
            const { data } = await axios.post(`http://localhost:3030/api/v1/soap/profiles`);
            return data;
        } catch (e) {
            throw e;
        }
    }

    static async login(user: WloCreditoService.LoginRequest): Promise<any> {
        try {
            const { data } = await axios.post(`http://localhost:3030/api/v1/soap/auth/login`, user);
            return data;
        } catch (e) {
            throw e;
        }
    }
}