import { useEffect, useState, useRef, ReactNode } from 'react';
import './AutoComplete.css';

interface Idata {
  options?: Array<objI>
}

interface objI {
  label: string,
  value: string,
  lname?: string,
  id?: string | number,
  popoverContent?: React.ReactNode | string | number
}

const AutoComplete = ({ options }: Idata) => {
  const [inputText, setInputText] = useState<string>('');
  const [matchedData, setMatchedData] = useState(options);
  const [flag, setFlag] = useState(false)
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputText.trim().length > 0) {
      setFlag(true)
    }
    else setFlag(false)

    if (inputText !== '') {
      let text = inputText.trimStart();
      let newOpts = options?.filter((item) => {
        return item.label.toLowerCase().includes(text.toLowerCase())
      })
      setMatchedData(newOpts)
    }
    else setMatchedData(options)
  }, [inputText])

  const clickedItem = (e: string) => {
    setInputText(e)
    setFlag(false)
  }

  const clickOutside = (e: any) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setFlag(false)
    }
  }
  useEffect(() => {
    window.addEventListener("click", clickOutside, true);
    return () => {
      window.removeEventListener("click", clickOutside, true)
    }
  }, []);

  const clickInput = () => {
    if (inputText.length < 1) {
      setFlag(false)
    }
    else setFlag(!flag)
  }

  const highlightText = (label: string, text: string) => {
    const position = label
      .toLowerCase()
      .indexOf(text.toLowerCase().replace(/\s+/g, " ").trimStart().trimEnd());
    if (position >= 0) {
      return (
        <>
          <span>{label.substring(0, position)}</span>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            {label.substring(
              position,
              position + text.replace(/\s+/g, " ").length
            )}
          </span>
          <span> {label.substring(
            position + text.replace(/\s+/g, " ").length
          )}</span>

        </>
      );
    }
  }
  
  const DataList = () => {
    return (
      <ul className="inte__AutoComplete--list">
        {matchedData?.map((i, index) => {
          return (
            <li className="inte__AutoComplete--list-item" key={index} onClick={() => clickedItem(i.label)}>
              {highlightText(i.value, inputText)}
              {/* <span>{i.label}</span> {i.lname && <span>{i.lname}</span>} */}
              {i.popoverContent && <span>{i.popoverContent}</span>}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className='inte__AutoComplete--Wrapper' ref={divRef}>
      <input type="text" placeholder="Enter Text" onChange={(e) => setInputText(e.target.value)} value={inputText} onClick={() => clickInput()} />
      {flag && <DataList />}

    </div>
  )
}
export default AutoComplete