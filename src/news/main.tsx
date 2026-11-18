import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import Nav from "../components/Nav";
import { useScrollChoreography } from "../hooks/useScrollChoreography";
import { startMedia } from "./media";
import "../styles/site.css";

// The news pages, and the legal ones, are static HTML: only the nav and the scroll spy run here.
// The nav marks News on the news pages, nothing on the others, as the HTML does.
const current = location.pathname.startsWith("/news/") ? "/news/" : "";

function Client() {
  useScrollChoreography();
  return <Nav base="/" current={current} />;
}

startMedia();

hydrateRoot(
  document.getElementById("nav-host")!,
  <StrictMode>
    <Client />
  </StrictMode>,
);
