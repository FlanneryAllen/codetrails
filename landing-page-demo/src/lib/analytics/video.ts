// Video analytics tracking functions
// Integrates with the existing analytics core system

import { event } from './core';

/**
 * Track video play event
 */
export const trackVideoPlay = (
  videoId: string,
  videoTitle: string
): void => {
  event({
    action: 'video_play',
    category: 'Video',
    label: videoTitle,
    video_id: videoId,
    video_title: videoTitle,
  });
};

/**
 * Track video pause event
 */
export const trackVideoPause = (
  videoId: string,
  videoTitle: string,
  currentTime: number,
  duration: number,
  watchDuration: number
): void => {
  const progressPercent = Math.floor((currentTime / duration) * 100);

  event({
    action: 'video_pause',
    category: 'Video',
    label: videoTitle,
    value: Math.round(currentTime),
    video_id: videoId,
    video_title: videoTitle,
    current_time: currentTime,
    duration: duration,
    progress_percent: progressPercent,
    watch_duration: watchDuration,
  });
};

/**
 * Track video progress milestone
 */
export const trackVideoProgress = (
  videoId: string,
  videoTitle: string,
  milestone: number,
  currentTime: number,
  duration: number
): void => {
  event({
    action: 'video_progress',
    category: 'Video',
    label: `${videoTitle} - ${milestone}%`,
    value: milestone,
    video_id: videoId,
    video_title: videoTitle,
    milestone: milestone,
    current_time: currentTime,
    duration: duration,
  });
};

/**
 * Track video completion
 */
export const trackVideoComplete = (
  videoId: string,
  videoTitle: string,
  duration: number,
  totalWatchTime: number
): void => {
  event({
    action: 'video_complete',
    category: 'Video',
    label: videoTitle,
    value: Math.round(duration),
    video_id: videoId,
    video_title: videoTitle,
    duration: duration,
    total_watch_time: totalWatchTime,
    completion_rate: 100,
  });
};

/**
 * Track video error
 */
export const trackVideoError = (
  videoId: string,
  videoTitle: string,
  errorMessage: string
): void => {
  event({
    action: 'video_error',
    category: 'Video',
    label: `${videoTitle} - Error`,
    video_id: videoId,
    video_title: videoTitle,
    error_message: errorMessage,
  });
};
