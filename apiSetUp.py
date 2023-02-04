import openai
openai.api_key = "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"

# previous email
context = "Hi Patrick,Sorry to leave you in limbo as I am still waiting for an answer from your advisor. I met with Reid this morning and he said if we do not hear back by tomorrow, then Reid will take you on as an advisor. Thank you for your patience and we will get this settled before the add deadline!Kaleigh"
prompt = "write me an email saying that that sounds good and to thank them. Email should be responding to the following previous email: " + context

completions = openai.Completion.create(
    engine="text-davinci-002",
    prompt=prompt,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.5,
)

message = completions.choices[0].text
print(message)
