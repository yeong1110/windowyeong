const Introduce = ({subject, date, skill}: any) => {
	return(
  <div className="wy__introduce">
    <p>{subject}</p>
    <p>{date}</p>
    <p>{skill}</p>
  </div>
	)
};

export default Introduce;
