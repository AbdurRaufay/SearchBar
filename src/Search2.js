import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import React,{useState} from 'react';
import './InputStyle.css'

const Search2=({placeholder,data})=>{
     const [filterData,setFilterData]=useState([])
     const [wordEntered,setwordEntered]=useState('')

     const filterHandler=(event)=>{
       const wordSearch=event.target.value
       setwordEntered(wordSearch)
       const newFilter=data.filter((value)=>{
           return value.title.toLowerCase().includes(wordSearch.toLowerCase())
       })
       if(wordSearch==""){
           setFilterData([])
       }
       else{
       setFilterData(newFilter)
       }
     }
     const clearInput=()=>{
         setFilterData([])
         setwordEntered('')
     }
  return (
      <div className='search'>
          <div className='searchInputs'>
          <Input type='text' placeholder={placeholder}
           onChange={filterHandler}  value={wordEntered} autoFocus={true}/>
           {filterData.length==0?<SearchIcon />:
          <CloseIcon onClick={clearInput} id="clearBtn"/>}
          </div>
          {filterData.length!=0 &&
       <div className='dataResult'>
           {filterData.slice(0,15 ).map((value,key)=>{
               return ( <a className='dataItem' href={value.link} target='_blank' >
                    <p>{value.title}</p>
               </a>
               )
           })}
          
       </div>
    }
      </div>
  )

    
}
export default Search2;