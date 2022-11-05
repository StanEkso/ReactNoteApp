import React, { Suspense } from "react";
import { Await, Link } from "react-router-dom";
import { getNotes } from "../../api/notes";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";
import NoteList from "../../components/note/NoteList";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import NoteSkeleton from "../../components/skeletons/NoteSkeleton";
import { Note } from "../../types/note";

const NotesPage = () => {
  const { user } = useAuthContext();
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/notes/create"
        className="bg-blue-500 text-white text-center py-1 px-2"
      >
        Add new note
      </Link>
      <Suspense fallback={<ListSkeleton element={NoteSkeleton} length={5} />}>
        <Await resolve={getNotes(user?.id || 0)}>
          {(notes: Note[]) => <NoteList notes={notes} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default NotesPage;
