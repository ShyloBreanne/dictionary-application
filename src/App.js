import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="meditate" />
        </main>
        <footer className="App-footer">
            ✨This project was coded by <a href="www.linkedin.com/in/breannelyall" target="_blank" rel="noreferrer">Breanne Lyall</a> ✨ <a href="https://github.com/ShyloBreanne/dictionary-application" target="_blank" rel="noreferrer">Open-sourced on GitHub</a> and <a href="https://dictionary-app-brecodes.netlify.app" target="_blank" rel="noreferrer">hosted on Netlify</a>✨
            <br />
          📷 <a href="https://www.pexels.com">Photos provided by Pexels</a> 📷
          </footer>
        </div>
      </div>
  );
}

export default App;
