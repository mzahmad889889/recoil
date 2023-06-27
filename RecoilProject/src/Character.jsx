import { useRecoilState, useRecoilValue } from 'recoil'
import { charLength, charCounter } from './RecoilStateAndValue'

import React from 'react'

function Character() {
    const [text, setText] = useRecoilState(charLength)
    const count = useRecoilValue(charCounter)
  
    const onchange = (e) => {
        setText(e.target.value)
    }
  return (
    <div>
          <input type='text' value={text} onChange={onchange}/><br/>
          <label>Echo:{text===''?<b>Text OverView Here</b>:text}</label><br/>
          <label>CharCounter: {count}</label>
    </div>    
    
  )
}

export default Character
