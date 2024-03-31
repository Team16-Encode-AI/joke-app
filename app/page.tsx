"use client";

import { useState } from "react";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, append, isLoading } = useChat();

  const genres = [
    { emoji: "🧙", value: "Work" },
    { emoji: "🕵️", value: "People" },
    { emoji: "💑", value: "Animal" },
    { emoji: "🚀", value: "Food" },
    { emoji: "🚀", value: "television" },
  ];
  const tones = [
    { emoji: "😊", value: "Witty" },
    { emoji: "😢", value: "Sarcastic" },
    { emoji: "😏", value: "Silly" },
    { emoji: "😂", value: "Dark" },
    { emoji: "😂", value: "Goofy" },
  ];

  const kind = [
    { emoji: "😊", value: "Pun" },
    { emoji: "😢", value: "Knock-knock" },
    { emoji: "😏", value: "Story" },
  ];

  const [state, setState] = useState({
    genre: "",
    tone: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <main className="mx-auto w-full p-24 flex flex-col">
      <div className="p4 m-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Tell me a joke</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Customise your joke by selecting the topic and tone
            </p>
          </div>

          <div className="space-y-4 bg-opacity-25 bg-gray-700 rounded-lg p-4">
            <h3 className="text-xl font-semibold">Topic</h3>

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

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            disabled={isLoading || !state.genre || !state.tone}
            onClick={() =>
              append({
                role: "user",
                content: `Generate a ${state.genre} story in a ${state.tone} tone`,
              })
            }
          >
            Generate Story
          </button>

          <div
            hidden={
              messages.length === 0 ||
              messages[messages.length - 1]?.content.startsWith("Generate")
            }
            className="bg-opacity-25 bg-gray-700 rounded-lg p-4"
          >
            {messages[messages.length - 1]?.content}
          </div>
        </div>
      </div>
    </main>
  );
}
