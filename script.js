//MUSIC 
const musicList = [
    'music/summerisforfallinginlove.mp3',
    'music/thoseeyes.mp3',
    'music/mylovemineallmine.mp3',
    'music/ithinktheycallthislove.mp3',
    'music/blue.mp3',
]

let currentAudio = null;
let isPlaying = false;

function initAudio() {
    playRandomMusic();
}

function playRandomMusic() {
    if (isPlaying) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * musicList.length);
    currentAudio = new Audio(musicList[randomIndex]);
    currentAudio.volume = 0.5; 
    
    currentAudio.addEventListener('ended', () => {
        const nextIndex = (musicList.indexOf(currentAudio.src.split('/').pop()) + 1) % musicList.length;
        currentAudio.src = musicList[nextIndex];
        currentAudio.play().catch(error => console.log("Playback failed:", error));
    });
    
    currentAudio.play()
        .then(() => {
            isPlaying = true;
            document.getElementById('musicToggle').textContent = '🎵';
        })
        .catch(error => {
            console.log("Audio playback failed:", error);
            isPlaying = false;
            document.getElementById('musicToggle').textContent = '🔇';
            document.addEventListener('click', initAudio, { once: true });
        });
}


document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        let alreadyClicked = false;
        item.addEventListener('click', function() {
            if (!alreadyClicked){
                item.classList.add('unblurred');
                alreadyClicked = true;
            }else{
                if(item.id =='home-btn'){
                    openHomeForm();
                }else if(item.id == 'wish-btn'){
                    openWishForm();
                }else if(item.id == 'church-btn'){
                    openChurchForm();
                }else if(item.id == 'restaurant-btn'){
                    openRestaurantForm();
                }
            }
        });
    });

    const musicControls = document.createElement('div');
    musicControls.className = 'music-controls';
    musicControls.style = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000;';
    musicControls.innerHTML = `
        <button id="musicToggle" style="padding: 10px; border-radius: 50%; background: rgba(255,255,255,0.8);">
            🔇
        </button>
    `;
    document.body.appendChild(musicControls);

    // Start music immediately when page loads
    initAudio();

    // Door click handlers
    const landing = document.getElementById("landing");
    const doors = document.querySelectorAll(".door");

    doors.forEach(door => {
        door.addEventListener("click", () => {
            if (!landing.classList.contains("open")) {
                landing.classList.add("open");
                // Remove this line since music should already be playing
                // playRandomMusic(); 
            }
        });
    });

    // Add music controls to your page
    musicControls.innerHTML = `
        <div class="music-controls" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
            <button onclick="toggleMusic()" id="musicToggle" style="padding: 10px; border-radius: 50%; background: rgba(255,255,255,0.8);">
                🎵
            </button>
        </div>
    `;
    document.body.appendChild(musicControls);

    // Show/hide forms
    document.getElementById("wish-btn")
        .addEventListener("click", () => 
            document.getElementById("wish-form-container").style.display = "flex"
        );
    
    document.getElementById("church-btn")
        .addEventListener("click", () => 
            document.getElementById("church-form-container").style.display = "flex"
        );
    
    document.getElementById("restaurant-btn")
        .addEventListener("click", () => 
            document.getElementById("restaurant-form-container").style.display = "flex"
        );
    
    document.getElementById("home-btn")
        .addEventListener("click", () => 
            document.getElementById("home-form-container").style.display = "flex"
        );

    // Start countdown immediately
    updateCountdown();
    // Set interval for countdown
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
}

function closeChurchForm() {
    document.getElementById("church-form-container").style.display = "none";
}

function closeRestaurantForm() {
    document.getElementById("restaurant-form-container").style.display = "none";
}

function closeHomeForm() {
    document.getElementById("home-form-container").style.display = "none";
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
