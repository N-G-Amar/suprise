# ✨ A Magical Diwali Surprise for Aashiqua ❤️ 🪔

A romantic, dreamy, and interactive Diwali greeting website dedicated to **Aashiqua**. Built with modern HTML5, CSS3 3D transforms, dual HTML5 Canvas particle systems, and native Web Audio API festive synthesis.

---

## 🌟 Key Features

1. **Magical Aesthetic & Festive Atmosphere**:
   - Deep royal purple, midnight violet, glowing soft pink, and shimmering gold colors.
   - Dual canvas rendering: Golden dust, twinkling stars, glowing fireflies, and falling rose & marigold petals.
   - Realistic Indian diyas with 3-layer animated flickering flames (outer aura, flame body, inner blue core).
   - Hanging fairy lights garland with glowing flickering bulbs.
   - Ornate golden corner rangolis and Diwali mandalas.

2. **Personalized Landing Screen**:
   - *"Hey Aashiqua... ❤️"*
   - *"Someone has a little Diwali surprise for you..."*
   - Glowing golden *"Open Your Surprise ✨"* button with sweep shimmer animation.

3. **Interactive 3D Greeting Card**:
   - Center 3D greeting card with realistic depth and perspective (`perspective: 1400px`).
   - Dark purple & rose-pink gradient with gold foil borders and glowing diya centerpiece.
   - Cover text: *"A little surprise for you 💌"*.
   - **Double-click OR Triple-click** (desktop) and **Double-tap OR Triple-tap** (mobile/tablet) to flip the card open.
   - Includes an accessible one-tap helper button.
   - Realistic 3D card unfold animation with a burst of golden sparkles, floating hearts, and fireworks.

4. **The Big Surprise Reveal**:
   - Shimmering golden typography: **"🪔 HAPPY DIWALI 🪔"**
   - Monumental highlight: **# AASHIQUA ❤️** in golden calligraphic sheen with glowing heart.
   - **10 Rotating Heartfelt Wishes**: Every time Aashiqua opens or refreshes the website, it automatically rotates to the next heartfelt message (persisted via `localStorage`). Includes a "💌 Wish X of 10" indicator and a "Next Wish 🪄" button to browse all 10 messages!
   - Example Wish #1:
     > *"May this Diwali fill your life with endless happiness, beautiful memories, countless reasons to smile and all the love your heart deserves.*  
     > *May your world always shine brighter than a thousand diyas. Keep smiling and keep glowing, because you deserve all the beautiful things in this world. ✨❤️"*  
     > *"Wishing you the happiest and most magical Diwali ever! 💗"*

5. **Diwali Fireworks Simulator**:
   - Physics-based rocket trails and bursting multi-ring fireworks in golden, rose, lavender, and white sparkling hues.
   - Triggers on reveal, via the "🎆 Launch Fireworks" button, or on background taps.

6. **Ambient Festive Music (Web Audio API)**:
   - High-fidelity synthetic Indian festive chimes, tanpura drone, and temple bell melodies (Raag Yaman / Bhupali scale).
   - Zero external audio files required — 100% offline reliable, zero broken links, zero copyright blocks.
   - Animated soundwave equalizer toggle button.
   - Autoplay policy compliant (starts on user interaction).

7. **Interactive Altar Diyas & Touch Sparks**:
   - Tap individual diyas for Joy, Eternal Love, and Success to light them up with bursts of flame light.
   - Pointer & touch sparkler trail generating trailing stars and hearts.

8. **One-Click Prompt Copy Button (Top Navigation)**:
   - "📋 Copy Website Prompt ✨" button at the top header.
   - Copies the complete website creation prompt using `navigator.clipboard` with an automatic fallback.
   - Sparkle animation + button text updates to "Copied Successfully! 💗" + toast alert.
   - Completely non-intrusive and separated from the greeting card touch events.

9. **Final Emotional Ending**:
   - *"Made with a little extra love, just for you. ❤️"* with a glowing beating heart.

---

## 🚀 How to Run & Preview Locally

You can open `index.html` directly in any web browser, or launch a lightweight local server:

### Option 1: Double-click
Simply double click `index.html` inside the `diwali-surprise` folder in File Explorer.

### Option 2: Python HTTP Server
```bash
cd diwali-surprise
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 3: Node / npx serve
```bash
npx serve diwali-surprise
```

---

## 🌐 Instant Free Deployment (Get a Public Link for Aashiqua)

### Deploy to Netlify (Drag & Drop — 10 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `diwali-surprise` folder.
3. Your site is live instantly with a free HTTPS URL you can share with Aashiqua!

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run in the `diwali-surprise` folder:
   ```bash
   vercel
   ```
3. Follow the 2 prompts to get an instant public URL.

### Deploy to GitHub Pages
1. Push this folder to a GitHub repository.
2. In repository **Settings** → **Pages**, select branch `main` and root folder.
3. Save to get your public URL.
