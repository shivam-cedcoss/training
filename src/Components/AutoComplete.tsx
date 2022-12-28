import React, { useEffect, useState, useRef, ReactNode } from 'react';
import './AutoComplete.css';
import '../GlobalCss/style.css';
import { Search } from 'react-feather';

interface Idata {
  options?: Array<objI>
}

interface objI {
  label: string,
  value: string,
  lname?: string,
  id?: string | number,
  popoverContent?: ReactNode | string | number
}

const AutoComplete = ({ options }: Idata) => {
  const [inputText, setInputText] = useState<string>('');
  const [matchedData, setMatchedData] = useState<objI[] | undefined>([]);
  const [flag, setFlag] = useState(false)
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

  const showPopover = (data: React.ReactNode) => {
  }

  // Remove text on button click
  const cutInputText = () => {
    setFlag(false)
    setInputText('');
    setMatchedData([]);
  }

  const DataList = () => {
    return (
      <ul className="inte__AutoComplete--list">
        {matchedData?.map((i, index) => {
          return (
            <li className="inte__AutoComplete--list-item" key={index} onClick={() => clickedItem(i.label)} onMouseEnter={() => showPopover(i.popoverContent)}>
              {highlightText(i.value, inputText)}
              {i.lname && <div style={{ color: "#9f9f9f" }}>{i.lname}</div>}
              {/* {i.popoverContent && <span className="inte__Autocomplete-popover">{index}{i.popoverContent}</span>} */}
            </li>
          )
        })}
      </ul>
    )
  }

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
      <div>
        <input className="inte__AutoComplete--input" type="text" placeholder="Enter Text" onChange={(e) => getUserInput(e)} value={inputText} onClick={() => clickInput()} />
        <button className="inte__AutoComplete--cut-btn" onClick={cutInputText}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="cross-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      {matchedData?.length !== 0 ? flag && <DataList /> : flag && <NoDataFound />}
    </div>
  )
}
export default AutoComplete