import { useEffect, useState } from "react";
import "./Logo.css";
const Logo = () => {
  const [mHeight, setmHeight] = useState("");
  const [eWidth, seteWidth] = useState("");
  const [iHeight, setIHeight] = useState("");

  useEffect(() => {
    setmHeight(30);
    seteWidth(20);
    setIHeight(30);
  }, []);

  return (
    <div className="Logo">
      <div className="MMaster">
        <div className="M" style={{ width: mHeight }}>
          <div className="topM"></div>

          <div className="rightM" style={{ height: mHeight - 5 }}></div>
        </div>
        <div className="leftM" style={{ height: mHeight }}></div>
      </div>
      <div className="I" style={{ height: iHeight }}></div>
      <div className="E">
        <div className="topE" style={{ width: eWidth }}></div>
        <div className="middleE" style={{ width: eWidth - 5 }}></div>
        <div className="bottomE" style={{ width: eWidth }}></div>
      </div>
    </div>
  );
};

export default Logo;
