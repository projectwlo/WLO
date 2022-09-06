import {BtnBack, IconAgent, IconLock, IconMoney} from "../../../assets/icons";
import "./UserMenu.scss";
import {Desktop, Mobile, Tablet} from "../../../utils/breakpoints";

interface UserMenuProps {
}

export function UserMenu(_props: UserMenuProps) {
    return (
        <>
            <Desktop>
                <div>
                    <div className="btn-menu-back d-block d-md-none d-sm-block">
                        <BtnBack/>
                    </div>
                    <div className="title-welcome">
                        {'BIENVENIDO USER'}
                    </div>
                    <div className="subtitle-menu">
                        {'¿Cómo te podemos ayudar hoy?'}
                    </div>
                    <IconLock className="vector-lock"/>
                    <div className="menu-text-change-password">
                        {'Cambio de contraseña'}
                    </div>
                    <div className="rectangle-change-password"/>
                    <div className="rectangle-menu-solicitud"/>
                    <IconMoney className="vector-money"/>
                    <div className="menu-text">
                        {'Solicitudes de crédito'}
                    </div>
                    <div className="rectangle-menu-solicitud"/>
                    <div className="menu-text-credit">
                        {'Gestionar crédito'}
                    </div>
                    <IconAgent className="vector-agent"/>
                    <div className="rectangle-menu-credit"/>
                </div>
            </Desktop>
            <Tablet>
                <div>
                    <div className="btn-menu-back d-block d-md-none d-sm-block">
                        <BtnBack/>
                    </div>
                    <div className="title-welcome">
                        {'BIENVENIDO USER'}
                    </div>
                    <div className="subtitle-menu">
                        {'¿Cómo te podemos ayudar hoy?'}
                    </div>
                    <IconLock className="vector-lock"/>
                    <div className="menu-text-change-password">
                        {'Cambio de contraseña'}
                    </div>
                    <div className="rectangle-change-password"/>
                    <div className="rectangle-menu-solicitud"/>
                    <IconMoney className="vector-money"/>
                    <div className="menu-text">
                        {'Solicitudes de crédito'}
                    </div>
                    <div className="rectangle-menu-solicitud"/>
                    <div className="menu-text-credit">
                        {'Gestionar crédito'}
                    </div>
                    <IconAgent className="vector-agent"/>
                    <div className="rectangle-menu-credit"/>
                </div>
            </Tablet>
            <Mobile>
                <div>
                    <div className="btn-menu-back d-block d-md-none d-sm-block">
                        <BtnBack/>
                    </div>
                    <div className="title-welcome">
                        {'BIENVENIDO USER'}
                    </div>
                    <div className="subtitle-menu">
                        {'¿Cómo te podemos ayudar hoy?'}
                    </div>
                    <IconLock className="vector-lock"/>
                    <div className="menu-text-change-password">
                        {'Cambio de contraseña'}
                    </div>
                    <div className="rectangle-change-password"/>
                    <div className="rectangle-menu-solicitud"/>
                    <IconMoney className="vector-money"/>
                    <div className="menu-text">
                        {'Solicitudes de crédito'}
                    </div>
                    <div className="rectangle-menu-solicitud"/>
                    <div className="menu-text-credit">
                        {'Gestionar crédito'}
                    </div>
                    <IconAgent className="vector-agent"/>
                    <div className="rectangle-menu-credit"/>
                </div>
            </Mobile>
        </>
    )
}