"use server";

import openAIClient from "@/utils/ai/openAI";

export const getGPTMovieSuggestions = async (searchText: string) => {
  const gptQuery = `
You are a movie recommendation assistant.

The user wants:
"${searchText}"

Recommend 5 to 10 movies that best match the user's request.

Return ONLY a valid JSON array of movie titles.

Example:
["Sholay", "Don", "Agneepath", "Kaalia"]

Do not return markdown.
Do not return explanations.
Do not return movie descriptions.
Do not return years.
Only return the JSON array.
`;

  const response = await openAIClient.chat.completions.create({
    model: "nvidia/nemotron-3-ultra-550b-a55b:free",
    messages: [
      {
        role: "user",
        content: gptQuery,
      },
    ],
  });

  const content = response.choices[0]?.message?.content;

  if (!content) {
    throw new Error("No response received from AI");
  }

  return JSON.parse(content);
};
