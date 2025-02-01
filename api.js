// import express from 'express'
// import fs from "fs";
// import OpenAI from "openai";
// import multer from 'multer'
// import path from 'path'
import dotenv from 'dotenv'

// const upload = multer({dest: 'uploads/'});
 const apiKey = process.env.OpenAI_API_KEY;
// const app = express();
// const port = 5000;
dotenv.config();

console.log(apiKey)



























const openai = new OpenAI({ 
  apiKey: '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' 
});
 async function transcribeAudio() {
   try {
     const audioFile = fs.createReadStream("audio.wav"); // Substitua pelo caminho correto do arquivo de áudio
     const response = await openai.audio.transcriptions.create({
       file: audioFile,      model: "whisper-1",
     });

     console.log("Transcrição:", response.text);
   } catch (error) {
     console.error("Erro na transcrição:", error);
   }
 }
 transcribeAudio()