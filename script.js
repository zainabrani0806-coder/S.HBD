// ====== Page Navigation ======
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// ====== Music Controls ======
let music = document.getElementById('bg-music');
let muteBtn = document.getElementById('mute-btn');
let isMuted = false;
let musicStarted = false;

// Try autoplay on load
window.addEventListener('load', () => {
    music.play().then(() => {
        musicStarted = true;
        muteBtn.textContent = '🔇 Mute Music';
    }).catch(() => {
        muteBtn.textContent = '🔊 Start Music';
    });
});

// Toggle music play/mute
function toggleMusic() {
    if (!musicStarted) {
        music.play().then(() => {
            musicStarted = true;
            isMuted = false;
            muteBtn.textContent = '🔇 Mute Music';
        }).catch(() => {
            alert('Unable to play music. Check browser settings or file path.');
        });
    } else {
        if (isMuted) {
            music.muted = false;
            isMuted = false;
            muteBtn.textContent = '🔇 Mute Music';
        } else {
            music.muted = true;
            isMuted = true;
            muteBtn.textContent = '🔊 Unmute Music';
        }
    }
}

// ====== Popups ======
function showPopup(type) {
    const titles = {
        'welcome': 'A Moment of Reflection',
        'friendship': 'The Strength of Our Bond',
        'gallery': 'Cherished Memories',
        'wish': 'Wishes for Your Future'
    };
    const messages = {
        'welcome': 'Khalid, this site honors our journey – from online studies to a trusted friendship. May it inspire growth.',
        'friendship': 'One year of shared challenges and triumphs. Our connection transcends distance.',
        'gallery': 'These images symbolize the unique personality that u owned. Let\'s keep it as.',
        'wish': 'At 21, embrace wisdom and perseverance. Happy birthday – here\'s to many more meaningful years.'
    };
    document.getElementById('popup-title').textContent = titles[type];
    document.getElementById('popup-message').textContent = messages[type];
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// ====== Emoji Notes ======
function openNote(noteId) {
    const notes = {
        'note1': 'Our handshake, even virtual, represents unwavering support.',
        'note2': 'Shine bright, Khalid – your potential is limitless.',
        'note3': 'Strength in unity: We\'ve overcome obstacles as a team.',
        'note4': 'A gift from the heart: Endless encouragement.',
        'note5': 'Learning together has deepened our understanding and respect.',
        'note6': 'In prayer, we find strength – may Allah guide us.',
        'note7': 'Growth like a seed: Slow, steady, and beautiful.',
        'note8': 'Linked forever in friendship and faith.',
        'note9': 'Capturing moments that define our bond.',
        'note10': 'Celebrate the achievements – big and small.',
        'note11': 'May this birthday bring the sweetness of success and fulfillment.',
        'note12': 'Prayers for your happiness and prosperity.',
        'note13': 'Sparkle like the stars – your future is bright.'
    };
    document.getElementById('note-message').textContent = notes[noteId];
    document.getElementById('note-popup').style.display = 'flex';
}

function closeNote() {
    document.getElementById('note-popup').style.display = 'none';
}

// ====== Image Popup ======
function openImage(src) {
    document.getElementById('popup-image').src = src;
    document.getElementById('image-popup').style.display = 'flex';
}

function closeImage() {
    document.getElementById('image-popup').style.display = 'none';
}

// ====== Random Wish ======
function randomWish() {
    const wishes = [
        'May your year be filled with joy and success!',
        'Happy Birthday! Wishing you all the best.',
        'Here\'s to new adventures and lasting friendships.',
        'May Allah bless you with health and happiness.'
    ];
    alert(wishes[Math.floor(Math.random() * wishes.length)]);
}

// ====== Close Modals on Outside Click ======
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// ====== Falling Stars Generator ======
const starsLayer = document.querySelector('.stars-layer');
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = 2 + Math.random() * 3 + 's';
    star.style.opacity = Math.random();
    starsLayer.appendChild(star);
    setTimeout(() => star.remove(), 5000);
}
setInterval(createStar, 300);

// ====== Cursor Sparkles ======
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'cursor-sparkle';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
});

// ====== Fireworks/Sprinklers on Click ======
document.addEventListener('click', (e) => {
    for (let i = 0; i < 15; i++) {
        const fire = document.createElement('div');
        fire.className = 'firework';
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 60 + 30;
        fire.style.setProperty('--x', Math.cos(angle) * radius + 'px');
        fire.style.setProperty('--y', Math.sin(angle) * radius + 'px');
        fire.style.left = e.clientX + 'px';
        fire.style.top = e.clientY + 'px';
        document.body.appendChild(fire);
        setTimeout(() => fire.remove(), 1000);
    }
});