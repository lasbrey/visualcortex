'use client'
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

import Features from "@/components/Home/Features";
import { UserAuth } from "@/context/authContext";

const Dashboard = () => {
  const { user } = UserAuth();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const modelPromise = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      const model = await cocoSsd.load();
      modelPromise.current = model;
    };

    if (isCameraOpen) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            facingMode: selectedCamera
          }
        })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          loadModel();
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    } else {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [isCameraOpen, selectedCamera]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
  };

  const handleCameraToggle = () => {
    setSelectedCamera((prevCamera) => (prevCamera === 'environment' ? 'user' : 'environment'));
  };

  const detectObjects = async (model) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const detectFrame = async () => {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const predictions = await model.detect(video);
      console.log(predictions);

      predictions.forEach((prediction) => {
        const [x, y, width, height] = prediction.bbox;
        context.beginPath();
        context.rect(x, y, width, height);
        context.lineWidth = 2;
        context.strokeStyle = "red";
        context.fillStyle = "red";
        context.stroke();
        context.fillText(
          prediction.class,
          x,
          y > 10 ? y - 5 : 10
        );
      });

      requestAnimationFrame(detectFrame);
    };

    detectFrame();
  };

  useEffect(() => {
    if (isCameraOpen && modelPromise.current) {
      const model = modelPromise.current;
      detectObjects(model);
    }
  }, [isCameraOpen]);

  return (
    <section>
      <div className="bg-black mb-10">
        <div className=" flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-gray-50">
            Object Search Engine Reverse Image Search
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
            Find where images appear online. How to use Visual Cortex
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
              onClick={handleOpenCamera}
            >
              Open Camera
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
              onClick={handleCameraToggle}
            >
              Toggle Camera
            </button>
          </div>
        </div>
      </div>
      {isCameraOpen && (
        <div className="flex justify-center">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{ maxWidth: "100%", maxHeight: "80vh" }}
          />
          <canvas
            ref={canvasRef}
            style={{ display: "block" }} // Set display to block to make the canvas visible
            width={640}
            height={480}
          />
        </div>
      )}
      <Features />
    </section>
  );
};

export default Dashboard;
