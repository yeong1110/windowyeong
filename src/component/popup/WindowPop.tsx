import { useState } from "react";

const WindowPop = ({ type, title, onClickClose, minimize, children }: any) => {
  interface wPop {
    state: Boolean;
    width: string | number;
    height: string | number;
    top: string | number;
    left: string | number;
  }
  const [windowState, setWindow] = useState<wPop>({
    state: true,
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
  });

  const handleWindowToggle = () => {
    // state true : maximize mode, false : restore mode
    setWindow({
      state: !windowState.state,
      width: windowState.state ? "min(484px, 90vw)" : "100%",
      height: windowState.state ? "min(500px, 50vw)" : "100%",
      top: "50%",
      left: "50%",
    });
  };

  const handleDragStart = (e: any) => {
    // 투명 이미지 설정
    e.dataTransfer.setData("text/plain", "dummy");
    const img = new Image();
    img.src = "";
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDragWindowEnd = (e: any) => {
    e.preventDefault();
    const initialX = e.clientX;
    const initialY = e.clientY;
    console.log(e.clientHeight);
    setWindow({
      ...windowState,
      state: false,
      width: "min(484px, 90vw)",
      height: "min(500px, 50vw)",
      top: initialY < 250 ? "250px" : initialY,
      left: initialX,
    });
  };

  return (
    <div
      draggable
      className="wy__pop"
      onDragStart={handleDragStart}
      onDrag={handleDragWindowEnd}
      onDragEnd={handleDragWindowEnd}
      style={{
        width: windowState.width,
        height: windowState.height,
        top: windowState.top,
        left: windowState.left,
      }}
    >
      <div className="wy__pop__head">
        <i datatype={type}></i>
        <p>{title}</p>
        <ul className="wy__pop__head__btn">
          <li>
            <button onClick={minimize} className="minimize"></button>
          </li>
          <li>
            <button
              onClick={handleWindowToggle}
              className={windowState.state ? "restore" : "maximize"}
            ></button>
          </li>
          <li>
            <button className="close" onClick={() => onClickClose(true)}>
              close
            </button>
          </li>
        </ul>
      </div>
      <div className="wy__pop__container">
        <div className="wy__pop__content">
          {/* component */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowPop;
