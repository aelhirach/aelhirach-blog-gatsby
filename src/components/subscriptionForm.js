import React, { useRef, useState, useEffect } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import "./subscriptionForm.css"

const SubscriptionForm = () => {
  const [email, setEmail] = useState("")
  const [response, setResponse] = useState(null)
  const timer = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addToMailchimp(email);
    setResponse(data);
    if(data.result === "success") {
        resetMessage(3000)
    }
    else {
        resetMessage(10000)
    }
    
  };


  useEffect(()=>{
      return ()=> { timer && clearTimeout(timer)}
  })

  const resetMessage = (val)=> {
        timer.current = setTimeout(() => {
        setResponse("")
        timer.current = null;
    }, val);
  }

  const handleInputChange = (e) => {
      setEmail(e.target.value)
  };

  return (
  
    <div id="newsletter">


    <div className="container">
     <div className="innerBox row justify-content-center">
         <div className="col-xl-6 col-lg-8">
             <h3>Subscribe to my newsletter</h3>
             <p>Love to read our articles? Sign up now to get fresh content about blogger, SEO, make money, templates directly to your inbox.</p>
         </div>
     </div>
   <div className="row justify-content-center">
         <div className="col-xl-6 col-lg-8 col-md-8">
              <form onSubmit={handleSubmit} name="subscribeForm" method="POST" id="subscribe-form">
                 <input name='uri' type='hidden' value='ArlinaDesign'/>
                 <input name='loc' type='hidden' value='en_US'/>
                 <input
                   className='inptfld'
                   type="email"
                   name="email"
                   placeholder="Enter Your Email"
                   value={email}
                   onChange={handleInputChange}/>
                   
                 <input type="submit" value="Subscribe"/>
             </form>
         </div>
         
   </div>
   { response && response.result === "error" && (
                  <div
                    style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: response.msg }}
                  />
                )}
    {response && response.result === "success" && (
                  <div
                    style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: response.msg }}
                  />
                )}
 </div>
 <div className="text-center p-2">
    © Copyright {new Date().getFullYear()} EL HIRACH Abderrazzak, All Rights Reserved.
  </div>
    </div>


  );
};

export default SubscriptionForm;
