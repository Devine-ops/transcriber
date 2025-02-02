import dotenv from 'dotenv';

// Carregando as variáveis de ambiente
dotenv.config();

import express from 'express';
import fs from 'fs';
import OpenAI from 'openai';
import multer from 'multer';
import path from 'path';


const upload = multer({ dest: 'uploads/' });

const apiKey = process.env.OpenAI_API_KEY;  // Agora está correto, buscando do .env
const app = express();
const port = 5000;

// Verificando se a chave API foi carregada corretamente
console.log('API Key:', apiKey);  // Imprime a chave, se carregada corretamente

// Configuração do OpenAI com a chave da variável de ambiente
const openai = new OpenAI({
  apiKey: apiKey,  // Usando a chave da variável de ambiente
});

app.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const audioFilePath = path.join(__dirname, req.file.path);
    const audioFile = fs.createReadStream(audioFilePath);

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
