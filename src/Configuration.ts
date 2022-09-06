export class Configuration {
    public static isProduction(): boolean {
        const { REACT_APP_CUSTOM_NODE_ENV } = process.env;
        return REACT_APP_CUSTOM_NODE_ENV === 'production';
    }
}