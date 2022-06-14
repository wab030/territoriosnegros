import ReactGA from "react-ga4";
import Pages from './components/Pages/Pages';
import './css/base.css';
import './App.css';

function App() {

  ReactGA.initialize("G-TDRYGGR7GT");
  ReactGA.send("pageview");

  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
