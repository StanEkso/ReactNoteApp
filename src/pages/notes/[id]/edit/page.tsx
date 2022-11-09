import React, { Suspense, useCallback } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { updateNode } from "../../../../api";
import { useAuthContext } from "../../../../components/authContextProvider/authContextProvider";
import FormBuilder from "../../../../components/formBuilder/FormBuilder";
import BackButton from "../../../../components/navigationElements/BackButton";
import EditNoteSkeleton from "../../../../components/skeletons/EditNoteSkeleton";
import { NotFoundRedirect } from "../../../404";
import { loader as noteLoader } from "../page";

const EditNotePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { getNoteInfo, id } = useLoaderData() as ReturnType<typeof noteLoader>;
  const submitHandler = useCallback(
    (payload: Record<string, string>) =>
      updateNode({ id, ...payload }).then((note) =>
        navigate(`/notes/${note.id}`)
      ),
    [id, navigate]
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
                onSumbit={submitHandler}
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
