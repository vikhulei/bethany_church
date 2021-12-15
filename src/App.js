import "./styles.css";
import church_main from "./assets/church_main.jpg"

export default function App() {
  return (
    <div className="App">
      <div className="mainPicture">
        <img src={church_main} alt="main picture" />
      </div> 
      <h1>Bethany Church Local</h1>
      <h2>Landing page</h2>
    </div>
  );
}
