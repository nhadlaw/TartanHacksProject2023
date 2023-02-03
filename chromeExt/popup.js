

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


let write = document.getElementById("createEmail");
write.addEventListener("click", () => {
    var context = document.getElementById("context").value;
    alert(context);
    console.log("hiiiii patrick");

})

// organization: "org-s3dy7t7WURmSlbfGzlD1KJxp",









// function othername() {
//     var context = document.getElementById("context").value;
//     var directions = document.getElementById("directions").value;
//     alert(context);
// }