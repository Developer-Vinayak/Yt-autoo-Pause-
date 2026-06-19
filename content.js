// YouTube Auto Pause on Tab Switch
// Pauses the video when the tab/window loses focus (visibilitychange),
// and resumes it automatically when you switch back.

(function () {
  let wasPlayingBeforeHide = false;

  function getVideoElement() {
    return document.querySelector("video");
  }

  function handleVisibilityChange() {
    const video = getVideoElement();
    if (!video) return;

    if (document.hidden) {
      // Tab/window went to background -> remember state & pause
      wasPlayingBeforeHide = !video.paused;
      if (wasPlayingBeforeHide) {
        video.pause();
      }
    } else {
      // Tab/window is visible again -> resume if it was playing before
      if (wasPlayingBeforeHide) {
        // .play() can return a promise that rejects if interrupted; ignore errors
        video.play().catch(() => {});
        wasPlayingBeforeHide = false;
      }
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);

  // YouTube is a single-page app, so the <video> element can be replaced
  // when navigating between videos. Re-checking on visibilitychange (above)
  // already covers this since we query for the video element fresh each time.
})();
