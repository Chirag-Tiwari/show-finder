import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ShowDetails from "./components/ShowDetails";
import ShowList from "./components/ShowList";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ShowList />} />
        <Route path="shows/:showId" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
