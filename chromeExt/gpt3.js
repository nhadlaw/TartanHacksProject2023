import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import { Configuration, OpenAIApi } from "openai";
dotenv.config()
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
});

function printff(){
console.log(response)
}





//import { Configuration, OpenAIApi } from "openai";
//
//const configuration = new Configuration({
//  apiKey: "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",
//});
//const openai = new OpenAIApi(configuration);
//async function openai.createCompletion({
//  model: "text-davinci-003",
//  prompt: "Say this is a test",
//  temperature: 0,
//  max_tokens: 7,
//});



//const configuration = new Configuration({
//  apiKey: "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",
//});
//const openai = new OpenAIApi(configuration);
//
//export default async function (req, res) {
//  if (!configuration.apiKey) {
//    res.status(500).json({
//      error: {
//        message: "OpenAI API key not configured, please follow instructions in README.md",
//      }
//    });
//    return;
//  }
//
//  const animal = req.body.animal || '';
//  if (animal.trim().length === 0) {
//    res.status(400).json({
//      error: {
//        message: "Please enter a valid animal",
//      }
//    });
//    return;
//  }
//
//  try {
//    const completion = await openai.createCompletion({
//      model: "text-davinci-003",
//      prompt: generatePrompt(animal),
//      temperature: 0.6,
//    });
//    res.status(200).json({ result: completion.data.choices[0].text });
//  } catch(error) {
//    // Consider adjusting the error handling logic for your use case
//    if (error.response) {
//      console.error(error.response.status, error.response.data);
//      res.status(error.response.status).json(error.response.data);
//    } else {
//      console.error(`Error with OpenAI API request: ${error.message}`);
//      res.status(500).json({
//        error: {
//          message: 'An error occurred during your request.',
//        }
//      });
//    }
//  }
//}
//
//function generatePrompt(animal) {
//  const capitalizedAnimal =
//    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
//  return `Suggest three names for an animal that is a superhero.
//Animal: Cat
//Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
//Animal: Dog
//Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
//Animal: ${capitalizedAnimal}
//Names:`;
//}


//const { Configuration, OpenAIApi } = require("openai");
//const configuration = new Configuration({
//  apiKey: process.env.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,
//});
//const openai = new OpenAIApi(configuration);
//async function openai.createCompletion({
//  model: "text-davinci-003",
//  prompt: "Say this is a test",
//  temperature: 0,
//  max_tokens: 7,
//});
//
//const start = async function(a, b) {
//  const result = await myfunction('test', 'test');
//
//  console.log(result);
//}



//import { Configuration, OpenAIApi } from "openai";
//
//const configuration = new Configuration({
//  apiKey: process.env.OPENAI_API_KEY,
//});
//const openai = new OpenAIApi(configuration);
//
//
//let write = document.getElementById("createEmail");
//write.addEventListener("click", () => {
//    var context = document.getElementById("context").value;
//    alert(context);
//    console.log("hiiiii patrick");
//
//})

// organization: "org-s3dy7t7WURmSlbfGzlD1KJxp",









// function othername() {
//     var context = document.getElementById("context").value;
//     var directions = document.getElementById("directions").value;
//     alert(context);
// }