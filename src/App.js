import "./styles.css";
import church_main from "./assets/church_main.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="mainPicture">
        <img src={church_main} alt="church_main" />
      </div>
      <h1>Bethany Church</h1>
      <h2>Landing page</h2>
    </div>
  );
}
