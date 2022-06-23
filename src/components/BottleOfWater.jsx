import {Glass} from "./Glass"
import { useState } from "react"

const glasses = [
  {id: 1,
   water: true,
  },
  {id: 2,
    water: true,
   },
   {id: 3,
    water: true,
   },
   {id: 4,
    water: true,
   },
   {id: 5,
    water: true,
   },
   {id: 6,
    water: true,
   },
   {id: 7,
    water: true,
   },
   {id: 8,
    water: true,
   },
   {id: 9,
    water: true,
   },
   {id: 10,
    water: true,
   },
]
export const BottleOfWater = () => {
const [state, setState] = useState(glasses)
const [count, setCount] = useState(0)

  const hanleChangeWaterStatus = (id) => {
    const newArr = state.filter(el => el.id !== id)
    const clickedGlas = state.find((el) => el.id === id)
    clickedGlas.water = !clickedGlas.water

   

    setState([...newArr, clickedGlas])
    let i=0;
    state.forEach(el => {
      if (el.water === false) {
        i++;
      }
      setCount(i);
    })
  }

  const onHandleWidth = () => {

    if(count === 1 ){
      return {height: "10%"}
    } 
    if(count === 2 ){
      return {height: "20%"}
    } 
    if(count === 3 ){
      return {height: "30%"}
    } 
    if(count === 4 ){
      return {height: "40%"}
    } 
    if(count === 5 ){
      return {height: "50%"}
    } 
    if(count === 6 ){
      return {height: "60%"}
    } 
    if(count === 7 ){
      return {height: "70%"}
    } 
    if(count === 8 ){
      return {height: "80%"}
    } 
    if(count === 9 ){
      return {height: "90%"}
    } 
    if(count === 10 ){
      return {height: "100%"}
    } 
  }


return (
    <div className="App container">
     <h1>Drink Water</h1>
     <div className="waterContainer">
     <div style={onHandleWidth()} className="water" ></div>
     </div>
      
      <ul className="glasses">
        {glasses.map(el => (
        <Glass
        key={el.id}
        data={el}
        hanleChangeWaterStatus={hanleChangeWaterStatus}
        />
        ))
        }
      </ul>
      
      
     
    </div>
)
}