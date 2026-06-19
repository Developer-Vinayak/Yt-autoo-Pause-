# YouTube Auto Pause on Tab Switch

Jab aap YouTube tab se hatkar kisi doosre tab/window par jaate ho, to video
apne aap **pause** ho jayegi. Jab wapas YouTube tab par aaoge, to video apne
aap **resume** (play) ho jayegi — agar wo pehle se chal rahi thi.

## Install kaise karein (Chrome / Edge / Brave)

1. Yeh poora `yt-auto-pause` folder apne computer mein kisi jagah save/unzip
   kar lein.
2. Chrome kholein aur address bar mein jaayein: `chrome://extensions`
3. Top-right corner mein **"Developer mode"** ON kar dein.
4. **"Load unpacked"** button par click karein.
5. `yt-auto-pause` folder select karein (jisme `manifest.json` ho).
6. Extension install ho jayega — koi icon visible nahi hoga kyunki yeh
   background mein silently kaam karta hai, koi popup/button nahi hai.

## Test kaise karein

1. YouTube par koi video play karein.
2. Doosre tab par switch karein ya window minimize karein.
3. YouTube tab par wapas aayein — video apne aap play/pause hota dikhega.

## Customize (optional)

Agar aap chahte hain ki tab switch karne par video **pause toh ho, lekin
wapas aane par khud se resume na ho** (manually play dabana pade), to
`content.js` file mein yeh part hata dein:

```js
} else {
  if (wasPlayingBeforeHide) {
    video.play().catch(() => {});
    wasPlayingBeforeHide = false;
  }
}
```

Bas ise empty `else {}` se replace kar dein.
