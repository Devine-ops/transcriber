import './App.css';
import { MicVocal} from 'lucide-react'
function App() {
  return (
    <div className="App">
        <header><MicVocal className='mic' />VoiceScriber</header>
        <div className='hero'>
          <div className='hero_text'>
            <h1>Transform Audio into Text with AI Precision</h1>
            <p>Accurate, fast, and affordable audio transcription powered by advanced AI. Perfect for podcasters, journalists, and businesses.</p>
          </div>
        </div>
    </div>
  );
}

export default App;
