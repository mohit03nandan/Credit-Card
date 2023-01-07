import React from 'react'
import { useState } from 'react';
import './Form.css'; 

const Form = (props) => {


    const [CardName, setCardName] = useState('');
    const [CardNumber, setCardNumber] = useState('');
    const [CardMonth, setCardMonth] = useState('');
    const [CardCvv, setCardCvv] = useState('');
  
    function nameChange(e){
    setCardName(e.target.value)
    }

    function cardChange(e){
        setCardNumber(e.target.value)
    }

    function cardMonth(e){
        setCardMonth(e.target.value)
    }

    function cvv(e){
        setCardCvv(e.target.value)
    }

    function wipe(){
        setCardName('');
        setCardNumber('');
        setCardMonth('');
        setCardCvv('')
    }

  function validation(){
    
    
    if(CardNumber.length !== 16){
        alert("CardNumber must be 16 digits")
        wipe();
    }

    if(CardCvv.length !== 3){
        alert("CardCvv must be 3 digits")
        wipe();
    }

    
  }

    function FormSubmit(e){
        e.preventDefault();
        // console.log("formjs",CardName, CardNumber, CardMonth, CardCvv);
        props.pullData({
            Name: CardName,
            Number: CardNumber, 
            Month: CardMonth,
            Cvv: CardCvv
        })
        wipe();
    }

  return (
    <div>
      <form onSubmit={FormSubmit} className="needs-validation" required>
       <div className="container p-0">
        <div className="card px-4">
            <p className="h8 py-3">Payment Details</p>
            <div className="row gx-3">
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1 form-label">Person Name</p>
                        <input className="form-control mb-3"  value={CardName}  onChange={nameChange} placeholder="Name" type="text" required />
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Card Number</p>
                        <input className="form-control mb-3" value={CardNumber} onChange={cardChange} type="text" placeholder="1234 5678 435678" required/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Expiry</p>
                        <input className="form-control mb-3" value={CardMonth} onChange={cardMonth} type="number" placeholder="MMYYYY" required/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">CVV/CVC</p>
                        <input className="form-control mb-3 pt-2 " value={CardCvv} onChange={cvv} type="password" placeholder="***" required/>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary btn-outline-primary mb-3" type='submit' onClick={validation}>     
                          pay
                        <span className="fas fa-arrow-right"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>
    </div>
  )
}

export default Form