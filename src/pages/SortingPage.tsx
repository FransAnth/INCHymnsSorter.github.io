import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import SortedWholeWeek from "../data/sorting-conditions/organists/whole-week.json";
import OrganistsWholeWeek from "../components/sorting-page/sorting-conditions/organists/whole-week";
import PageCommingSoon from "../components/main-page/page-comming-soon";
import SortedHymnsDisplay from "../components/sorting-page/sort-view";

const SortingPage = () => {
  const [isSortNow, setIsSortnow] = useState(false);
  const [sortedHymns, setSortedHymns] = useState(SortedWholeWeek);

  const [setMessage]: any = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  function handleButtonAction() {
    setMessage("Welcome to The Hymn Sorter");
    navigate("/");
  }

  useEffect(() => {
    console.log(sortedHymns);
  }, [sortedHymns]);

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
      {id == "wholeWeekOrganist" ? (
        <OrganistsWholeWeek sortedHymnsState={[sortedHymns, setSortedHymns]} />
      ) : null}
      {id != "wholeWeekOrganist" ? <PageCommingSoon /> : null}
      {isSortNow ? <SortedHymnsDisplay sortedHymns={sortedHymns} /> : null}
    </div>
  );
};

export default SortingPage;
