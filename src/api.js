import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import OpenAI from 'openai';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Criar o equivalente de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregando as variáveis de ambiente
dotenv.config();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${ext}`);
  }
});

const upload = multer({ storage: storage });

const apiKey = process.env.OpenAI_API_KEY; // Agora está correto, buscando do .env
const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000',  // Permitir apenas o frontend
  methods: ['GET', 'POST'],          // Métodos permitidos
  allowedHeaders: ['Content-Type']   // Cabeçalhos permitidos
}));

// Verificando se a chave API foi carregada corretamente
console.log('API Key:', apiKey);

// Configuração do OpenAI com a chave da variável de ambiente
const openai = new OpenAI({
  apiKey: apiKey,
});

app.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const audioFilePath = path.join(__dirname, req.file.path);
    const audioFile = fs.createReadStream(audioFilePath);
    console.log(req.file)
    const response = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
    });

    res.json({ transcription: response.text });

    // Deletando o arquivo após o uso
    fs.unlinkSync(audioFilePath);
  } catch (error) {
    console.error('Erro na transcrição:', error);
    res.status(500).json({ error: 'Erro na transcrição de áudio.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
