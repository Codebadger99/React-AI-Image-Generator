import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(response.data.data[0].url);
  };
  return (
    <div className="App">
      <h1>Ai image generator</h1>
      <input
        placeholder="a man swimming"
        onChange={(e) => setPrompt(e.target.value)}
        className="app-input"
      />
      <button onClick={generateImage}>Generate An Image</button>
      {result.length > 0 ? (
        <img src={result} className="result-image" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
