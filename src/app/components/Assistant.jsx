"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SoundWave from "./SoundWave";
import { Mic, MicOff, MoreVertical, PhoneOff, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { ASSISTANT_SERVER_URL } from "../urls";
import { RealTimeAudioPlayer } from "../services/RealTimeAudioPlayer";

const Assistant = () => {
  const router = useRouter();
  const websocketRef = useRef();
  const soundBufferRef = useRef(null);
  const streamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("userProfile");
    setUser(JSON.parse(storedUser));
  }, []);

  const toggleMute = useCallback(() => {
    if (streamRef.current) {
      const audioTrack = streamRef.current.getAudioTracks()[0];
      if (audioTrack) {
        if (isMuted) {
          audioTrack.enabled = true;
          setIsMuted(false);
        } else {
          audioTrack.enabled = false;
          setIsMuted(true);
        }
      }
    }
  }, [isMuted]);

  const endCall = useCallback(() => {
    websocketRef.current?.close();
    soundBufferRef.current.clearQueChunks();
    setShowModal(true);
  }, []);

  const onConnect = useCallback(() => {
    console.log("connected");
    const data = {
      event: "start",
      start: {
        user: {
          name: user.name,
        },
      },
    };
    websocketRef.current.send(JSON.stringify(data));
    setTimeout(() => sendStream(), 4000);
  }, []);

  useEffect(() => {
    if (!user) return;

    const ws = new WebSocket(
      `${ASSISTANT_SERVER_URL}?agent_id=${`Real-estate-New-iSKHignjLL9LrPsz-8Ajb`}`
    );
    websocketRef.current = ws;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    soundBufferRef.current = new RealTimeAudioPlayer(setIsAISpeaking);

    ws.onopen = onConnect;
    ws.onmessage = async (event) => {
      const data = JSON.parse(event.data); // Fix: Use `event.data` here.
      switch (data.event) {
        case "media":
          const base64Audio = data.media.payload;
          soundBufferRef.current.addAudioChunk(base64Audio);
          break;
        case "clear":
          soundBufferRef.current.clearQueChunks();
          break;
        case "limit_reached":
          alert("5 Limit Reached!");
          endCall();
          break;
      }
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      ws.close();
    };
  }, [user, onConnect, endCall]);

  const sendStream = async () => {
    console.log("start voice stream");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support audio recording.");
      return;
    }

    streamRef.current = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        echoCancellation: true,
        autoGainControl: true,
        noiseSuppression: true,
      },
    });

    mediaRecorderRef.current = new MediaRecorder(streamRef.current);
    mediaRecorderRef.current.ondataavailable = async (event) => {
      if (
        websocketRef.current &&
        websocketRef.current.readyState === WebSocket.OPEN
      ) {
        const blob = event.data;
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            const data = {
              event: "media",
              media: {
                payload: reader?.result?.split("base64,")[1],
              },
            };

            websocketRef.current.send(JSON.stringify(data));
          }
        };
        reader.readAsDataURL(blob);
      }
    };

    mediaRecorderRef.current.start(100);
  };

  const handleRating = (value) => {
    setRating(value);
    console.log(`User rated: ${value} stars`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="flex flex-col md:w-[500px] h-fit bg-gradient-to-br from-indigo-100 to-purple-100">
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Play AI</h1>
          </div>
        </header>

        <main className="flex-1 container mx-auto p-4 flex flex-col items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center space-y-6 w-full max-w-2xl">
            <div
              className={`relative w-48 h-48 ${
                isAISpeaking ? "animate-pulse" : ""
              }`}
            >
              <div className="absolute inset-0 bg-indigo-300 rounded-full opacity-50"></div>
              <div className="absolute inset-2 bg-indigo-100 rounded-full flex items-center justify-center">
                <img
                  src="/bot-icon.webp"
                  alt="AI Assistant"
                  className="w-32 h-32 rounded-full"
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-indigo-700">
              AI Assistant
            </h2>
            <div className="w-full h-24 bg-gray-100 rounded-lg overflow-hidden grid place-items-center">
              <SoundWave isAnimating={isAISpeaking} />
            </div>
          </div>
        </main>

        <div className="bg-white shadow-lg p-4">
          <div className="container mx-auto flex justify-center items-center space-x-6">
            <button
              onClick={toggleMute}
              className={`p-4 rounded-full ${
                isMuted ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
              } hover:opacity-80 transition-opacity`}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            <button
              onClick={endCall}
              className="p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              <PhoneOff size={24} />
            </button>
            {/* <button className="p-4 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
              <MoreVertical size={24} />
            </button> */}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-semibold text-gray-900 text-center">
              Thanks for the call! How did it go?
            </h2>
            <div className="flex justify-center items-center space-x-2 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`text-yellow-400 ${
                    rating >= star ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  <Star size={32} />
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setShowModal(false);
                window.location.reload();
              }}
              className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
