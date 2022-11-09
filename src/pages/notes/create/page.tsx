import React from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../../../api";
import { useAuthContext } from "../../../components/authContextProvider/authContextProvider";
import FormBuilder from "../../../components/formBuilder/FormBuilder";
import BackButton from "../../../components/navigationElements/BackButton";

const CreateNote = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = (payload: Record<string, string>) => {
    return createNote({
      title: payload.title,
      body: payload.body,
      userId: user?.id || 0,
    }).then((note) => {
      navigate("/notes/" + note.id);
    });
  };
  return (
    <div className="flex flex-col gap-3">
      <BackButton />
      <h3 className="font-bold text-center text-xl">Create new Note</h3>
      <FormBuilder
        onSumbit={handleSubmit}
        controls={[
          {
            name: "title",
            placeholder: "Title",
            required: true,
          },
          {
            name: "body",
            placeholder: "Body",
          },
        ]}
      />
    </div>
  );
};

export default CreateNote;
