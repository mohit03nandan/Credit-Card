import React,{useState} from 'react'
import Form from './Form'
import Card from './Card'
const Home = () => {

    const [CardValue, setCardValue] = useState('');
     //data coming from child to parent
     console.log("home",CardValue)

  return (
<div>
  <h1 style={{ color: "black" }}>National payment System</h1>
    <div >
        <Card  pushData={CardValue}/>
    </div>
    
    <div >
        <Form  pullData={setCardValue}/>
       
    </div>
</div>
  )
}

export default Home