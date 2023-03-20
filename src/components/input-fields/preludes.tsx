import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Preludes = ({ hymnCollections, attributeName }: any) => {
  const inputRef1 = useRef<any>();
  const inputRef2 = useRef<any>();
  const inputRef3 = useRef<any>();
  const inputRef4 = useRef<any>();
  const inputRef5 = useRef<any>();
  const inputRef6 = useRef<any>();
  const inputRef7 = useRef<any>();
  const inputRef8 = useRef<any>();
  const inputRef9 = useRef<any>();
  const inputRef10 = useRef<any>();
  const inputRef11 = useRef<any>();
  const inputRef12 = useRef<any>();
  const inputRef13 = useRef<any>();

  const [hymnCollection, setHymnCollection] = hymnCollections;
  const [hymnsNumbers, setHymnsNumbers] = useState<Number[]>([]);

  function eventListener(event: any, inputRef: any, index: number) {
    const tempCollection = [...hymnsNumbers];
    if (event.code == "Tab") {
      tempCollection.push(inputRef.current.value);
      setHymnsNumbers(tempCollection);
    } else if (event.code == "Enter") {
      tempCollection[index] = inputRef.current.value;
      setHymnsNumbers(tempCollection);
    }
  }

  function handleLocalSubmit() {
    const tempHymnCollection = { ...hymnCollection };
    tempHymnCollection[attributeName] = hymnsNumbers;
    setHymnCollection(tempHymnCollection);
  }

  return (
    <div className="p-5 bg-blueDark rounded h-fit">
      <span className="border-0 border-b-2 border-b-blueLigthest text-white">
        Preludes
      </span>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-2 mt-5">
          <input
            ref={inputRef1}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef1, 0)}
          />
          <input
            ref={inputRef2}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef2, 1)}
          />
          <input
            ref={inputRef3}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef3, 2)}
          />
          <input
            ref={inputRef4}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef4, 3)}
          />
          <input
            ref={inputRef5}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef5, 4)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <input
            ref={inputRef6}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef6, 5)}
          />
          <input
            ref={inputRef7}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef7, 6)}
          />
          <input
            ref={inputRef8}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef8, 7)}
          />
          <input
            ref={inputRef9}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef9, 8)}
          />
          <input
            ref={inputRef10}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef10, 9)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <input
            ref={inputRef11}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef11, 10)}
          />
          <input
            ref={inputRef12}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef12, 11)}
          />
          <input
            ref={inputRef13}
            className="px-4 py-1 text-sm w-14 rounded"
            maxLength={3}
            onKeyDown={(event) => eventListener(event, inputRef13, 12)}
          />
        </div>
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

export default Preludes;
