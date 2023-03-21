import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const InputFields = ({
  hymnCollections,
  attributeName,
  registers,
  title,
  style,
}: any) => {
  const { register, getValues } = useForm();
  const [hymnCollection, setHymnCollection] = hymnCollections;

  function handleLocalSubmit() {
    const formValue = getValues();
    const tempHymnCollection = { ...hymnCollection };
    registers.map((value: any) => {
      tempHymnCollection[attributeName].push(formValue[value]);
    });
    setHymnCollection(tempHymnCollection);
  }

  return (
    <div className="flex flex-col p-5 bg-blueDark rounded h-fit">
      <span className="w-fit border-0 border-b-2 border-b-blueLigthest text-white">
        {title}
      </span>
      <div className={`flex flex-col flex-wrap w-[10rem] gap-2 mt-5 ${style}`}>
        {registers.map((inputRegisters: any, index: number) => (
          <input
            key={index}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            {...register(inputRegisters)}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center mt-8">
        <button
          className="text-white py-1 px-3 bg-blue-500 rounded-sm text-sm"
          onClick={() => handleLocalSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputFields;
