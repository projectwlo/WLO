import React from 'react';
import './sdc.scss';
import {MenuBar} from '../../components/shared/Menubar/Menubar';
import {SolicDocument} from '../../components/shared/SolicDocument/SolicDocument';

export const SolicitudesDeCredito = () => {
  return (
    <>
      <MenuBar display={``}/>
      <SolicDocument />
    </>
  )
}
