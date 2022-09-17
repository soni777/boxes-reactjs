const Box = (props) => {
  const { name, children } = props;
  return <h1 className={name}>{children}</h1>;
};

const element = (
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="boxes-container">
      <Box name="box small">Small</Box>
      <Box name="box medium">Medium</Box>
      <Box name="box large">Large</Box>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
