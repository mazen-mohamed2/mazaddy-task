import React from 'react'
import Logo from './Logo'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <div className="flex justify-around my-1">
      <div><Logo/></div>


      <div dir='rtl' className="w-[40rem]  h-[45px] bg-red-100 flex justify-between">
      <select dir='rtl' className="bg-red-100 outline-red-300" name="adv" id="adv">
    <option  value="multi"
    
    >  <p id=' multi' className="text-[#D20653]">

     مزاد مباشر متعدد   
    </p> 
     
     </option>
  

  </select>
      <input className="w-[70%] h-[45px] bg-red-100 outline-none pr-10" placeholder='ابحث هنا'/>
      <button className="bg-[#D20653] text-white px-5 rounded"> <SearchIcon/>  </button>
      </div>
    </div>
  )
}

export default SearchBar
