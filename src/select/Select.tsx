import React, { ChangeEvent, useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';
import './Select.css';
import '../assests/css/globalCss/style.css';
import { Svgs } from '../assests/icons/Svgs';

interface ISelect {
  label?: string | null
  isSearchable?: boolean
  searchHelpText?: boolean
  options?: Array<ObjI>
  loading?: boolean
  withDescription?: boolean
}

interface ObjI extends GroupI {
  label: string | React.ReactNode;
  value: string;
  description?: string
}

interface Itype {
  value?: string | null,
  label?: string | null,
  description?: string | null,
}

interface GroupI {
  group?: ObjI[];
}

const Select = ({ label, searchHelpText, isSearchable, options, loading, withDescription }: ISelect) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selecttext, setSelectText] = useState<string | null>(null);
  const [matchedOptions, setMatchedOptions] = useState<ObjI[]>([])
  const getSelectedOption = (e: any) => {
    setSelectText(e)
  }
  const searchFromDropdown = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectText(e.target.value);
  }

  useEffect(() => {
    let a = selecttext?.toLowerCase();
    // setItems([...items, newData])
    options?.map((i, index) => {
      // const newData = {
      //   value: i.value,
      //   label: i.label,
      //   description: i.description
      // }
      if (typeof i.label === "string" && a !== undefined) {
        if (i.label.toLowerCase()?.includes(a)) {
          console.log(i)
          setMatchedOptions([i])
        }
      }
    })
    // options?.map((item, index) => {
    //   if (typeof item.label === "string") {
    //     let b = item.label.toLowerCase();
    //     if (b?.substring(0, index) === e.target.value) {
    //       console.log(item)
    //     }
    //   }
    // });

  }, [selecttext])
  console.log(matchedOptions.length)
  return (
    <>
      <div className="inte__container">
        {label && <label className="pb-8 select-label" htmlFor="select-input">{label}</label>}
        <div className={showDropdown ? "inte__container-select inte__container-select-focus" : "inte__container-select"} onClick={() => setShowDropdown(!showDropdown)}>
          <div>{isSearchable ? <input type="text" id="select-input" placeholder="Select" onChange={(e) => searchFromDropdown(e)} value={selecttext !== null ? selecttext : ""} /> : "Select"}</div>
          <div className="inte__container-select-icons">
            {loading ? <span style={{ border: "none" }} className="inte__container-select-loader">{Svgs.spinnerIcon}</span> : <button style={{ display: selecttext !== null ? "inline-block" : "none" }} onClick={() => setSelectText(null)}>
              {Svgs.CrossIcon}
            </button>}

            <span></span>
            <ChevronDown className={showDropdown ? "icon-up" : "icon-down"} />
          </div>
        </div>
        {showDropdown && <div className="inte__container-dropdown">
          {matchedOptions.length === 0 ? options?.map((item, index) => {
            return (
              <div key={index} className={selecttext === item.label ? "inte__container-dropdown-items inte__container-dropdown-active" : "inte__container-dropdown-items"} onClick={() => getSelectedOption(item.label)}>
                <div className={selecttext === item.label ? "" : "inte__container-dropdown-items-hidden"}>{Svgs.tickIcon}</div>
                <div className="inte__container-dropdown-items-content">
                  <div>{item.label}</div>
                  {withDescription && <div>{item.description}</div>}
                </div>
              </div>
            )
          }) : matchedOptions?.map((item, index) => {
            return (
              <div key={index} className={selecttext === item.label ? "inte__container-dropdown-items inte__container-dropdown-active" : "inte__container-dropdown-items"} onClick={() => getSelectedOption(item.label)}>
                <div className={selecttext === item.label ? "" : "inte__container-dropdown-items-hidden"}>{Svgs.tickIcon}</div>
                <div className="inte__container-dropdown-items-content">
                  <div>{item.label}</div>
                  {withDescription && <div>{item.description}</div>}
                </div>
              </div>
            )
          })}
        </div>}

        {searchHelpText && <div className="inte__container-search-text pt-8 ft-16"><span>{Svgs.SearchIcon}
        </span><span className="pl-8">Please enter the text</span></div>}
      </div>
    </>
  )
}

export default Select
