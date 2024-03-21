import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MessageHistoryPage } from "../pages/MessageHistoryPage";

const router = createBrowserRouter([
  { path: "/", element: <MessageHistoryPage /> },
]);

export default router;
