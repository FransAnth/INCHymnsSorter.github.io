import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import SortedWholeWeek from "../data/sorting-conditions/organists/whole-week.json";
import SortedHymnsView from "../components/sorting-page/sorted-hymns-view";
import SortingPageContent from "../components/sorting-page/sorting-page-content";
import {
  DataModelWholeWeek,
  DataModelSingleWorshipService,
} from "../data/sorting-page-content-data";

const SortingPage = () => {
  const [isSortNow, setIsSortnow] = useState(false);
  const [sortedHymns, setSortedHymns] = useState(SortedWholeWeek);
  const [dataModel, setDataModel] = useState({});

  const [setMessage]: any = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  function handleButtonAction() {
    setMessage("Welcome to The Hymn Sorter");
    navigate("/");
  }

  useEffect(() => {
    let submittedForms: string[] = [];
    sortedHymns.forEach((hymnCollection: any) => {
      if (hymnCollection.isSubmitted) {
        submittedForms.push(hymnCollection.id);
      }
    });

    setIsSortnow(submittedForms.length === sortedHymns.length);
  }, [sortedHymns]);

  useEffect(() => {
    if (id === "wholeWeekOrganist") {
      setDataModel(DataModelWholeWeek);
    } else if (id === "singleWorshipService") {
      setDataModel(DataModelSingleWorshipService);
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
          sortedHymnsState={[sortedHymns, setSortedHymns]}
          dataModel={dataModel}
        />
      </div>
      <div className={isSortNow ? "" : "hidden"}>
        <SortedHymnsView sortedHymns={sortedHymns} />
      </div>
    </div>
  );
};

export default SortingPage;
