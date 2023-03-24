import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import SortedHymnsView from "../components/sorting-page/sorted-hymns-view";
import SortingPageContent from "../components/sorting-page/sorting-page-content";
import { useSortedHymnsData } from "../local-storage/sorting-hymns-storage";
import {
  WholeWeekCollection,
  singleWorshipServiceCollection,
  childrensWorshipServiceCollection,
} from "../data/sorted-hymns-collection";
import {
  DataModelWholeWeek,
  DataModelSingleWorshipService,
  DataModelChildrensWorshipService,
} from "../data/sorting-page-content-data";
import {
  AdultWorshipServiceConditions,
  ChildrensWorshipServiceConditions,
} from "../data/sorting-condition";

const SortingPage = () => {
  const [isSortNow, setIsSortnow] = useState(false);
  const [dataModel, setDataModel] = useState({});
  const [sortedHymns, setSortedHymns] = useSortedHymnsData((state) => [
    state.sortedHymns,
    state.setSortedHymns,
  ]);
  const [sortingCondition, setSortingCondition] = useState<any[]>([]);
  const [setMessage]: any = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  function handleButtonAction() {
    setMessage("Welcome to The Hymn Sorter");
    navigate("/");
  }

  useEffect(() => {
    if (id === "wholeWeekOrganist") {
      setSortedHymns(WholeWeekCollection);
      setDataModel(DataModelWholeWeek);
      setSortingCondition(AdultWorshipServiceConditions);
    } else if (id === "singleWorshipService") {
      setSortedHymns(singleWorshipServiceCollection);
      setDataModel(DataModelSingleWorshipService);
      setSortingCondition(AdultWorshipServiceConditions);
    } else if (id === "childrensWorshipService") {
      setSortedHymns(childrensWorshipServiceCollection);
      setDataModel(DataModelChildrensWorshipService);
      setSortingCondition(ChildrensWorshipServiceConditions);
    }
  }, []);

  return (
    <div className="flex flex-col w-full bg-blueDarkest h-[90%] px-10 py-5 overflow-auto">
      <div className="flex flex-row w-full justify-end">
        <button
          className="bg-red rounded py-2 text-sm  px-5 text-white"
          onClick={() => handleButtonAction()}
        >
          Go Back
        </button>
      </div>
      <div>
        <SortingPageContent
          dataModel={dataModel}
          setIsSortnow={setIsSortnow}
          sortingCondition={sortingCondition}
        />
      </div>
      <div className={isSortNow ? "" : "hidden"}>
        <SortedHymnsView
          sortedHymns={sortedHymns}
          sortingCondition={sortingCondition}
        />
      </div>
    </div>
  );
};

export default SortingPage;
