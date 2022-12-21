import React, { useState } from 'react';
import { ChevronDown, Search, XCircle } from 'react-feather';
import './Select.css';

interface ISelect {
  label?: string | null
  isSearchable?: boolean
  searchHelpText?: boolean
}

const Select = ({ label, searchHelpText, isSearchable }: ISelect) => {
  const [searchFlag, setsearchFlag] = useState<boolean>(false)
  return (
    <>
      <div className="inte__container">
        {label && <label className="pb-8">{label}</label>}
        <div className="inte__container-select">
          <div>{isSearchable ? <input type="text" placeholder="Select" onChange={() => setsearchFlag(!searchFlag)} /> : "Select"}</div>
          <div className="inte__container-select-icons">
            <button style={{display: searchFlag ? "inline-block":"none"}} onClick={() => setsearchFlag(!searchFlag)}><XCircle /></button>
             <span></span>
              <ChevronDown />
             </div>
        </div>
        <div className="inte__container-search-text pt-8 ft-16" style={{ display: searchHelpText ? "block" : "none" }}><span><Search size={16} /></span><span className="pl-8">Please enter the text</span></div>
      </div>
    </>
  )
}

export default Select
