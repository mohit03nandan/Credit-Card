import React,{useState} from 'react'
import Form from '../Form/Form'
import Card from '../Card/Card'
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