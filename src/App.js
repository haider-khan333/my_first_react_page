import logo from "./logo.svg";
// import "./App.css";
import "./styles.css";
import Header from "./Header";
import MainContent from "./MainContent";

export default function App() {
  return (
    <div className="container card app p-0">
      <Header />
      <MainContent />
    </div>
  );
}
