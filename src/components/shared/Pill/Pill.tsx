import React from 'react';
import './pill.scss';
export const Pill = () => {
    return(
      <>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
      </>
    )
}

export const FUllPill = () => {
  return(
    <div className="swicth-tab">
        <p>No</p>
        <Pill/>
        <p>Si</p>
    </div>
  )
}