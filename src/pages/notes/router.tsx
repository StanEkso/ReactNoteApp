import { RouteObject } from "react-router-dom";
import CreateNote from "./create/page";
import NotesPage from "./page";
import EditNotePage from "./[id]/edit/page";
import NotePage, { loader as noteLoader } from "./[id]/page";
export const notesRoutes: RouteObject[] = [
  {
    path: "",
    element: <NotesPage />,
  },
  {
    path: "create/",
    element: <CreateNote />,
  },
  {
    path: ":id/edit/",
    element: <EditNotePage />,
    loader: noteLoader,
  },
  {
    path: ":id/",
    element: <NotePage />,
    loader: noteLoader,
  },
];
