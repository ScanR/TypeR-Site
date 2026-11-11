import { useEffect, useRef, useState } from "react";
import { LINKS } from "../data/content";
import { AppleIcon, LinuxIcon, WindowsIcon } from "./OsIcons";

// The Download buttons open this choice: the Photoshop extension, or TypeR Studio.
// `openDownloads()` can be called from anywhere; the dialog lives in the nav, on every page.
const EVENT = "typer-downloads";

export function openDownloads(e?: React.MouseEvent) {
  e?.preventDefault();
  dispatchEvent(new Event(EVENT));
}

type Os = "mac-arm" | "mac-intel" | "win" | "linux" | "linux-deb" | "";

// `label` names the download for screen readers and tests; `system` and `kind` are what the
// buttons show, the big one for this computer and the small ones for the others.
const STUDIO: { id: Os; label: string; system: string; kind: string; detail: string; href: string; Icon: typeof AppleIcon }[] = [
  { id: "mac-arm", label: "Mac (Apple chip)", system: "Mac", kind: "Apple chip", detail: "Apple chip · .dmg", href: LINKS.studioMacArm, Icon: AppleIcon },
  { id: "mac-intel", label: "Mac (Intel)", system: "Mac", kind: "Intel", detail: "Intel · .dmg", href: LINKS.studioMacIntel, Icon: AppleIcon },
  { id: "win", label: "Windows", system: "Windows", kind: "Windows", detail: "64-bit installer · .exe", href: LINKS.studioWindows, Icon: WindowsIcon },
  { id: "linux", label: "Linux (AppImage)", system: "Linux", kind: "AppImage", detail: "AppImage · any distribution", href: LINKS.studioLinuxAppImage, Icon: LinuxIcon },
  { id: "linux-deb", label: "Linux (.deb)", system: "Linux", kind: ".deb", detail: ".deb · Ubuntu and Debian", href: LINKS.studioLinuxDeb, Icon: LinuxIcon },
];

const NOTES: Record<"mac" | "win" | "linux", string> = {
  mac: "Signed and notarized. Not sure which Mac you have? Apple menu > About This Mac: a Chip line means Apple chip, a Processor line means Intel.",
  win: "If SmartScreen stops it, choose More info, then Run anyway.",
  linux: "The AppImage runs on any distribution and updates itself; the .deb is for Ubuntu and Debian.",
};
const familyOf = (os: Os) => (os.startsWith("mac") ? "mac" : os.startsWith("linux") ? "linux" : os === "win" ? "win" : "");

type UAData = { getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string }> };

// This computer's own download stands out, when the browser can tell which it is
function useOs(): Os {
  const [os, setOs] = useState<Os>("");
  useEffect(() => {
    const platform = navigator.platform || navigator.userAgent;
    if (/win/i.test(platform)) setOs("win");
    else if (/linux/i.test(platform) && !/android/i.test(navigator.userAgent)) setOs("linux");
    else if (/mac/i.test(platform) && !/iPhone|iPad/i.test(navigator.userAgent)) {
      setOs("mac-arm");
      const ua = (navigator as Navigator & { userAgentData?: UAData }).userAgentData;
      ua?.getHighEntropyValues?.(["architecture"])
        .then(({ architecture }) => architecture === "x86" && setOs("mac-intel"))
        .catch(() => {});
    }
  }, []);
  return os;
}

export default function Downloads({ base = "" }: { base?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  const os = useOs();
  const mine = STUDIO.find((s) => s.id === os);
  const others = STUDIO.filter((s) => s !== mine);
  const family = familyOf(os);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    const open = () => !dlg.open && dlg.showModal();
    const onClick = (e: MouseEvent) => e.target === dlg && dlg.close();
    addEventListener(EVENT, open);
    dlg.addEventListener("click", onClick);
    return () => {
      removeEventListener(EVENT, open);
      dlg.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <dialog className="downloads" ref={ref} aria-labelledby="downloads-title">
      <form method="dialog">
        <button className="downloads__close" aria-label="Close">
          ×
        </button>
      </form>
      <h2 className="downloads__title" id="downloads-title">
        Download TypeR
      </h2>
      <div className="downloads__grid">
        <section className="downloads__option">
          <h3>TypeR for Photoshop</h3>
          <p>The extension, right in Photoshop 2025 or later, with a Legacy edition back to CC 2015.</p>
          <div className="downloads__links">
            <a className="btn btn--fill btn--block" href={base + "#install"} onClick={() => ref.current?.close()}>
              Install the extension
            </a>
          </div>
          <p className="downloads__fine">
            One command, or <a href={LINKS.download}>the ZIP</a>. Windows and macOS.
          </p>
        </section>

        <section className="downloads__option">
          <h3>
            TypeR Studio <span className="badge badge--soft">New</span>
          </h3>
          <p>A free, lightweight Photoshop-like app made for lettering. No Photoshop needed: it opens and saves PSD files, with the TypeR panel built in.</p>
          <div className="downloads__links">
            {mine && (
              <a className="btn btn--fill btn--block downloads__primary" href={mine.href} aria-label={`Download for ${mine.label}`}>
                <mine.Icon className="downloads__icon" />
                <span className="downloads__primary-text">
                  <span>Download for {mine.system}</span>
                  <small>{mine.detail}</small>
                </span>
              </a>
            )}
            <p className="downloads__others-title">{mine ? "Other systems" : "Choose your system"}</p>
            <div className={`downloads__others${mine ? "" : " downloads__others--all"}`}>
              {others.map((s) => (
                <a key={s.id} className="downloads__chip" href={s.href} aria-label={s.label}>
                  <s.Icon className="downloads__icon" />
                  <span>
                    {s.system === s.kind ? s.system : (
                      <>
                        {s.system} <span className="downloads__chip-kind">{s.kind}</span>
                      </>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <p className="downloads__fine">
            {family ? NOTES[family] : "On Windows, if SmartScreen stops it, choose More info, then Run anyway. On Linux, the AppImage runs on any distribution and updates itself; the .deb is for Ubuntu and Debian."}
          </p>
        </section>
      </div>
    </dialog>
  );
}
