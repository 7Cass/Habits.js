import Button from "../../components/Button";

const HomePage = () => {
  return (
    <>
      <p>HomePage</p>
      <Button type="filled" children="Button" size="small" />
      <Button type="outlined" children="Button" size="small" />
      <Button type="filled" children="Button" size="large" />
      <Button type="outlined" children="Button" size="large" />
    </>
  );
};

export default HomePage;
