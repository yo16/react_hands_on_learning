import {useState} from "react";
import colorData from "./color-data.json";
import ColorList from "./components/ColorList.js";

export default function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}
