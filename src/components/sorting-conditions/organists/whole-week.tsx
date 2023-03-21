import InputFields from "../../input-fields";

const OrganistsWholeWeek = ({ hymnCollections }: any) => {
  const actualHymnInputHeight = "h-[7.5rem] w-[120px]";
  const preludeRegistersInputHeight = "h-[11.5rem] w-[184px]";

  function generateRegisters(inputCount: any) {
    let registers = [];
    for (let i = 0; i < inputCount; i++) {
      registers.push(`input${i + 1}`);
    }

    return registers;
  }

  const actualHymnRegisters = generateRegisters(6);
  const preludeRegisters = generateRegisters(13);

  return (
    <div className="flex flex-row justify-center gap-14 mt-20">
      <div className="flex flex-col">
        <span className="text-white text-2xl">MidWeek</span>
        <div className="flex flex-row justify-center gap-10 pt-3 pb-10">
          <InputFields
            hymnCollections={hymnCollections}
            attributeName="hymnSingingMidweek"
            registers={actualHymnRegisters}
            title={"Hymn Singing"}
            style={actualHymnInputHeight}
          />
          <InputFields
            hymnCollections={hymnCollections}
            attributeName="preludesMidweek"
            registers={preludeRegisters}
            title={"Preludes"}
            style={preludeRegistersInputHeight}
          />
        </div>
      </div>
      <div className="h-[100%] border-[1px] border-blackHeader" />
      <div className="flex flex-col">
        <span className="text-white text-2xl">Weekend</span>
        <div className="flex flex-row justify-center gap-10 pt-3 pb-10">
          <InputFields
            hymnCollections={hymnCollections}
            attributeName="hymnSingingWeekend"
            registers={actualHymnRegisters}
            title={"Hymn Singing"}
            style={actualHymnInputHeight}
          />
          <InputFields
            hymnCollections={hymnCollections}
            attributeName="preludesWeekend"
            registers={preludeRegisters}
            title={"Preludes"}
            style={preludeRegistersInputHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganistsWholeWeek;
