import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = (event) => {
    const names = ['Yaa', 'Kwaku', 'Kofi', 'Kwame']; 
    const id = Math.floor(Math.random()*names.length);
    return names[id];
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()} 
        </p>
      </header>
    
    </div>
  );
}

export default App;
