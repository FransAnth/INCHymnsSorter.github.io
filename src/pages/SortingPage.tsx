import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import OrganistHymnsWholeWeek from "../data/sorting-conditions/organists/whole-week.json";
import OrganistsWholeWeek from "../components/sorting-conditions/organists/whole-week";
import PageCommingSoon from "../components/page-comming-soon";

const SortingPage = () => {
  const [hymnCollection, setHymnCollection] = useState<any>(
    OrganistHymnsWholeWeek
  );
  const [setMessage]: any = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  function handleButtonAction() {
    setMessage("Welcome to The Hymn Sorter");
    navigate("/");
  }

  useEffect(() => {
    console.log(hymnCollection);
  }, [hymnCollection]);

  return (
    <div className="flex flex-col w-full bg-blueDarkest h-[90%] px-10 pt-5">
      <div className="flex flex-row w-full justify-end">
        <button
          className="bg-red rounded py-2 text-sm  px-5 text-white"
          onClick={() => handleButtonAction()}
        >
          Go Back
        </button>
      </div>
      {id == "wholeWeekOrganist" ? (
        <OrganistsWholeWeek
          hymnCollections={[hymnCollection, setHymnCollection]}
        />
      ) : null}
      {id != "wholeWeekOrganist" ? <PageCommingSoon /> : null}
    </div>
  );
};

export default SortingPage;
