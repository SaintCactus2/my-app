import logo from './logo.svg';
import './App.css';
import { ReactMediaRecorder } from "react-media-recorder";


function App() {


  const buttonStart = {
  }

  const buttonStop = {
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <ReactMediaRecorder audio render={(props) => {
        
        console.log(props)
        
        
        
        return (
 <><div className='mediaBlock'>АХАХАХАХАХ

<div>статус: {props.status}</div>
 <button onClick={props.startRecording}>
  Поехали
 </button>
 <button onClick={props.stopRecording}>
  Астанавитесь
 </button>
 <audio src={props.mediaBlobUrl} controls autoPlay loop />
 </div>
 </>
       )}} />
   
      </header>
    </div>
  );
}

export default App;
