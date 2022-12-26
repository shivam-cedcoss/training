import React, { useEffect, useRef, useState } from 'react'
import { svgs } from './assetsArray'
import Tag from './Tag';

interface SelectI {
  helperText?: string | React.ReactNode;
  label?: string | React.ReactNode;
  options?: Array<ObjI>;
  multi?: boolean;
  searchable?: boolean;
  cleareable?: boolean;
  groupData?: boolean;
  disable?: boolean
}

interface ObjI extends GroupI {
  label: string;
  value: string;
  description?: string | React.ReactNode
}
interface GroupI {
  group?: ObjI[];
}

const SelectBox = ({ helperText, label, options, multi, searchable, groupData, disable }: SelectI): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('')
  const [dropdownActive, setDropdownActive] = useState<boolean>(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [optionsToShow, setOptionsToShow] = useState(options)

  const inputRef = useRef<HTMLInputElement>(null)
  const selectBoxRef = useRef<HTMLDivElement>(null)

  const dropdownItemClickHandler = (item: ObjI, index: number, selected = selectedOptions) => {
    if (selected.includes(`${item.label}.${item.value}.${index}`)) {
      multi ? setSelectedOptions(prev => prev.filter(data => data !== `${item.label}.${item.value}.${index}`)) : setSelectedOptions([])
    }
    else {
      multi ? setSelectedOptions(prev => [...prev, `${item.label}.${item.value}.${index}`]) : setSelectedOptions([`${item.label}.${item.value}.${index}`])
    }

    if (!multi) {
      setDropdownActive(false)
    }
  }

  const selectDropdownCard = (opts = options) => {
    return <ul className='inte-select-box__dropdown-card'>
      {
        opts?.map((item, index) => {
          const visible = selectedOptions.includes(`${item.label}.${item.value}.${index}`) ? true : false
          return <li key={`${item.label}.${item.value}.${index}`} className={`inte-select-box__dropdown-card__item ${visible ? 'inte-select-box__dropdown-card__item--active' : ''}`} onClick={() => dropdownItemClickHandler(item, index)}>
            <span style={{ visibility: visible ? 'visible' : 'hidden' }}>{svgs.check}</span>
            <div className={`inte-select-box__dropdown-card__item--label-desc`}>
              <p>{item.label}</p>
              {
                item.description && <p>{item.description}</p>
              }
            </div>
          </li>
        }
        )
      }
    </ul>
  }

  const selectDropdownCardGroup = (opts = options) => {
    return <ul className='inte-select-box__dropdown-group-card'>
      {
        opts?.map((item, index) => {
          // console.log(item)
          return <li key={`${item.label}.${item.value}.${index}`}>
            <ul className="inte-select__list">
              <h3 className="inte-select-box__Heading">{item.label}</h3>
              {item.group?.map((i, index) => {
                const visible = selectedOptions.includes(`${i.label}.${i.value}.${index}`) ? true : false
                return (
                  <li key={index} className={`inte-select-box__dropdown-card__item ${visible ? 'inte-select-box__dropdown-card__item--active' : ''}`} onClick={() => dropdownItemClickHandler(i, index)}>
                    <span className="inte-select-box__dropdown-check-icon" style={{ visibility: visible ? "visible" : "hidden" }}>{svgs.check}</span>
                    <h3 className="inte__text--label">{i.label}</h3>
                  </li>

                )
              })}
              {
                item.description && <p>{item.description}</p>
              }
            </ul>
          </li>
        }
        )
      }
    </ul>
  }

  const selectBoxClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === inputRef.current) {
      setDropdownActive(true)
    }
    else if (!selectedOptions.length) {
      setDropdownActive(prev => !prev)
    }
  }

  const tagClickHandler = (data: string) => {
    setSelectedOptions(prev => prev.filter(item => item !== data))
  }

  const inputKeyPressHandler = (e: any) => {
    if (e.key === 'Backspace' && inputValue === '' && selectedOptions.length) {
      setSelectedOptions(prev => prev.filter((item, i) => i !== prev.length - 1))
    }
  }

  useEffect(() => {
    if (inputValue !== '') {
      let newOpts = options?.filter((item) => {
        return item.label.toLowerCase().includes(inputValue.toLowerCase())
      })
      setOptionsToShow(newOpts)
      console.log(newOpts)
    }
    else setOptionsToShow(options)
  }, [inputValue])

  function resizeInput(this: any) {
    this.style.width = this.value.length + "ch";
  }

  useEffect(() => {
    var input: any = document.querySelector("input");
    input?.addEventListener("input", resizeInput);
    resizeInput.call(input);
  }, [])

  const clickingOutside = (e: any) => {
    if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
      setDropdownActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', clickingOutside, true)
    return () => {
      window.removeEventListener("click", clickingOutside, true)
    }
  }, [])

  useEffect(() => {
    document.querySelector("input")?.focus();
  }, [selectedOptions])


  return (
    <div className='inte-select-box' ref={selectBoxRef}>
      {
        label && <label className='inte-select-box__label' htmlFor='select-box__input'>{label}</label>
      }
      <div className={`inte-select-box__body ${dropdownActive ? 'inte-select-box__body--focus' : ''}`}>
        <div className='inte-select-box__textarea' onClick={(e) => selectBoxClickHandler(e)}>
          {
            !multi ? <span className='inte-select-box--selected-val'>{selectedOptions[0]?.split('.')[0]}</span> :
              selectedOptions.map((item, index) => <span key={index}> <Tag name={item.split('.')[0]} data={item} onClick={tagClickHandler} /></span>)
          }
          {
            searchable &&
            <div className='inte-select-box__input-wrapper'>
              <input
                autoComplete="off"
                onKeyDown={(e) => inputKeyPressHandler(e)}
                autoFocus
                type={'text'}
                ref={inputRef}
                id='select-box__input'
                className='inte-select-box__input'
                placeholder={selectedOptions.length ? '' : 'Select'}
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value); }} />
            </div>
          }
        </div>
        <div className='inte-select-box__controls'>
          {
            (inputValue !== '' || selectedOptions.length > 0) &&
            <span className='inte-select-box__input--clear' onClick={() => { setInputValue(''); setSelectedOptions([]) }}>
              {svgs.circleX}
            </span>
          }
          <span className='line'></span>
          <span onClick={() => setDropdownActive(prev => !prev)} style={{ rotate: `${dropdownActive ? '180deg' : '0deg'}`, transition: '500ms' }}>{svgs.caretIcon}</span>
        </div>
      </div>
      {
        helperText && !dropdownActive && <div className='inte-select-box__helperText'>
          {svgs.search}
          <p>{helperText}</p>
        </div>
      }
      {
        dropdownActive ? groupData ? selectDropdownCardGroup(optionsToShow) : selectDropdownCard(optionsToShow) : null
      }
    </div>
  )
}
export default SelectBox