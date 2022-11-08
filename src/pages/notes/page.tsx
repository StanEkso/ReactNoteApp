import React, { Suspense } from "react";
import { Await, Link, useNavigate } from "react-router-dom";
import { deleteNote, getNotes } from "../../api";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";
import NoteList from "../../components/note/NoteList";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import NoteSkeleton from "../../components/skeletons/NoteSkeleton";
import { Note } from "../../types/note";
import { NotFoundRedirect } from "../404";

const NotesPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleChange = (id: number) => {
    navigate("/notes/" + id + "/edit");
  };
  const handleDelete = (id: number) => {
    deleteNote(id).then(() => {
      navigate("");
    });
  };
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/notes/create"
        className="bg-blue-500 text-white text-center py-1 px-2 max-w-xs mx-auto"
      >
        Add new note
      </Link>
      <Suspense fallback={<ListSkeleton element={NoteSkeleton} length={5} />}>
        <Await
          resolve={getNotes(user?.id || 0)}
          errorElement={<NotFoundRedirect />}
        >
          {(notes: Note[]) => (
            <NoteList
              notes={notes}
              onEdit={handleChange}
              onDelete={handleDelete}
            />
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default NotesPage;
