import Guide from "./pages/Guide";
import "../src/styles/global.css";
import Ex from "./components/PasswordModal"
import Me from "./components/ToastMessagePrint"

function App() {
  return (
    <div>
      <Guide />
      <Ex />
      <Me />
    </div>
  );
}

export default App;
