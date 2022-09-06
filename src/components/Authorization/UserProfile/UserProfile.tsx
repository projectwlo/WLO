import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {IconAgentDark} from '../../../assets/icons';
import {AppRoutes} from '../../../Router';
import './user-profile.scss';
import {Desktop, Mobile, Tablet} from "../../../utils/breakpoints";
import {Col, Row} from "reactstrap";
import {profiles} from "../../../__mocks__/data";
import {MessageUtils} from "../../../assets/translations/strings/messages";
import {AuthService} from '../../../services';

export function UserProfile() {
    const navigate = useNavigate();
    let profilesInfo: any = profiles;
    const handleSubmit = (value: any) => {
        localStorage.setItem('idProfile', value);
        navigate(AppRoutes.LOGIN, {replace: true});
    };
    useEffect(() => {
        document.body.classList.add('body-login');
        return () => {
            document.body.classList.remove('body-login');
        };
    }, []);

    useEffect(() => {
        (async () => {
            profilesInfo = await AuthService.getPerfiles();
        })();
    }, []);

    const renderIcon = (profileType: string) => {
        switch (profileType) {
            case "A":   //ADMIN
            case "AU":  //SELF-SERVICE
            case "G":   //MANAGER
            case "V":   //VENDOR
                return <IconAgentDark/>
        }
    }

    const renderDesktopTablet = () => {
        return (
            <div id={"user-profile"}>
                <div className='img-logo-profiles'/>
                <div className='title-text-profiles'>{MessageUtils["title_confirm_your_profile_to_continue"]}</div>
                <Row className={'container-profiles'}>
                    {profilesInfo && profilesInfo.Ws_Perfiles_consultaResult.Array_Perfiles.Datos_Perfiles.map((item: any, index: number) => {
                        return (
                            <Col key={`${index}-${item.Pws_Est_perf}`}
                                 id={`${index}-${item.Pws_Est_perf}`}
                                 md={2} className={'items-container-profiles'}
                                 onClick={() => handleSubmit(item.Pws_Tip_perfil)}>
                                {renderIcon(item.Pws_Est_perf)}
                                <p>{item.Pws_Nom_perf}</p>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }

    const renderMobile = () => {
        return (
            <div id={"user-profile-mobile"}>
                <div className='img-logo-mobile-profiles'/>
                <div
                    className='title-text-mobile-profiles'>{MessageUtils["title_confirm_your_profile_to_continue"]}</div>
                <Row className={'container-mobile-profiles'}>
                    {profilesInfo && profilesInfo.Ws_Perfiles_consultaResult.Array_Perfiles.Datos_Perfiles.map((item: any, index: number) => {
                        return (
                            <Col key={`${index}-${item.Pws_Est_perf}`}
                                 id={`${index}-${item.Pws_Est_perf}`}
                                 md={6} className={'items-container-mobile-profiles'}
                                 onClick={(event) => handleSubmit({enteredValue: event})}>
                                {renderIcon(item.Pws_Est_perf)}
                                <p>{item.Pws_Nom_perf}</p>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }

    return (
        <>
            <Desktop>
                {renderDesktopTablet()}
            </Desktop>
            <Tablet>
                {renderDesktopTablet()}
            </Tablet>
            <Mobile>
                {renderMobile()}
            </Mobile>
        </>
    )
}