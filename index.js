const core = require('@actions/core');
const github = require('@actions/github');
const httpm = require('@actions/http-client');

async function makePostRequest(prompt, apikey) {
    let http = new httpm.HttpClient('http-client');
    let data = {
        messages: [
            {role: 'system', content: 'You generate short Christmas greetings. The message should be 160 characters or less to fit into an SMS. The user will tell you who the message is for and will provide more context if needed. You will only answer with the text for the sms, nothing else.'},
            {role: 'user', content: 'Mother Haven\'t seen her for a long time✨'},
            {role: 'assistant', content: 'Merry Christmas Mum! I miss you! 🎄'},
            {role: 'user', content: 'Laura is a colleague of mine'},
            {role: 'assistant', content: 'Have a great Holiday Season Laura! Thanks for the great partnership this year. '},
            {role: 'user', content: prompt}
        ],
        max_tokens: 800,
        temperature: 0.7,
        frequency_penalty: 0,
        presence_penalty: 0,
        top_p: 0.95,
        stop: null
    };
    let headers = {
        'Content-Type': 'application/json',
        'api-key': apikey
    };
    const endpoint = core.getInput('endpoint');
    let res = await http.postJson(endpoint, data, headers);
    return res.result;
}

try {
    const prompt = core.getInput('prompt');
    const apikey = core.getInput('api-key');
    
    makePostRequest(prompt,apikey).then(response => {
        core.setOutput("seasons-greeting", response);
    }).catch(error => {
        core.setFailed(error.message);
    });
} catch (error) {
    core.setFailed(error.message);
}