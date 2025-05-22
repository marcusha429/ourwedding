emailjs.init('uslz-38maofgET7_g');

const translations = {
  en: {
    // —— Main ——
    lovestory: "Love Story",
    ourschedule: "Our Schedule",
    weddinggallery: "Wedding Gallery",
    yourwish: "Your Wish",

    // —— Countdown Timer ——
    mins: "Mins",
    days: "Days",
    hours: "Hrs",
    secs: "Secs",

    // —— Wish Form ——
    yourname: "Your Name",
    yourmessage: "Your Message",
    sendusyourwish: "Send us your wish",
    message: "We cherish your heartfelt wishes. Please leave your blessing below.",
    send: "Send Wish",
    back: "Back",
    yourgift: "Your Gift",

    // —— Our Schedule Form ——
    invitation: "Reception Invitation",
    timetitle: "Time",
    addresstitle: "Location",
    churchaddress: "Join us at<br> " +
      "Tan Chi Linh Church<br>" +
      "6/25 Pham Van Hai, Ward 3, Tan Binh District",
    churchtime: "June 28th, 2025<br>" +
      "4:00 PM (GMT+7)",
    quote: "&quotWe become what we love and who we love shapes what we become.&quot<br>" +
      "— St. Clare of Assisi —",
    weddingdetails: "Wedding Details",
    restauranttime: "June 28th, 2025<br>" +
      "6:00 PM (GMT+7)<br><br>",
    restaurantaddress: "Asiana Plaza Convention Center<br>" +
      "Alexa Hall - 10th Floor<br>" +
      "284–286 Vuon Lai, Phu Tho Hoa, Tan Phu District<br>",
    gettingthere: "Getting There",
    drinks: "Drinks",
    alldrinks: "• Coke • Beer • Water",
    goodeats: "Good Eats",
    allfoods: "• Roasted Chicken & Pumpkin Salad<br>" +
      " • Oven-Baked Pork Rolls with Kimchi<br>" +
      " • Fish Maw Soup with Black Moss<br>" +
      " • Seafood in Pumpkin Sauce<br>" +
      " • Roasted Chicken with Miso Sauce & Chef's Special Sticky Rice<br>" +
      " • Teochew-Style Seafood Hot Pot with Steamed Noodles<br>" +
      " • Sweet Red Date Soup with Palm Seeds",

    // —— Meet The Bride Form ——
    thebride: "THE BRIDE",
    thegroom: "THE GROOM",
    ourstory: "Our Story",
    firstsentence: "Seven years woven tightly.",
    secondsentence: "I greets the sun in Vietnam as he whispers goodnight from the U.S.",
    thirdsentence: "Our love, tested by miles and strengthened by patience, waits joyfully for the day we'll finally share every sunrise side by side.",
    lastsentence: "And our new chapter begins...",
    ourvows: "Our Vows",
    togetherwithourfamilies: "Together with our families,",
    inviteat: "invite you to celebrate at Home.",
    meettime: "June 28th, 2025<br />" +
      "1:00 PM (GMT+7)",
    lastword: "We look forward to sharing this joyful moment!",
    chatBride0: "Hey darling, I want to tell you something.",
    chatGroom0: "I'm listening to you darling, I also have something to tell you.",
    chatGroom1: "7 years together taught me that love isn't just the beautiful moments but sticking together hrough the ordinary days no matter how far apart we are.<br>"+
                "From now on, I promise to always be your partner, to support your dream and share all of my bright and blue days to you.<br>" + 
                "And after that, we're gonna grow old beside each other with laughter and honesty. 🖤",
    chatBride1: "Darling, from the first time I saw you in the Linear Algebra class at Sai Gon University, I think that I love you. Even though most of the time we couldn't be together, we were still remaining connected and helped each other. And finally, the promise you gave me in the summer of 2019 has come true, congratulations on getting me home. We will continue to make more promises, more plans, and more dreams together. I love you, no matter if it's the first day or the last day. 🩷"
  },
  vi: {
    // —— Main ——
    lovestory: "Chuyện Chúng Mình",
    ourschedule: "Lịch Trình",
    weddinggallery: "Gallery",
    yourwish: "Gửi Lời Chúc",

    // —— Countdown Timer ——
    mins: "Phút",
    days: "Ngày",
    hours: "Giờ",
    secs: "Giây",

    // —— Wish Form ——
    yourname: "Hãy ghi tên của bạn vào đây nhé",
    yourmessage: "Hãy ghi lời chúc của bạn vào đây",
    sendusyourwish: "Lời Chúc Mừng",
    message: "Hãy để lại lời chúc mừng của bạn bên dưới. Xin gửi lời cảm ơn sâu sắc đến bạn. ",
    send: "Gửi",
    back: "Quay Lại",
    yourgift: "Quà Mừng Cưới",

    // —— Meet The Bride Form ——
    invitation: "Lời Mời Thân Mật",

    // —— Church Form ——
    timetitle: "Thời Gian",
    addresstitle: "Địa Điểm",
    churchaddress: "Hôn lễ được cử hành tại<br>" +
      "Thánh Đường Giáo Xứ Tân Chí Linh<br>" +
      "6/25 Phạm Văn Hai, Phường 3, Quận Tân Bình",
    churchtime: "28.06.2025<br>" +
      "Vào lúc 16:00",
    quote: " &quotChúng ta sẽ trở thành những gì chúng ta yêu thương và người chúng ta yêu thương sẽ định hình nên con người chúng ta.&quot<br>" +
      "— Thánh Clara, Đồng Trinh —",

    // —— Restaurant Form ——
    weddingdetails: "Lễ Cưới",
    restauranttime: "28.06.2025<br>" +
      "Vào lúc 18:00<br><br>",
    restaurantaddress: "Asiana Plaza<br>" +
      "Sảnh Alexa - Tầng 10<br>" +
      "284–286 Vườn Lài, Phú Thọ Hòa, Tân Phú<br>",
    gettingthere: "Bản Đồ",
    drinks: "Thức Uống",
    alldrinks: "• Nước Ngọt • Bia • Nước Suối",
    goodeats: "Món Ăn",
    allfoods: "• Xà Lách Bí Đỏ - Gà Nướng<br>" +
      " • Heo Cuộn Kim Chi Đút Lò<br>" +
      " • Súp Bóng Cá Tóc Tiên<br>" +
      " • Hải Sản Xốt Bí Đỏ<br>" +
      " • Gà Quay Xốt Miso - Xôi Đặc Biệt<br>" +
      " • Lẩu Hải Sản Triều Châu - Mì Hấp<br>" +
      " • Chè Táo Đỏ Hạt Đác",

    // —— Meet The Bride Form ——
    thebride: "CÔ DÂU",
    thegroom: "CHÚ RỂ",
    ourstory: "Một Hành Trình Dài",
    firstsentence: "Bảy năm bên nhau.",
    secondsentence: "Tớ đón bình minh ở Việt Nam cũng là lúc anh ấy nhắn chúc ngủ ngon từ Mỹ.",
    thirdsentence: "Tình yêu của tụi mình, bị thách thức bởi khoảng cách và bền bỉ cùng với sự kiên nhẫn, và giờ đây cùng nhau chờ đợi ngày tụi mình sẽ về  chung một nhà.",
    lastsentence: "Và một bước ngoặt mới của cuộc đời đã bắt đầu...",
    invitation: "Trân Trọng Kính Mời",
    togetherwithourfamilies: "Đến dự buổi tiệc cùng với gia đình chúng tôi,",
    inviteat: "Hôn lễ được cử hành tại Tư Gia",
    meettime: "Ngày 28 tháng 6 năm 2025<br />" +
      "Vào lúc 13:00",
    lastword: " ",
    ourvows: "Lời Hứa",
    chatBride0: "Chồng iu, em có này muốn nói nè.",
    chatGroom0: "Sao nè vợ iu, anh cũng có này muốn nói nè.",
    chatGroom1: "7 năm bên nhau đã cho anh biết rằng tình yêu không chỉ là những lúc hạnh phúc, mà là cả những lúc bên nhau dù cách này hay cách khác, dù ở cách xa nhau thế nào.<br>"+
                "Từ hôm nay, anh sẽ trở thành người chồng, bên em và ủng hộ ước mơ của em, và cũng như chia sẻ hết những ngày vui buồn cùng em.<br>" + 
                "Và sau đó nữa, chúng ta sẽ cùng già đi với nhau trong những tiếng cười và sự chân thành. 🖤",
    chatBride1: "Chồng iu ơi, lần đầu tiên nhìn thấy chồng iu ngồi học môn đại số tuyến tính ở đại học Sài Gòn là em đã thích anh rồi. Dù hầu hết thời gian quen nhau mình đều không thể bên cạnh nhau nhưng em cảm thấy tụi mình vẫn luôn đồng hành cùng nhau, giúp đỡ lẫn nhau. Và cuối cùng thì lời hứa của anh vào mùa hè năm 2019 đã thành hiện thực, chúc mừng chồng iu sắp lấy được em về nhà nha.  Tụi mình sẽ lại cùng nhau thực hiện nhiều lời hứa, nhiều dự định, nhiều ước mơ hơn nữa. Em yêu anh, dù là ngày đầu tiên hay sau này. 🩷"
  }
};

// ─── Send Messages Setup (EmailJS) ───────────────────────────
function sendWish() {
  const nameEl = document.getElementById("name");
  const wishEl = document.getElementById("wish");
  const name = nameEl.value.trim();
  const wish = wishEl.value.trim();

  if (!name || !wish) {
    alert("Please fill out both your name and your wish!");
    return;
  }

  const templateParams = {
    user_name: name,
    message: wish
  };

  emailjs.send('service_g7g3w0g', 'template_xyez4a7', templateParams)
    .then(response => {
      console.log('SUCCESS:', response.status, response.text);
      alert("Thank you! Your wish has been sent.");
      closeWishForm();
      nameEl.value = "";
      wishEl.value = "";
    })
    .catch(err => {
      console.error('FAILED to send wish:', err);
      alert("Oops—something went wrong. Please try again later.");
    });
}

// ─── Music Setup ────────────────────────────────────────────
const musicList = [
  'music/summerisforfallinginlove.mp3',
  'music/thoseeyes.mp3',
  'music/mylovemineallmine.mp3',
  'music/ithinktheycallthislove.mp3',
  'music/blue.mp3',
  'music/canttakemyeyesoffyou.mp3',
  'music/canihavethedaywithyou.mp3',
  'music/universe.mp3',
  'music/fallinginlove.mp3',
  'music/lucky.mp3',
];
let currentAudio = null, isPlaying = false;

function playRandomMusic() {
  if (isPlaying) return;
  const idx = Math.floor(Math.random() * musicList.length);
  currentAudio = new Audio(musicList[idx]);
  currentAudio.volume = 0.5;
  currentAudio.addEventListener('ended', () => {
    const fullSrc = currentAudio.src;
    const idx = musicList.findIndex(
      song => fullSrc.endsWith(song)
    );
    const next = (idx + 1) % musicList.length;
    currentAudio.src = musicList[next];
    currentAudio.play().catch(() => { });
  });
  currentAudio.play()
    .then(() => {
      isPlaying = true;
      document.getElementById('musicToggle').textContent = '🎵';
    })
    .catch(() => {
      isPlaying = false;
      document.getElementById('musicToggle').textContent = '🔇';
      document.addEventListener('click', playRandomMusic, { once: true });
    });
}

function toggleMusic() {
  if (!currentAudio) {
    playRandomMusic();
    return;
  }
  if (currentAudio.paused) {
    currentAudio.play().then(() => {
      isPlaying = true;
      document.getElementById('musicToggle').textContent = '🎵';
    }).catch(() => { });
  } else {
    currentAudio.pause();
    isPlaying = false;
    document.getElementById('musicToggle').textContent = '🔇';
  }
}

// ─── Countdown ──────────────────────────────────────────────
function updateCountdown() {
  const target = new Date("June 28, 2025 13:00:00 GMT+0700").getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    document.querySelector(".countdown-timer").innerHTML =
      "<div class='countdown-box'><div class='countdown-number'>It's time!</div></div>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hrs).padStart(2, "0");
  document.getElementById("minutes").textContent = String(mins).padStart(2, "0");
  document.getElementById("seconds").textContent = String(sec).padStart(2, "0");
}

// ─── Language Picker ────────────────────────────────────────
function applyLanguage(lang) {
  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  // html content
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// ─── Form Close Helpers ────────────────────────────────────
function closeWishForm() { document.getElementById("wish-form-container").style.display = "none"; document.querySelector('.grid-item.active')?.classList.remove('active'); }
function closeScheduleForm() { document.getElementById("schedule-form-container").style.display = "none"; document.querySelector('.grid-item.active')?.classList.remove('active'); }
function closeHomeForm() { document.getElementById("home-form-container").style.display = "none"; document.querySelector('.grid-item.active')?.classList.remove('active'); }
function closeGalleryForm() { document.getElementById("gallery-form-container").style.display = "none"; document.querySelector('.grid-item.active')?.classList.remove('active'); }

// ─── Main Initialization ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // 1) Language overlay
  const langOverlay = document.getElementById('lang-overlay');
  langOverlay.style.display = 'flex';
  langOverlay.querySelectorAll('button[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      localStorage.setItem('lang', lang);
      applyLanguage(lang);
      langOverlay.style.display = 'none';
    });
  });

  // 2) Grid double-tap logic
  const formMap = {
    'wish-btn': 'wish-form-container',
    'schedule-btn': 'schedule-form-container',
    'gallery-btn': 'gallery-form-container',
    'home-btn': 'home-form-container',
  };
  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('active')) {
        document.querySelectorAll('.grid-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        return;
      }
      const formId = formMap[item.id];
      if (formId) {
        const formE1 = document.getElementById(formId);
        formE1.style.display = 'flex';

        if (item.id === 'gallery-btn') {
          setTimeout(layout, 50);
        }
      }
      document.querySelectorAll('.grid-item').forEach(i => i.classList.remove('active'));
    });
  });

  // 3) Music controls
  const musicControls = document.createElement('div');
  musicControls.className = 'music-controls';
  musicControls.style = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000;';
  musicControls.innerHTML = `
    <button onclick="toggleMusic()" id="musicToggle"
            style="padding:10px; border-radius:50%; background:rgba(255,255,255,0.8);">
      🔇
    </button>`;
  document.body.appendChild(musicControls);
  playRandomMusic();

  // 4) Landing doors
  document.querySelectorAll(".door").forEach(door => {
    door.addEventListener("click", () => {
      document.getElementById("landing").classList.add("open");
    });
  });

  // 5) Countdown
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // 6) 3D Slider (horizontal cover-flow everywhere)
  const ANGLE = 30;
  const SLIDE_WIDTH_RATIO = 0.7;   // matches your CSS `.slide { width: 70%; }`
  const MAIN_SCALE = 1.2;
  const SIDE_SCALE = 0.6;
  const GAP = 20;        // px of pure space you want between panels

  const slides = Array.from(document.querySelectorAll('.slide'));
  const sliderEl = document.querySelector('.slider');
  let curr = 0;



  function layout() {
  const W = sliderEl.offsetWidth;
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  
  // Pre-compute desktop spacing
  const mainW    = W * SLIDE_WIDTH_RATIO * MAIN_SCALE;
  const sideW    = W * SLIDE_WIDTH_RATIO * SIDE_SCALE;
  const spacing  = (mainW/2 + sideW/2) + GAP;

  slides.forEach((slide, i) => {
    const offset = i - curr;
    let x, rotY, scale, z;

    if (isMobile) {
      // Mobile: simple horizontal carousel, no rotation or scaling
      x     = offset * W;
      rotY  = 0;
      scale = 1;
      z     = slides.length;  
    } else {
      // Desktop: 3D cover-flow
      x     = offset * spacing;
      rotY  = offset * ANGLE;
      scale = (offset === 0 ? MAIN_SCALE : SIDE_SCALE);
      z     = slides.length - Math.abs(offset);
    }

    slide.style.transform = `
      translateX(${x}px)
      rotateY(${rotY}deg)
      scale(${scale})
    `.trim();

    slide.style.zIndex = z;
  });
}

  let touchStartX = 0;
  let isSwiping = false;

  sliderEl.addEventListener('touchstart', e => {
    // Only begin swipe if exactly one finger
    if (e.touches.length === 1) {
      isSwiping = true;
      touchStartX = e.touches[0].clientX;
    } else {
      isSwiping = false;
    }
  }, { passive: true });

  sliderEl.addEventListener('touchmove', e => {
    // If a second finger lands, cancel the swipe
    if (e.touches.length > 1) {
      isSwiping = false;
    }
  }, { passive: true });

  sliderEl.addEventListener('touchend', e => {
    // Only process if we’re still in “swipe” mode
    if (!isSwiping) return;

    const touchEndX = e.changedTouches[0].clientX;
    const dx = touchEndX - touchStartX;
    const THRESHOLD = 50;

    if (dx > THRESHOLD) {
      prevSlide();
    } else if (dx < -THRESHOLD) {
      nextSlide();
    }
  }, { passive: true });

  layout();
  window.addEventListener('resize', layout);

  window.nextSlide = () => { curr = (curr + 1) % slides.length; layout(); };
  window.prevSlide = () => { curr = (curr - 1 + slides.length) % slides.length; layout(); };

  window.closeGalleryForm = () => {
    document.getElementById('gallery-form-container').style.display = 'none';
    document.querySelector('.grid-item.active')?.classList.remove('active');
    curr = 0;
    layout();
  };
});

// ─── Calendar Widget Logic ───
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  let month = today.getMonth(),
      year  = today.getFullYear(),
      selectedCell = null;

  const label = document.getElementById('month-year'),
        body  = document.querySelector('#calendar tbody'),
        prev  = document.getElementById('prev-month'),
        next  = document.getElementById('next-month');

  function draw(m, y) {
    body.innerHTML = '';
    label.textContent = new Date(y, m)
      .toLocaleString('default', { month:'long', year:'numeric' });
    const firstDay = new Date(y, m, 1).getDay(),
          daysInMonth = new Date(y, m+1, 0).getDate();
    let row = document.createElement('tr');
    // blank cells
    for (let i = 0; i < firstDay; i++) row.appendChild(document.createElement('td'));
    // days
    for (let d = 1; d <= daysInMonth; d++) {
      if (row.children.length === 7) {
        body.appendChild(row);
        row = document.createElement('tr');
      }
      const cell = document.createElement('td');
      cell.textContent = d;
      if (y === 2025 && m === 5 && d === 28) {
        cell.classList.add('thatday');
        cell.style.pointerEvents = 'none';
      }
      if (d === today.getDate() && m === today.getMonth() && y === today.getFullYear()) {
        cell.classList.add('today');
        cell.style.pointerEvents = 'none';
      }
      cell.addEventListener('click', () => {
        if (selectedCell) selectedCell.classList.remove('selected');
        cell.classList.add('selected');
        selectedCell = cell;
        // you can now read `${y}-${m+1}-${d}` as the picked date
      });
      row.appendChild(cell);
    }
    // fill out to full week
    while (row.children.length < 7) row.appendChild(document.createElement('td'));
    body.appendChild(row);
  }

  prev.addEventListener('click', () => {
    month = month === 0 ? 11 : month - 1;
    year = month === 11 && prev ? year - 1 : year;
    draw(month, year);
  });
  next.addEventListener('click', () => {
    month = month === 11 ? 0 : month + 1;
    year = month === 0 && next ? year + 1 : year;
    draw(month, year);
  });

  draw(month, year);
});




