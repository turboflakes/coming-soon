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
      turboflakes.io // coming soon
      </h1>
      <p className="identity">
        <b>Polkadot:</b> 14Sqrs7dk6gmSiuPK7VWGbPmGr4EfESzZBcpT6U15W4ajJRf
        <br/>
        <b>Kusama:</b> H1tAQMm3eizGcmpAhL9aA9gR844kZpQfkU7pkmMiLx9jSzE
      </p>
      {/* <p className="kusama">
        <b>Kusama</b> H1tAQMm3eizGcmpAhL9aA9gR844kZpQfkU7pkmMiLx9jSzE
      </p> */}
    </div>
  );
}

export default App;
