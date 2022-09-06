import React from 'react';
import './dcrt.scss';
import {ArrowBack} from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import {Box2, Box3, Box8} from '../DetailCredit/DetailCredit';
import {Select} from '../SolicDocument/SolicDocument';

export const DetailCreditRequire = () => {
  const Options = [
    {
        option: 'Ocupación'
    },
    {
        option: 'Ocupación1'
    },
    {
        option: 'Ocupació2'
    },
    {
        option: 'Ocupació3'
    }
  ]
  return (
    <div className="detailCreditR" >
        <div className="header">
            <Fab variant="extended" color="neutral" aria-label="add">
                <ArrowBack sx={{mr: 1}}/>
                {'Atrás'}
            </Fab>
            <h2 className="title">Detalle del codeudor requerido</h2>
        </div>
        <div className="selectOp">
          <Select Options={Options} />
        </div>
        <div className="mainDetail">
            <Box2/>
            <Box3/>
            <Box8/>
        </div>
    </div>
  )
}
