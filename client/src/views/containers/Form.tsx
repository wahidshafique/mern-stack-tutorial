import React, { useState } from "react";
import { useSelector } from "react-redux";
//@ts-ignore
import FileBase from "react-file-base64";
import { useForm } from "react-hook-form";

enum inputNames {
  creator = "creator",
  title = "title",
  message = "message",
  tags = "tags",
}

export default function Form() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>{inputNames.creator}</p>
        <input
          name={inputNames.creator}
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <p>{inputNames.title}</p>
        <input
          name={inputNames.title}
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <p>{inputNames.message}</p>
        <input
          name={inputNames.message}
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <p>{inputNames.tags}</p>
        <input
          name={inputNames.tags}
          type="text"
          ref={register({ required: true })}
        />
      </div>
      <FileBase type="file" multiple={false} onDone={(res: unknown) => {}} />
      <button type="submit">submit</button>
      <button onClick={reset}>clear</button>
    </form>
  );
}
