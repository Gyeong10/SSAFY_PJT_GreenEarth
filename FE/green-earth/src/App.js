import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import EditAccountPage from "./pages/EditAccountPage";
import ChildMainPage from "./pages/ChildMainPage";
import ParentMainPage from "./pages/ParentMainPage";
import ProfilePage from "./pages/ProfilePage";
import GamePage from "./pages/GamePage";
import GamePicturePage from "./pages/GamePicturePage";
import GameRecyclePage from "./pages/GameRecyclePage";
import MissionInfoPage from "./pages/MissionInfoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/account/:child_id" element={<EditAccountPage />} />
          <Route path="/child" element={<ChildMainPage />} />
          <Route path="/parent" element={<ParentMainPage />} />
          <Route path="/profile/:child_id" element={<ProfilePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/game/picture" element={<GamePicturePage />} />
          <Route path="/game/recycle" element={<GameRecyclePage />} />
          <Route path="/mission" element={<MissionInfoPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
