import fs from "fs";
import OpenAI from "openai";
import Sentiment from 'sentiment';

// Garante que as variáveis de ambiente sejam carregadas (caso necessário)

// const openai = new OpenAI({ 
//   apiKey: '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' 
// });

// async function transcribeAudio() {
//   try {
//     const audioFile = fs.createReadStream("audio.wav"); // Substitua pelo caminho correto do arquivo de áudio
//     const response = await openai.audio.transcriptions.create({
//       file: audioFile,
//       model: "whisper-1",
//     });

//     console.log("Transcrição:", response.text);
//   } catch (error) {
//     console.error("Erro na transcrição:", error);
//   }
// }

// transcribeAudio();

const sentiment = new Sentiment();
const result = sentiment.analyze("Estou com muita raiva, isso é horrível!");

console.log("Pontuação de Sentimento:", result.score);