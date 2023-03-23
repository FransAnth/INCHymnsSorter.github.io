import InputFields from "../../input-fields";

const OrganistsWholeWeek = ({ sortedHymnsState }: any) => {
  const actualHymnInputHeight = "w-[120px]";
  const preludeRegistersInputHeight = "w-[312px]";

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
    <div className="flex flex-row justify-center gap-32 mt-20">
      <div className="flex flex-col">
        <span className="text-white text-2xl">MidWeek</span>
        <div className="flex flex-row justify-center gap-10 pt-3 pb-10">
          <InputFields
            attributeName="hymnSingingMidweek"
            registers={actualHymnRegisters}
            title={"Hymn Singing"}
            style={actualHymnInputHeight}
            sortedHymnsState={sortedHymnsState}
          />
          <InputFields
            attributeName="preludesMidweek"
            registers={preludeRegisters}
            title={"Preludes"}
            style={preludeRegistersInputHeight}
            sortedHymnsState={sortedHymnsState}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-white text-2xl">Weekend</span>
        <div className="flex flex-row justify-center gap-10 pt-3 pb-10">
          <InputFields
            attributeName="hymnSingingWeekend"
            registers={actualHymnRegisters}
            title={"Hymn Singing"}
            style={actualHymnInputHeight}
            sortedHymnsState={sortedHymnsState}
          />
          <InputFields
            attributeName="preludesWeekend"
            registers={preludeRegisters}
            title={"Preludes"}
            style={preludeRegistersInputHeight}
            sortedHymnsState={sortedHymnsState}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganistsWholeWeek;
