import { useEffect, useState } from "react";
import { WholeWeekCollection } from "../../data/sorted-hymns-collection";
import { useSortedHymnsData } from "../../local-storage/sorting-hymns-storage";
import PageCommingSoon from "../main-page/page-comming-soon";
import InputFields from "./input-fields";

interface ISortingPageContent {
  dataModel: any;
  setIsSortnow: any;
  sortingCondition: any;
}

const SortingPageContent = ({
  dataModel,
  setIsSortnow,
  sortingCondition,
}: ISortingPageContent) => {
  const [sortedHymns, setSortedHymns] = useSortedHymnsData((state) => [
    state.sortedHymns,
    state.setSortedHymns,
  ]);

  function generateRegisters(inputCount: any) {
    let registers = [];
    for (let i = 0; i < inputCount; i++) {
      registers.push(`input${i + 1}`);
    }

    return registers;
  }

  useEffect(() => {
    let submittedForms: string[] = [];
    if (sortedHymns.length) {
      sortedHymns.forEach((hymnCollection: any) => {
        if (hymnCollection.isSubmitted) {
          submittedForms.push(hymnCollection.id);
        }
      });
    }

    setIsSortnow(submittedForms.length === sortedHymns.length);
  }, [sortedHymns]);

  return (
    <div className="flex flex-row justify-center gap-32 mt-20">
      {dataModel.length ? (
        dataModel.map((worshipServices: any, index: number) => (
          <div key={index} className="flex flex-col">
            <span className="text-white text-2xl">{worshipServices.name}</span>
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
                        sortedHymnsState={[sortedHymns, setSortedHymns]}
                        sortingCondition={sortingCondition}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        ))
      ) : (
        <PageCommingSoon />
      )}
    </div>
  );
};

export default SortingPageContent;
