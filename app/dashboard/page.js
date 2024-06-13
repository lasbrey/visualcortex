'use client'
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from "./utilities"; // Make sure to implement the drawRect utility

const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [cameraFacingMode, setCameraFacingMode] = useState("environment");

  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("COCO-SSD model loaded.");
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);

      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  useEffect(() => {
    if (isCameraOn) {
      runCoco();
    }
  }, [isCameraOn]);

  const handleCameraToggle = () => {
    setIsCameraOn((prev) => !prev);
  };

  const handleCameraSwitch = () => {
    setCameraFacingMode((prevMode) =>
      prevMode === "environment" ? "user" : "environment"
    );
    setIsCameraOn(true); // Ensure camera is turned on when switching modes
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <header className="flex flex-col items-center justify-center w-full text-center">
        {isCameraOn && (
          <>
            <Webcam
              ref={webcamRef}
              muted={true}
              className="absolute left-0 right-0 mx-auto z-10 w-160 h-120"
              videoConstraints={{ facingMode: cameraFacingMode }}
            />
            <canvas
              ref={canvasRef}
              className="absolute left-0 right-0 mx-auto z-20 w-160 h-120"
            />
          </>
        )}
        {!isCameraOn && (
          <p className="mb-4 text-sm text-gray-400">
            Click the button below to enable the webcam and start object detection.
          </p>
        )}
        <div className="flex flex-col items-center">
          {isCameraOn && (
            <div className="mb-4 space-x-4">
              <button
                onClick={handleCameraToggle}
                className="px-4 py-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
              >
                Disable Camera
              </button>
              <button
                onClick={handleCameraSwitch}
                className="px-4 py-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
              >
                Switch Camera
              </button>
            </div>
          )}
          {!isCameraOn && (
            <button
              onClick={handleCameraToggle}
              className="px-4 py-2 mt-4 text-lg font-semibold rounded bg-gray-100 text-gray-900"
            >
              Enable Camera
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
