import React from 'react';
import './if.scss';
import {Pill} from '../Pill/Pill';

export const InfoFinanciera = () => {
  return (
    <div className="infoFin">
        <div className="header">
            <h4>Información financiera</h4>
            <p>Por favor diligencia los datos </p>
        </div>
        <div className="body">
            <div className="body1">
                <div className="title">Ingresos del solicitante</div>
                <ul>
                    <li>
                        <label htmlFor="Ingreso">Ingreso principal</label>
                        <input type="text" name="Ingreso" placeholder="$" />
                    </li>
                    <li>
                        <label htmlFor="Otros">Otros ingresos</label>
                        <input type="text" name="Otros" placeholder="$" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <label htmlFor="egresos">Valor egresos</label>
                        <input type="text" name="egresos" placeholder="$" />
                    </li>
                    <li>
                        <label htmlFor="arriendo">Valor arriendo</label>
                        <input type="text" name="arriendo" placeholder="$" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <textarea name="describe" placeholder="Describa el concepto de otros ingresos"></textarea>
                    </li>
                </ul>
                <div className="title-bottom">Propiedades del solicitante</div>
                <div className="slide-switch">
                    <p>Declarante de renta</p>
                    <div className="swicth-tab">
                        <p>No</p>
                        <Pill/>
                        <p>Si</p>
                    </div>
                </div>
            </div>
            <div className="body2">
                <div className="title">Cuéntanos  sobre tus operaciones financieras </div>
                <ul className="textSlide">
                    <li>
                        <p>¿Realizas operaciones en moneda extranjera?</p>
                    </li>
                    <li>
                        <div className="swicth-tab">
                            <p>No</p>
                            <Pill/>
                            <p>Si</p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label htmlFor="Cuales">¿Cuales operaciones?</label>
                        <input type="text" name="Cuales" placeholder="$" />
                    </li>
                    <li>
                        <label htmlFor="Moneda">Moneda</label>
                        <input type="text" name="Moneda" placeholder="$" />
                    </li>
                </ul>
                <ul className="textSlide">
                    <li>
                        <p>Posees cuentas en moneda extranjera</p>
                    </li>
                    <li>
                        <div className="swicth-tab">
                            <p>No</p>
                            <Pill/>
                            <p>Si</p>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label htmlFor="Banco">Banco</label>
                        <input type="text" name="Banco" placeholder="$" />
                    </li>
                    <li>
                        <label htmlFor="cuenta">Número de cuenta</label>
                        <input type="text" name="cuenta" placeholder="$" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <label htmlFor="País">País</label>
                        <input type="text" name="País" placeholder="$" />
                    </li>
                    <li>
                        <label htmlFor="Ciudad">Ciudad</label>
                        <input type="text" name="Ciudad" placeholder="$" />
                    </li>
                </ul>
                <div className="bottom">
                    <p className="title-bottom">{`Información PEP. (Personas expuestas Publicamente)`}</p>
                    <p className="sub-title">Por tu seguridad responde las siguientes preguntas</p>
                    <button>Responder</button>
                </div>
            </div>
        </div>
    </div>
  )
};
