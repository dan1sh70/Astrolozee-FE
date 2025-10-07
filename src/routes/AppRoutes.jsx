import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./../components/pages/LandingPage";
import Login from "./../components/pages/Auth/Login";
import Signup from "./../components/pages/Auth/Signup";
import KundliGenerator from "./../components/pages/KundliGenerator";
import QnA from "../components/pages/QnA";
import Remedies from "./../components/pages/Remedies";
import Membership from "./../components/pages/Membership";
import CompleteProfilePage from "../components/pages/Auth/CompleteProfilePage";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/kundli" element={<KundliGenerator />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/remedies" element={<Remedies />} />
        <Route path="/complete-profile" element={<CompleteProfilePage/>} />
        
      </Routes>
    </BrowserRouter>
  );
}
