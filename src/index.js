import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MoralisProvider serverUrl="https://5uapm3p8zuei.usemoralis.com:2053/server" appId="TLBpdmUz2xQTYUdR9xtcgR9QR0BJcs7pmgtbZLbr">
      <App />
    </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <MoralisProvider serverUrl="https://5uapm3p8zuei.usemoralis.com:2053/server" appId="TLBpdmUz2xQTYUdR9xtcgR9QR0BJcs7pmgtbZLbr">
//       <App />
//     </MoralisProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
