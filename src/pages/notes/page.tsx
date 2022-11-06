import React, { Suspense } from "react";
import { Await, Link, useNavigate } from "react-router-dom";
import { deleteNote, getNotes } from "../../api/notes";
import { useAuthContext } from "../../components/authContextProvider/authContextProvider";
import NoteElement from "../../components/note/Note";
import ListSkeleton from "../../components/skeletons/ListSkeleton";
import NoteSkeleton from "../../components/skeletons/NoteSkeleton";
import { Note } from "../../types/note";

const NotesPage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleChange = (id: number) => {
    navigate("/notes/" + id + "/edit");
  };
  const handleDelete = (id: number) => {
    deleteNote(id);
  };
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
          {(notes: Note[]) => (
            <div className="flex flex-col max-w-full gap-3">
              {notes.map((note) => (
                <NoteElement
                  key={note.id}
                  {...note}
                  onEdit={() => handleChange(note.id)}
                  onDelete={() => handleDelete(note.id)}
                />
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default NotesPage;
