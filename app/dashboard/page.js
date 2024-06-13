'use client'
import { useEffect, useState } from 'react';

const Home = () => {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const loadModel = async () => {
      const script1 = document.createElement('script');
      script1.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js";
      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd";
        script2.onload = async () => {
          const cocoSsd = window['cocoSsd'];
          const loadedModel = await cocoSsd.load();
          setModel(loadedModel);
        };
        document.body.appendChild(script2);
      };
      document.body.appendChild(script1);
    };
    loadModel();
  }, []);

  const handleImageClick = async (event) => {
    if (!model) return;
    const predictions = await model.detect(event.target);
    setPredictions(predictions);
  };

  const enableCam = async () => {
    const video = document.getElementById('webcam');
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.warn('getUserMedia() is not supported by your browser');
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.addEventListener('loadeddata', () => predictWebcam(model, video));
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-orange-500 text-white p-6 mb-8 rounded">
        <h1 className="text-3xl font-bold text-center">Sight Sense</h1>
        <p className="text-center mt-2">Empowering Vision with Machine Learning</p>
      </header>
      <section className="text-center my-8">
        <h2 className="text-2xl font-bold">Object Detection System</h2>
        <p className="italic my-4">Click on an image below to try and recognize what is in the image using the power of Machine Learning!</p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div className="relative">
          <img
            src="https://cdn.glitch.com/74418d0b-3465-49a2-8c71-a721b7734473%2Fdogs_flickr_publicdomain.jpg?v=1579294514974"
            className="w-full cursor-pointer rounded shadow-lg"
            onClick={handleImageClick}
          />
        </div>
        <div className="relative">
          <img
            src="https://cdn.glitch.com/74418d0b-3465-49a2-8c71-a721b7734473%2Fcats_flickr_publicdomain.jpg?v=1579294753947"
            className="w-full cursor-pointer rounded shadow-lg"
            onClick={handleImageClick}
          />
        </div>
      </section>
      <section className="text-center my-8">
        <h2 className="text-2xl font-bold">Live Object Detection</h2>
        <p className="italic my-4">Hold some objects up close to your webcam to get a real-time classification!</p>
        <div id="liveView" className="relative">
          <button
            id="webcamButton"
            className="bg-orange-500 text-white p-2 rounded mb-4"
            onClick={enableCam}
          >
            Enable Webcam
          </button>
          <video id="webcam" className="w-full rounded shadow-lg" autoPlay></video>
        </div>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold text-center">Predictions</h2>
        <div className="flex flex-wrap justify-center mt-4">
          {predictions.map((prediction, index) => (
            <div key={index} className="bg-white shadow-lg rounded p-4 m-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <p className="text-gray-800 font-bold">{prediction.class}</p>
              <p className="text-gray-600">Confidence: {Math.round(prediction.score * 100)}%</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-gray-800 text-white p-4 text-center rounded mt-8">
        <p>&copy; 2024 Sight Sense. All rights reserved.</p>
      </footer>
    </div>
  );
};

const predictWebcam = (model, video) => {
  const liveView = document.getElementById('liveView');
  const children = [];

  const makePredictions = async () => {
    const predictions = await model.detect(video);
    liveView.querySelectorAll('.prediction').forEach((el) => el.remove());
    children.splice(0);

    predictions.forEach((prediction) => {
      if (prediction.score > 0.66) {
        const p = document.createElement('p');
        p.className = 'absolute bg-orange-500 text-white p-1 rounded prediction';
        p.innerText = `${prediction.class} - with ${Math.round(prediction.score * 100)}% confidence.`;
        p.style.left = `${prediction.bbox[0]}px`;
        p.style.top = `${prediction.bbox[1]}px`;
        liveView.appendChild(p);
        children.push(p);
      }
    });

    requestAnimationFrame(makePredictions);
  };

  requestAnimationFrame(makePredictions);
};

export default Home;
