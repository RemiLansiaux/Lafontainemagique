
function dropCoin(amount) {
    alert('Tu as lancé une pièce de ' + amount + '€ dans la fontaine ✨');
}
function toggleSound() {
    const audio = document.getElementById('audio');
    const btn = document.getElementById('muteBtn');
    if (audio.paused) {
        audio.play();
        btn.textContent = '🔊';
    } else {
        audio.pause();
        btn.textContent = '🔇';
    }
}
