import "./style/home.css";
import Navbar from "./components/navbar";

export default function DonatePage() {
  return (
    <div className="page">
      <Navbar />
      <section className="beige-section">
        <div className="card">Card One</div>
        <div className="card">Card Two</div>
        <div className="card">Card Three</div>
      </section>
      <main className="content"></main>
    </div>
  );
}