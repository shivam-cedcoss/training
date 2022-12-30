import React, { useEffect, useState, useRef, ReactNode } from 'react';
import './AutoComplete.css';
import '../assests/GlobalCss/style.css';
import { Search } from 'react-feather';
import { createPortal } from 'react-dom';
import { Icons } from '../assests/Icons/Icons';

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

  const divRef = useRef<HTMLDivElement>(null);
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
  // Calling the outside click function
  useEffect(() => {
    window.addEventListener("click", clickOutside, true);
    return () => {
      window.removeEventListener("click", clickOutside, true)
    }
  }, []);

  // Clicking on input box
  const clickInput = () => {
    inputText.length !== 0 && setFlag(!flag)
    setActive(!active)
  }
  
  // Remove text on button click
  const cutInputText = () => {
    setFlag(false)
    setInputText('');
    setMatchedData([]);
    setActive(false)
  }

  // Renders when matched data found
  const DataList = () => {
    return (
      <ul className="inte__AutoComplete--list">
        {matchedData?.map((i, index) => {
          return (
            <ItemsList key={index} index={index} i={i} clickedItem={clickedItem} inputText={inputText} />
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
        <input className="inte__AutoComplete--input" type="text" placeholder="Enter Text" onChange={(e) => getUserInput(e)} value={inputText} onClick={() => clickInput()} id="input" autoComplete="off" />
        {inputText !== "" && <button className="inte__AutoComplete--cut-btn" onClick={cutInputText}>{Icons.CrossIcon}
        </button>}
      </div>
      {helpText && !flag && <p className="inte__AutoComplete--helptext">{helpText}</p>}
      {matchedData?.length !== 0 ? flag && <DataList /> : flag && <NoDataFound />}
    </div>
  )
}

// Displaying list as a separate component
const ItemsList = ({ clickedItem, index, i, inputText }: any) => {
  const [showIndex, setShowindex] = useState<number>(-1);
  const liRef = useRef<HTMLLIElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (popoverRef.current !== null && liRef.current !== null) {
      const position = liRef.current.getBoundingClientRect();
      popoverRef.current.style.left = `${position.x + position.width}px`;
      popoverRef.current.style.top = `${position.y}px`;
    }
  }, [showIndex])
  // Displaying popover
  const popover = (data: React.ReactNode) => {
    return (
      createPortal(
        <div className="inte__Autocomplete-popover" ref={popoverRef}>{data}</div>,
        document.body
      )
    )
  }
  // Highlighting the current input
  const highlightText = (label: string, text: string) => {
    const position = label
      .toLowerCase()
      .indexOf(text.toLowerCase().replace(/\s+/g, " ").trimStart().trimEnd());
    if (position >= 0) {
      return (
        <>
          <span className="silver-chalice">{label.substring(0, position)}</span>
          <span>
            {label.substring(
              position,
              position + text.replace(/\s+/g, " ").length
            )}
          </span>
          <span className="silver-chalice"> {label.substring(
            position + text.replace(/\s+/g, " ").length
          )}</span>
        </>
      );
    }
  }
  return (
    <li className="inte__AutoComplete--list-item" ref={liRef} key={index} onClick={() => clickedItem(i.label)} onMouseOver={() => setShowindex(index)} onMouseOut={() => setShowindex(-1)}>
      {highlightText(i.value, inputText)}
      {i.lname && <div className="silver-chalice">{i.lname}</div>}
      {showIndex === index && i.popoverContent && popover(i.popoverContent)}
    </li>
  )
}
export default AutoComplete