import { useState, useEffect } from "react";
import { ColoredMessage } from "././components/ColoredMessage";

export const App = () => {
  console.log("レンダリング");
  const [num, setNum] = useState(0);

  useEffect(() => {
    alert();
  }, [num]);
  const onClickButton = () => {
    setNum(num + 1);
  };

  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "20px",
  // };

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px",
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      <p style={contentPinkStyle}>元気です!</p>
      {/* <ColoredMessage /> */}
      <ColoredMessage color="blue" message="お元気ですか？？" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
