import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page404 } from "~/views/Page404";
import { TeamPage } from "~/views/Team";

export const RoutesTree = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};
