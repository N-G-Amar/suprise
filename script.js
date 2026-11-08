/**
 * ============================================================================
 * ✨ A MAGICAL DIWALI SURPRISE FOR AASHIQUA ❤️
 * Complete Interactive Application Logic
 * ============================================================================
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. THE COMPLETE WEBSITE CREATION PROMPT TEXT (FOR ONE-CLICK COPY)
  // ==========================================================================
  const COMPLETE_WEBSITE_PROMPT = `# ✨ Complete Website Creation Prompt — A Magical Diwali Surprise for Aashiqua ❤️

Copy the entire prompt below and paste it into Lovable, Bolt, Replit, or any AI website builder.

## MAIN PROMPT

Create a beautiful, romantic, dreamy and interactive Diwali greeting website dedicated to a girl named Aashiqua.

The website should feel like a magical, personalized digital gift, not an ordinary greeting website. Make it visually stunning, elegant, emotional, interactive and unforgettable.

### 1. Overall aesthetic and theme

- Use a dreamy combination of deep royal purple, midnight violet, soft pink and glowing golden colors.
- Create a beautiful Diwali night atmosphere.
- Add animated golden particles, floating sparkles, tiny stars and glowing fireflies.
- Include traditional Indian diyas with realistic flickering flames.
- Add subtle floral decorations, golden rangoli patterns and festive lights.
- Use smooth animations and elegant typography.
- Make the design premium, romantic and magical.

### 2. Landing screen

When Aashiqua opens the website, she should see a beautiful animated welcome screen.

Display:

"Hey Aashiqua... ❤️"

Below it:

"Someone has a little Diwali surprise for you..."

Add a glowing golden button saying:

"Open Your Surprise ✨"

Make the entrance animation smooth and magical.

### 3. Interactive greeting card

This is the most important feature.

Place a beautiful 3D greeting card in the center of the screen.

- The card should look like a real premium greeting card.
- Use a dark purple and rose-pink gradient with intricate golden Diwali decorations.
- Add a glowing diya illustration on the front.
- Write "A little surprise for you 💌" on the card.
- Add a gentle floating animation.
- Include a subtle glowing border.

Interaction:

When the visitor double-clicks OR triple-clicks the card, trigger a magical opening animation.

- The card should flip open with a realistic 3D effect.
- Add golden sparkles, glowing particles and a burst of tiny hearts.
- Make sure double-click and triple-click both work on mobile and desktop.
- On mobile, support double-tap or triple-tap interactions.
- Include a smooth transition into the surprise reveal.

### 4. The big surprise reveal

After the card opens, display this message in large, beautiful golden typography:

"🪔 HAPPY DIWALI 🪔"

Then reveal:

# AASHIQUA ❤️

Make her name the biggest visual highlight.

Below it, show this heartfelt message:

"May this Diwali fill your life with endless happiness, beautiful memories, countless reasons to smile and all the love your heart deserves. May your world always shine brighter than a thousand diyas. Keep smiling and keep glowing, because you deserve all the beautiful things in this world. ✨❤️"

Add a final line:

"Wishing you the happiest and most magical Diwali ever! 💗"

Reveal the message with beautiful animations, one line at a time.

### 5. Magical animations and effects

Include:

- Floating golden diyas.
- Soft falling flower petals.
- Animated golden glitter.
- Twinkling stars.
- Glowing heart particles.
- Beautiful fireworks animation after revealing the message.
- Smooth fade-in and text reveal animations.
- Subtle parallax effect in the background.
- Glowing golden light effects.
- Floating decorative elements.

Keep animations smooth and optimized for mobile devices.

### 6. Background music

Add an optional soft instrumental festive background track.

- Include a small music toggle button.
- Allow visitors to turn the music on or off.
- Do not autoplay audio before user interaction.
- Use a beautiful music icon with a subtle animation when music is playing.
- Make sure the music toggle works properly on mobile and desktop.

### 7. Final screen

At the bottom, display:

"Made with a little extra love, just for you. ❤️"

Add a small glowing heart animation.

Make the ending feel emotional, warm and memorable.

### 8. NEW FEATURE: One-click prompt copy button

Add a beautiful, functional button at the top of the website titled:

"📋 Copy Website Prompt ✨"

This button is an additional utility feature and should not interfere with the Diwali surprise experience.

When clicked:

- Copy the complete website creation prompt to the clipboard.
- Include every section and requirement without missing anything.
- Show a beautiful confirmation message:

"✨ Prompt copied successfully! ❤️"

- Add a subtle golden sparkle animation when clicked.
- Change the button text temporarily to:

"Copied Successfully! 💗"

- Make the button work on Android, iPhone, tablets and desktop.
- Use the Clipboard API with a suitable fallback for browsers where clipboard access is unavailable.
- Display a friendly error message if copying fails.
- Make sure the button actually copies the complete prompt, not just a portion of it.

Important: Keep this copy button visually separate from the main greeting card experience. It must not interfere with the card's double-tap, triple-tap or opening animation.

### 9. Technical requirements

- Build a complete, functional and responsive website.
- Use HTML, CSS and JavaScript or React.
- Make it work on Android, iPhone, tablets and desktop.
- Ensure the card interaction works with both mouse and touch.
- Use smooth CSS transitions and 3D transforms.
- Make the website load quickly.
- No broken images or buttons.
- No unnecessary navigation bars or distracting elements.
- Optimize animations for mobile performance.
- Use responsive typography and layouts.
- Ensure all interactive elements work correctly.
- Keep the code clean and well organized.
- Make it ready for deployment on Vercel or Netlify.
- Ensure the final website can be shared through a public URL.

### 10. Design quality requirements

The website must not look like a generic template.

Pay special attention to:

- Premium visual quality.
- Beautiful 3D greeting card animation.
- Romantic and magical atmosphere.
- Smooth transitions between screens.
- Elegant golden typography.
- Beautifully designed diyas and rangoli.
- Emotional presentation of Aashiqua's name.
- Perfect mobile responsiveness.

Do not use too many distracting elements. Keep the experience elegant and balanced.

### 11. MOST IMPORTANT INSTRUCTIONS

The entire website should feel like a personalized digital Diwali gift made especially for Aashiqua.

The card opening must be the main attraction.

The reveal of:

"HAPPY DIWALI AASHIQUA ❤️"

should be the most beautiful and memorable moment of the entire experience.

Do not simply display text after clicking. Create a proper 3D card-opening animation with realistic depth, smooth movement, golden particles and magical effects.

Make every animation feel polished and intentional.

Build the complete working website, not just a design mockup. Implement all buttons, interactions, animations and features. Test the website on mobile and desktop before considering it complete.

❤️ Final goal: Create something so beautiful that when Aashiqua opens it, she feels like someone has made a little magical corner of the internet just for her. ✨`;

  // ==========================================================================
  // 2. DOM ELEMENTS CACHE
  // ==========================================================================
  const welcomeScreen = document.getElementById('welcome-screen');
  const cardScreen = document.getElementById('card-screen');
  const revealScreen = document.getElementById('reveal-screen');
  
  const openSurpriseBtn = document.getElementById('open-surprise-btn');
  const greetingCard = document.getElementById('greeting-card');
  const cardCover = document.getElementById('card-cover');
  const directOpenBtn = document.getElementById('direct-open-trigger-btn');
  const sparkFireworksBtn = document.getElementById('spark-fireworks-btn');
  const replayExperienceBtn = document.getElementById('replay-experience-btn');

  // Rotating Quotes Elements
  const quoteBadge = document.getElementById('quote-badge');
  const quoteLine1 = document.getElementById('quote-line-1');
  const quoteLine2 = document.getElementById('quote-line-2');
  const quoteClosing = document.getElementById('quote-closing');
  const quoteTextContainer = document.getElementById('quote-text-container');
  const nextWishBtn = document.getElementById('next-wish-btn');

  const copyPromptBtn = document.getElementById('copy-prompt-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const copyToast = document.getElementById('copy-toast');
  const musicBtn = document.getElementById('music-btn');
  const musicBtnText = document.getElementById('music-btn-text');

  const ambientCanvas = document.getElementById('ambient-canvas');
  const ambientCtx = ambientCanvas.getContext('2d');
  const fireworksCanvas = document.getElementById('fireworks-canvas');
  const fireworksCtx = fireworksCanvas.getContext('2d');
  const trailContainer = document.getElementById('trail-container');

  // Secret Link Privacy Elements
  const secretLockOverlay = document.getElementById('secret-lock-overlay');
  const secretKeyInput = document.getElementById('secret-key-input');
  const secretLockForm = document.getElementById('secret-lock-form');
  const lockErrorMsg = document.getElementById('lock-error-msg');
  const unlockBtn = document.getElementById('unlock-btn');

  // Check if opened via secret link or already unlocked
  function checkSecretAccess() {
    if (!secretLockOverlay) return;

    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash.toLowerCase();
    const keyParam = (urlParams.get('key') || urlParams.get('surprise') || urlParams.get('suprise') || urlParams.get('to') || '').toLowerCase();
    const hasSearchKeyword = window.location.search.toLowerCase().includes('surprise') || window.location.search.toLowerCase().includes('suprise') || window.location.search.toLowerCase().includes('aashiqua');
    const isSessionUnlocked = sessionStorage.getItem('diwali_surprise_unlocked') === 'true';

    // Auto-unlock if link has ?key=surprise, ?surprise, ?suprise, #surprise, etc. or session is unlocked
    if (
      keyParam === 'surprise' ||
      keyParam === 'suprise' ||
      keyParam === 'aashiqua' ||
      hasSearchKeyword ||
      hash.includes('surprise') ||
      hash.includes('suprise') ||
      hash.includes('aashiqua') ||
      isSessionUnlocked
    ) {
      unlockWebsite(false);
    }
  }

  function unlockWebsite(withAnimation = true) {
    if (!secretLockOverlay) return;
    sessionStorage.setItem('diwali_surprise_unlocked', 'true');
    secretLockOverlay.classList.add('unlocked');

    if (withAnimation) {
      launchMiniFireworks(width / 2, height * 0.4, 2);
    }
  }

  if (secretLockForm) {
    secretLockForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const entered = (secretKeyInput?.value || '').trim().toLowerCase();
      if (
        entered === 'surprise' ||
        entered === 'suprise' ||
        entered === 'aashiqua' ||
        entered.includes('surprise') ||
        entered.includes('suprise') ||
        entered.includes('aashiqua')
      ) {
        unlockWebsite(true);
      } else {
        if (lockErrorMsg) {
          lockErrorMsg.textContent = 'Enter "surprise" or "aashiqua" to unlock ❤️';
        }
      }
    });
  }

  // Run initial secret link check
  checkSecretAccess();

  // ==========================================================================
  // 10 ROTATING HEARTFELT DIWALI QUOTES FOR AASHIQUA
  // Rotates to the next quote on every site visit, reload, or manual switch!
  // ==========================================================================
  const DIWALI_QUOTES = [
    {
      line1: "May this Diwali fill your life with endless happiness, beautiful memories, countless reasons to smile and all the love your heart deserves.",
      line2: "May your world always shine brighter than a thousand diyas. Keep smiling and keep glowing, because you deserve all the beautiful things in this world. ✨❤️",
      closing: "Wishing you the happiest and most magical Diwali ever! 💗"
    },
    {
      line1: "In a world glowing with festival lights and festive lanterns, the brightest and most breathtaking light will always be your smile.",
      line2: "May this Diwali bring you boundless peace, sweet laughter, and dreams that bloom into reality. You make every ordinary moment feel like a celebration. ✨❤️",
      closing: "Wishing my favorite person the most radiant Diwali! 💗"
    },
    {
      line1: "Just like the warm golden flame of a diya that dances steadily in the evening breeze, my warmest wishes are forever with you.",
      line2: "May this festive season bless you with sweet serenity, immense success, and a heart brimming with unshakeable joy. Never forget how truly special you are. ✨❤️",
      closing: "May your Diwali be as deeply captivating as your heart! 💗"
    },
    {
      line1: "Every diya lit tonight carries a silent whisper of gratitude for having someone as pure, lovely, and enchanting as you in this world.",
      line2: "May the divine warmth of this festive night wrap around you, chasing away every shadow and illuminating your path with endless possibilities. ✨❤️",
      closing: "Sending you endless love and sparkling Diwali blessings! 💗"
    },
    {
      line1: "They say Diwali is the triumph of light over darkness, but to me, your gentle laughter is all the illumination this universe could ever need.",
      line2: "May you walk upon paths paved with golden opportunities, surrounded by warmth, true joy, and people who cherish you as much as you deserve. ✨❤️",
      closing: "Have a wonderfully sweet and memorable Diwali, Aashiqua! 💗"
    },
    {
      line1: "May the festive sweets bring sweetness to your days, the rangoli colors bring vibrancy to your dreams, and the diyas guide your footsteps toward happiness.",
      line2: "You deserve a lifetime of starlight, gentle breezes, peaceful mornings, and moments that make your heart skip a beat with sheer delight. ✨❤️",
      closing: "Wishing you a Diwali wrapped in golden memories! 💗"
    },
    {
      line1: "Under this moonlit festival sky, I wish that every sparkler ignited reminds you of how effortlessly you brighten up every room you walk into.",
      line2: "May you conquer every secret goal you've dreamed of, and may peace and prosperity always call your heart home. Keep glowing endlessly. ✨❤️",
      closing: "Forever cheering for your happiness — Happy Diwali! 💗"
    },
    {
      line1: "No firework in the midnight sky could ever match the sparkle in your eyes when you smile from the depths of your heart.",
      line2: "May this Diwali mark the dawn of the most magical chapter of your life, filled with serendipity, tenderness, sweet surprises, and true fulfillment. ✨❤️",
      closing: "To the sweetest soul, wishing you the happiest Diwali! 💗"
    },
    {
      line1: "May Goddess Lakshmi bless your life with boundless abundance, and may the universe conspire to give you back all the kindness you have given to others.",
      line2: "Thank you for being the calm, radiant grace in an otherwise hurried world. May your days ahead shine with pure gold and stardust. ✨❤️",
      closing: "Wishing you a divine, magical, and unforgettable Diwali! 💗"
    },
    {
      line1: "When the festive night grows quiet and the diyas flicker softly, know that you are deeply admired and cherished, today and for all Diwalis to come.",
      line2: "May your journey be gentle, your laughter be frequent, and your heart be eternally full of contentment and love. You are pure magic. ✨❤️",
      closing: "Happy Diwali with all my heart, Aashiqua! 💗"
    }
  ];

  // Rotate quotes across sessions using localStorage
  let currentQuoteIdx = 0;
  try {
    const savedIdx = localStorage.getItem('aashiqua_diwali_quote_idx');
    if (savedIdx !== null) {
      currentQuoteIdx = parseInt(savedIdx, 10);
      if (isNaN(currentQuoteIdx) || currentQuoteIdx < 0 || currentQuoteIdx >= DIWALI_QUOTES.length) {
        currentQuoteIdx = 0;
      }
    }
    // Advance to next index for the NEXT page load/visit
    const nextIdx = (currentQuoteIdx + 1) % DIWALI_QUOTES.length;
    localStorage.setItem('aashiqua_diwali_quote_idx', nextIdx.toString());
  } catch (e) {
    currentQuoteIdx = Math.floor(Math.random() * DIWALI_QUOTES.length);
  }

  function renderQuote(index, animated = false) {
    const quote = DIWALI_QUOTES[index];
    if (!quote || !quoteLine1) return;

    if (animated && quoteTextContainer) {
      quoteTextContainer.classList.add('quote-fade-out');
      setTimeout(() => {
        quoteLine1.textContent = quote.line1;
        quoteLine2.textContent = quote.line2;
        quoteClosing.textContent = quote.closing;
        if (quoteBadge) quoteBadge.textContent = `💌 Wish ${index + 1} of ${DIWALI_QUOTES.length}`;
        quoteTextContainer.classList.remove('quote-fade-out');
      }, 300);
    } else {
      quoteLine1.textContent = quote.line1;
      quoteLine2.textContent = quote.line2;
      quoteClosing.textContent = quote.closing;
      if (quoteBadge) quoteBadge.textContent = `💌 Wish ${index + 1} of ${DIWALI_QUOTES.length}`;
    }
  }

  // Render current rotated quote
  renderQuote(currentQuoteIdx, false);

  // Next Wish button listener
  if (nextWishBtn) {
    nextWishBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentQuoteIdx = (currentQuoteIdx + 1) % DIWALI_QUOTES.length;
      renderQuote(currentQuoteIdx, true);
      spawnSparkleBurstAtElement(nextWishBtn);
      if (audioCtx && isMusicPlaying) {
        playHarmonicTone(659.25, 1.2, 'sine', 0.1);
      }
    });
  }

  // Application State
  let isCardOpened = false;
  let isMusicPlaying = false;
  let copyTimeoutId = null;
  let toastTimeoutId = null;

  // Screen Dimensions
  let width = (ambientCanvas.width = fireworksCanvas.width = window.innerWidth);
  let height = (ambientCanvas.height = fireworksCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = ambientCanvas.width = fireworksCanvas.width = window.innerWidth;
    height = ambientCanvas.height = fireworksCanvas.height = window.innerHeight;
  });

  // ==========================================================================
  // 3. FAIRY LIGHTS POPULATION
  // ==========================================================================
  const lightsRow = document.getElementById('lights-row');
  if (lightsRow) {
    const bulbColors = ['#ffd700', '#ff99ac', '#ffe28a', '#ff4d6d', '#ffbe0b', '#f72585'];
    const bulbCount = Math.floor(window.innerWidth / 36);
    lightsRow.innerHTML = '';
    for (let i = 0; i < bulbCount; i++) {
      const bulb = document.createElement('div');
      bulb.className = 'fairy-bulb';
      const color = bulbColors[i % bulbColors.length];
      bulb.style.setProperty('--bulb-color', color);
      bulb.style.animationDelay = `${(i * 0.22) % 2.5}s`;
      lightsRow.appendChild(bulb);
    }
  }

  // ==========================================================================
  // 4. AMBIENT FESTIVE AUDIO SYNTHESIZER (WEB AUDIO API)
  // No external broken links or copyright blocks - 100% reliable anywhere!
  // ==========================================================================
  let audioCtx = null;
  let masterGain = null;
  let synthInterval = null;

  function initAudio() {
    if (audioCtx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioCtx = new AudioContextClass();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.3, audioCtx.currentTime);

    // Warm Low-pass Filter for soothing festive warmth
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, audioCtx.currentTime);

    masterGain.connect(filter);
    filter.connect(audioCtx.destination);
  }

  // Harmonic frequencies based on Indian Classical Raag Yaman / Bhupali (Sa, Re, Ga, Pa, Dha)
  const scaleFreqs = [
    130.81, // C3 (Sa drone)
    196.00, // G3 (Pa drone)
    261.63, // C4 (Sa)
    293.66, // D4 (Re)
    329.63, // E4 (Ga)
    392.00, // G4 (Pa)
    440.00, // A4 (Dha)
    523.25, // C5 (High Sa)
    587.33, // D5 (High Re)
    659.25  // E5 (High Ga)
  ];

  function playHarmonicTone(freq, duration = 2.4, type = 'sine', volume = 0.08) {
    if (!audioCtx || !isMusicPlaying) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Soft envelope (gentle attack, lingering decay like a chime/sitar)
      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(volume, audioCtx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context policy guard
    }
  }

  function startAmbientMelody() {
    if (synthInterval) clearInterval(synthInterval);

    // Initial warm drone
    playHarmonicTone(130.81, 4.0, 'triangle', 0.09);
    playHarmonicTone(196.00, 4.0, 'sine', 0.07);

    let step = 0;
    const melodyPattern = [2, 3, 4, 6, 5, 4, 7, 6, 8, 4, 3, 2];

    synthInterval = setInterval(() => {
      if (!isMusicPlaying) return;

      // Base drone pulse every 4 beats
      if (step % 4 === 0) {
        playHarmonicTone(130.81, 3.5, 'triangle', 0.08);
        playHarmonicTone(196.00, 3.5, 'sine', 0.06);
      }

      // Bell chime melody note
      const noteIdx = melodyPattern[step % melodyPattern.length];
      const freq = scaleFreqs[noteIdx] || 329.63;
      playHarmonicTone(freq, 2.2, 'sine', 0.1);

      // Occasional gentle sparkle overtone
      if (step % 3 === 0) {
        setTimeout(() => {
          playHarmonicTone(freq * 1.5, 1.8, 'sine', 0.04);
        }, 320);
      }

      step++;
    }, 780);
  }

  function toggleMusic() {
    initAudio();
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isMusicPlaying = !isMusicPlaying;

    if (isMusicPlaying) {
      musicBtn.classList.add('playing');
      musicBtnText.textContent = 'Music: ON 🎵';
      startAmbientMelody();
    } else {
      musicBtn.classList.remove('playing');
      musicBtnText.textContent = 'Music: OFF 🔇';
      if (synthInterval) clearInterval(synthInterval);
    }
  }

  if (musicBtn) {
    musicBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusic();
    });
  }

  // ==========================================================================
  // 5. ONE-CLICK PROMPT COPY BUTTON IMPLEMENTATION
  // ==========================================================================
  async function copyPromptToClipboard() {
    try {
      let copied = false;

      // Modern Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(COMPLETE_WEBSITE_PROMPT);
        copied = true;
      } else {
        // Fallback for older browsers or insecure contexts
        const textarea = document.createElement('textarea');
        textarea.value = COMPLETE_WEBSITE_PROMPT;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        textarea.style.top = '0';
        textarea.style.left = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        copied = document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      if (copied) {
        // Button visual feedback
        copyPromptBtn.classList.add('copied');
        copyBtnText.textContent = 'Copied Successfully! 💗';

        // Toast feedback
        showCopyToast('✨ Prompt copied successfully! ❤️');

        // Sparkle burst at button
        spawnSparkleBurstAtElement(copyPromptBtn);

        // Reset after 3.2 seconds
        clearTimeout(copyTimeoutId);
        copyTimeoutId = setTimeout(() => {
          copyPromptBtn.classList.remove('copied');
          copyBtnText.textContent = 'Copy Website Prompt ✨';
        }, 3200);
      } else {
        throw new Error('Copy command returned false');
      }
    } catch (err) {
      console.warn('Clipboard copy error:', err);
      showCopyToast('⚠️ Please allow clipboard permissions to copy!');
    }
  }

  function showCopyToast(message) {
    if (!copyToast) return;
    const msgSpan = copyToast.querySelector('.toast-msg');
    if (msgSpan) msgSpan.textContent = message;

    copyToast.classList.add('show');
    clearTimeout(toastTimeoutId);
    toastTimeoutId = setTimeout(() => {
      copyToast.classList.remove('show');
    }, 3500);
  }

  function spawnSparkleBurstAtElement(elem) {
    const rect = elem.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 18; i++) {
      createSparkle(
        centerX + (Math.random() - 0.5) * rect.width,
        centerY + (Math.random() - 0.5) * rect.height,
        Math.random() > 0.4 ? '✨' : '💖'
      );
    }
  }

  if (copyPromptBtn) {
    copyPromptBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyPromptToClipboard();
    });
  }

  // ==========================================================================
  // 6. SCREEN NAVIGATION FLOW
  // ==========================================================================
  function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove('active-screen');
    fromScreen.classList.add('hidden-screen');

    setTimeout(() => {
      toScreen.classList.remove('hidden-screen');
      toScreen.classList.add('active-screen');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 350);
  }

  // Landing "Open Your Surprise ✨" button
  if (openSurpriseBtn) {
    openSurpriseBtn.addEventListener('click', () => {
      // Start music softly if not yet started
      if (!isMusicPlaying) {
        toggleMusic();
      }
      switchScreen(welcomeScreen, cardScreen);
      // Small celebratory burst
      launchMiniFireworks(width / 2, height * 0.45, 1);
    });
  }

  // ==========================================================================
  // 7. INTERACTIVE 3D GREETING CARD (DOUBLE-CLICK & TRIPLE-CLICK / TAP)
  // ==========================================================================
  let clickCount = 0;
  let clickTimer = null;
  let lastTouchTime = 0;
  let touchCount = 0;

  function triggerCardOpenAnimation() {
    if (isCardOpened) return;
    isCardOpened = true;

    // Flip the 3D card open
    greetingCard.classList.add('opened');

    // Burst golden particles & hearts around card
    const cardRect = greetingCard.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    for (let i = 0; i < 40; i++) {
      setTimeout(() => {
        createSparkle(
          cardCenterX + (Math.random() - 0.5) * 200,
          cardCenterY + (Math.random() - 0.5) * 200,
          ['✨', '💖', '🪔', '⭐', '❤️'][Math.floor(Math.random() * 5)]
        );
      }, i * 20);
    }

    // Play a delightful chime
    if (audioCtx && isMusicPlaying) {
      playHarmonicTone(523.25, 2.0, 'sine', 0.15);
      setTimeout(() => playHarmonicTone(659.25, 2.5, 'sine', 0.15), 180);
      setTimeout(() => playHarmonicTone(783.99, 3.0, 'sine', 0.18), 360);
    }

    // Celebrate with launch of fireworks
    launchFireworksCascade(5);

    // Smooth transition to Big Reveal Screen
    setTimeout(() => {
      switchScreen(cardScreen, revealScreen);
      startRevealSequence();
    }, 1450);
  }

  // Handle Desktop Clicks (Double-Click & Triple-Click)
  if (greetingCard) {
    greetingCard.addEventListener('click', (e) => {
      clickCount++;
      clearTimeout(clickTimer);

      if (clickCount >= 2) {
        // Both double-click and triple-click trigger open!
        triggerCardOpenAnimation();
        clickCount = 0;
      } else {
        clickTimer = setTimeout(() => {
          clickCount = 0;
        }, 420);
      }
    });

    // Handle Mobile / Touch Gestures (Double-Tap & Triple-Tap)
    greetingCard.addEventListener('touchstart', (e) => {
      const now = Date.now();
      const timeDiff = now - lastTouchTime;

      if (timeDiff < 450 && timeDiff > 0) {
        touchCount++;
      } else {
        touchCount = 1;
      }

      lastTouchTime = now;

      if (touchCount >= 2) {
        // Double-tap or triple-tap detected
        e.preventDefault();
        triggerCardOpenAnimation();
        touchCount = 0;
      }
    }, { passive: false });
  }

  // Fallback single-click button for guaranteed accessibility
  if (directOpenBtn) {
    directOpenBtn.addEventListener('click', () => {
      triggerCardOpenAnimation();
    });
  }

  // ==========================================================================
  // 8. THE BIG SURPRISE REVEAL ANIMATIONS
  // Staggered line-by-line reveal of Aashiqua's name & heartfelt message
  // ==========================================================================
  function startRevealSequence() {
    const revealSteps = document.querySelectorAll('.reveal-step');
    revealSteps.forEach((step, idx) => {
      step.classList.remove('revealed');
      setTimeout(() => {
        step.classList.add('revealed');

        // Extra fireworks burst when her name reveals!
        if (step.classList.contains('aashiqua-hero-block')) {
          launchFireworksCascade(8);
        }
      }, (idx + 1) * 650);
    });
  }

  // Secondary Action: Launch Fireworks button
  if (sparkFireworksBtn) {
    sparkFireworksBtn.addEventListener('click', () => {
      launchFireworksCascade(7);
      if (audioCtx && isMusicPlaying) {
        playHarmonicTone(440, 1.5, 'triangle', 0.12);
      }
    });
  }

  // Secondary Action: Replay Experience
  if (replayExperienceBtn) {
    replayExperienceBtn.addEventListener('click', () => {
      isCardOpened = false;
      greetingCard.classList.remove('opened');
      // Advance to next romantic quote for the new replay!
      currentQuoteIdx = (currentQuoteIdx + 1) % DIWALI_QUOTES.length;
      renderQuote(currentQuoteIdx, false);
      switchScreen(revealScreen, welcomeScreen);
    });
  }

  // Interactive Diyas on Altar
  const interactiveDiyas = document.querySelectorAll('.interactive-diya');
  interactiveDiyas.forEach((diya) => {
    diya.addEventListener('click', (e) => {
      const rect = diya.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      for (let i = 0; i < 15; i++) {
        createSparkle(
          cx + (Math.random() - 0.5) * 60,
          cy + (Math.random() - 0.5) * 60,
          ['✨', '💛', '🔥', '❤️'][Math.floor(Math.random() * 4)]
        );
      }

      if (audioCtx && isMusicPlaying) {
        playHarmonicTone(587.33, 1.8, 'sine', 0.12);
      }
    });
  });

  // ==========================================================================
  // 9. AMBIENT PARTICLES CANVAS ENGINE (STARS, GLITTER, FIREFLIES, PETALS)
  // ==========================================================================
  const stars = [];
  const fireflies = [];
  const petals = [];
  const goldenDust = [];

  // Generate Twinkling Stars
  const starCount = Math.min(80, Math.floor(width / 16));
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.75,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2
    });
  }

  // Generate Glowing Fireflies
  const fireflyCount = Math.min(22, Math.floor(width / 50));
  for (let i = 0; i < fireflyCount; i++) {
    fireflies.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 1.2,
      color: Math.random() > 0.3 ? '#ffd700' : '#ff758c',
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      alpha: Math.random() * 0.8 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.015
    });
  }

  // Generate Falling Rose and Marigold Petals
  const petalCount = Math.min(24, Math.floor(width / 45));
  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 9 + 6,
      vx: (Math.random() - 0.5) * 0.8,
      vy: Math.random() * 1.2 + 0.6,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      color: Math.random() > 0.45 ? '#ff758c' : '#ffa500',
      opacity: Math.random() * 0.6 + 0.35
    });
  }

  // Generate Floating Golden Dust
  const dustCount = Math.min(35, Math.floor(width / 30));
  for (let i = 0; i < dustCount; i++) {
    goldenDust.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.5,
      vy: -Math.random() * 0.4 - 0.1,
      vx: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function renderAmbient() {
    ambientCtx.clearRect(0, 0, width, height);

    // 1. Draw Twinkling Stars
    for (const star of stars) {
      star.phase += star.speed;
      const currentAlpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(star.phase));
      ambientCtx.beginPath();
      ambientCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ambientCtx.fillStyle = `rgba(255, 248, 220, ${currentAlpha})`;
      ambientCtx.fill();
    }

    // 2. Draw Golden Dust
    for (const dust of goldenDust) {
      dust.y += dust.vy;
      dust.x += dust.vx;

      if (dust.y < -10) {
        dust.y = height + 10;
        dust.x = Math.random() * width;
      }

      ambientCtx.beginPath();
      ambientCtx.arc(dust.x, dust.y, dust.radius, 0, Math.PI * 2);
      ambientCtx.fillStyle = `rgba(255, 215, 0, ${dust.alpha})`;
      ambientCtx.shadowBlur = 6;
      ambientCtx.shadowColor = '#ffd700';
      ambientCtx.fill();
      ambientCtx.shadowBlur = 0;
    }

    // 3. Draw Glowing Fireflies
    for (const fly of fireflies) {
      fly.x += fly.vx;
      fly.y += fly.vy;
      fly.alpha = 0.3 + 0.6 * (0.5 + 0.5 * Math.sin(Date.now() * 0.002 * fly.pulseSpeed * 100));

      if (fly.x < -20) fly.x = width + 20;
      if (fly.x > width + 20) fly.x = -20;
      if (fly.y < -20) fly.y = height + 20;
      if (fly.y > height + 20) fly.y = -20;

      // Glow halo
      const grad = ambientCtx.createRadialGradient(fly.x, fly.y, 0, fly.x, fly.y, fly.radius * 4);
      grad.addColorStop(0, fly.color);
      grad.addColorStop(1, 'transparent');

      ambientCtx.beginPath();
      ambientCtx.arc(fly.x, fly.y, fly.radius * 4, 0, Math.PI * 2);
      ambientCtx.fillStyle = grad;
      ambientCtx.globalAlpha = fly.alpha;
      ambientCtx.fill();

      // Core
      ambientCtx.beginPath();
      ambientCtx.arc(fly.x, fly.y, fly.radius, 0, Math.PI * 2);
      ambientCtx.fillStyle = '#fff';
      ambientCtx.fill();
      ambientCtx.globalAlpha = 1;
    }

    // 4. Draw Falling Rose & Marigold Petals
    for (const petal of petals) {
      petal.y += petal.vy;
      petal.x += petal.vx + Math.sin(petal.y * 0.015) * 0.4;
      petal.rotation += petal.rotSpeed;

      if (petal.y > height + 20) {
        petal.y = -20;
        petal.x = Math.random() * width;
      }

      ambientCtx.save();
      ambientCtx.translate(petal.x, petal.y);
      ambientCtx.rotate((petal.rotation * Math.PI) / 180);
      ambientCtx.globalAlpha = petal.opacity;

      ambientCtx.beginPath();
      ambientCtx.ellipse(0, 0, petal.size, petal.size * 0.55, 0, 0, Math.PI * 2);
      ambientCtx.fillStyle = petal.color;
      ambientCtx.fill();
      ambientCtx.restore();
    }

    requestAnimationFrame(renderAmbient);
  }

  renderAmbient();

  // ==========================================================================
  // 10. FIREWORKS SIMULATOR ENGINE (DIWALI CELEBRATION)
  // ==========================================================================
  const fireworks = [];
  const fireworkParticles = [];
  const festiveColors = [
    '#ffd700', // Gold
    '#ff6b8b', // Rose Pink
    '#fff176', // Light Gold
    '#ff9e00', // Amber
    '#ea80fc', // Lavender Violet
    '#ffffff'  // Sparkling White
  ];

  class FireworkRocket {
    constructor(startX, startY, targetX, targetY, color) {
      this.x = startX;
      this.y = startY;
      this.targetX = targetX;
      this.targetY = targetY;
      this.color = color;
      this.speed = 4.5;
      this.angle = Math.atan2(targetY - startY, targetX - startX);
      this.vx = Math.cos(this.angle) * this.speed;
      this.vy = Math.sin(this.angle) * this.speed;
      this.distanceToTarget = Math.hypot(targetX - startX, targetY - startY);
      this.distanceTraveled = 0;
      this.trail = [];
    }

    update() {
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > 5) this.trail.shift();

      this.x += this.vx;
      this.y += this.vy;
      this.distanceTraveled = Math.hypot(this.x - this.trail[0].x, this.y - this.trail[0].y);

      return this.y <= this.targetY;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(this.trail[0]?.x || this.x, this.trail[0]?.y || this.y);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }
  }

  class FireworkParticle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 1.5;
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.015;
      this.gravity = 0.08;
      this.friction = 0.96;
    }

    update() {
      this.vx *= this.friction;
      this.vy *= this.friction;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
      return this.alpha > 0;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  function launchMiniFireworks(x, y, count = 1) {
    for (let c = 0; c < count; c++) {
      const targetX = x + (Math.random() - 0.5) * 160;
      const targetY = y + (Math.random() - 0.5) * 100;
      const color = festiveColors[Math.floor(Math.random() * festiveColors.length)];
      fireworks.push(new FireworkRocket(targetX, height, targetX, targetY, color));
    }
  }

  function explodeRocket(x, y, color) {
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      fireworkParticles.push(new FireworkParticle(x, y, color));
    }
  }

  function launchFireworksCascade(rounds = 5) {
    for (let r = 0; r < rounds; r++) {
      setTimeout(() => {
        const randX = width * 0.15 + Math.random() * (width * 0.7);
        const randY = height * 0.15 + Math.random() * (height * 0.4);
        launchMiniFireworks(randX, randY, 1);
      }, r * 280);
    }
  }

  function renderFireworks() {
    fireworksCtx.clearRect(0, 0, width, height);

    // Update & draw rockets
    for (let i = fireworks.length - 1; i >= 0; i--) {
      const rocket = fireworks[i];
      const reached = rocket.update();
      rocket.draw(fireworksCtx);
      if (reached) {
        explodeRocket(rocket.x, rocket.y, rocket.color);
        fireworks.splice(i, 1);
      }
    }

    // Update & draw explosion particles
    for (let i = fireworkParticles.length - 1; i >= 0; i--) {
      const p = fireworkParticles[i];
      const alive = p.update();
      if (alive) {
        p.draw(fireworksCtx);
      } else {
        fireworkParticles.splice(i, 1);
      }
    }

    requestAnimationFrame(renderFireworks);
  }

  renderFireworks();

  // ==========================================================================
  // 11. INTERACTIVE MOUSE & TOUCH SPARK TRAIL
  // ==========================================================================
  function createSparkle(x, y, symbol = '✨') {
    if (!trailContainer) return;
    const spark = document.createElement('div');
    spark.className = 'trail-sparkle';
    spark.textContent = symbol;
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.fontSize = `${Math.random() * 12 + 14}px`;
    trailContainer.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 900);
  }

  let lastSparkleTime = 0;
  window.addEventListener('pointermove', (e) => {
    const now = Date.now();
    if (now - lastSparkleTime > 75) {
      lastSparkleTime = now;
      if (Math.random() > 0.4) {
        createSparkle(e.clientX, e.clientY, Math.random() > 0.5 ? '✨' : '💖');
      }
    }
  });

  // Touch on background triggers playful mini sparks
  window.addEventListener('click', (e) => {
    // Only if not clicking buttons or card
    if (!e.target.closest('button') && !e.target.closest('.greeting-card-3d')) {
      createSparkle(e.clientX, e.clientY, '✨');
      if (Math.random() > 0.6) {
        launchMiniFireworks(e.clientX, e.clientY, 1);
      }
    }
  });

  console.log('✨ Magical Diwali Surprise for Aashiqua successfully loaded! ❤️');
})();
