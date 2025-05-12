emailjs.init('uslz-38maofgET7_g');

const translations = {
  en: {
    groomName: "MARCUS HA",
    brideName: "THANH THUY",
    meetthebride: "Meet The Bride",
    thechurch: "The Church",
    therestaurant: "The Restaurant",
    yourwish: "Your Wish",
    mins: "Mins",
    days: "Days",
    hours: "Hours",
    sendusyourwish: "Send us your wish",
    message: "We cherish your heartfelt wishes. Please leave your blessing below.",
    send: "Send Wish",
    back: "Back",
    youreinvited: "You're Invited",
    tenthanhgroom: "Joseph Marcus Ha",
    tenthanhbride: "Clara Tran Thi Thanh Thuy",
    churchaddress: "Join us at Tan Chi Linh Church<br>" + 
    "6/25 Pham Van Hai, Ward 3, Tan Binh District",
    churchtime: "June 28th, 2025",
    churchhour: "4:00 PM (GMT+7)",
    quote: "We become what we love and who we love shapes what we become.<br>" +
    "— St. Clare of Assisi",
    weddingdetails: "Wedding Details",
    restauranttime: "June 28th, 2025<br>" + 
    "6:00 PM (GMT+7)",
    restaurantaddress: "284–286 Vuon Lai, Phu Tho Hoa, Tan Phu",
    gettingthere: "Getting There",
    dir: "• 15–20′ from Church<br />"+
    "• 25′ from Bride's House",
    drinks: "Drinks",
    alldrinks: "• Coke • Beer • Water",
    goodeats: "Good Eats",
    allfoods: "• Mon 1 • Mon 2 • Mon 3 • Mon 4 • Mon 5",
    ourstory: "Our Story",
    firstsentence: "Seven years woven tightly.",
    secondsentence: "I greets the sun in Vietnam as he whispers goodnight from the U.S.",
    thirdsentence: "Our love, tested by miles and strengthened by patience, waits joyfully for the day we'll finally share every sunrise side by side.",
    lastsentence: "And our new chapter begins...",
    invitation: "Reception Invitation",
    togetherwithourfamilies: "Together with our families,",
    inviteat: "invite you to celebrate at Home.",
    meettime: "June 28th, 2025<br />"+
    "1:00 PM (GMT+7)",
    lastword: "We look forward to sharing this joyful moment!"

  },
  vi: {
    groomName: "MARCUS HÀ",
    brideName: "THANH THUỲ",
    meetthebride: "Lễ Rước Dâu",
    thechurch: "Lễ Hôn Phối",
    therestaurant: "Tiệc Cưới",
    yourwish: "Gửi Lời Chúc",
    mins: "Phút",
    days: "Ngày",
    hours: "Giờ",
    sendusyourwish: "Hãy Gửi Lời Chúc Của Bạn",
    message: "Chúng tôi rất trân trọng những lời chúc phúc của bạn. Xin hãy để lại lời chúc của bạn bên dưới.",
    send: "Gửi",
    back: "Quay Lại",
    youreinvited: "Bạn Được Mời",
    tenthanhgroom: "Giuse Hà Marcus",
    tenthanhbride: "Clara Trần Thị Thanh Thùy",
    churchaddress: "Tham dự tại Nhà Thờ Tân Chi Linh<br>" + 
    "6/25 Phạm Văn Hai, Phường 3, Quận Tân Bình",
    churchtime: "Ngày 28 tháng 6 năm 2025",
    churchhour: "4:00 chiều (Giờ Việt Nam)",
    quote: " ''Chúng ta trở thành những gì chúng ta yêu và người chúng ta yêu thương sẽ định hình nên con người chúng ta.''<br>" +
    "— Thánh Clara Assisi",
    weddingdetails: "Thông Tin Tiệc Cưới",
    restauranttime: "Ngày 28 tháng 6 năm 2025<br>" + 
    "6:00 chiều (Giờ Việt Nam)",
    restaurantaddress: "284–286 Vườn Lài, Phú Thọ Hòa, Tân Phú",
    gettingthere: "Đường Đến Nhà Hàng",
    dir: "• 15–20′ từ Nhà Thờ<br />"+
    "• 25′ từ Nhà Cô Dâu",
    drinks: "Đồ Uống",
    alldrinks: "• Coca • Bia • Nước Suối",
    goodeats: "Món Ăn",
    allfoods: "• Món 1 • Món 2 • Món 3 • Món 4 • Món 5",
    ourstory: "Câu Chuyện Của Chúng Tôi",
    firstsentence: "Bảy năm gắn bó.",
    secondsentence: "Tôi chào đón ánh nắng ở Việt Nam khi anh ấy thì thầm lời chúc ngủ ngon từ Mỹ.",
    thirdsentence: "Tình yêu của chúng tôi, thử thách bởi khoảng cách và củng cố bởi sự kiên nhẫn, vui mừng chờ đợi ngày chúng tôi sẽ cùng nhau chia sẻ mọi ánh bình minh.",
    lastsentence: "Và chương mới của chúng tôi bắt đầu...",
    invitation: "Lời Mời",
    togetherwithourfamilies: "Cùng với gia đình chúng tôi,",
    inviteat: "mời bạn đến tham dự lễ rước dâu tại Nhà Cô Dâu.",
    meettime: "Ngày 28 tháng 6 năm 2025<br />"+
    "1:00 chiều (Giờ Việt Nam)",
    lastword: "Chúng tôi rất mong được chia sẻ khoảnh khắc vui vẻ này với bạn!"
  }
};

//MUSIC 
const musicList = [
    'music/summerisforfallinginlove.mp3',
    'music/thoseeyes.mp3',
    'music/mylovemineallmine.mp3',
    'music/ithinktheycallthislove.mp3',
    'music/blue.mp3',
  ];
  let currentAudio = null;
  let isPlaying = false;
  
  function initAudio() {
    playRandomMusic();
  }
  function playRandomMusic() {
    if (isPlaying) return;
  
    const idx = Math.floor(Math.random() * musicList.length);
    currentAudio = new Audio(musicList[idx]);
    currentAudio.volume = 0.5;
    currentAudio.addEventListener('ended', () => {
      const next = (musicList.indexOf(currentAudio.src.split('/').pop()) + 1) % musicList.length;
      currentAudio.src = musicList[next];
      currentAudio.play().catch(e => console.log("Playback failed:", e));
    });
    currentAudio.play()
      .then(() => {
        isPlaying = true;
        document.getElementById('musicToggle').textContent = '🎵';
      })
      .catch(err => {
        console.log("Audio failed:", err);
        isPlaying = false;
        document.getElementById('musicToggle').textContent = '🔇';
        document.addEventListener('click', initAudio, { once: true });
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // —— two-step grid logic ——
    const formMap = {
      'wish-btn':       'wish-form-container',
      'church-btn':     'church-form-container',
      'restaurant-btn': 'restaurant-form-container',
      'home-btn':       'home-form-container',
    };
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
          gridItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          return;  // stop here on first tap
        }
        // second tap → open form
        const formId = formMap[item.id];
        if (formId) {
          document.getElementById(formId).style.display = 'flex';
          gridItems.forEach(i => i.classList.remove('active'));
        }
      });
    });
  
    // —— single music-control creation ——
    const musicControls = document.createElement('div');
    musicControls.className = 'music-controls';
    musicControls.style = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000;';
    musicControls.innerHTML = `
      <button onclick="toggleMusic()" id="musicToggle"
              style="padding:10px; border-radius:50%; background:rgba(255,255,255,0.8);">
        🔇
      </button>`;
    document.body.appendChild(musicControls);
  
    initAudio();  // kick off music
  
    // —— door logic ——
    const landing = document.getElementById("landing");
    document.querySelectorAll(".door").forEach(door => {
      door.addEventListener("click", () => {
        if (!landing.classList.contains("open")) {
          landing.classList.add("open");
        }
      });
    });
  
    // —— countdown ——
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });

function toggleMusic() {
    if (!currentAudio) {
        playRandomMusic();
        return;
    }

    if (currentAudio.paused) {
        currentAudio.play()
            .then(() => {
                isPlaying = true;
                document.getElementById('musicToggle').textContent = '🎵';
            })
            .catch(error => console.log("Playback failed:", error));
    } else {
        currentAudio.pause();
        isPlaying = false;
        document.getElementById('musicToggle').textContent = '🔇';
    }
}


// Form close functions
function closeWishForm() {
    document.getElementById("wish-form-container").style.display = "none";
    document.querySelector('.grid-item.active')?.classList.remove('active');
}

function closeChurchForm() {
    document.getElementById("church-form-container").style.display = "none";
    document.querySelector('.grid-item.active')?.classList.remove('active');
}

function closeRestaurantForm() {
    document.getElementById("restaurant-form-container").style.display = "none";
    document.querySelector('.grid-item.active')?.classList.remove('active');
}

function closeHomeForm() {
    document.getElementById("home-form-container").style.display = "none";
    document.querySelector('.grid-item.active')?.classList.remove('active');
}

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

  // send via EmailJS
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

function updateCountdown() {
    const target = new Date("June 25, 2025 13:00:00").getTime();
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

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hrs).padStart(2, "0");
    document.getElementById("minutes").textContent = String(mins).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ---- language handling ----
const langOverlay = document.getElementById('lang-overlay')
langOverlay.style.display = 'flex';


// When user clicks on a language button…
langOverlay.querySelectorAll('button[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
    langOverlay.style.display = 'none';
  });
});

// Function to swap all text and placeholders
function applyLanguage(lang) {
  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  // 3) HTML content (for anything with tags, like your address)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
