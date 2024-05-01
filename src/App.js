import React from "react";
import MsgBox from "./class-props";
import { render } from "@testing-library/react";

function App() {
  render(
    <MsgBox
      text="React & React Native"
      color="blue"
      bgColor="#ccc"
      fontSize="18pt"
      border="solid 1px black"
    />
  )
}

export default App;
