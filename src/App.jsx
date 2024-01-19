import "./App.css";
import StyleFrontTree from "./components/StyleFrontTree";
import Logo from "./components/Logo";
import SocialIcons from "./components/socialicons";
import TreeMsg from "./components/TreeMsg";
import PaypalSnippet from "./components/PaypalSnippet";

const App = () => {
  return (
    <StyleFrontTree>
      <Logo />
      <SocialIcons />
      <TreeMsg />
    
      <PaypalSnippet />
    </StyleFrontTree>
  );
};

export default App;
