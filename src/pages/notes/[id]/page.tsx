import React, { Suspense } from "react";
import {
  Await,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { deleteNote, getUserNoteById } from "../../../api";
import { useAuthContext } from "../../../components/authContextProvider/authContextProvider";
import BackButton from "../../../components/navigationElements/BackButton";
import NoteControls from "../../../components/note/NoteControls";
import NotePageSkeleton from "../../../components/skeletons/NotePageSkeleton";
import { NotFoundRedirect } from "../../404";

const NotePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { getNoteInfo } = useLoaderData() as ReturnType<typeof loader>;
  return (
    <div className="flex flex-col gap-3">
      <BackButton />
      <Suspense fallback={<NotePageSkeleton />}>
        <Await
          resolve={getNoteInfo(user?.id || 0)}
          errorElement={<NotFoundRedirect />}
        >
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
  return {
    getNoteInfo: (userId: number) => getUserNoteById(userId, id),
  };
};
