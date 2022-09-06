import {BrowserRouter, Route, RouteProps, Routes} from "react-router-dom";
import {Catalog, 
        ChangePassword, 
        Home, 
        Login, 
        MenuAgent, 
        ProfileOptions,
        // New 
        New, 
        LoginFirma17,
        ReferenciasYDocumentos,
        InformacionFinanciera10,
        SolicitudesDeCredito,
        DetalleDelCredito,
        DetalleDelCodeudorRequerido
    } from "./views";
import {DocumentsInformation} from "./components";
import {LoginFirma} from "./views/LoginFirma/LoginFirma";
import {PDFView} from "./components/Sign/DocumentView";

export enum AppRoutes {
    LOGIN = '/login',
    PROFILE = '/profile',
    PROFILE_OPTIONS = '/profile-options',
    CATALOG = '/catalog',
    HOME = '/home',
    MENU_USER = '/menu-agent',
    CHANGE = '/change-password',
    DOCUMENTS = '/documents',
    SIGN = '/sign',
    VIEW_DOCUMENT = '/view_document',
    // New
    NEW = '/new',
    LOGINFIRMA17 = '/loginfirma17',
    REFERENCIAS_Y_DOCUMENTOS_13 = '/Referencias-y-documentos-13',
    INFORMACION_FINANCIERA_10 = '/Informacion-financiera-10',
    SOLICITUDES_DE_CREDITO = '/Solicitudes-de-credito',
    DETALLE_DEL_CREDITO = '/Detalle-del-credito',
    DETALLE_DEL_CODEUDOR_REQUERIDO = '/Detalle-del-codeudor-requerido'
}


const routes: RouteProps[] = [
    {path: AppRoutes.LOGIN, element: <Login/>},
    {path: AppRoutes.PROFILE_OPTIONS, element: <ProfileOptions/>},
    {path: AppRoutes.CATALOG, element: <Catalog/>},
    {path: AppRoutes.MENU_USER, element: <MenuAgent/>},
    {path: AppRoutes.CHANGE, element: <ChangePassword/>},
    {path: AppRoutes.HOME, element: <Home/>},
    {path: AppRoutes.DOCUMENTS, element: <DocumentsInformation/>},
    {path: AppRoutes.SIGN, element: <LoginFirma/>},
    {path: AppRoutes.VIEW_DOCUMENT, element: <PDFView/>},
    {path: '*', element: <ProfileOptions/>},
    // New
    {path: AppRoutes.NEW, element: <New/>},
    {path: AppRoutes.LOGINFIRMA17, element: <LoginFirma17/>},
    {path: AppRoutes.REFERENCIAS_Y_DOCUMENTOS_13, element: <ReferenciasYDocumentos/>},
    {path: AppRoutes.INFORMACION_FINANCIERA_10, element: <InformacionFinanciera10/>},
    {path: AppRoutes.SOLICITUDES_DE_CREDITO, element: <SolicitudesDeCredito/>},
    {path: AppRoutes.DETALLE_DEL_CREDITO, element: <DetalleDelCredito/>},
    {path: AppRoutes.DETALLE_DEL_CODEUDOR_REQUERIDO, element: <DetalleDelCodeudorRequerido/>}
];

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}