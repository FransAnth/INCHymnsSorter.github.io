import sortingConditions from "../../data/sorting-conditions/sorting-condition.json";

const SortedHymnsView = ({ sortedHymns }: any) => {
  const content: any = [];

  sortedHymns.forEach((hymnCollection: any) => {
    content.push(hymnCollection.data);
  });

  return (
    <div className="flex justify-center w-full mt-32">
      <div className="bg-blueDarkest text-white rounded h-full">
        <table className="border-separate border-spacing-y-[10px] border-spacing-x-0">
          <thead>
            <tr>
              <th></th>
              {sortedHymns.map((hymnCollections: any) => (
                <th key={hymnCollections.name} className="p-8 bg-blueDark">
                  {hymnCollections.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortingConditions.map((condition: any, index: number) => (
              <tr key={index}>
                <td>
                  <div className="px-10">{condition.id}</div>
                </td>
                {content.map((hymnCollection: any, index: number) => (
                  <td key={index} className="px-8 bg-blueLigthest">
                    {hymnCollection[condition.id].length != 0 ? (
                      <div className="flex flex-col items-center py-5">
                        {hymnCollection[condition.id].map(
                          (values: any, index: number) => (
                            <div>{values}</div>
                          )
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="text-sm font-[200]">x</div>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SortedHymnsView;
