import React, { Suspense } from "react";
import {
  Await,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { deleteNote, getNoteById } from "../../../api/notes";
import { useAuthContext } from "../../../components/authContextProvider/authContextProvider";
import NoteControls from "../../../components/note/NoteControls";
import NotePageSkeleton from "../../../components/skeletons/NotePageSkeleton";
import { NotFoundRedirect } from "../../404";

const NotePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const fn = useLoaderData() as ReturnType<typeof loader>;
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/notes"
        className="bg-blue-500 text-white text-center py-1 px-2 flex max-w-[100px]"
      >
        {"<-"} Back
      </Link>
      <Suspense fallback={<NotePageSkeleton />}>
        <Await resolve={fn(user?.id!)} errorElement={<NotFoundRedirect />}>
          {(note) => (
            <>
              <div className="flex gap-1 items-center">
                <h3 className="font-bold text-center text-xl">{note.title} </h3>
                <NoteControls
                  onEdit={() => navigate(`/notes/${note.id}/edit`)}
                  onDelete={() => {
                    deleteNote(note.id);
                    navigate(`/notes`);
                  }}
                />
              </div>
              <p>{note.body} </p>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default NotePage;
export const loader = ({ params }: LoaderFunctionArgs) => {
  const id = params.id ? (isNaN(+params.id) ? 0 : +params.id) : 0;
  const promise = getNoteById(id);
  return (userId: number) =>
    promise.then((note) => {
      if (note.userId === userId) return note;
      throw new Error("Access Denied");
    });
};
