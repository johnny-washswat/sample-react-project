import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UI003 from "./UI003";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UI003
      borderRadius={16}
      imageUrl={
        "https://s3.ap-northeast-2.amazonaws.com/com.washswat.assets/app/userapp2.0/Order/washbag_3x.png"
      }
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
