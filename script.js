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
    const name = document.getElementById("name").value.trim();
    const wish = document.getElementById("wish").value.trim();
    if (name && wish) {
        alert("Thank you for your wish!");
        closeWishForm();
    } else {
        alert("Please fill out your name and wish!");
    }
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
