import { Shared } from ".";

export declare namespace Auth {
    interface LoginRequest {
        identification: string,
        identification_type: number,
        password: string,
        channel_type: number,
        action_type: ActionType,
        profile_type: Shared.ProfileType,
    }
    enum ActionType {
        ACCESS = 1,
        FORGOT_PASSWORD = 2,
        CHANGE_PASSWORD = 3
    }
}