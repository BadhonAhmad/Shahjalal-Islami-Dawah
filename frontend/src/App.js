import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Donate from "./Pages/Donate";
import Picture from "./Pages/Picture";
import Video from "./Pages/Video";
import Activities from "./Pages/Activities";
import Membership from "./Pages/Membership";
import SuccessDonation from "./Components/DonationStatus/SuccessDonation.jsx";
import FailedDonation from "./Components/DonationStatus/FailedDonation.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/gallery" element={<Picture />} />
          <Route path="/video" element={<Video />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/donation/success" element={<SuccessDonation />} />
          <Route path="/donation/fail" element={<FailedDonation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
