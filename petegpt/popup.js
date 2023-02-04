import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-s3dy7t7WURmSlbfGzlD1KJxp",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
});

function printResponse(){
console.log("hiii")
}










//import "express";
//import {OpenAI} from "openai-api"
//const app = express();
//const port = 3000;
//
//// load API_KEY from env
//const OPENAI_API_KEY = "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";
//const openai = new OpenAI(OPENAI_API_KEY);
//
//const sendMessage = async (message) => {
//  const gptResponse = await openai.complete({
//    engine: "text-davinci-003",
//    prompt: message,
//    temperature: 0,
//    top_p: 1,
//    n: 1,
//    stream: true,
//    logprobs: null,
//    //stop: "\n",
//  });
//
//  return gptResponse.data;
//};
//
//app.get("/", (req, res) => {
//  const { q } = req.query;
//
//  sendMessage(q).then((value) => {
//    res.send(value);
//  });
//});
//
//app.listen(port, () => {
//  console.log(`listening on port ${port}`);
//});
