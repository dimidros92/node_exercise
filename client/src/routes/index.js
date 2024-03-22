import { createBrowserRouter } from "react-router-dom";
import { MessageHistoryPage } from "../pages/MessageHistoryPage";

const router = createBrowserRouter([
  { path: "/", element: <MessageHistoryPage /> },
]);

export default router;
