import React, { Suspense, useCallback, useMemo } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { updateNode } from "../../../../api";
import { useAuthContext } from "../../../../components/authContextProvider/authContextProvider";
import FormErrorBoundary from "../../../../components/formBuilder/FormErrorBoundary";
import StyledInput from "../../../../components/formBuilder/StyledInput";
import StyledTextarea from "../../../../components/formBuilder/StyledTextarea";
import BackButton from "../../../../components/navigationElements/BackButton";
import EditNoteSkeleton from "../../../../components/skeletons/EditNoteSkeleton";
import { useForm } from "../../../../hooks/useForm";
import { NotFoundRedirect } from "../../../404";
import { loader as noteLoader } from "../page";

const EditNotePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { payload, setError, changeHandler } = useForm();
  const { getNoteInfo, id } = useLoaderData() as ReturnType<typeof noteLoader>;
  const submitHandler = useCallback(
    () =>
      updateNode({ id, ...payload })
        .then((note) => navigate(`/notes/${note.id}`))
        .catch(() => {
          setError("Error occurred while editing note");
        }),
    [id, navigate, payload, setError]
  );
  const notePromise = useMemo(
    () => getNoteInfo(user?.id || 0),
    [getNoteInfo, user?.id]
  );
  return (
    <div className="flex flex-col gap-3">
      <BackButton />
      <Suspense fallback={<EditNoteSkeleton />}>
        <Await resolve={notePromise} errorElement={<NotFoundRedirect />}>
          {(note) => (
            <>
              <h3 className="font-bold text-center text-xl">Edit Note</h3>
              <FormErrorBoundary onSubmit={submitHandler} error={payload.error}>
                <StyledInput
                  name="title"
                  type="text"
                  placeholder="Title"
                  defaultValue={note.title}
                  onChange={changeHandler}
                  required
                />
                <StyledTextarea
                  name="body"
                  type="text"
                  placeholder="Note body"
                  onChange={changeHandler}
                  defaultValue={note.body}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-sm py-1"
                >
                  Save
                </button>
              </FormErrorBoundary>
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default EditNotePage;
