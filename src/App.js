import './App.css';
import Another from './components/Another/Another';
import Header from './components/Header/Header';
import News from './components/News/News';
import Other from './components/Other/Other';


function App() {
  return (
    <div>
        <Header></Header>
        <News></News>
        <Another></Another>
        <Other></Other>
    </div>
  );
}

export default App;
