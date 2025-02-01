import "./App.css";
import { MicVocal, Shield, Zap, Globe2 } from "lucide-react";

function App() {
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

      <div className="submit">
        <div class="container">
          <div class="folder">
            <div class="top"></div>
            <div class="bottom"></div>
          </div>
          <label class="custom-file-upload">
            <input class="title" type="file" accept="audio/*" />
            Choose a file
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
