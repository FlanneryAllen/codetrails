// Video event batching system
// Batches video events and flushes every 5 seconds to avoid overwhelming analytics

import { event } from './core';

interface QueuedVideoEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

class VideoEventBatcher {
  private queue: QueuedVideoEvent[] = [];
  private flushInterval: NodeJS.Timeout | null = null;
  private readonly FLUSH_INTERVAL_MS = 5000; // 5 seconds
  private readonly MAX_BATCH_SIZE = 50; // Max events before forced flush

  constructor() {
    if (typeof window !== 'undefined') {
      // Start the flush interval
      this.startFlushInterval();

      // Flush on page unload
      window.addEventListener('beforeunload', () => {
        this.flush();
      });
    }
  }

  /**
   * Add an event to the batch queue
   */
  enqueue(eventData: QueuedVideoEvent): void {
    this.queue.push(eventData);

    // Force flush if batch size exceeds limit
    if (this.queue.length >= this.MAX_BATCH_SIZE) {
      this.flush();
    }
  }

  /**
   * Flush all queued events
   */
  flush(): void {
    if (this.queue.length === 0) return;

    const eventsToSend = [...this.queue];
    this.queue = [];

    // Send batched events
    if (eventsToSend.length === 1) {
      // Single event - send directly
      event(eventsToSend[0]);
    } else {
      // Multiple events - send as batch
      event({
        action: 'video_events_batch',
        category: 'Video',
        label: `Batch of ${eventsToSend.length} events`,
        batch_size: eventsToSend.length,
        events: eventsToSend,
      });

      // Also send individual events for backwards compatibility
      eventsToSend.forEach((eventData) => {
        event(eventData);
      });
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[VideoBatcher] Flushed', eventsToSend.length, 'events');
    }
  }

  /**
   * Start the automatic flush interval
   */
  private startFlushInterval(): void {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
    }

    this.flushInterval = setInterval(() => {
      this.flush();
    }, this.FLUSH_INTERVAL_MS);
  }

  /**
   * Stop the flush interval (cleanup)
   */
  destroy(): void {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
      this.flushInterval = null;
    }
    this.flush(); // Final flush
  }
}

// Singleton instance
let batcherInstance: VideoEventBatcher | null = null;

export const getVideoBatcher = (): VideoEventBatcher => {
  if (!batcherInstance) {
    batcherInstance = new VideoEventBatcher();
  }
  return batcherInstance;
};
