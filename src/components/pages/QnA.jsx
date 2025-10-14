/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Mic, Send, Settings, Loader2 } from "lucide-react";
import useAIStore from "../../stores/useAIStore";

const QNA = () => {
  const { fetchChats, chats, sendMessage } = useAIStore();
  const [field, setField] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats]);

  const handleSubmit = async () => {
    if (field.trim() === "" || isLoading) return;

    setIsLoading(true);
    const response = await sendMessage({ question: field });

    if (response && !response.success) {
      alert(response.message || "Failed to send message");
    } else {
      setField("");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />

      <main
        style={{
          backgroundImage: 'url("/Wheel2-1.png")',
          backgroundSize: "",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
        className="flex-grow flex flex-col items-center px-4 py-8 bg-gray-50"
      >
        {chats.length > 0 ? (
          <>
            {/* Chat header */}
            <div className="w-full max-w-2xl bg-white rounded-t-xl shadow-md shadow-amber-200 flex items-center gap-3 p-3 border-b border-gray-100 sticky top-0 z-10">
              <img
                src="/chat-logo.png"
                alt="Astro AI"
                className="w-10 h-10 rounded-full border border-amber-300 object-cover"
              />
              <div className="flex flex-col items-start">
                <h2 className="text-gray-800 font-semibold text-base">
                  AI Astrologer
                </h2>
              </div>
            </div>

            {/* Chat messages */}
            <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-b-xl shadow-2xl p-4 flex flex-col space-y-4 overflow-y-auto max-h-[65vh] border border-amber-100">
              {chats.map((chat) => (
                <div key={chat?._id} className="flex flex-col space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-amber-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[75%] shadow-sm">
                      {chat?.question}
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-amber-500 text-white px-4 py-2 rounded-2xl max-w-[75%] shadow-sm">
                      {chat?.answer}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input area */}
            <div className="w-full max-w-2xl flex items-center justify-between bg-amber-100 rounded-lg px-4 py-3 shadow-md mt-6">
              <textarea
                rows="2"
                placeholder="Ask a new question..."
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none text-sm sm:text-base mr-3"
              />

              <div className="flex items-center gap-3 text-gray-600">
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
                ) : (
                  <Send
                    onClick={handleSubmit}
                    className="w-5 h-5 cursor-pointer hover:text-amber-600 transition"
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          // Empty state
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-amber-600 mb-2">
              Get your questions answered by AI
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Your first chat is on us!
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {[
                "Career",
                "Health",
                "Relationship",
                "Marriage",
                "Business",
                "Professional",
              ].map((category) => (
                <button
                  key={category}
                  className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full bg-amber-50 hover:bg-amber-100 text-gray-700 shadow-sm transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="w-full max-w-2xl flex items-center justify-between bg-amber-100 rounded-lg px-4 py-3 shadow-md mt-6">
              <textarea
                rows="2"
                placeholder="Ask a new question..."
                value={field}
                onChange={(e) => setField(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 resize-none text-sm sm:text-base mr-3"
              />

              <div className="flex items-center gap-3 text-gray-600">
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
                ) : (
                  <Send
                    onClick={handleSubmit}
                    className="w-5 h-5 cursor-pointer hover:text-amber-600 transition"
                  />
                )}
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default QNA;
