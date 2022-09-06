import {ArrowBack} from "@mui/icons-material";
import {Fab} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Col, FormGroup, Input, Row} from "reactstrap";
import {MessageUtils} from "../../assets/translations/strings/messages";
import {MenuBar} from "../../components";
import {AppRoutes} from "../../Router";
import './Catalog.scss';
import {inventario} from "../../__mocks__/data";
import { WLOCreditAPIService } from "../../services";
import { useEffect } from "react";

interface CatalogProps {
}

export function Catalog(_props: CatalogProps) {
    const navigate = useNavigate();
    let inventarioInfo: any;
    const handleSubmit = () => {
        navigate(AppRoutes.PROFILE_OPTIONS, {replace: true});
    };
    const handleSubmitCredit = () => {
        localStorage.setItem('R_s_nom_prod', inventario.Ws_InventarioResult.RespProd.RespuestaProd.R_s_nom_prod);
        localStorage.setItem('R_s_precio_comer', inventario.Ws_InventarioResult.RespProd.RespuestaProd.R_s_precio_comer)
        navigate(AppRoutes.HOME, {replace: true});
    };
    useEffect(() => {
         (async () => {
            inventarioInfo = await WLOCreditAPIService.getInventario({pws_tip_producto: "1", pws_cod_producto: "1", pws_cate_producto: "1"});
         })();
     }, []);
    return (
        <div>
            <MenuBar display={''}/>
            <div className="flex-container-catalog">
                <div className="flex-item-left-catalog">
                    <Fab variant="extended" color="neutral" aria-label="add"
                         onClick={handleSubmit}>
                        <ArrowBack sx={{mr: 1}}/>
                        {'Atrás'}
                    </Fab>
                </div>
                <div className="flex-item-right-catalog">
                    <h1 className="title-motos-catalog">{MessageUtils["motos"]}</h1>
                    <h3 className="subtitle-motos-catalog">{'Elige el de tu preferencia'}</h3>
                </div>
                <div className="flex-item-left-catalog">
                </div>
            </div>
            <Row className="flex-item-right-catalog">
                <Col md={6}/>
                <Col md={6}>
                    <FormGroup>
                        <Input
                            className='form-control-credit'
                            id="name"
                            name="name"
                            placeholder="Se hace la búsqueda y se filtra automáticamente"
                            type="text"
                        />
                    </FormGroup>
                </Col>

                {inventario && (<>
                    <Col
                        md={4}
                        onClick={handleSubmitCredit}>
                        <img src={require('../../assets/images/390_ADVENTURE.png')} alt={''}/>
                        <h1 className="title-model">{inventarioInfo && inventarioInfo.payload.data.RespProd.RespuestaProd.R_s_nom_prod}</h1>
                    </Col>
                    <Col
                        md={4}
                        onClick={handleSubmitCredit}>
                        <img src={require('../../assets/images/390_ADVENTURE.png')} alt={''}/>
                        <h1 className="title-model">{inventarioInfo && inventarioInfo.payload.data.RespProd.RespuestaProd.R_s_nom_prod}</h1>
                    </Col>
                    <Col
                        md={4}
                        onClick={handleSubmitCredit}>
                        <img src={require('../../assets/images/390_ADVENTURE.png')} alt={''}/>
                        <h1 className="title-model">{inventarioInfo && inventarioInfo.payload.data.RespProd.RespuestaProd.R_s_nom_prod}</h1>
                    </Col>
                </>)

                }
            </Row>
            {/*<div className="flex-container-catalog">
                <div className="flex-item-left-catalog">
                    <img src={require('../../assets/images/250_DUKE.png')} alt={''}/>
                    <h1 className="title-model">{'250 DUKE'}</h1>
                </div>
                <div className="flex-item-right-catalog" onClick={handleSubmitCredit}>
                    <img src={require('../../assets/images/390_ADVENTURE.png')} alt={''}/>
                    <h1 className="title-model">{'390 ADVENTURE'}</h1>
                </div>
                <div className="flex-item-left-catalog">
                    <img src={require('../../assets/images/390_DUKE.png')} alt={''}/>
                    <h1 className="title-model">{'390 DUKE'}</h1>
                </div>
            </div>
            <div className="flex-container-catalog">
                <div className="flex-item-left-catalog">
                    <img src={require('../../assets/images/390_DUKE.png')} alt={''}/>
                    <h1 className="title-model">{'390 ADVENTURE'}</h1>
                </div>
                <div className="flex-item-right-catalog">
                    <img src={require('../../assets/images/390_ADVENTURE.png')} alt={''}/>
                    <h1 className="title-model">{'250 DUKE'}</h1>
                </div>
                <div className="flex-item-left-catalog">
                    <img src={require('../../assets/images/250_DUKE.png')} alt={''}/>
                    <h1 className="title-model">{'390 DUKE'}</h1>
                </div>
            </div>*/}
        </div>
    )
}