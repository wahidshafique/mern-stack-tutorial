import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../../../../shared/types";
//@ts-ignore
import FileBase from "react-file-base64";
import { useForm } from "react-hook-form";
import { createPost } from "tut-redux/slices/postsSlice";

enum InputNames {
  Creator = "creator",
  Title = "title",
  Message = "message",
  Tags = "tags",
  Image = "image",
}

export default function Form() {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, reset } = useForm();
  register(InputNames.Image);
  const onSubmit = (data: Post) => {
    console.log("formData", data);
    dispatch(createPost(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>{InputNames.Creator}</p>
        <input
          name={InputNames.Creator}
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <p>{InputNames.Title}</p>
        <input
          name={InputNames.Title}
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <p>{InputNames.Message}</p>
        <input
          name={InputNames.Message}
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <p>{InputNames.Tags}</p>
        <input
          name={InputNames.Tags}
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <FileBase
        type="file"
        multiple={false}
        onDone={(res: unknown) => {
          setValue(InputNames.Image, res);
        }}
      />
      <button type="submit">submit</button>
      <button onClick={reset}>clear</button>
    </form>
  );
}
