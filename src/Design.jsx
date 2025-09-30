import { useState } from "react";
import design from "./assets/design.png";
import "./App.css";

const PRESETS = [
  { name: "Soft Blue", color: "#a7c7e7" },
  { name: "Gold Thread", color: "#ffd700" },
  { name: "Purple Accent", color: "#b19cd9" },
  { name: "Pink Edge", color: "#ffb6c1" },
  { name: "White + Green", color: "#ffffff" },
  { name: "Black Pin", color: "#111111" },
];

function Swatch({ color, onClick, name }) {
  return (
    <button
      className="swatch"
      title={name}
      onClick={() => onClick(color)}
      style={{ background: color }}
    />
  );
}

export default function Design() {
  const [primary, setPrimary] = useState(PRESETS[0].color);
  const [accent, setAccent] = useState("#ffffff");

  return (
    <div className="container">
      <header>
        <a
          href="/"
          className="cta-button"
          style={{ display: "inline-block", marginBottom: "1rem" }}
        >
          ← Back
        </a>
        <h1>Design your pin</h1>
        <p className="tagline">Pick a color, or choose from presets.</p>
      </header>

      <div className="designer-grid">
        <div className="preview-wrapper">
          <div className="preview" style={{ background: primary }}>
            <img src={design} alt="pin overlay" className="overlay-image" />
          </div>
        </div>

        <aside className="designer-controls">
          <h3>Presets</h3>
          <div className="swatch-grid">
            {PRESETS.map((p) => (
              <Swatch
                key={p.name}
                color={p.color}
                onClick={setPrimary}
                name={p.name}
              />
            ))}
          </div>

          <h3 style={{ marginTop: "1rem" }}>Custom colors</h3>
          <label className="color-input-row">
            Primary
            <input
              type="color"
              value={primary}
              onChange={(e) => setPrimary(e.target.value)}
            />
          </label>

          <label className="color-input-row">
            Accent (optional)
            <input
              type="color"
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
            />
          </label>

          <div style={{ marginTop: "1.25rem" }}>
            <button
              className="cta-button"
              onClick={() => navigator.clipboard?.writeText(primary)}
            >
              Copy primary color
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
