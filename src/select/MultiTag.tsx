import './MultiTag.css'
import '../assests/icons/Svgs';
import { Svgs } from '../assests/icons/Svgs';
type Ttag = {
    selectOption?: any,
    removeTags1: any
}
const MultiTag = ({ selectOption, removeTags1 }: Ttag) => {
    const removeTags = (i: any) => {
        removeTags1(i)
    }
    return (
        <>
            {selectOption.map((i: any, index: number) => {
                return (
                    <div className='inte__multitag-container' key={index}>
                        <div>{i}</div>
                        <div>
                            <button onClick={() => removeTags(i)}>{Svgs.cutIcon}</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default MultiTag