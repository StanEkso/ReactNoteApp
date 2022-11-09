import React, { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { updateNode } from "../../../../api";
import { useAuthContext } from "../../../../components/authContextProvider/authContextProvider";
import FormBuilder from "../../../../components/formBuilder/FormBuilder";
import BackButton from "../../../../components/navigationElements/BackButton";
import EditNoteSkeleton from "../../../../components/skeletons/EditNoteSkeleton";
import { Note } from "../../../../types/note";
import { NotFoundRedirect } from "../../../404";
import { loader as noteLoader } from "../page";

const EditNotePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { getNoteInfo } = useLoaderData() as ReturnType<typeof noteLoader>;
  const submitHandler = (note: Note) => (payload: Record<string, string>) =>
    updateNode({ ...note, ...payload }).then((note) =>
      navigate(`/notes/${note.id}`)
    );
  return (
    <div className="flex flex-col gap-3">
      <BackButton />
      <Suspense fallback={<EditNoteSkeleton />}>
        <Await
          resolve={getNoteInfo(user?.id || 0)}
          errorElement={<NotFoundRedirect />}
        >
          {(note) => (
            <>
              <h3 className="font-bold text-center text-xl">Edit Note</h3>
              <FormBuilder
                onSumbit={submitHandler(note)}
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
