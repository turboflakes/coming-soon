import { ReactComponent as Logo } from './assets/img/logo_mark_white-subtract_turboflakes_.svg'
import './App.css';

function App() {
  return (
    <div className="root">
      <div className="wrapper">
        <Logo fill='currentColor' className="logo"/>
      </div>
      <p className="quote">
      Life is like riding a bicycle. To keep your balance, you must keep moving.<br/>
      <b>― Albert Einstein</b>
      </p>
      <h1 className="message">
       {`Launching soon // turboflakes.io`}
      </h1>
    </div>
  );
}

export default App;
