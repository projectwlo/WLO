import React, {useState,useEffect} from 'react';
import './sd.scss';
import './pagination.scss';
import { VscChevronLeft, VscChevronRight, VscChevronDown } from "react-icons/vsc";

const data = [
    {
        item1: 'Johnny Hawkins',
        item2: 'Cameroon',
        item3: 'Firmado',
        item4: 'Aprobado',
        item5: '$60´089.000',
        item6: 'Crédito de libre inversión',
        item7: 'January 24, 2018',
        color1: '#017D73',
        color2: '#017D73'
    },
    {
        item1: 'Johnny Hawkins',
        item2: 'Cameroon',
        item3: 'Firmado',
        item4: 'Aprobado',
        item5: '$60´089.000',
        item6: 'Crédito de libre inversión',
        item7: 'January 24, 2018',
        color1: '#F5A700',
        color2: '#017D73'
    },
    {
        item1: 'Johnny Hawkins',
        item2: 'Cameroon',
        item3: 'Firmado',
        item4: 'Aprobado',
        item5: '$60´089.000',
        item6: 'Crédito de libre inversión',
        item7: 'January 24, 2018',
        color1: '#017D73',
        color2: '#017D73'
    },
    {
        item1: 'Johnny Hawkins',
        item2: 'Cameroon',
        item3: 'Firmado',
        item4: 'Aprobado',
        item5: '$60´089.000',
        item6: 'Crédito de libre inversión',
        item7: 'January 24, 2018',
        color1: '#017D73',
        color2: '#017D73'
    },
    {
        item1: 'Johnny Hawkins',
        item2: 'Cameroon',
        item3: 'Firmado',
        item4: 'Aprobado',
        item5: '$60´089.000',
        item6: 'Crédito de libre inversión',
        item7: 'January 24, 2018',
        color1: '#BD271E',
        color2: '#BD271E'
    },
    {
        item1: 'Johnny Hawkins',
        item2: 'Cameroon',
        item3: 'Firmado',
        item4: 'Aprobado',
        item5: '$60´089.000',
        item6: 'Crédito de libre inversión',
        item7: 'January 24, 2018',
        color1: '#017D73',
        color2: '#017D73'
    },
    {
        item1: 'Johnny Hawkins',
        item2: 'Cameroon',
        item3: 'Firmado',
        item4: 'Aprobado',
        item5: '$60´089.000',
        item6: 'Crédito de libre inversión',
        item7: 'January 24, 2018',
        color1: '#017D73',
        color2: '#017D73'
    }
]
const SolicItem = ({info}) => {
    return (
      <>
          <ul>
              <li className="listItem firstItem">{info.item1}</li>
              <li className="listItem">{info.item2}</li>
              <li className="listItem"><span style={{background: info.color1}}></span>{info.item3}</li>
              <li className="listItem"><span style={{background: info.color2}}></span>{info.item4}</li>
              <li className="listItem">{info.item5}</li>
              <li className="listItem">{info.item6}</li>
              <li className="listItem">{info.item7}</li>
              <li className="listItem"><button>Validate</button></li>
          </ul>
      </>
    )
}
export const SolicTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tableItems, setTableItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentItems, setCurrentItems] = useState([]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const [ipp, setIpp] = useState(false);
    useEffect(()=>{
        const fetchData = async () => {
          setLoading(true);
          const res = data ;
          setTableItems(res);
          setLoading(false);
        }
        fetchData();
      }, []);
    useEffect(()=>{
        if(tableItems !== undefined){
            setCurrentItems(tableItems.slice(indexOfFirstItem,indexOfLastItem));
        }
    },[tableItems, indexOfFirstItem, indexOfLastItem]);
    const lastPage = Math.floor(Object.values(tableItems).length/itemsPerPage) + 1;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPaginate = (pageNumber) => {
        if(pageNumber===lastPage){
            setCurrentPage(pageNumber);
        }else{
            setCurrentPage(pageNumber+1);
        }
    }
    const backPaginate = (pageNumber) => {
        if(pageNumber===1){
            setCurrentPage(pageNumber);
        }else{
            setCurrentPage(pageNumber-1);
        }
    }
  const pageNumbers = [];
  if(tableItems!==undefined){
       for (let i = 1; i <= Math.ceil(tableItems.length / itemsPerPage); i++ ){
            pageNumbers.push(i);
        }
    }
  const sliderRestrictionBack = () => {
      if(currentPage === 1){
        return 'disable';
      }
  }
  const sliderRestrictionNext = () => {
      if(currentPage === lastPage){
        return 'disable';
      }
  };
  const activePaginate = (pageNumber) => {
      if(currentPage === pageNumber){
          return "active";
      }
  }
  useEffect(()=>{
    document.body.addEventListener('click',(event)=>{
        if(event.path[0].tagName !== 'svg'){
            setIpp(false);
        }
    })
  })
  if(loading){
      return <h1>Loading...</h1>
  }

  return (
    <div className="soltable">         
        <div className="responsiveFix">
            <div className="responsiveAuto">
                <ul>
                    <li className='listHeader listItem'>{`Cliente`}</li>
                    <li className='listHeader listItem'>{`Ciudad`} </li>
                    <li className='listHeader listItem'>{`Estado firma`}</li>
                    <li className='listHeader listItem'>{`Estado crédito`}</li>
                    <li className='listHeader listItem'>{`Monto`}</li>
                    <li className='listHeader listItem'>{`Línea de crédito`}</li>
                    <li className='listHeader listItem'>{`Fecha de solicitud`}</li>
                    <li className='listHeader listItem'>{`Acciones`}</li>
                </ul>
                {
                    currentItems.map((info, i) => {
                        return(
                            <SolicItem key={i} info={info}/>
                        )
                    })
                }
            </div>
        </div>
        <div className="pagination">
            <ul className="itemsPerPage">
                <p>Rows for page:</p>
                <ul>
                    <p style={{margin: "0px"}} >{itemsPerPage}</p>
                    <ul className={ipp?`open`:`close`}>
                        <li><p onClick={()=>setItemsPerPage(5)}>5</p></li>
                        <li><p onClick={()=>setItemsPerPage(10)}>10</p></li>
                        <li><p onClick={()=>setItemsPerPage(15)}>15</p></li>
                    </ul>
                </ul>
                <span onClick={()=>{setIpp(!ipp);}} style={{cursor:'pointer', marginTop: '4px'}}><VscChevronDown /></span>
            </ul>
            <ul className="pageNum">
                <li onClick={()=>backPaginate(currentPage)} className={`paginate-item back ${sliderRestrictionBack()}`}><VscChevronLeft /> </li>
                {
                    pageNumbers.map((number,i)=>{
                        return(
                            <li onClick={()=> paginate(number)} key={i} className={`paginate-item paginate-number ${activePaginate(number)}`}>{number}</li>
                        )
                    })
                }
                <li onClick={()=>nextPaginate(currentPage)} className={`paginate-item next ${sliderRestrictionNext()}`}><VscChevronRight /> </li>
            </ul>
        </div>
    </div>
  )
}