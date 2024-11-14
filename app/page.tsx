"use client";

import { useState } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, append, isLoading } = useChat();
  const genres = [
    { emoji: "🧙", value: "Fantasy" },
    { emoji: "🕵️", value: "Mystery" },
    { emoji: "💑", value: "Romance" },
    { emoji: "🚀", value: "Sci-Fi" },
  ];
  const tones = [
    { emoji: "😊", value: "Happy" },
    { emoji: "😢", value: "Sad" },
    { emoji: "😏", value: "Sarcastic" },
    { emoji: "😂", value: "Funny" },
  ];
  const models = [
    { label: "GPT-3.5 Turbo", value: "gpt-3.5-turbo" },
    { label: "GPT-3.5 Turbo (16k)", value: "gpt-3.5-turbo-16k" },
    { label: "GPT-4", value: "gpt-4" },
    { label: "Local", value: "local" },
  ];

  const [state, setState] = useState({
    genre: "",
    tone: "",
    model: "gpt-3.5-turbo",
  });

  const [characters, setCharacters] = useState<
    { name: string; description: string; personality: string }[]
  >([]);

  const addCharacter = () => {
    setCharacters([
      ...characters,
      { name: "", description: "", personality: "" },
    ]);
  };

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleCharacterChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newCharacters = [...characters];
    newCharacters[index] = { ...newCharacters[index], [field]: value };
    setCharacters(newCharacters);
  };

  return (
    <main className="mx-auto w-full p-24 flex flex-col">
      <div className="p4 m-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Story Telling App</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Customize the story by selecting the genre and tone.
            </p>
          </div>

          {/* Genre Selection */}
          <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Genre</h3>
            <div className="flex flex-wrap justify-center">
              {genres.map(({ value, emoji }) => (
                <div
                  key={value}
                  className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
                >
                  <input
                    id={value}
                    type="radio"
                    value={value}
                    name="genre"
                    onChange={handleChange}
                  />
                  <label className="ml-2" htmlFor={value}>
                    {`${emoji} ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Tone Selection */}
          <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Tones</h3>
            <div className="flex flex-wrap justify-center">
              {tones.map(({ value, emoji }) => (
                <div
                  key={value}
                  className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
                >
                  <input
                    id={value}
                    type="radio"
                    name="tone"
                    value={value}
                    onChange={handleChange}
                  />
                  <label className="ml-2" htmlFor={value}>
                    {`${emoji} ${value}`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Model Selection */}
          <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Select Model</h3>
            <div className="flex flex-wrap justify-center">
              {models.map(({ label, value }) => (
                <div
                  key={value}
                  className="p-4 m-2 bg-opacity-25 bg-gray-600 rounded-lg"
                >
                  <input
                    id={value}
                    type="radio"
                    name="model"
                    value={value}
                    checked={state.model === value}
                    onChange={handleChange}
                  />
                  <label className="ml-2" htmlFor={value}>
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Character Management */}
          <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Characters</h3>
            {characters.map((character, index) => (
              <div key={index} className="flex flex-col mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={character.name}
                  onChange={(e) =>
                    handleCharacterChange(index, "name", e.target.value)
                  }
                  className="text-black mb-2 p-2"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={character.description}
                  onChange={(e) =>
                    handleCharacterChange(index, "description", e.target.value)
                  }
                  className="text-black mb-2 p-2"
                />
                <input
                  type="text"
                  placeholder="Personality"
                  value={character.personality}
                  onChange={(e) =>
                    handleCharacterChange(index, "personality", e.target.value)
                  }
                  className="text-black mb-2 p-2"
                />
                <button
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => {
                    const newCharacters = characters.filter(
                      (_, i) => i !== index
                    );
                    setCharacters(newCharacters);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              className="bg-green-500 text-white p-2 rounded"
              onClick={addCharacter}
            >
              Add Character
            </button>
          </div>

          {/* Generate Story Button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            disabled={isLoading || !state.genre || !state.tone}
            onClick={() => {
              // Format characters
              let characterDescriptions = "";
              if (characters.length > 0) {
                characterDescriptions = characters
                  .map(
                    (c) =>
                      `Name: ${c.name}, Description: ${c.description}, Personality: ${c.personality}`
                  )
                  .join("\n");
              } else {
                characterDescriptions = "No specific characters.";
              }

              // Append the message
              append(
                {
                  role: "user",
                  content: `Please write a ${state.genre} story in a ${state.tone} tone. Use the following characters in the story:\n${characterDescriptions}\nAfter the story, please provide a brief summary of each character's role in the story.`,
                },
                {
                  body: {
                    model: state.model,
                  },
                }
              );
            }}
          >
            Generate Story
          </button>

          {/* Display Story and Summaries */}
          <div
            hidden={
              messages.length === 0 ||
              messages[messages.length - 1]?.content.startsWith("Generate")
            }
            className="bg-opacity-25 bg-gray-700 rounded-lg p-4"
          >
            {(() => {
              const content = messages[messages.length - 1]?.content || "";
              const [story, ...summaryParts] = content.split(
                "Summary of each character's role:"
              );
              const summaries = summaryParts.join(
                "Summary of each character's role:"
              );

              return (
                <>
                  <h3 className="text-2xl font-bold mb-4">Story</h3>
                  <p className="mb-8 whitespace-pre-wrap">{story.trim()}</p>
                  {summaries && (
                    <>
                      <h3 className="text-2xl font-bold mb-4">
                        Character Summaries
                      </h3>
                      <p className="whitespace-pre-wrap">{summaries.trim()}</p>
                    </>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </main>
  );
}
