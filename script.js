emailjs.init('uslz-38maofgET7_g');

const translations = {
  en: {
    // —— Main ——
    meetthebride: "Meet The Bride",
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
    timetitle: "Time",
    addresstitle: "Location",
    churchaddress: "Join us at Tan Chi Linh Church<br>" +
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
    invitation: "Reception Invitation",
    togetherwithourfamilies: "Together with our families,",
    inviteat: "invite you to celebrate at Home.",
    meettime: "June 28th, 2025<br />" +
      "1:00 PM (GMT+7)",
    lastword: "We look forward to sharing this joyful moment!"

  },
  vi: {
    // —— Main ——
    meetthebride: "Lễ Rước Dâu",
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

    // —— Church Form ——
    timetitle: "Thời Gian",
    addresstitle: "Địa Điểm",
    churchaddress: "Hôn lễ được cử hành tại Nhà Thờ Tân Chí Linh<br>" +
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
    lastword: " "
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
  const slides = Array.from(document.querySelectorAll('.slide'));
  const sliderEl = document.querySelector('.slider');
  let curr = 0;

  function layout() {
    const W = sliderEl.offsetWidth;
    slides.forEach((slide, i) => {
      const offset = i - curr;
      const x = offset * (W * 0.5);
      const rotY = offset * ANGLE;
      const scale = offset === 0 ? 1.2 : 0.6;
      slide.style.transform = `
        translateX(${x}px)
        rotateY(${rotY}deg)
        scale(${scale})
      `.trim();
      slide.style.zIndex = slides.length - Math.abs(offset);
    });
  }

  layout();
  window.addEventListener('resize', layout);

  window.nextSlide = () => { curr = (curr + 1) % slides.length; layout(); };
  window.prevSlide = () => { curr = (curr - 1 + slides.length) % slides.length; layout(); };


  window.closeGalleryForm = () => {
    const form = document.getElementById('gallery-form-container');
    form.style.display = 'none';
    document.querySelector('.grid-item.active')?.classList.remove('active');
    curr = 0;
    layout();
  };
});

