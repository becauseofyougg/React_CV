import Header from "./components/Header/Header";
import "./App.scss"
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="sections">      
       <Intro/>           
      </div>
    </div>
  );
}

export default App;
