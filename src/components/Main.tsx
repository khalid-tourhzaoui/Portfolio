import { Routes, Route } from "react-router-dom";
import {HomePage} from ".././pages/HomePage";
export const Main = () => {
  return (
    <main className="box-border caret-transparent">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
};
