import { INFERENCE_URL, INFERENCE_TOKEN } from '$env/static/private';

export async function encode(query: string) {
    const response = await retry(INFERENCE_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${INFERENCE_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputs: query
        })
    }, 5);
    if (!response.ok) {
        throw new Error('Failed to communicate with inference endpoint');
    }
    const embedding = await response.json();
    return embedding.embeddings;
}

function wait(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

async function retry(url: string, options: {}, retries: number): Promise<Response> {
    return fetch(url, options).then(async response => {
        if (response.ok) {
            return response;
        }
        else if (retries > 0) {
            await wait(1000);
            return retry(url, options, retries - 1);
        }
        else {
            return response;
        }
    });
}
