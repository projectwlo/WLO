import React from 'react';
import './rd.scss';
import {Document, Check} from '../../../assets/icons/component';


interface Listo {
  info: {
    item1:string,
    item2:string,
    item3:string,
    item4:string,
    item5:string
  };
};
interface Listo4 {
  info: {
    item1:string,
    item2:string,
    item3:string,
    item4:string
  };
};
const Data = [
  {
    item1: 'Familiar',
    item2: 'Parentesco',
    item3: 'Nombre completo',
    item4: '4325678',
    item5: '3143566778'
  },
  {
    item1: 'Familiar',
    item2: 'Parentesco',
    item3: 'Nombre completo',
    item4: '4325678',
    item5: '3143566778'
  },
  {
    item1: 'Familiar',
    item2: 'Parentesco',
    item3: 'Nombre completo',
    item4: '4325678',
    item5: '3143566778'
  },
  {
    item1: 'Personal',
    item2: 'Parentesco',
    item3: 'Nombre completo',
    item4: '4325678',
    item5: '3143566778'
  },
  {
    item1: 'Personal',
    item2: 'Parentesco',
    item3: 'Nombre completo',
    item4: '4325678',
    item5: '3143566778'
  }
]
const Data4 = [
  {
    item1: 'Nombre completo',
    item2: '3143566778',
    item3: 'ejemplo@gmail.com',
    item4: 'Aceptado'
  },
  {
    item1: 'Nombre completo',
    item2: '3143566778',
    item3: 'ejemplo@gmail.com',
    item4: 'Aceptado'
  },
  {
    item1: 'Nombre completo',
    item2: '3143566778',
    item3: 'ejemplo@gmail.com',
    item4: 'Aceptado'
  }
]

const ListItem: React.FC <Listo> = ({info}) => {
  return(
    <ul>
      <li className="listItem">{info.item1}</li>
      <li className="listItem">{info.item2}</li>
      <li className="listItem">{info.item3}</li>
      <li className="listItem">{info.item4}</li>
      <li className="listItem">{info.item5}</li>
    </ul>
  )
}
const ListItem4: React.FC <Listo4> = ({info}) => {
  return(
    <ul>
      <li className="listItem">{info.item1}</li>
      <li className="listItem">{info.item2}</li>
      <li className="listItem">{info.item3}</li>
      <li className="listItem">{info.item4}</li>
      <li className="listItem"><button>Ver</button></li>
    </ul>
  )
}

export const ReferenceTable = () => {
  return(
    <div className="referenceTable">
      <div className="title">Referencias</div>
      <div className="table">
        <div className="responsiveFix">
          <div className="responsiveAuto">
            <ul>
              <li className="listItem listHeader">Tipo de referencia</li>
              <li className="listItem listHeader">Parentesco</li>
              <li className="listItem listHeader">Nombre completo</li>
              <li className="listItem listHeader">{`Teléfono fijo (Si tiene)`}</li>
              <li className="listItem listHeader">Teléfono movil</li>
            </ul>
            {
              Data.map((info,i)=>{
                return(
                  <ListItem key={i} info={info}/>
                )
              })
            }
          </div>
        </div>
        <div className="agregar">
          <button>Agregar</button>
        </div>
      </div>
    </div>
  )
}
export const CodeudorTable = () => {
  return(
    <div className="referenceTable">
      <div className="title">Referencias</div>
      <div className="table">
        <div className="responsiveFix">
          <div className="responsiveAuto">
            <ul>
              <li className="listItem listHeader">Nombre completo </li>
              <li className="listItem listHeader">Teléfono movil</li>
              <li className="listItem listHeader">Correo</li>
              <li className="listItem listHeader">Estado</li>
              <li className="listItem listHeader"><button>Ingresos</button></li>
            </ul>
            {
              Data4.map((info,i)=>{
                return(
                  <ListItem4 key={i} info={info}/>
                )
              })
            }
          </div>
        </div>
        <div className="agregar">
          <button>Agregar</button>
        </div>
      </div>
    </div>
  )
}

export const AdjurDoc = () => {
  return(
    <div className="footer">
      <div className="footer-text">
        <h4>Adjuntar documentos</h4>
        <p><span>{`Documetación requerida`}</span>{`(Los documentos con * son obligatorios. Se permiten PDF, JPG Y PNG. Tamaño máximo de 5Mb) `}</p>
      </div>
      <div className="footer-body">
        <div className="document">
            <Document/>
            <p>Certificado laboral y/o certificado de contador</p>
        </div>
        <div className="document check">
            <Check/>
            <p>Certificado ingresos y retenciones o declaración de renta</p>
        </div>
        <div className="document">
            <Document/>
            <p>Fotocopia tarjeta de propiedad del vehículo</p>
        </div>
      </div>
    </div>
  )
}

export const ReferenceDocument = () => {
  return (
    <div className="Referencias">
      <div className="header">
        <h3>Referencias y documentos</h3>
        <p>Por favor diligencia los datos </p>
      </div>
      <ReferenceTable/>
      <AdjurDoc/>
    </div>

  )
}
