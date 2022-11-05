import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

const CreateNote = () => {
  const { payload, changeHandler } = useForm();
  const sumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(payload);
  };
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/notes"
        className="bg-blue-500 text-white text-center py-1 px-2 flex max-w-[100px]"
      >
        {"<-"} Back
      </Link>
      <h3 className="font-bold text-center text-xl">Create new Note</h3>
      <form className="grid gap-1" onSubmit={sumbitHandler}>
        <input
          type="text"
          className="py-1 px-2 border-2 rounded-sm invalid:border-red-600"
          name="title"
          placeholder="Title"
          onChange={changeHandler}
        />
        <textarea
          name="body"
          onChange={changeHandler}
          className="py-1 px-2 border-2 rounded-sm invalid:border-red-600"
          placeholder="Note body.."
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-sm py-1"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
