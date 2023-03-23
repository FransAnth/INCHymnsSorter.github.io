import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import sortingCondition from "../data/sorting-conditions/sorting-condition.json";

const InputFields = ({
  attributeName,
  registers,
  title,
  style,
  sortedHymnsState,
}: any) => {
  const { register, getValues } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sortedHymns, setSortedHymns] = sortedHymnsState;

  function handleLocalSubmit() {
    const formValue = getValues();
    const tempSortedHymns = [...sortedHymns];
    registers.forEach((name: any) => {
      const value = formValue[name];
      sortingCondition.forEach((sortConditions: any, index: number) => {
        if (
          Number(value) < sortConditions.condition[1] &&
          Number(value) >= sortConditions.condition[0]
        ) {
          tempSortedHymns.forEach((hymnCollection: any) => {
            if (hymnCollection.id === attributeName) {
              hymnCollection.data[sortConditions.id].push(value);
              hymnCollection.isSubmitted = true;
            }
          });
        }
      });
    });
    setSortedHymns(tempSortedHymns);
    setIsSubmitted(true);
  }

  return (
    <div className="flex flex-col p-5 bg-blueDark rounded h-fit">
      <span className="w-fit border-0 border-b-2 border-b-blueLigthest text-white">
        {title}
      </span>
      <div
        className={`flex flex-col flex-wrap w-[10rem] gap-2 mt-5 h-[7.5rem] ${style}`}
      >
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
          className={`text-white py-1 px-3  ${
            isSubmitted ? "bg-green-700" : "bg-blue-500"
          } rounded-sm text-sm`}
          onClick={() => handleLocalSubmit()}
        >
          {isSubmitted ? "Submitted" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default InputFields;
