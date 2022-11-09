import React from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../../../api";
import { useAuthContext } from "../../../components/authContextProvider/authContextProvider";
import FormErrorBoundary from "../../../components/formBuilder/FormErrorBoundary";
import StyledInput from "../../../components/formBuilder/StyledInput";
import StyledTextarea from "../../../components/formBuilder/StyledTextarea";
import BackButton from "../../../components/navigationElements/BackButton";
import { useForm } from "../../../hooks/useForm";

const CreateNote = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { payload, setError, changeHandler } = useForm();
  const handleSubmit = () => {
    createNote({
      title: payload.title,
      body: payload.body,
      userId: user?.id || 0,
    })
      .then((note) => {
        navigate("/notes/" + note.id);
      })
      .catch(() => {
        setError("Error occurred while creating note");
      });
  };
  return (
    <div className="flex flex-col gap-3">
      <BackButton />
      <h3 className="font-bold text-center text-xl">Create new Note</h3>
      <FormErrorBoundary onSubmit={handleSubmit} error={payload.error}>
        <StyledInput
          name="title"
          type="text"
          placeholder="Title"
          onChange={changeHandler}
          required
        />
        <StyledTextarea
          name="body"
          type="text"
          placeholder="Note body"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-sm py-1"
        >
          Create
        </button>
      </FormErrorBoundary>
    </div>
  );
};

export default CreateNote;
