import { useState } from "react";
import "./App.css";
import { MicVocal, Shield, Zap, Globe2, LetterText, Copy } from "lucide-react";
import logo from  "../src/logo.png"
import hero from "../public/hero.png"

function App() {
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const file = "/audio.wav";
  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!audioFile) {
      alert("Por favor, escolha um arquivo de áudio.");
      return;
    }

    const formData = new FormData();
    formData.append("audio", audioFile);

    try {
      const response = await fetch("https://api-server-transcriber-d1010e1e9f67.herokuapp.com/transcribe", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setTranscription(data.transcription);
      } else {
        console.error("Erro na transcrição:", response.statusText);
        alert("Erro ao transcrever o áudio.");
      }
    } catch (error) {
      console.error("Erro na transcrição:", error);
      alert("Erro ao transcrever o áudio.");
    }
  };

    const [text, setText] = useState('')
    const handleCopy = async () => {
      await navigator.clipboard.writeText(transcription)
      alert('Texto copiado para a área de transferência!');
    }

  return (
    <div className="App">
      <header>
        <img src={logo} width="1200" height="600" alt="hero image" fetchPriority="high" loading="eager"></img>
        <h1>VoiceScriber</h1>
      </header>

      <div className="hero">
        <div className="hero_text">
          <h1>Transform Audio into Text with AI Precision</h1>
          <p>
            Accurate, fast, and affordable audio transcription powered by
            advanced AI. Perfect for podcasters, journalists, and businesses.
          </p>
        </div>
        <img src={hero} className="hero_img"/>
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
            <div className="desc_pass">
              <span>
                Upload any audio or video file. We support all major formats.
              </span>
            </div>
          </div>
        </div>

        <div className="container_pass">
          <div className="wrapper_pass">
            <div className="circle">
              <p>2</p>
            </div>
            <p>AI-Powered Transcription</p>
            <div className="desc_pass">
            <span>
              Our AI quickly transcribes your audio with high accuracy.
            </span>
            </div>
          </div>
        </div>

        <div className="container_pass">
          <div className="wrapper_pass">
            <div className="circle">
              <p>3</p>
            </div>
            <p>Download Your Text</p>
            <div className="desc_pass">
              <span>
                Get your transcription in multiple formats, ready to use.
              </span>
            </div>
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
            <input
              class="title"
              type="file"
              accept="audio/*, .m4a, .caf, .mp3, .wav"
              onChange={handleFileChange}
            />
            Choose a file
          </label>
          <div className="btn">
            <button type="submit" className="custom-file-upload2">
              Transcriber
            </button>
          </div>
        </form>
      </div>
      <div className="title_transcription">
        <h3>
          Transcription <LetterText className="text" />
        </h3>
      </div>

      <div className="transcription">
        <h4>Your text will be generated here, click in TRANSCRIBER please wait !</h4>
        {transcription && (
          <div>
            <p value={text} onChange={(e) => setText(e.target.value)}>{transcription}</p>
            <button className="copy" onClick={handleCopy}>
              <Copy />
            </button>
          </div>
        )}
      </div>
      <div className="footer">
        <p>©Todos os direitos reservados - AudioScribe</p>
      </div>
    </div>
  );
}

export default App;
