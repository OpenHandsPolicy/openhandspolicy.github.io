import "./App.css";
import logo from "./assets/logo.webp";

function App() {
  return (
    <div className="container">
      <header>
        <img className="logo" src={logo} alt="OpenHands Logo" />
        <h1>OpenHands</h1>
        <p className="tagline">
          _A quiet signal. A simple promise. A shared language of care._
        </p>
      </header>

      <section>
        <h2>✨ What is OpenHands?</h2>
        <p className="section-intro">
          <strong>OpenHands is a community symbol. A wearable gesture.</strong>
        </p>
        <blockquote>
          "You’re safe with me. If you’re in need, I will try to help."
        </blockquote>
        <p>
          Two open palms. That’s it. Kindness you can wear. Compassion without
          noise.
        </p>
        <p>
          You don’t have to speak. You don’t have to explain. If you know the
          symbol, you know what it means.
        </p>
      </section>

      <section>
        <h2>🎨 What Do the Colors Mean?</h2>
        <p className="section-intro">
          Each pin is customizable—because help looks different for everyone.
        </p>

        <div className="color-meanings">
          <ul className="color-list">
            <li className="color-item">
              {" "}
              <strong>🩵 Soft Blue</strong> <span>— Mental health allyship</span>{" "}
            </li>
            <li className="color-item">
              {" "}
              <strong>🧡 Gold Thread</strong>{" "}
              <span>— Will help with food, water, or shelter</span>{" "}
            </li>
            <li className="color-item">
              {" "}
              <strong>💜 Purple Accent</strong>{" "}
              <span>— Neurodivergence awareness</span>{" "}
            </li>
            <li className="color-item">
              {" "}
              <strong>💗 Pink Edge</strong> <span>— LGBTQIA+ support</span>{" "}
            </li>
            <li className="color-item">
              {" "}
              <strong>⚪ White + Green</strong>{" "}
              <span>— Muslim community safety</span>{" "}
            </li>
            <li className="color-item">
              {" "}
              <strong>⚫ Black Pin</strong>{" "}
              <span>— No questions, no words. Will step in.</span>{" "}
            </li>
          </ul>
          <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
            You don’t need permission to care. But the colors help people know{" "}
            <em>how</em> you care.
          </p>
        </div>
      </section>

      <section>
        <h2>🛠️ How to Use It</h2>
        <div className="how-to-use">
          <ul>
            <li>Wear a pin on your bag, jacket, or lanyard</li>
            <li>
              Place the symbol on your shop window, event table, or profile
            </li>
            <li>
              Build your own colors—or choose none. The open hands speak enough.
            </li>
          </ul>
          <div className="beacon-badge">
            This isn’t a brand — it’s a beacon.
          </div>
        </div>
      </section>

      <section>
        <h2>🧶 Why It Matters</h2>
        <p>
          The world is loud. Sometimes cruel. And yet—we still reach out. Still
          hold each other up. OpenHands is for <em>those moments</em>.
        </p>
        <p>
          For the person looking for a soft place to land. For the stranger who
          sees your pin and dares to ask, “Can you help me?” For the version of
          you who once needed it.
        </p>
      </section>

      <section>
        <h2>💌 Want to Join?</h2>
        <p>
          This is just the beginning. You can make your own. You can share the
          idea. You can help us shape it.
        </p>

        <div className="cta-grid">
          <a className="cta-button" href="#" aria-label="Join the conversation">
            <span>💬</span>Join the conversation
          </a>
          <a className="cta-button" href="#" aria-label="Design your pin">
            <span>🎨</span>Design your pin
          </a>
          <a className="cta-button" href="#" aria-label="Shop coming soon">
            <span>🛍️</span>Shop (coming soon)
          </a>
          <a className="cta-button" href="#" aria-label="Guide for communities">
            <span>🧭</span>Guide for communities, teachers, event hosts
          </a>
          <a
            className="cta-button"
            href="#"
            aria-label="The story behind OpenHands"
          >
            <span>📖</span>The Story Behind OpenHands
          </a>
        </div>
      </section>

      <hr />

      <footer>
        <p className="footer-message">
          <em>
            One pin can say everything. You are safe. I see you. I will help if
            I can.
          </em>
        </p>
        <p className="footer-tagline">
          OpenHands. <span style={{ fontStyle: "italic" }}>Wear care.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
