import { cn } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { GiRobotGolem } from "react-icons/gi";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_PUBLIC_API_URL}/api/chat`, {
        text: userInput,
      });
      setChatHistory([...chatHistory, { sender: "user", message: userInput }]);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "bot", message: response.data.message },
      ]);
    } catch (error) {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "bot", message: "Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
    setUserInput("");
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
      >
        <GiRobotGolem size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 max-w-md w-full border rounded-lg shadow-lg bg-gray-50">
          <h2 className="text-center text-xl font-semibold py-4 text-gray-800">
            Chat with Me
          </h2>
          <div className="h-80 overflow-y-scroll p-4 bg-white border-t border-b">
            <div>
              <div className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 max-w-[75%] self-start mr-auto">
                Hi! I&apos;m a chatbot. How can I help you today? You can ask me
                about Shubham Priya. 😊
              </div>
            </div>
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`my-2 px-4 py-2 rounded-lg max-w-[75%] ${
                  chat.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800 self-start mr-auto"
                }`}
              >
                {chat.message}
              </div>
            ))}
          </div>
          <form
            className="flex items-center p-4 border-t"
            onSubmit={sendMessage}
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className={cn(
                "flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",
                loading && "cursor-not-allowed bg-gray-200 text-gray-500"
              )}
            />
            <button
              type="submit"
              disabled={loading}
              className={cn(
                "ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",
                loading && "cursor-not-allowed bg-blue-300"
              )}
            >
              <AiOutlineSend size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
