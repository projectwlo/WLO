import React, {useState} from 'react';
import './if10.scss';
import {MenuBar} from '../../components/shared/Menubar/Menubar';
import {StepperInfoFin} from '../../components/shared/Wizard/StepperInfoFin';
import {Pill} from '../../components/shared/Pill/Pill';

export const InformacionFinanciera10 = () => {
  const [solicutde, setSolicutde] = useState(true);
  return (
    <>
    {
      solicutde
      ?
      <>
        <div className="soliBody" onClick={()=>{setSolicutde(false)}}></div>
        <div className="solicutud" onClick={()=>{setSolicutde(true)}}>
          <p>¿La moto es para ti?</p>
          <div className="swicth-tab">
              <p>No</p>
              <span><Pill/></span>
              <p>Si</p>
          </div>
        </div>
      </>
      :<></>
    }
    <div>
      <MenuBar display={''}/>
      <StepperInfoFin/>
    </div>
    </>
  )
};
