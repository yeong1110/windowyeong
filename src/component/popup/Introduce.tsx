import { useState } from "react";

const Introduce = ({subject, date, skill}: any) => {
	const [isToggled, setToggle] = useState<boolean>(true);
  const handleToggle = () => {
    setToggle(!isToggled);
  }
  return(
    <div className="wy__introduce">
      {
        isToggled? 
        <div className="wy__introduce__inner">
          <p>{subject}</p>
          <p>{date}</p>
          <p>{skill}</p>
          <button onClick={handleToggle}>toggle</button>
        </div>
      :
      <>
      <button className="active" onClick={handleToggle}>toggle</button>
      </>
      }
    </div>
  
	)
};

export default Introduce;
