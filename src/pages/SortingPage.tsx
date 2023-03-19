import { useEffect, useState } from "react";
import MenuButton from "../components/menu-button";

const SortingPage = () => {
  const [hymnCollection, setHymnCollection] = useState<any>([]);

  function addCollection() {
    const tempCollection = hymnCollection;
    tempCollection.push({ sample: [1, 2, 3] });

    setHymnCollection(tempCollection);
  }

  useEffect(() => {
    console.log(hymnCollection);
  }, [hymnCollection]);

  return (
    <div className="flex flex-col w-full bg-blueDarkest h-[90%] p-10">
      <div>
        <MenuButton
          label="Whole Week"
          id="wholeWeek"
          isForOrganists={false}
          setHeaderMessage={addCollection}
        />
      </div>
    </div>
  );
};

export default SortingPage;
