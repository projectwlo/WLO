import React from 'react';
import './dc.scss';
import {ArrowBack} from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import {FUllPill} from '../Pill/Pill';
import {Doc, Person, File, RedCheck, Edit, GreenCheck, GreenCheckBig, Documentos} from '../../../assets/icons/component';
import {ReferenceTable, CodeudorTable} from '../../shared/ReferenceDocument/ReferenceDocument';
import {Rating} from '../RatingScore';
interface infoProps {
    info: {
        bg1: string,
        text: string,
        bg2: string,
        abcilon: string
    };
    i: number;
}

const data = [
    {
        bg1: '#D0021B',
        text: 'Información del crédito',
        bg2: 'none',
        abcilon:''
    },
    {
        bg1: '#4A4A4A',
        text: 'Información personal',
        bg2: '#F13A00',
        abcilon: '!'
    },
    {
        bg1: '#4A4A4A',
        text: 'Información financiera',
        bg2: '#F13A00',
        abcilon: '!'
    },
    {
        bg1: '#4A4A4A',
        text: 'Documentos de la solicitud',
        bg2: '#F13A00',
        abcilon: '!'
    },
    {
        bg1: '#4A4A4A',
        text: 'Referencias',
        bg2: '#F13A00',
        abcilon: '!'
    },
    {
        bg1: '#4A4A4A',
        text: 'Información codeudor',
        bg2: '#F13A00',
        abcilon: '!'
    },
    {
        bg1: '#4A4A4A',
        text: 'Información de verificación y radicación',
        bg2: '#F13A00',
        abcilon: '!'
    },
    {
        bg1: '#4A4A4A',
        text: 'Pagaré',
        bg2: '#F13A00',
        abcilon: '!'
    },
    {
        bg1: '#4A4A4A',
        text: 'Desemboloso',
        bg2: '#F13A00',
        abcilon: '!'
    }
]

const CreditSideBar: React.FC <infoProps> = ({info, i}) => {
    return(
        <ul>
            <li style={{background: info.bg1}} className="rank">{i+1}</li>
            <li className="text">{info.text}</li>
            <li style={{background: info.bg2}} className="abcilon">{info.abcilon}</li>
        </ul>
    );
}

export const Box1 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>1.</li>
                <li>Información del crédito </li>
                <Doc/>
            </ul>
            <div className="sub-box">
                <ul className="w-100">
                    <li>
                        <label>Línea de crédito:</label>
                        <p>Nombre de la línea de crédito</p>
                    </li>
                    <li>
                        <label>Monto de crédito:</label>
                        <p>$ 60´000.000 </p>
                    </li>
                </ul>
                <ul className="w-100">
                    <li>
                        <label>Periodicidad de crédito:</label>
                        <p>Mensual</p>
                    </li>
                    <li>
                        <label>Plazo:</label>
                        <p>60 meses</p>
                    </li>
                    <li>
                        <label>Valor de cuota:</label>
                        <p>$1´500.000 </p>
                    </li>
                </ul>
                <ul className="submit">
                    <button>Ver plan de pagos</button>
                    <GreenCheck/>
                </ul>
            </div>
        </div>
    );
}
export const Box2 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>2.</li>
                <li>Información personal </li>
                <Person/>
            </ul>
            <div className="sub-box">
                <ul>
                    <li>
                        <label>¿Quién acredita la moto?</label>
                        <p>Persona natural</p>
                    </li>
                    <li>
                        <label>Tipo de ocupación</label>
                        <p>Asalariado </p>
                    </li>
                </ul>
            </div>
            <div className="sub-box redBox">
                <h3>Información del solicitante</h3>
                <ul>
                    <li>
                        <label>Nombres</label>
                        <p>Nombres</p>
                    </li>
                    <li>
                        <label>Apellidos</label>
                        <p>Sanchez arias </p>
                    </li>
                    <li>
                        <label>Tipo de identificación</label>
                        <p>C.C. </p>
                    </li>
                    <li>
                        <label>Fecha de expedición</label>
                        <p>DD/,MM/AAAA </p>
                    </li>
                    <li>
                        <label>Lugar de expedición</label>
                        <p>Lugar de expedición </p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label>Fecha de nacimiento</label>
                        <p>DD/,MM/AAAA</p>
                    </li>
                    <li>
                        <label>Estado civil</label>
                        <p>Soltero </p>
                    </li>
                    <li>
                        <label>Dirección residencia</label>
                        <p>Cra 78 n 53 d 80 sur</p>
                    </li>
                    <li>
                        <label>Estado civil</label>
                        <p>Bogotá </p>
                    </li>
                    <li>
                        <label>Ciudad</label>
                        <p>Bogotá </p>
                    </li>
                    <li>
                        <label>Teléfono móvil 1</label>
                        <p>3176543445 </p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label>Teléfono móvil 2</label>
                        <p>3176543445</p>
                    </li>
                    <li>
                        <label>Email</label>
                        <p>ejemplo@gmail.com </p>
                    </li>
                    <li>
                        <label>Género</label>
                        <p>Masculino</p>
                    </li>
                    <li>
                        <label>Estrato social</label>
                        <p>Estrato social </p>
                    </li>
                    <li>
                        <label>N° de personas a cargo</label>
                        <p>N° de personas a cargo</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label>Tipo de vivienda </label>
                        <p>Tipo de vivienda  </p>
                    </li>
                    <li>
                        <label>Nivel de estudios </label>
                        <p>Nivel de estudios  </p>
                    </li>
                </ul>
            </div>
            <div className="sub-box redBox">
                <h3>Actividad del solicitante</h3>
                <ul>
                    <li>
                        <label>Actividad del solicitante</label>
                        <p>EBS SAS</p>
                    </li>
                    <li>
                        <label>Fecha de ingreso</label>
                        <p>DD/MM/AAAA </p>
                    </li>
                    <li>
                        <label>Tipo de contrato</label>
                        <p>Indefinido </p>
                    </li>
                    <li>
                        <label>Antigüedad laboral</label>
                        <p>1 año </p>
                    </li>
                    <li>
                        <label>Cargo que desempeña</label>
                        <p>gerente</p>
                    </li>
                    <li>
                        <label>Jefe directo</label>
                        <p>Manuel Diaz</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <label>Dirección de la empresa</label>
                        <p>Kr 30 n 34 bis </p>
                    </li>
                    <li>
                        <label>Ciudad</label>
                        <p>Bogotá </p>
                    </li>
                    <li>
                        <label>Teléfono 1</label>
                        <p>3124567678</p>
                    </li>
                    <li>
                        <label>Teléfono 2</label>
                        <p>3124567678 </p>
                    </li>
                </ul>
            </div>
            <div className="submit">
                <button>Revisado</button>
            </div>
        </div>
    );
}
export const Box3 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>3.</li>
                <li>Información financiera </li>
                <Doc/>
            </ul>
            <div className="sub-box redBox">
                <h3>Ingresos del solicitante</h3>
                <ul>
                    <li>
                        <label>Ingreso principal</label>
                        <p>2’000.000 </p>
                    </li>
                    <li>
                        <label>Otros ingresos</label>
                        <p>500.000 </p>
                    </li>
                    <li>
                        <label>Valor egresos</label>
                        <p>1´000.000</p>
                    </li>
                    <li>
                        <label>Concepto de otros ingresos</label>
                        <p>Trabajos extra </p>
                    </li>
                </ul>
                <h3>Propiedades del solicitante</h3>
                <ul>
                    <li>
                        <label>Declarante de renta</label>
                        <p> <FUllPill/> </p>
                    </li>
                    <li>
                        <label>Vivienda</label>
                        <p>Propia </p>
                    </li>
                </ul>
            </div>
            <div className="sub-box redBox">
                <h3> operaciones financieras </h3>
                <div className="pillInfo">
                    <p>¿Realizas operaciones en moneda extranjera?</p>
                    <FUllPill/>
                </div>
                <div className="pillInfo">
                    <p>Posees cuentas en moneda extranjera</p>
                    <FUllPill/>
                </div>
                <h3>{`Información PEP. (Personas expuestas Políticamente)`}</h3>
                <div className="pillInfo">
                    <p>¿Por tu cargo manejas recursos públicos? </p>
                    <FUllPill/>
                </div>
                <div className="pillInfo">
                    <p>¿Por tu cargo o actividad ejerces algún grado de poder público? </p>
                    <FUllPill/>
                </div>
                <div className="pillInfo">
                    <p>¿Gozas de reconocimiento público? </p>
                    <FUllPill/>
                </div>
                <div className="pillInfo">
                    <p>¿Eres familiar de alguna persona políticamente expuesta? </p>
                    <FUllPill/>
                </div>
                <div className="pillInfo">
                    <p>{`¿Tienes 2° de afinidad y 2° de consanguinidad (Padres, hermanos, esposa, primos, suegros, cuñados o concuñados) con PEP?`}</p>
                    <FUllPill/>
                </div>
            </div>
            <div className="submit">
                <button>Revisado</button>
            </div>
        </div>
    );
}
export const Box4 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>4.</li>
                <li>Documentos de la solicitud </li>
                <File/>
                <Edit/>
            </ul>
            <div className="documents">
                <div className="redBox">
                    <Documentos/>
                    <p>Adjuntar documentos</p>
                </div>
                <div className="redBox">
                    <Documentos/>
                    <p>Adjuntar documentos</p>
                </div>
                <div className="redBox">
                    <Documentos/>
                    <p>Adjuntar documentos</p>
                </div>
                <div className="redBox">
                    <Documentos/>
                    <p>Adjuntar documentos</p>
                </div>
                <div className="redBox">
                    <Documentos/>
                    <p>Adjuntar documentos</p>
                </div>
                <div className="redBox">
                    <Documentos/>
                    <p>Adjuntar documentos</p>
                </div>
                <div className="redBox">
                    <Documentos/>
                    <p>Adjuntar documentos</p>
                </div>
            </div>
            <div className="submitDis">
                <button>Revisado</button>
            </div>
        </div>
    );
}
export const Box5 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>5.</li>
                <li>Referencias </li>
                <Edit/>
            </ul>
            <div className="table">
                <ReferenceTable />
            </div>
        </div>
    );
}
export const Box6 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>6.</li>
                <li>Información codeudor propietario </li>
                <Person/>
            </ul>
            <div className="table">
                <CodeudorTable/>
            </div>
        </div>
    );
}
export const Box7 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>7.</li>
                <li>Información codeudor requerido </li>
                <Person/>
            </ul>
            <div className="table">
                <CodeudorTable/>
            </div>
        </div>
    );
}
export const Box8 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>8.</li>
                <li>Desembolso </li>
                <RedCheck/>
            </ul>
            <div className="sub-box">
                <ul>
                    <div className="mapping">
                        <div className="check">
                            <GreenCheckBig/>
                            <p>Aprobado</p>
                            <h6>Listas restrictivas</h6>
                        </div>
                        <div className="score">
                            <Rating/>
                        </div>
                    </div>
                </ul>
                <ul>
                    <div className="redic">
                        <p className="presenta">Radicado</p>
                        <h5>Se aprobó el cupo por un valor de</h5>
                        <h4 className="title">$110.000.000</h4>
                    </div>
                </ul>
                <div className="submit">
                    <button>Desembolso</button>
                </div>
            </div>
        </div>
    );
}
export const Box9 = () => {
    return(
        <div className="box">
            <ul className="title">
                <li>9.</li>
                <li>Información de verificación </li>
                <RedCheck/>
            </ul>
            <div className="submitStartG">
                <button>Código de crédito aprobado: 1232425</button>
            </div>
            <div className="sub-box">
                <h3>Documentación</h3>
                <h5>Ingresa los siguientes datos de la moto para generar la documentación.</h5>
                <ul>
                    <li>
                        <label htmlFor="Numero" >Número de chasis</label>
                        <p><input type="text" name="Numero" placeholder="Respuesta"/></p>
                    </li>
                    <li>
                        <label>Motor</label>
                        <p><input type="text" name="Motor" placeholder="Respuesta"/></p>
                    </li>
                </ul>
            </div>
            <div className="submitStartR">
                <button>Generar y descargar documentos</button>
            </div>
            <div className="sub-box">
                <h3>Adjuntar documentos</h3>
                <div className="documents">
                    <div className="redBox">
                        <Documentos/>
                        <p>Adjuntar documentos</p>
                    </div>
                    <div className="redBox">
                        <Documentos/>
                        <p>Adjuntar documentos</p>
                    </div>
                    <div className="redBox">
                        <Documentos/>
                        <p>Adjuntar documentos</p>
                    </div>
                    <div className="redBox">
                        <Documentos/>
                        <p>Adjuntar documentos</p>
                    </div>
                </div>
            </div>
            <div className="submit">
                <button>Desembolsar</button>
            </div>
        </div>
    );
}

export const DetailCredit = () => {
  return (
    <div className="detailCredit" >
        <div className="header">
            <Fab variant="extended" color="neutral" aria-label="add">
                <ArrowBack sx={{mr: 1}}/>
                {'Atrás'}
            </Fab>
            <h2 className="title">Detalle del crédito</h2>
            <p className="presenta">PRESENTA RIESGO: NO</p>
        </div>
        <div className="body">
            <div className="sidebar">
                <h4>Solicitud</h4>
                {
                    data.map((info,i)=>{
                        return(
                            <CreditSideBar key={i} info={info} i={i} />
                        )
                    })
                }
            </div>
            <div className="mainDetail">
                <Box1/>
                <Box2/>
                <Box3/>
                <Box4/>
                <Box5/>
                <Box6/>
                <Box7/>
                <Box8/>
                <Box9/>
            </div>
        </div>
    </div>
  )
}
