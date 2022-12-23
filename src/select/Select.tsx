import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'react-feather';
import './Select.css';
import '../assests/css/globalCss/style.css';
import { Svgs } from '../assests/icons/Svgs';
import MultiTag from './MultiTag';
interface ISelect {
  label?: string | null
  isSearchable?: boolean
  searchHelpText?: boolean
  options?: Array<ObjI>
  loading?: boolean
  withDescription?: boolean
  multiSelect?: boolean
}

export interface ObjI extends GroupI {
  label: string | React.ReactNode;
  value: string;
  description?: string
}

interface GroupI {
  group?: ObjI[];
}

const Select = ({ label, searchHelpText, isSearchable, options, loading, withDescription, multiSelect }: ISelect) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selecttext, setSelectText] = useState<string[]>([]);
  const [userInputText,setUserInputText]=useState("");
  const [matchedOptions, setMatchedOptions] = useState(options)
  const getSelectedOption = (e: any) => {
    !multiSelect && setSelectText([e])
    multiSelect && setSelectText([...selecttext, e])
  }

  const ContainerRef = useRef<HTMLDivElement>(null);
  // Check Outside click
  const handleClickOutside = (event: any) => {
    if (ContainerRef.current && !ContainerRef.current.contains(event.target)) {
      setShowDropdown(false)
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [])
  const searchFromDropdown = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedText = e.target.value;
    setUserInputText(selectedText)
    // setSelectText([selectedText]);
  }
  function resizeInput(this: any) {
    this.style.width = this.value.length + "ch";
  }
  useEffect(() => {
    var input = document.querySelector("input");
    input?.addEventListener("input", resizeInput);
    resizeInput.call(input);
  }, [])

  // Dropdown menu
  const Dropdownmenu = () => {
    return (
      <div className="inte__container-dropdown" ref={ContainerRef}>
        {matchedOptions?.map((item, index) => {
          return (
            <div key={index} className={selecttext === item.label ? "inte__container-dropdown-items inte__container-dropdown-active" : "inte__container-dropdown-items"} onClick={() => getSelectedOption(item.label)}>
              <div className={selecttext[index] === item.label ? "" : "inte__container-dropdown-items-hidden"}>{Svgs.tickIcon}</div>
              <div className="inte__container-dropdown-items-content">
                <div>{item.label}</div>
                {withDescription && <div>{item.description}</div>}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  useEffect(() => {
    // let userSearchInput = selecttext?.toLowerCase();
    // if (userSearchInput !== undefined) {
    //   let temp: any = []
    //   options?.map((i, index) => {
    //     if (typeof i.label === "string" && userSearchInput !== undefined) {
    //       if (i.label.toLowerCase()?.includes(userSearchInput)) {
    //         temp.push(i)
    //       }
    //     }
    //   })
    //   setMatchedOptions([...temp])
    // }
    // else setMatchedOptions(options)
  }, [selecttext])

  const removeTags = (data: any) => {
    const newLabel = selecttext.filter((ele) => ele !== data)
    setSelectText([...newLabel])
  }
  return (
    <>
      <div className="inte__container">
        {label && <label className="pb-8 select-label" htmlFor="select-input">{label}</label>}
        <div className={showDropdown ? "inte__container-select inte__container-select-focus" : "inte__container-select"} >
          <div className="inte__container-select-tag" onClick={() => setShowDropdown(true)}>{multiSelect && <MultiTag selectOption={selecttext} removeTags1={removeTags} />}{isSearchable ? <input type="text" id="select-input" placeholder="Select" onChange={(e) => searchFromDropdown(e)} value={multiSelect ? userInputText : ""} /> : "Select"}</div>
          <div className="inte__container-select-icons">
            {loading ? <span style={{ border: "none" }} className="inte__container-select-loader">{Svgs.spinnerIcon}</span> : <button style={{ display: selecttext !== null ? "inline-block" : "none" }} onClick={() => setSelectText([])}>
              {Svgs.CrossIcon}
            </button>}
            <span></span>
            <button onClick={() => setShowDropdown(!showDropdown)}><ChevronDown onClick={() => setShowDropdown(!showDropdown)} className={showDropdown ? "icon-up" : "icon-down"} /></button>
          </div>
        </div>
        {showDropdown && <Dropdownmenu />}
        {searchHelpText && <div className="inte__container-search-text pt-8 ft-16"><span>{Svgs.SearchIcon}
        </span><span className="pl-8">Please enter the text</span></div>}
      </div>
    </>
  )
}

export default Select
