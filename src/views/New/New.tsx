import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './new.scss';
export const New = () => {
  useEffect(() => {
    document.body.classList.add('body-login');
    return () => {
        document.body.classList.remove('body-login');
    };
  }, []);
  const Links = [
    {
      link: '/loginfirma17',
      text: 'loginfirma17'
    },
    {
      link: '/Referencias-y-documentos-13',
      text: 'Referencias-y-documentos-13'
    },
    {
      link: '/Informacion-financiera-10',
      text: 'Informacion-financiera-10'
    },
    {
      link: '/Solicitudes-de-credito',
      text: 'Solicitudes-de-credito'
    },
    {
      link: '/Detalle-del-credito',
      text: 'Detalle-del-credito'
    },
    {
      link: '/Detalle-del-codeudor-requerido',
      text: 'Detalle-del-codeudor-requerido'
    },
  ]
  return (
    <div className="new" >
      <header>
        <h1>Newly Created Pages For Sprint 2</h1>
      </header>
      <ol>
        {
          Links.map((item,i)=>{
            return <Link key={i} to={item.link} ><li>{item.text}</li></Link>
          })
        }
      </ol>
    </div>
  )
}
