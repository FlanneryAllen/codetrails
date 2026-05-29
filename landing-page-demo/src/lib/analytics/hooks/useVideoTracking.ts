// Video engagement tracking hook
// Tracks play, pause, progress milestones, completion, rewatches, and drop-offs

import { useEffect, useRef, useCallback } from 'react';
import {
  trackVideoPlay,
  trackVideoPause,
  trackVideoProgress,
  trackVideoComplete,
  trackVideoRewatch,
  trackVideoDropOff
} from '../video';

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
  const rewatchCountRef = useRef<number>(0);

  const handlePlay = useCallback(() => {
    playStartTimeRef.current = Date.now();

    // Check if this is a rewatch (playing after completion)
    if (hasCompletedRef.current) {
      rewatchCountRef.current += 1;
      trackVideoRewatch(videoId, videoTitle, rewatchCountRef.current);
      // Reset completion flag to allow tracking completion again
      hasCompletedRef.current = false;
      lastProgressRef.current = 0;
    }

    trackVideoPlay(videoId, videoTitle);
  }, [videoId, videoTitle]);

  const handlePause = useCallback((currentTime: number, duration: number) => {
    const watchDuration = playStartTimeRef.current
      ? (Date.now() - playStartTimeRef.current) / 1000
      : 0;

    const progressPercent = Math.floor((currentTime / duration) * 100);

    // Track drop-off if video not completed and user is past 5% (to filter out accidental clicks)
    if (!hasCompletedRef.current && progressPercent >= 5 && progressPercent < 95) {
      trackVideoDropOff(videoId, videoTitle, currentTime, duration, progressPercent, watchDuration);
    }

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
    rewatchCountRef.current = 0;
  }, []);

  return {
    handlePlay,
    handlePause,
    handleTimeUpdate,
    resetTracking,
  };
};
