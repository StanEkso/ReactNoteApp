import React, { Suspense } from "react";
import {
  Await,
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { getNoteById, updateNode } from "../../../../api/notes";
import { useAuthContext } from "../../../../components/authContextProvider/authContextProvider";
import FormBuilder from "../../../../components/formBuilder/FormBuilder";
import EditNoteSkeleton from "../../../../components/skeletons/EditNoteSkeleton";
import { Note } from "../../../../types/note";
import { NotFoundRedirect } from "../../../404";

const EditNotePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const fn = useLoaderData() as ReturnType<typeof loader>;
  const sumbitHandler = (note: Note) => (payload: Record<string, string>) => {
    return updateNode({ ...note, ...payload }).then(() => navigate(-1));
  };
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/notes"
        className="bg-blue-500 text-white text-center py-1 px-2 flex max-w-[100px]"
      >
        {"<-"} Back
      </Link>
      <Suspense fallback={<EditNoteSkeleton />}>
        <Await resolve={fn(user?.id!)} errorElement={<NotFoundRedirect />}>
          {(note) => (
            <>
              <h3 className="font-bold text-center text-xl">Edit Note</h3>
              <FormBuilder
                onSumbit={sumbitHandler(note)}
                controls={[
                  {
                    name: "title",
                    type: "text",
                    placeholder: "Title",
                    defaultValue: note.title,
                  },
                  {
                    name: "body",
                    placeholder: "Note text",
                    customElement: "textarea",
                    defaultValue: note.body,
                  },
                ]}
              />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default EditNotePage;
export const loader = ({ params }: LoaderFunctionArgs) => {
  const id = params.id ? (isNaN(+params.id) ? 0 : +params.id) : 0;
  const promise = getNoteById(id);
  return (userId: number) =>
    promise.then((note) => {
      if (note.userId === userId) return note;
      throw new Error("Access Denied");
    });
};
