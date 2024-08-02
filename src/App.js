import logo from './logo.svg';
import './App.css';
import Schedule from './Schedule';
import SpeakerList from './SpeakerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./csslogo.webp" alt="logo" className="App-logo"/>
        <h1>Conference Scheduling System</h1>
      </header>
      <Schedule />
      <SpeakerList />
    </div>
  );
}

export default App;