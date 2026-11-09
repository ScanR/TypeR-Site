---
title: TypeR 3.0.2 and TypeR Studio
date: 2026-11-09
version: 3.0.2
summary: Meet TypeR Studio, the free desktop app to clean and letter a whole chapter without Photoshop, with text detection and Generative Fill. TypeR 3.0.2 links it to Photoshop and fixes a long list of bugs.
cover: /images/news/3-0-2-cover.webp
---

TypeR no longer needs Photoshop. **TypeR Studio** is a free desktop app for Mac and Windows: the TypeR panel you know, inside a workspace built for letterers, that now cleans pages too.

It went from first release to a full cleaning and lettering studio in a week. Here is everything it learned, then what TypeR 3.0.2 brings to Photoshop.

- **Meet it:** [what TypeR Studio is](#typer-studio), [download it](#get-it)
- **Clean:** [automatic text detection](#automatic-text-detection), [Generative Fill](#generative-fill), [retouching tools](#the-retouching-tools)
- **Letter:** [the SFX tool](#the-sfx-tool), [gradients](#gradient), [fonts](#fonts)
- **Work your way:** [Photoshop and back](#from-typer-studio-to-photoshop-and-back), [files](#every-file-you-need), [tablets](#on-a-tablet), [first steps](#your-first-start)
- **For Photoshop:** [TypeR 3.0.2](#typer-3-0-2-for-photoshop) and [the bugs it fixes](#bug-fixes)

## TypeR Studio

A Photoshop-like workspace that only keeps what letterers use, so it stays light: about 100 MB, and it opens in about a second.

- **The TypeR panel is built in:** load your script, click a bubble, the line goes in, shaped to the bubble. Smart paste, double bubbles, TextShapeR and your style tags work as they do in Photoshop.
- **Real PSD files,** with their layers, groups, masks and editable text, and a Layers panel that behaves like Photoshop's.
- **Photoshop's shortcuts,** your installed fonts, and no account or subscription.
- **Offline from the first launch.** It updates itself, and offers to restart when an update is ready, now or later.
- **Coming from TypeR for Photoshop?** It offers to bring your settings at first start, and you can import your styles and fonts from a `.zip`.

### Get it

<a class="btn btn--fill btn--sm" href="https://github.com/ScanR/TypeR-Studio/releases/latest/download/TypeR-Studio-arm64.dmg">Mac, Apple chip</a> <a class="btn btn--line btn--sm" href="https://github.com/ScanR/TypeR-Studio/releases/latest/download/TypeR-Studio-x64.dmg">Mac, Intel chip</a> <a class="btn btn--line btn--sm" href="https://github.com/ScanR/TypeR-Studio/releases/latest/download/TypeR-Studio-Setup.exe">Windows</a> <a class="btn btn--ghost btn--sm" href="/web/">Try it in your browser</a>

The Mac apps are signed and notarized. The Windows installer isn't signed yet: if SmartScreen warns you, choose **More info**, then **Run anyway**. The browser version is the same workspace, with nothing to install.

## Automatic text detection

**Select → Text** finds every letter on the page in seconds. **Remove Text** then cleans them all: plain backgrounds at once, and the art behind the letters redrawn by Generative Fill.

![Detect Text finding every letter of a page, then Remove Text painting the plain balloons and redrawing the art behind the sound effects](/videos/news/studio-text-detection.mp4 "A whole page, from raw to clean")

Thanks to Miller for the work and the API behind it.

## Generative Fill

Select an area, say what you want, **Generate**. Missing art comes back, an SFX disappears, a character goes away.

![Generative Fill removing a character from a staircase scene](/videos/news/studio-generative-fill.mp4 "One selection, one click")

- **With a key:** Nano Banana 2.1 with your fal.ai or Google key, or Ideogram 4.5, with the cost of each picture shown before you pay it.
- **Without a key:** LaMa Manga runs on your own computer, for free. The desktop app adds FLUX.2 Klein 4B and FLUX 3 Klein.
- **Pick the model** right from the Generative Fill bar.
- **Match the page's tones:** the fill takes the brightness of the page around it, so it doesn't show.

## The retouching tools

Everything you used to open Photoshop for, before lettering:

- **Magic Eraser** (`Shift+E`) and **Spot Healing Brush** (`Shift+J`): paint over a spot or a letter, it is filled with what surrounds it.
- **Content-Aware Fill**, **Levels** and **Auto-Align Layers**.
- **Bubble Cleaner** (`J`), for bubbles of any colour.
- **Polygonal Lasso** (`Shift+L`), and **Select → Color Range…** to pick a colour across the page.
- **The Clone Stamp** now copies pixel for pixel.

## The SFX tool

Draw a path, type the sound: the letters follow it.

- **Shift on an end of the path** sets the size along the word.
- **Undo** the SFX you just placed with `Cmd/Ctrl+Z`, right from its word field.
- **A guide** puts every shortcut on one card, with a 10-step practice.

### Gradient

Press `G` and drag across a text or an SFX: its letters take the gradient, the stroke keeps its colour, and the text stays editable. You can still move the ends until you press Enter.

![Dragging a gradient across an SFX](/videos/news/studio-gradient.mp4 "The text stays editable")

### Text, like Photoshop

- **Hyphenation** follows the paragraph's Hyphenate option, and **All Caps** follows the text's language.
- **Scale and turn several texts at once,** and texts in perspective have their transform handles back.
- **Rotated texts** are edited right on the page, turned with them.
- **Texts no longer snap** by default: **View > Snap Text** brings it back.
- **Text looks the same** on Windows and on the Mac, and the caret sits right on the letters.

## Fonts

- **Star your favourite fonts:** they come first in the list, or alone with **Show favourites only**.
- **Missing fonts install in one click,** from Font FindeR, in the Missing fonts dialog.
- **Fonts you install show up in the list,** and Font FindeR installs its fonts straight into TypeR Studio.

## From TypeR Studio to Photoshop, and back

Clean in TypeR Studio and finish in Photoshop, or the other way around.

- **Open in Photoshop,** in the TypeR panel's footer, sends your pages there, with the script if you tick **Import the script**.
- **Open in TypeR Studio,** in TypeR 3.0.2 for Photoshop, brings them back, script included. If TypeR Studio isn't installed, it offers the right installer for your computer.
- **Open in Photoshop** also opens the PSDs of a folder you opened whole, without asking for the folder again.

## Every file you need

- **PSD files saved by TypeR Studio** open in Photoshop without an error.
- **InDesign documents** (`.idml`, `.indd`) open, and save or export as `.idml`.
- **Export to WebP,** one page at a time or with **Batch Save**, a simpler Image Processor for a whole chapter.
- **Save** writes over the PSD you picked with the panel's Import pages.
- **Merge a folder** into one layer, alone or with other layers, and put the chosen layers in a new group with the folder button.
- **Faster on big pages,** lighter on memory, with a chapter pager to go from page to page.

### The gestures you know

- Hold `Ctrl` or `Cmd` with `Space` and drag sideways to zoom, and the wheel zooms on a Mac.
- Hold a tool's key to use it until you let go, and set the wand aside with `Ctrl` or `Cmd`.
- Drag a tab along the strip to move its page, and close it with a middle click.
- Click beside the texts with the Move tool to deselect them.

## On a tablet

- **Go through a chapter page by page,** with the text size always at hand.
- **Import pages, Align,** and a clear view while you pinch.
- **Carry a marquee** with a second finger.
- **A tap outside a bubble** no longer pastes the line there.

## Your first start

- **A Setup Assistant** guides your first launch (**Help → Setup Assistant…**).
- **Help → TypeR Tutorial** teaches TypeR Studio in short lessons, done in the real workspace on a practice chapter.
- **What's New** opens on the highlights, each with a short demo, and the full patch note below.
- **Help → Send Feedback…** lets you rate TypeR Studio and say what's missing.
- **Discord activity** shows your friends what you're working on (**Settings > Discord activity**).
- TypeR Studio has its own icon now, and **Help → About TypeR Studio** thanks Miller.

## TypeR 3.0.2 for Photoshop

The panel you use in Photoshop gets the bridge to TypeR Studio, and a few things you asked for.

- **Open in TypeR Studio,** a new footer button. It saves pending changes, asks where to save documents that have no file yet, and can send the script along. Hide it in **Settings > Appearance** like the other footer buttons.
- **Reading order of double and triple bubbles:** right to left for manga by default, left to right for comics and manhwa in the settings. The text direction no longer decides which part comes first.
- **Smart paste never gives up anymore.** A line too long for its bubble is placed at the smallest size, centred, overflowing as little as possible, instead of showing "Smart paste unavailable".
- **TextShapeR keeps your manual spaces,** repeated or non-breaking, so the words around them stay on the same line. It also trains on `.psb` pages.
- **Script auto-scrolling** can be turned off in the settings.
- **WebP import** in the Legacy panel, on Photoshop 23.2 and later.
- **Smart paste is much faster in the Legacy panel:** a long line in a shout bubble measures 31 candidate lines instead of 214, for the same result.

## Bug fixes

The fixes of 3.0.2, most noticeable first.

### Pasting

- **Auto clean text is visible again.** Since 3.0.1, it landed under the `TypeR Clean` layer, hidden by its fill.
- **"NAPI API failure: String expected"** no longer appears on every paste with a style whose All Caps (or another option) was turned off.
- **Multi-bubble with smart paste** no longer says "the bubble is open" for every bubble after the first, nor "No selected area." after a failed step.
- **A Magic Wand click without "Sample All Layers"** no longer drops the text in the middle of the page: TypeR turns the option on, says so, and clicks again.
- **Paragraph text stays paragraph text** when Photoshop rewraps it during conversion.

### Script

- **Pasting from Word or Google Docs** no longer cuts a paragraph into several lines or adds blank lines, and style prefixes like `**:` start their line again. Page headings in bold are recognised.
- **A script tag sets the style of its own line only:** the next untagged line goes back to the previous style (main → SFX → main).
- **The arrow of another line** inserts its text without moving the current line.
- **The script scrolls to the line just pasted** again in the new TypeR.

### Shortcuts and focus

- **Shortcuts no longer die** after a click paste or TextShapeR on Windows, when a Photoshop tooltip stole the keyboard.
- **Ctrl shortcuts** can be recorded again on Windows, and **Ctrl+Caps Lock** works as a shortcut, as in 2.x.
- **Mouse side buttons** that send the browser's Back and Forward keys can be set as shortcuts.
- **Held text size keys** repeat at once.
- **The new TypeR gives the focus back** to Photoshop when you leave the panel, without interrupting your typing.

### Starting the new TypeR

- **"TypeR could not display its interface"** no longer blocks you: when Photoshop refuses the panel its WebView (no Adobe sign-in, or no WebView2), TypeR runs right in the panel instead, with the same script, styles, paste and shortcuts.
- **On Windows,** when Photoshop is missing its WebView storage, TypeR offers a verified repair. When WebView2 is missing, the notice says so and gives an **Install WebView2** button.
- **"The plugin host does not answer"** at some Photoshop starts is fixed, and TypeR keeps waiting for a slow Photoshop instead of hiding its window.
- **TypeR Shortcuts.exe** reads the Windows keyboard again, the version Microsoft cleared of Defender's detection.

### Install and Legacy

- **The Windows installer** no longer stops on "Invalid package inventory" when a tool left Windows line endings or blank lines in it.
- **Legacy panel:** a text layer you click no longer loses its selection to the clean layer a second later, which broke Align and TextShapeR with "No text layer selected".

<details><summary>The full list, as written for the changelog</summary>

- Windows Legacy installer: inventories with blank lines, trailing whitespace, a byte order mark or Windows line endings pass validation, staged files are checked against the validated paths and hashes, and a wrong line is named.
- Smart paste places a text too long for its bubble itself, centred at the smallest size, instead of "Smart paste unavailable". Rare failures fall back to the classic paste without a warning.
- Smart paste keeps paragraph text when Photoshop rewraps it during conversion, or rolls back to the classic paste instead of silently creating point text.
- Active formatting buttons remain visible in custom editor themes.
- TextShapeR preserves repeated and non-breaking spaces, and trains on `.psb` pages.
- Script auto-scrolling can be turned off.
- WebP import in the Legacy panel on Photoshop 23.2 and newer.
- The new TypeR releases WebView focus when leaving the panel, and after a selection in Photoshop. Typing, IME composition and dragging are not interrupted.
- Windows: a verified repair of missing WebView storage, shipped in every UXP host, with the original DLL backed up. Unknown binaries are never patched, and no Adobe sign-in or licensing function is changed.
- The new TypeR runs inside the panel without a WebView when Photoshop refuses one (Photoshop 2026 without a signed-in Adobe user, or without a usable WebView2 runtime). See `docs/uxp-webview-refused.md` in the TypeR repository.
- Windows: the keyboard is read by TypeR Shortcuts.exe again, which also reads mouse Back and Forward keys and gives the focus back when a Photoshop tooltip takes it.
- Auto clean: the text is made above the `TypeR Clean` layer again. New text layers are created above the active layer, as before 3.0, and only brought to the front when the clean layer would hide them.
- Pasting from Word, Google Docs or another editor no longer splits paragraphs, adds blank lines or escapes `*` and `_`. Bold page headings are read as page headings.
- The script scrolls to the line just pasted in the new TypeR.
- Multi-bubble with smart paste selects stored bubbles with "Sample All Layers", falls back on the stored bounds, leaves no half-made text, and names the step Photoshop refused.
- Ctrl+Caps Lock, and Caps Lock with another modifier, can be set as shortcuts.
- The new TypeR keeps waiting for a WebView that takes more than 15 s to start (Photoshop 27.7), and opens by itself when it does.
- Windows: a missing or damaged WebView2 runtime is named in the notice, with an Install WebView2 button, and the installer warns when none exists. The support collector reads the whole UXP log and inventories Photoshop and WebView2.
- Windows: Ctrl shortcuts can be recorded in the new TypeR.
- "The plugin host does not answer" is fixed: the panel's files are read once, a stuck read restarts after 15 s, and the panel reloads itself once.
- Legacy panel: smart paste needs far fewer ExtendScript round trips, history checks are lighter, and the script's language is detected once per script.
- Legacy panel: a wand click on the next bubble no longer starts a TextShapeR outline read on the text just pasted.
- Legacy panel: the clicked layers are kept after TypeR's temporary history reads.
- Windows: shortcuts come back after a click paste or a TextShapeR click, and the focus returns to the document after Insert, a style or a TextShapeR shape.
- The new TypeR no longer fails with "NAPI API failure: String expected" on styles with a cleared option.
- A script tag sets the style of its own line only.
- The arrow of a line other than the current one no longer moves the current line.
- A wand click made without "Sample All Layers" on the text just pasted is made again with the option on.
- Windows: mouse Back and Forward keys can be set as shortcuts, in both panels.
- Held text size keys repeat at once.
- The reading order of double and triple bubbles is a setting: right to left (manga) by default, left to right (comics, manhwa).
- Open in TypeR Studio in the footer, and the script TypeR Studio sends with its pages is opened in the matching tab.

</details>

Something still wrong? Tell us on [Discord](https://discord.com/invite/Pdmfmqk) or on [GitHub](https://github.com/ScanR/TypeR/issues).
