import React,{useState} from 'react'
import Input from '@mui/material/Input';
import './InputStyle.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



function Search({placeholder,data}) {
         const [filterData,setFilterData]=useState([])
         const [wordEntered,setwordEntered]=useState('')
         const handleFilter=((event)=>{
         const searchWord=event.target.value
         setwordEntered(searchWord)
         const newFilter=data.filter((value)=>{
             return value.title.toLowerCase().includes(searchWord.toLowerCase())
            })
            if(searchWord===''){
                setFilterData([])
            }else{
            setFilterData(newFilter);
            }
                 })
         const clearInput=()=>{
             setFilterData([])
             setwordEntered('')
         }
    return (
        <div className='search'>
            <div className='searchInputs'>
            <Input className='i' placeholder={placeholder}
                onChange={handleFilter} 
               type='text'  value={wordEntered} /> 
               {filterData.length==0 ? <SearchIcon />:<CloseIcon 
                 id='clearBtn' onClick={clearInput}/>}
            
             </div>
             {filterData.length!=0 &&
             <div className='dataResult'>
                 {filterData.slice(0,15).map((value,key)=>{
                     return <a className='dataItem' 
                        href={value.link} target='_blank'>
                          <p>{value.title}</p>
                     </a>
                 
                 })}
             </div>
}
        </div>
    )
}

export default Search
