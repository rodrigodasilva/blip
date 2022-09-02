import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "@/layouts/Default";

import Spinner from "../components/Spinner";

const ChabotList = lazy(() => import("../pages/ChatbotList"));
const ChatbotDetails = lazy(() => import("../pages/ChatbotDetails"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Suspense fallback={<Spinner className="mx-auto" />}>
          <Routes>
            <Route path="/" element={<ChabotList />} />
            <Route path="/:short_name/details" element={<ChatbotDetails />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </BrowserRouter>
  );
}
