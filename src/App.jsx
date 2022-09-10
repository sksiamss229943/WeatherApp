import axios from "axios";
import React, {useState, useEffect} from "react";
import { TbMapPin } from "react-icons/tb";
import "../src/css/App.scss";
import blob from "./images/blobanimation.svg";

function App() {
  const [input, setInput] = useState('Bangladesh');
  const [data, setData] = useState('');
  useEffect(()=>{
    const getData = async () => {
      let res = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=GK5PKAP745HMQ8YVZXWDWB62L`
      );
      setData(res.data.days[0]);
    }
    getData();
  },[input]);
  return (
    <>
      <div className="card p-4">
        <div className="search_bar">
          <input
            className="form-control shadow-sm"
            type="text"
            placeholder="Search Weather"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {input != "" && (
          <>
            <div className="country">
              <TbMapPin color="#fff" size={"3rem"} />
              <h1>{input}</h1>
            </div>
            <div className="temp">
              <h1>{(((data.temp - 32) * 5) / 9).toFixed(2)}℃</h1>
              <h6>
                Min {(((data.tempmin - 32) * 5) / 9).toFixed(2)} | Max{" "}
                {(((data.tempmax - 32) * 5) / 9).toFixed(2)}
              </h6>
            </div>
            <div className="footer_image">
              <img src={blob} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
