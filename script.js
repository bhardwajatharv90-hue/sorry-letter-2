const slider = document.getElementById('unlockSlider');
const heart = document.getElementById('sliderHeart');
const track = document.getElementById('sliderTrack');
const hint = document.getElementById('sliderHint');
const envelope = document.getElementById('envelope');
const intro = document.getElementById('intro');
const story = document.getElementById('story');
const again = document.getElementById('againButton');

let opened = false;

function updateSlider() {
  const value = Number(slider.value);
  const shell = slider.parentElement;
  const maxTravel = shell.clientWidth - 52;
  heart.style.transform = `translateX(${(value / 100) * maxTravel}px)`;
  track.style.width = `calc(${value}% - 5px)`;
  hint.style.opacity = value > 12 ? '0' : '1';

  if (value >= 98 && !opened) {
    opened = true;
    envelope.classList.add('open');
    hint.textContent = 'Opening your letter...';
    setTimeout(() => {
      intro.classList.add('hidden');
      story.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1150);
  }
}
slider.addEventListener('input', updateSlider);

again.addEventListener('click', () => {
  opened = false;
  slider.value = 0;
  heart.style.transform = 'translateX(0)';
  track.style.width = '0';
  hint.style.opacity = '1';
  hint.textContent = 'Drag the heart all the way →';
  envelope.classList.remove('open');
  story.classList.add('hidden');
  intro.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('resize', () => {
  if (!opened) updateSlider();
});


// Tap-to-wake Atharv interaction
const wakeButton = document.getElementById('wakeButton');
const sleepingBoy = document.getElementById('sleepingBoy');
const sleepStage = document.getElementById('sleepStage');
const wakeCopy = document.getElementById('wakeCopy');
const wakeResult = document.getElementById('wakeResult');
const ayushiWaker = document.getElementById('ayushiWaker');

if (wakeButton) {
  wakeButton.addEventListener('click', () => {
    if (wakeButton.disabled) return;
    sleepStage.classList.remove('hit');
    ayushiWaker?.classList.remove('slap');
    void sleepStage.offsetWidth;
    sleepStage.classList.add('hit');
    ayushiWaker?.classList.add('slap');
    wakeCopy.textContent = 'Ayushi gives Atharv a playful slap to wake him up! 👋';
    wakeResult.textContent = '“Ouch! Ayushi?! 😳”';
    sleepingBoy.classList.add('awake');
    wakeButton.disabled = true;
    wakeButton.textContent = '✨ Atharv is awake!';
    wakeCopy.textContent = 'Atharv is slowly waking up...';
    wakeResult.textContent = '“Umm... 5 more minutes...”';

    const boyCharacter = document.querySelector('.character-boy');
    if (boyCharacter) {
      setTimeout(() => {
        boyCharacter.classList.add('rubbing');
        wakeCopy.textContent = 'He rubs his sleepy eyes...';
        wakeResult.textContent = '“Huh? Ayushi? Tum yahan ho? ❤️”';
      }, 650);
      setTimeout(() => {
        boyCharacter.classList.remove('rubbing');
        boyCharacter.classList.add('blushing');
        wakeCopy.textContent = 'Then he notices Ayushi standing right there. 💗';
        wakeResult.textContent = '“Sorry baby, ab nahi karunga. ❤️”';
      }, 2300);
    }
  });
}
