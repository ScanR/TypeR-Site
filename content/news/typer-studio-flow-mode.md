---
title: Introducing Flow mode, and other cool new things
date: 2026-11-18
version: Studio
summary: The whole chapter on one screen, text that sits on walls and signs, Photoshop actions, layer styles, Clip Studio brushes, and a lot of fixes.
cover: /images/news/studio-2026-11-18-cover.webp
---

TypeR Studio came out ten days ago, and it has changed a lot since. Here's what's new. The app updates itself, so you already have all of it.

## Flow mode

All the pages of the chapter on one surface. Zoom out to see them all, move to the next page, zoom back in. You work on the page in the middle of the screen, and the script follows it.

![Flow mode: zooming out on the chapter, then into the next page](/videos/news/studio-flow-mode.mp4 "No more tabs to go through")

Turn it on in **Settings → Page display**. Solo mode is still there if you prefer one page at a time.

In Flow, you can drag a page against another to make a spread (**Image → Separate Pages** splits it again), and `Cmd`- or `Shift`-click page names to move, save or close several at once.

Working on a whole chapter also got easier:

- **File → Save All** (`Alt+Cmd+S`) saves every page you changed. Batch Save moves to `Alt+Shift+Cmd+S`.
- Open Pages… is now **Open a Chapter…** (`Shift+Cmd+O`).
- Close All asks once for all unsaved pages.
- Drop a Word or text file on TypeR Studio to load it as the script.
- Set a default folder for Open and Save As in the settings.

On Windows and Linux, `Cmd` is `Ctrl`.

## Auto Perspective

Press `P` and drag over a board, a wall or a sign drawn on the page. TypeR finds its perspective, and the text on it follows. Text you type or move there later follows too.

![Auto Perspective laying a schedule flat on a board seen from the side](/videos/news/studio-auto-perspective.mp4 "Drag over the surface, the text follows")

Drag the corners if the perspective is a little off. `Enter` takes a text out of its zone or puts it back. To set the corners by hand, there's still **Type → Perspective** (`Shift+P`).

## Bubble Reshaper (experimental)

Press `U` and click a bubble to change its shape. Drag the handles to resize it, pull the outline, move the tail. The line keeps its thickness. **Fit to text** sizes the bubble to the text inside.

When the new bubble leaves part of the old one uncovered, TypeR paints it if the background is plain. Otherwise Generative Fill redraws it, or TypeR selects it so you can fix it yourself.

It's still experimental and some bubbles come out wrong. If one does, show us on Discord.

## Bubble distances

Drag a text with the Move tool and you see how far each side is from the edge of the bubble. The lines turn green when the text is centred. You can turn it off in the Move tool's options or in the **View** menu.

![Dragging a text until it's centred in its bubble](/videos/news/studio-bubble-distances.mp4 "Green means centred")

## Clip Studio Paint brushes and bubbles

The new **Library** panel (**Window → Library**) imports your `.sut` brushes and `.clip` materials, one by one or in a `.zip`. Pick a brush and paint with it, or double-click a bubble or a screentone to put it on the page.

![Painting with a Clip Studio brush, then placing a bubble from the Library](/videos/news/studio-library.mp4 "Your brushes and bubbles, in TypeR")

## Actions

The Actions panel (`Alt+F9`) works like Photoshop's. Record steps, play them on every page, and load your `.atn` files. You can give an action a shortcut, switch to Button Mode, or undo a whole action at once. If an action has a step TypeR Studio can't play yet, it tells you before starting.

## Layer styles, Warp Text and filters

- **Layer Style** (**Layer → Blending Options…** or the **fx** button): drop shadow, glow, colour and gradient overlays, strokes, including a gradient stroke.
- The **Styles** panel keeps your layer styles and applies them in one click. It imports Photoshop `.asl` files.
- **Warp Text** (`Shift+W`) with Photoshop's 15 styles.
- **Gaussian Blur** and **Motion Blur**. The text stays editable, and Photoshop opens it as a smart object.
- **Skew** in Free Transform (`Cmd` on a handle). The text stays a text.
- The **Blur**, **Sharpen** and **Smudge** tools.

## Text

Text is much closer to Photoshop: the same thickness, in Regular and Faux Bold, with every anti-aliasing method. Paragraphs keep their lines and line spacing when you open the PSD in Photoshop.

Also new:

- A second click on **B** in the Character panel makes the text bolder (Extra Bold).
- Type any kerning value between two letters.
- `Tab` while typing inserts a tab.
- `Alt+↑/↓` changes the leading, `Shift+Alt+↑/↓` the baseline shift.
- `Shift+Cmd+L`, `C` or `R` aligns left, centre or right.
- Choose how much `Ctrl+Shift+<` and `>` change the size, in **Settings → Text size step**.
- Hyphenation works in Turkish, German, Russian and the other languages it knows.
- In SFX, you can reshape each letter, and Arabic and Hebrew read right to left.

## Cleaning

- **Remove Text** can clean several pages in one go. Pick them in the tabs, from the ▾ next to Detect Text. Each one is saved as a PSD next to the original.
- In the page-by-page review, click a text to keep it, or draw to add one.
- Plain balloons get cleaned directly, whatever their colour, without Generative Fill. Same for titles and captions on a plain background.
- In the desktop app, Generative Fill can use your Adobe account (Firefly, GPT Image, Gemini).
- `Shift` draws straight lines with the Brush, Eraser and Clone Stamp. Right-click a brush to set its size and hardness.

## The workspace

- Dock panels in as many columns as you want, on either side. Fold a column into icons, or stack panels as tabs.
- The script, styles, TextShapeR and buttons of the TypeR panel can each become their own panel.
- **Edit → Search…** (`Cmd+F`) finds any tool or command by name.
- The mouse wheel changes any number or slider you hover.
- `Tab` hides everything, `Shift+Tab` only the panels.
- Drag layers onto another page's tab to copy them there.

## The desktop app

TypeR Studio is now on Linux, as an AppImage and a `.deb`.

<a class="btn btn--fill btn--sm" href="https://github.com/ScanR/TypeR-Studio/releases/latest/download/TypeR-Studio-arm64.dmg">Mac, Apple chip</a> <a class="btn btn--line btn--sm" href="https://github.com/ScanR/TypeR-Studio/releases/latest/download/TypeR-Studio-x64.dmg">Mac, Intel chip</a> <a class="btn btn--line btn--sm" href="https://github.com/ScanR/TypeR-Studio/releases/latest/download/TypeR-Studio-Setup.exe">Windows</a> <a class="btn btn--line btn--sm" href="https://github.com/ScanR/TypeR-Studio/releases/latest/download/TypeR-Studio-x86_64.AppImage">Linux, AppImage</a> <a class="btn btn--line btn--sm" href="https://github.com/ScanR/TypeR-Studio/releases/latest/download/TypeR-Studio-amd64.deb">Linux, .deb</a> <a class="btn btn--ghost btn--sm" href="/web/">Try it in your browser</a>

- **Help → Check for Updates…** gets the latest version, and you can see the download progress.
- **Help → Show Log File** is there if you need to report a problem.
- If Open in Photoshop can't find Photoshop, you can point it to it with **Locate Photoshop…**.
- On a tablet, the script shows as a list, and each page is saved when you go to the next one.

TypeR Studio now sends anonymous usage stats once a day: which tools get used, and the errors. Nothing about you or your files. It helps us know what to fix first. You can turn it off in **Settings → Anonymous usage statistics**.

## Fixes

- Settings, styles and fonts sometimes didn't save until you reloaded. Fixed.
- Typing in a long paragraph no longer slows down.
- The last line of a text box no longer goes missing.
- Centred text stays centred when a line ends with a space.
- Clicking a text with the Type tool puts the cursor where you clicked.
- PSD text keeps Photoshop's line breaks when you edit it.
- White strokes in grayscale PSDs no longer turn black.
- Text set with a style in pixels has the right size, whatever the resolution.
- The Spot Healing Brush continues screentones instead of leaving a white patch.
- Match the page's tones no longer makes Generative Fill gray or dark.
- Detect Text stays close to the letters on long webtoon strips.
- Painting on a long strip, or on a layer with effects, no longer lags.
- Smart Paste fills three joined bubbles in the right order.
- A `02.psd` from another chapter is no longer mixed up with this chapter's page 2.
- If a save runs out of memory, it tells you what to do.
- The web version no longer fails to start after an update on a slow connection.
- Keyboard shortcuts can be recorded again in the desktop app.
- The Missing fonts window closes once Font FindeR has installed everything.

Found a bug? Tell us on [Discord](https://discord.com/invite/Pdmfmqk) or with **Help → Send Feedback…**.
