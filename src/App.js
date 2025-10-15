import logo from './logo.svg';
import './App.css';
import Task1 from "./1"
import Task2 from "./2"
import Task3 from "./3"
import UserProfile  from "./4"
import MyButton  from "./5"
import Counter  from "./6"
import ShowHide   from "./7"
import InputTracker    from "./8"
import ThemeToggle    from "./9"


function App() {
    const handleButtonClick = () => {
    alert("Button clicked!");
  }
  return (
    <div className="App">
      <Task1  name="surraa"/>
      <Task2 label="click" />
      <Task3  productname="laptop"
              price="2000"
              description="djksjfkdfkjsf"/>
      <UserProfile  name="sura"
                    email="sura@com" />
    <MyButton 
        label="Click Me" 
        onClick={handleButtonClick} 
      />
            <Counter />
      <ShowHide />

       <InputTracker />
      <ThemeToggle />
    </div>
  );
}

export default App;

