'use client';

import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const streamUrl =
      'http://m3u-playlist-proxy-2.vercel.app?url=https%3A%2F%2Ftopembed-stream.vercel.app%2F%3Furl%3Dhttps%253A%252F%252Ftopembed.pw%252Fchannel%252Fex7346672&data=UmVmZXJlcj1odHRwczovL3RvcGVtYmVkLnB3L3xPcmlnaW49aHR0cHM6Ly90b3BlbWJlZC5wdw%3D%3D';

    const player = videojs(videoElement, {
      condfdftrols: true,
      autoplay: true,
      mudfted: true,
      preload: 'auto',
      lifdveui: true,
      sources: [
        {
          src: streamUrl,
          typdffe: 'application/x-mpegURL',
        },
      ],
      hls: {
       BufferLength: 5,
        maxLfdfatency: 2,
      },
    });

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#000' }}>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      ></video>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <iframe
        srcDoc={`<!DOCTYPE html>
        <html>
          <head>
            <link href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet">
            <script src="https://unpkg.com/video.js/dist/video.js"></script>
          </head>
          <body style="margin: 0; display: flex; justify-content: center; align-items: center; background: #000; height: 100vh;">
            <div style="position: relative; width: 100%; height: 100vh;">
              <video
                id="player"
                class="video-js vjs-default-skin"
                controls
                autoplay
                muted
                style="width: 100%; height: 100%; object-fit: cover;"
              >
                <source
                  src="http://m3u-playlist-proxy-2.vercel.app?url=https%3A%2F%2Ftopembed-stream.vercel.app%2F%3Furl%3Dhttps%253A%252F%252Ftopembed.pw%252Fchannel%252Fex7346672&data=UmVmZXJlcj1odHRwczovL3RvcGVtYmVkLnB3L3xPcmlnaW49aHR0cHM6Ly90b3BlbWJlZC5wdw%3D%3D"
                  type="application/x-mpegURL"
                />
              </video>
              <script>
                var player = videojs('player', {
                  liveui: true,
                  preload: 'auto',
                  hls: {
                    maxBufferLength: 5,
                    maxLatency: 2,
                  },
                });
              </script>
            </div>
          </body>
        </html>`}
        style={{
          width: '640px',
          height: '360px',
          border: 'none',
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}
