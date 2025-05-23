const Frame = ({src}: any) => {
  return (
    <iframe
      src= {src}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></iframe>
  );
};

export default Frame;