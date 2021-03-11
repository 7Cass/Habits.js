import Button from "../../components/Button";

const HomePage = () => {
  return (
    <>
      <p>HomePage</p>
      <Button styled="filled" children="Button" size="small" />
      <Button styled="outlined" children="Button" size="small" />
      <Button styled="filled" children="Button" size="large" />
      <Button styled="outlined" children="Button" size="large" />
    </>
  );
};

export default HomePage;
