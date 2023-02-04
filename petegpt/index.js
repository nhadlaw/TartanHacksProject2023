import got from 'got';
// import(`/got.js`).then((response) => {});
// import {got} from 'got-json';
{/* <script type="module" src="index.js"></script> */}



// const prompt = `Tell me I need to give more information`;
const prompt = `Write an email about me not returning to TA next semester`;

// let write = document.getElementById("createEmail");
// write.addEventListener("click", () => {
//     prompt = document.getElementById("directions").value;
//     alert(context);
//     // console.log("hiiiii patrick");

// })




(async () => {
  const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

  const params = {
    "prompt": prompt,
    "max_tokens": 160,
    "temperature": 0.7,
    "frequency_penalty": 0.5
  };
  const headers = {
    'Authorization': `Bearer ${"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"}`,
  };

  try {
    const response = await got.post(url, { json: params, headers: headers }).json();
    var output = `${prompt}${response.choices[0].text}`;
    console.log(output);
  } catch (err) {
    console.log(err);
  }
})();
