

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
