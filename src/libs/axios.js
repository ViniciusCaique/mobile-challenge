

import axios from 'axios'

const url = `https://api.openai.com/v1/completions`

export const apiKey = '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'

export const api = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    },
})

// export const params = {
//     prompt: `How are you`,
//     model: "text-davinci-003",
//     max_tokens: 10,
//     temperature: 0,
// }
