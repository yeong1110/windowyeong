import { useState } from "react";
import Clock from "./Clock";
import Nav from "./Nav";

const BottomNav = ({ dataType, func, handleClick }: any) => {
  const [isStart, setIsStart] = useState<boolean>(false);

  const handleToggleStart = () => {
    setIsStart(!isStart);
  };
  const handleCloseStart = () => {
    setIsStart(false);
  };
  return (
    <div className="wy__bottom__nav">
      <button onClick={handleToggleStart} className="wy__bottom__nav__start">
        portFolio
      </button>
      {isStart && (
        <>
          <div className="wy__nav__full" onClick={handleCloseStart}></div>
          <Nav
            handleClick={handleClick}
            handleMinimize={func}
            handleClose={handleCloseStart}
          />
        </>
      )}
      <div className="wy__bottom__nav__icon">
        <i datatype={dataType} onClick={func}></i>
      </div>
      <Clock></Clock>
    </div>
  );
};

export default BottomNav;
