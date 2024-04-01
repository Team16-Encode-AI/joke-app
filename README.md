
<img width="793" alt="Screenshot 2024-04-01 at 14 32 54" src="https://github.com/Team16-Encode-AI/joke-app/assets/128807685/66562a5a-8335-4a46-a28e-6941b1790775">

## Getting Started

Run npm install to install all dependencies.
Add a .env file to the root folder and include OPENAI_API_KEY=xxxxxxxx. This web app is using a local server (no OpenAI API) but requires shared variables, so the app only works with the .env file in place.
```
Run the development server:
bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 in your browser to see the result.

## Model:

```mistralai/Mistral-7B-v0.1```

## Functionalities:

Customize the joke by selecting:

1. Topics (work, people, animal, food, television)
2. Tones (witty, sarcastic, silly, dark, goofy)
3. Kinds (pun, knock-knock, story)

## Prompts:

- Attempts to prevent generating "Dad jokes" and penalizes if the joke is not funny. However, it is assumed that the level of funniness is measurable.
```
|<character>| is a very funny and experienced comedian. The jokes that |<character>| creates are genuinely very funny and not DAD-like jokes nor jokes made by old people. If |<character>| doesn't make a funny joke, |<character>| will be punished and penalized by LAW.
|<character>| must create ONE joke based ONLY on the topic mentioned in the prompt.
```

- Stop AI from trying to explain the reason for the joke it generated. It appears to be a common behavior of the Mistral 7B model to overexplain the joke.
```
Do not make any comments after the joke. Do not include action words or responses that are supposed to be an expected reaction to the joke.
```

### Improvements if we had more time:

We have not implemented a feature for the AI to evaluate if the generated jokes are funny, appropriate, or offensive. We will keep exploring sentiment analysis tools specialized in analyzing jokes.
