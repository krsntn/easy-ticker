interface ITimer {
  start: (duration?: number, completedCallback?: () => void) => void;
  stop: (stopCallback?: () => void) => void;
  tick: () => void;
}

class Timer implements ITimer {
  private interval: number;
  private targetEndTime?: number;
  private expected = 0;
  private timeoutVar?: number;
  private completedCallbackVoid?: () => void;
  private intervalCallbackVoid?: () => void;
  private errorCallbackVoid?: () => void;

  constructor(
    intervalCallback?: () => void,
    interval = 1000,
    errorCallback?: () => void
  ) {
    this.intervalCallbackVoid = intervalCallback;
    this.interval = interval;
    this.errorCallbackVoid = errorCallback;
  }

  start = (duration?: number, completedCallback?: () => void) => {
    if (duration) {
      this.targetEndTime = Date.now() + duration;
    }
    if (completedCallback) {
      this.completedCallbackVoid = completedCallback;
    }
    this.expected = Date.now() + this.interval;
    setTimeout(this.tick, this.interval);
  };

  stop = (stopCallback?: () => void) => {
    clearTimeout(this.timeoutVar);
    if (stopCallback) stopCallback();
  };

  tick = () => {
    if (this.targetEndTime && this.expected >= this.targetEndTime) {
      if (this.completedCallbackVoid) this.completedCallbackVoid();
      return stop();
    }

    let timeDrift = Date.now() - this.expected;
    const nextInterval = this.interval - timeDrift;

    if (timeDrift > this.interval && this.errorCallbackVoid) {
      this.errorCallbackVoid();
    }

    if (this.intervalCallbackVoid) this.intervalCallbackVoid();

    this.expected += this.interval;
    this.timeoutVar = setTimeout(this.tick, nextInterval);
  };
}

export { Timer };
