import React, { useEffect, useState, useRef, ReactNode } from 'react';
import './AutoComplete.css';
import '../assests/GlobalCss/style.css';
import { Search } from 'react-feather';
import { createPortal } from 'react-dom';

interface Idata {
  options?: Array<objI>,
  label?: string,
  helpText?: string
}

interface objI {
  label: string,
  value: string,
  lname?: string,
  id?: string | number,
  popoverContent?: ReactNode | string | number
}

const AutoComplete = ({ options, label, helpText }: Idata) => {
  const [inputText, setInputText] = useState<string>('');
  const [matchedData, setMatchedData] = useState<objI[] | undefined>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false)
  const [showIndex, setShowindex] = useState<number>(-1);
  const divRef = useRef<HTMLDivElement>(null);
  const liRef = useRef<HTMLLIElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  // Getting input from user
  const getUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value.trimStart();
    setInputText(text)
    if (text !== '') {
      setFlag(true)
      getMatchedData(text)
    }
    else {
      setFlag(false)
      setMatchedData([])
    }
  }

  // Clicking on particular item/row
  const clickedItem = (e: string) => {
    setInputText(e)
    setFlag(false)
    getMatchedData(e)
  }

  // Setting the matched data in the array
  const getMatchedData = (e: string) => {
    let newOpts = options?.filter((item) => {
      return item.label.toLowerCase().includes(e.toLowerCase())
    })
    setMatchedData(newOpts)
  }

  // Clicking outside of the container
  const clickOutside = (e: any) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setFlag(false)
      setActive(false)
    }
  }

  const HidingPopover = (e: any) => {
    if (liRef.current && !liRef.current.contains(e.target)) {
      setShowindex(-1)
    }
  }
  // Calling the outside click function
  useEffect(() => {
    window.addEventListener("click", clickOutside, true);
    window.addEventListener("mouseout", HidingPopover, true)
    return () => {
      window.removeEventListener("click", clickOutside, true)
      window.removeEventListener("mouseout", HidingPopover, true)
    }
  }, []);

  // Clicking on input box
  const clickInput = () => {
    inputText.length !== 0 && setFlag(!flag)
    setActive(!active)
  }

  // Highlighting the current input
  const highlightText = (label: string, text: string) => {
    const position = label
      .toLowerCase()
      .indexOf(text.toLowerCase().replace(/\s+/g, " ").trimStart().trimEnd());
    if (position >= 0) {
      return (
        <>
          <span style={{ color: "#9f9f9f" }}>{label.substring(0, position)}</span>
          <span>
            {label.substring(
              position,
              position + text.replace(/\s+/g, " ").length
            )}
          </span>
          <span style={{ color: "#9f9f9f" }}> {label.substring(
            position + text.replace(/\s+/g, " ").length
          )}</span>
        </>
      );
    }
  }

  const showPopover = (index: any) => {
    setShowindex(index);
    if ( liRef.current !== null) {
      const a = liRef.current.getBoundingClientRect();
      console.log(a)
    }
  }

  useEffect(() => {
    if (popoverRef.current !== null && liRef.current !== null) {
      const a = liRef.current.getBoundingClientRect();
      popoverRef.current.style.left = `${a.x}px`;
      popoverRef.current.style.top = `${a.x}px`;
    }
  }, [showIndex])

  // Remove text on button click
  const cutInputText = () => {
    setFlag(false)
    setInputText('');
    setMatchedData([]);
    setActive(false)
  }

  const styles = {
    popoverStyles: {
      top: "",
      right: "",
      bottom: "",
      left: ""
    }
  }

  // Displaying popover
  const popover = (index: number, data: React.ReactNode) => {
    const { popoverStyles } = styles;
    return (
      createPortal(
        <div className="inte__Autocomplete-popover" style={popoverStyles} ref={popoverRef}>{data}</div>,
        document.body
      )
    )
  }

  // Renders when matched data found
  const DataList = () => {
    return (
      <ul className="inte__AutoComplete--list">
        {matchedData?.map((i, index) => {
          return (
            <li className="inte__AutoComplete--list-item" ref={liRef} key={index} onClick={() => clickedItem(i.label)} onMouseOver={() => showPopover(index)}>
              {highlightText(i.value, inputText)}
              {i.lname && <div style={{ color: "#9f9f9f" }}>{i.lname}</div>}
              {showIndex === index && i.popoverContent && popover(index, i.popoverContent)}
            </li>
          )
        })}
      </ul>
    )
  }
  // Render's when no data found
  const NoDataFound = () => {
    return (
      <ul className="inte__Autocomplete--nodata">
        <li><Search size={20} /></li>
        <li>No Results Found</li>
        <li>Check Your Search Term "<b>{inputText}</b>"</li>
      </ul>
    )
  }
  return (
    <div className='inte__AutoComplete--Wrapper' ref={divRef}>
      {label && <label htmlFor="input">{label}</label>}
      <div className={active ? "inte__AutoComplete--input-div active" : 'inte__AutoComplete--input-div'}>
        <Search size={18} />
        <input className="inte__AutoComplete--input" type="text" placeholder="Enter Text" onChange={(e) => getUserInput(e)} value={inputText} onClick={() => clickInput()} id="input" />
        {inputText !== "" && <button className="inte__AutoComplete--cut-btn" onClick={cutInputText}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="cross-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>}
      </div>
      {helpText && !flag && <p className="inte__AutoComplete--helptext">{helpText}</p>}
      {matchedData?.length !== 0 ? flag && <DataList /> : flag && <NoDataFound />}
    </div>
  )
}
export default AutoComplete