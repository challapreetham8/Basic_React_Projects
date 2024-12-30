// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
import Greeting from "./Greeting";
import About from "./About";
import Email from "./Email";

function App() {
  return (
    <div>
  <h1>Hello from ReactJS</h1>
  <Greeting name ={'Akash'}/>
  <Greeting name ={'Ayush'}/>
  <About />
  <Email mail= {'preetham'}/>

  

  </div>
  );
}

export default App;
