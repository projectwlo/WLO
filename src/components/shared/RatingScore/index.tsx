import React, {useState} from 'react';
import './rating.scss';

export const Rating = () => {
    const [rating, setRating] = useState(0);
  return (
    <div className="rating-graph">
        <div className="graph">
            <div className='half-donut'>
                <div className="hole">
                    <div className="line" style={{transform: `rotate(${(rating)*1.8}deg)`}}></div>
                    <div className="center-point"></div>
                </div>
            </div>
            <p className="rating">{rating}</p>
            <p>{`scoring`}</p>
            <span onClick={()=>{setRating(rating+10)}} style={{fontSize: "14px", marginRight: "10px", cursor: "pointer"}}>increase</span>
            <span onClick={()=>{setRating(rating-10)}} style={{fontSize: "14px", marginRight: "10px", cursor: "pointer"}}>descrease</span>
        </div>
    </div>
  )
}
