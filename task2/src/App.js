import { useState } from 'react';
import './App.css';
import sticer1 from './img/item1.png'
import sticer2 from './img/item2.png'
import sticer3 from './img/item3.png'
import { result} from './function';

function App() {
  const sticers = [
    {id:1, src: sticer1, value: 0},
    {id:2, src: sticer2, value: 0},
    {id:3, src: sticer3, value: 0}
  ]
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const plus = (count,  setCount, el) =>{
    el.value = count +1
    setCount(count+1)
  }
  
 return (
  <div >
    <div className='container'>
      <div className='sticer-block' >
        <img src={sticers[0].src} alt='sticer'/>
        <button className='sticer-btn' value={count1} onClick={() => plus(count1, setCount1, sticers[0])}>{count1}</button>
      </div>
      <div className='sticer-block' >
        <img src={sticers[1].src} alt='sticer'/>
        <button className='sticer-btn' value={count2} onClick={() => plus(count2, setCount2,  sticers[1])}>{count2}</button>
      </div>
      <div className='sticer-block' >
        <img src={sticers[2].src} alt='sticer'/>
        <button className='sticer-btn' value={count3}  onClick={() => plus(count3, setCount3, sticers[2])}>{count3}</button>
      </div>
    </div>
    <button className='result-btn' onClick={() => result()}>Result</button>

  </div>
  )
}

export default App;
