import {useState} from "react";
import "./App.css";
import { MicVocal, Shield, Zap, Globe2 } from "lucide-react";


function App() {

  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState(null);
  const file = ('/audio.wav')
  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!audioFile) {
      alert('Por favor, escolha um arquivo de áudio.');
      return;
    }

    const formData = new FormData();
    formData.append('audio', audioFile);

    try {
      const response = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setTranscription(data.transcription);
      } else {
        console.error('Erro na transcrição:', response.statusText);
        alert('Erro ao transcrever o áudio.');
      }
    } catch (error) {
      console.error('Erro na transcrição:', error);
      alert('Erro ao transcrever o áudio.');
    }
  };
  return (
    <div className="App">
      <header>
        <MicVocal className="mic" />
        VoiceScriber
      </header>

      <div className="hero">
        <div className="hero_text">
          <h1>Transform Audio into Text with AI Precision</h1>
          <p>
            Accurate, fast, and affordable audio transcription powered by
            advanced AI. Perfect for podcasters, journalists, and businesses.
          </p>
        </div>
      </div>

      <div className="cards_text">
        <h2>Why Choose AudioScribe?</h2>
      </div>

      <div className="cards_wrapper">
        <div className="card">
          <Zap className="icon" />
          <p>Lightning Fast</p>
          <span>
            Get your transcriptions in minutes, not hours. Perfect for
            time-sensitive projects.
          </span>
        </div>
        <div className="card">
          <Globe2 className="icon" />
          <p>Multiple Languages</p>
          <span>
            Support for 50+ languages and regional accents with high accuracy.
          </span>
        </div>
        <div className="card">
          <Shield className="icon" />
          <p>Enterprise Security</p>
          <span>
            Bank-level encryption and data protection for your sensitive
            content.
          </span>
        </div>
      </div>

      <div className="title_pass">
        <h2>How it Works?</h2>
      </div>

      <div className="pass_to_pass">
        <div className="container_pass">
          <div className="wrapper_pass">
            <div className="circle">
              <p>1</p>
            </div>
            <p>Upload Your Audio</p>
            <span>
              Upload any audio or video file. We support all major formats.
            </span>
          </div>
        </div>

        <div className="container_pass">
          <div className="wrapper_pass">
            <div className="circle">
              <p>2</p>
            </div>
            <p>AI-Powered Transcription</p>
            <span>
              Our AI quickly transcribes your audio with high accuracy.
            </span>
          </div>
        </div>

        <div className="container_pass">
          <div className="wrapper_pass">
            <div className="circle">
              <p>3</p>
            </div>
            <p>Download Your Text</p>
            <span>
              Get your transcription in multiple formats, ready to use.
            </span>
          </div>
        </div>
      </div>

      {/*script*/}

      <div className="file-upload">
        <form class="container" onSubmit={handleSubmit}>
          <div class="folder">
            <div class="top"></div>
            <div class="bottom"></div>
          </div>
          <label class="custom-file-upload">
            <input class="title" type="file" accept="audio/*" onChange={handleFileChange}/>
            Choose a file
          </label>
          <button type='submit'>Transcription</button>
        </form>
      </div>
      

      {transcription && (<div className='transcription'>
        <h3>Transcription:</h3>
        <p>{transcription}</p>
        </div>
      )}
      
    </div>
  );
}

export default App;
