const { Configuration, OpenAIApi } = require("openai");

// OpenAI API Configuration
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function evaluateResponse(response) {
    try {
        const prompt = `Evaluate the following interview answer: "${response}". Provide feedback on clarity, confidence, and correctness.`;
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 150,
        });

        return completion.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error in evaluating response:", error);
        return "Unable to evaluate the response. Please try again.";
    }
}

module.exports = { evaluateResponse };
