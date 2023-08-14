import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge, raiseGrade } from './store/studentSlice';

export default function App() {
  const { name, age, grade } = useSelector((state) => {
    return state.student;
  });
  const dispatch = useDispatch();
  const clickRef = useRef(null);
  const clickHandler = (event) => {
    console.log(event.target);
    switch (event.target.className) {
      case 'setName':
        dispatch(setName('Jane'));
        break;
      case 'setAge':
        dispatch(setAge(20));
        break;
      case 'setGrade':
        dispatch(raiseGrade(2));
        break;
      default:
        throw new Error('something wrong');
    }
  }
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{grade}</p>
      <div className='buttonContainer' ref={clickRef} onClick={clickHandler}>
        <button className='setName'>setName</button>
        <button className='setAge'>setAge </button>
        <button className='setGrade'>ChangeGrade</button>
      </div>
    </div>
  )
}
