import { Routes, Route } from "react-router";

import Layout from "@/components/Layout"
import Dashboard from "@/pages/Dashboard"
import Servers from "@/pages/Servers";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/servers" element={<Servers />} />
      </Route>      
    </Routes>
  );
}
