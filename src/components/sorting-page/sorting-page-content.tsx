import InputFields from "./input-fields";

interface ISortingPageContent {
  sortedHymnsState: any;
  dataModel: any;
}

const SortingPageContent = ({
  sortedHymnsState,
  dataModel,
}: ISortingPageContent) => {
  function generateRegisters(inputCount: any) {
    let registers = [];
    for (let i = 0; i < inputCount; i++) {
      registers.push(`input${i + 1}`);
    }

    return registers;
  }

  return (
    <div className="flex flex-row justify-center gap-32 mt-20">
      {dataModel.length
        ? dataModel.map((worshipServices: any, index: number) => (
            <div key={index} className="flex flex-col">
              <span className="text-white text-2xl">
                {worshipServices.name}
              </span>
              <div
                key={index}
                className="flex flex-row justify-center gap-10 pt-3 pb-10"
              >
                {worshipServices.properties.map(
                  (inputPropeties: any, index: number) => {
                    const registers = generateRegisters(
                      inputPropeties.registerCount
                    );

                    return (
                      <div key={index}>
                        <InputFields
                          attributeName={inputPropeties.attributeName}
                          registers={registers}
                          title={inputPropeties.title}
                          style={inputPropeties.inputHeight}
                          sortedHymnsState={sortedHymnsState}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default SortingPageContent;
