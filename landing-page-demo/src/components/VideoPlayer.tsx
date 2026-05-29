"use client";

import React, { useRef, useEffect } from 'react';
import { useVideoTracking } from '../lib/analytics/hooks/useVideoTracking';

interface VideoPlayerProps {
  videoId: string;
  videoTitle: string;
  src: string;
  poster?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoId,
  videoTitle,
  src,
  poster,
  className = '',
  width = '100%',
  height = 'auto',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { handlePlay, handlePause, handleTimeUpdate, resetTracking } = useVideoTracking({
    videoId,
    videoTitle,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      handlePlay();
    };

    const onPause = () => {
      handlePause(video.currentTime, video.duration);
    };

    const onTimeUpdate = () => {
      handleTimeUpdate(video.currentTime, video.duration);
    };

    const onEnded = () => {
      // Pause tracking already handles completion at 95%
      handlePause(video.currentTime, video.duration);
    };

    const onSeeked = () => {
      // Reset tracking if user seeks backward significantly
      if (video.currentTime < video.duration * 0.1) {
        resetTracking();
      }
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    video.addEventListener('seeked', onSeeked);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('seeked', onSeeked);
    };
  }, [handlePlay, handlePause, handleTimeUpdate, resetTracking]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      controls
      className={className}
      width={width}
      height={height}
      style={{
        maxWidth: '100%',
        borderRadius: '8px',
      }}
    >
      Your browser does not support the video tag.
    </video>
  );
};
