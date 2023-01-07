import React from 'react'
import "./Card.css"


const Card = (props) => {

 var Name;    
 var Number;  
 var Month; 
 var Cvv;
   

if(props.pushData.Name){
   Name = props.pushData.Name
   Number = props.pushData.Number
   Month = props.pushData.Month
   Cvv = props.pushData.Cvv
}
else{
    Name = "CardHolder Name"
   Number = "CardHolder Number"
   Month = "Expiry"
   Cvv = "***"
}






  return (
    <div >
        <div class='card-1' >
              <div class='top-block'>
                <div class='card-chip'>
                  <i class="icon-credit-card icon-3x"></i>
                </div>
                <span class='card-name'>
                  {Name}
                </span>
              </div>
         <div class='card-number'>
              <p>{Number}</p>
         </div>
         <div class='bottom-block'>
              <div class='balance'>
                   <div>{Month}</div>
                   <div class='card-balance'>
                       {Cvv}
                   </div>
              </div>
              <div class='card-icon'>
                   <span class='circle-left'>
                        <i class="icon-circle icon-3x "></i>
                   </span>
                   <i class="icon-circle icon-3x"></i>
              </div>
         </div>
      </div>
    </div>
  )
}

export default Card