// import React, { Component } from "react";
// class CommunicatChat extends Component{
//     constructor(props){
//         super(props);
//     }
//     componentDidMount(){
//         (function(d, m){
//             var kommunicateSettings = 
//                 {"appId":"kommunicate-support","popupWidget":true,"automaticChatOpenOnNavigation":true};
//             var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//             s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//             var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//             window.kommunicate = m; m._globals = kommunicateSettings;
//         })(document, window.kommunicate || {});
//     }
//     render(){
//         return {
            
//         }
//     }
// }
// export default CommunicatChat;


import React from 'react';

const CommunicatChat = () => {

    return (
        <div>
          <ul>
              {
                  //Dialogflow Messenger code
                //   <df-messenger
                //   chat-title="WelcomePortfolio"
                //   agent-id="49377fbb-ef16-4e72-b80a-0996c396fc50"
                //   language-code="en"
                // ></df-messenger>
                  (function(m){
                      var kommunicateSettings = 
                          {"appId":"227b077e2f384078df347371b0613f9a1","popupWidget":true,"automaticChatOpenOnNavigation":true};
                      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                      window.kommunicate = m; m._globals = kommunicateSettings;
                  })(document, window.kommunicate || {})
                }
    
          </ul>
        </div> 
      )
  
}

export default CommunicatChat;
