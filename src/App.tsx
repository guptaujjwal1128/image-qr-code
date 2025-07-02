import "./App.css";
import qrCodeImg from "./assets/images/image-qr-code.png";

function App() {
  return (
    <main className="container">
      <div className="card">
        <img className="card-img" src={qrCodeImg} alt="QR Code" />
        <div className="card-content">
          <div className="card-content-primary">
            Improve your front-end skills by building projects
          </div>
          <div className="card-content-secondary">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
