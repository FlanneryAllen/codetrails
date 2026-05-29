// Video engagement tracking hook
// Tracks play, pause, progress milestones, and completion events

import { useEffect, useRef, useCallback } from 'react';
import { trackVideoPlay, trackVideoPause, trackVideoProgress, trackVideoComplete } from '../video';

interface UseVideoTrackingOptions {
  videoId: string;
  videoTitle: string;
  videoDuration?: number;
  progressMilestones?: number[]; // e.g., [25, 50, 75, 90]
}

export const useVideoTracking = ({
  videoId,
  videoTitle,
  videoDuration,
  progressMilestones = [25, 50, 75, 90],
}: UseVideoTrackingOptions) => {
  const lastProgressRef = useRef<number>(0);
  const hasCompletedRef = useRef<boolean>(false);
  const playStartTimeRef = useRef<number | null>(null);

  const handlePlay = useCallback(() => {
    playStartTimeRef.current = Date.now();
    trackVideoPlay(videoId, videoTitle);
  }, [videoId, videoTitle]);

  const handlePause = useCallback((currentTime: number, duration: number) => {
    const watchDuration = playStartTimeRef.current
      ? (Date.now() - playStartTimeRef.current) / 1000
      : 0;

    trackVideoPause(videoId, videoTitle, currentTime, duration, watchDuration);
    playStartTimeRef.current = null;
  }, [videoId, videoTitle]);

  const handleTimeUpdate = useCallback((currentTime: number, duration: number) => {
    const progressPercent = Math.floor((currentTime / duration) * 100);

    // Track progress milestones
    progressMilestones.forEach((milestone) => {
      if (progressPercent >= milestone && lastProgressRef.current < milestone) {
        trackVideoProgress(videoId, videoTitle, milestone, currentTime, duration);
        lastProgressRef.current = milestone;
      }
    });

    // Track completion (at 95% to account for slight variations)
    if (progressPercent >= 95 && !hasCompletedRef.current) {
      const totalWatchTime = playStartTimeRef.current
        ? (Date.now() - playStartTimeRef.current) / 1000
        : duration;

      trackVideoComplete(videoId, videoTitle, duration, totalWatchTime);
      hasCompletedRef.current = true;
    }
  }, [videoId, videoTitle, progressMilestones]);

  const resetTracking = useCallback(() => {
    lastProgressRef.current = 0;
    hasCompletedRef.current = false;
    playStartTimeRef.current = null;
  }, []);

  return {
    handlePlay,
    handlePause,
    handleTimeUpdate,
    resetTracking,
  };
};
