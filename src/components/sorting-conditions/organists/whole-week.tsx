import ActualHymns from "../../input-fields/actual-hymns";
import Preludes from "../../input-fields/preludes";

const OrganistsWholeWeek = ({ hymnCollections }: any) => {
  return (
    <div className="flex flex-row justify-center gap-14 mt-20">
      <div className="flex flex-col">
        <span className="text-white text-2xl">MidWeek</span>
        <div className="flex flex-row justify-center gap-10 pt-3 pb-10">
          <ActualHymns
            hymnCollections={hymnCollections}
            attributeName="hymnSingingMidweek"
          />
          <Preludes
            hymnCollections={hymnCollections}
            attributeName="preludesMidweek"
          />
        </div>
      </div>
      <div className="h-[100%] border-[1px] border-blackHeader" />
      <div className="flex flex-col">
        <span className="text-white text-2xl">Weekend</span>
        <div className="flex flex-row justify-center gap-10 pt-3 pb-10">
          <ActualHymns
            hymnCollections={hymnCollections}
            attributeName="hymnSingingWeekend"
          />
          <Preludes
            hymnCollections={hymnCollections}
            attributeName="preludesWeekend"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganistsWholeWeek;
