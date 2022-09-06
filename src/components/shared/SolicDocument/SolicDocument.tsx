import React, {useRef} from 'react';
import './sd.scss';
import {ArrowBack} from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import {Search, ArrowDown} from '../../../assets/icons/component';
import {SolicTable} from './SolicTable.js';

const Options = [
    {
        option: 'FilterResultodos'
    },
    {
        option: 'Filter2'
    },
    {
        option: 'Filter3'
    },
    {
        option: 'Filter4'
    }
]

interface OptionProps {
    Options: {
        option: string
    }[];
}

export const Select: React.FC <OptionProps> = ({Options}) => {
    return(
        <li>
            <ArrowDown />
            <select name="search" id="search">
                {
                    Options.map((option,i)=>{
                        return(
                            <option key={i} value={option.option}>{option.option}</option>
                        )
                    })
                }
            </select>
        </li>
    )
}

export const SolicDocument: React.FC = () => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let enteredText = textInputRef.current!.value;
        console.log(enteredText);
    }
  return (
    <div className="solicDoc">
        <Fab variant="extended" color="neutral" aria-label="add">
            <ArrowBack sx={{mr: 1}}/>
            {'Atrás'}
        </Fab>
        <div className="solicDocument">
            <h4>Solicitudes de crédito</h4>
            <div className="solicTable">
                <div className="search">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <Select Options={Options} />
                        <li>
                            <Search />
                            <input type="text" name="seacrh" placeholder="search" ref={textInputRef}/>
                        </li>
                    </form>
                </div>
                <div className="table">
                    <SolicTable/>
                </div>
            </div>
        </div>
    </div>
  )
}
