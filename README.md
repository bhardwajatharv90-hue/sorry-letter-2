# A Little Love Story 💌

A small romantic interactive website with a slider-unlocked envelope, animated letter, and two cartoon characters.

## Run locally
Open `index.html` in your browser. No build tools are required.

## Publish with GitHub Pages
1. Create a new GitHub repository (for example, `little-love-story`).
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then click **Save**.
6. Wait a minute or two. GitHub will show your live website URL in the Pages section.

## Customize the letter
Edit the text inside `.letter-card` in `index.html`. You can also change the page title in the `<title>` tag.

The Google Fonts import is optional; the site uses fallback fonts if unavailable.


## Where to edit your own paragraphs
Open `index.html` and search for these comments:
- `EDIT THIS: sleepy scene paragraph` — the line shown while Atharv is sleeping.
- `EDIT THIS: short intro paragraph below the story heading` — the short line above the cartoon scene.
- `EDIT THIS: letter paragraph 1` — the first main letter paragraph.
- `EDIT THIS: letter paragraph 2` — the second main letter paragraph.

You can also edit `To my favourite person,` (letter greeting) and `With all my heart,` (sign-off) inside the `.letter-card` section.

## Wake-up dialogue
Open `script.js` and search for `wakeResult.textContent`. The dialogue is:
“Sorry baby, ab nahi karunga. ❤️”


## Character names and wake-up animation
- The girl is named **Ayushi**. Her name appears above the cartoon girl and in the letter greeting.
- When Atharv wakes up, he opens his eyes, rubs them, notices Ayushi, and blushes.
- To change the wake-up dialogue or timing, edit the `Tap-to-wake Atharv interaction` section in `script.js`.


## Bedside scene update
Atharv is shown lying sideways in a bed. Ayushi stands beside him and gives him a playful animated wake-up slap when the wake button is pressed. The existing eye-rub, blush, and apology dialogue sequence follows.
