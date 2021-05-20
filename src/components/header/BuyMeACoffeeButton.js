import React from 'react';
import "./BuyMeACoffeeButton.css"

const BuyMeACoffeeButton = () => {
  return (
    
    <form action="https://www.buymeacoffee.com/aelhirach">
        <button className="myButtonstyle"  type="submit">
          <img className="myImageStyle" src= {"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"} alt="Buy me a coffee" />
          <span className="mySpanStyle" >Buy me a coffee</span>
        </button>
    </form>
  );
}

export default BuyMeACoffeeButton;