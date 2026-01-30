import { Routes, Route } from "react-router-dom";
import {HomePage} from ".././pages/HomePage";
import ProjectDetailPage from ".././pages/ProjectDetailPage";
// import ContactPage from ".././pages/ContactPage";
export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </main>
  );
};
