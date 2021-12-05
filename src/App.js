import './App.css';
import Header from './components/header/Header.js'
import Work from './components/work/Work.js'

function App() {
  return (
    <div>
        <Header/>
      <div className="Center">
        <Work/>
      </div>
    </div>
  );
}

export default App;
