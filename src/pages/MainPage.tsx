import { useOutletContext } from "react-router-dom";
import MenuButton from "../components/menu-button";

const MainPage = () => {
  const [setHeaderMessage]: any = useOutletContext();

  return (
    <>
      <div className="flex flex-col w-full bg-blueDarkest h-[90%]">
        <div className="flex flex-row justify-between p-20 divide-x-2 divide-blackHeader">
          <div className="flex flex-col items-center pb-32 pt-5 w-1/2">
            <span className="text-white text-2xl mb-20">Mang-aawit</span>
            <div className="flex flex-col items-center gap-14">
              <div className="flex flex-row justify-center gap-20 w-full">
                <MenuButton
                  label="Whole Week"
                  id="wholeWeek"
                  isForOrganists={false}
                  setHeaderMessage={setHeaderMessage}
                />
                <MenuButton
                  label="Single Worship Service"
                  id="singleWorshipService"
                  isForOrganists={false}
                  setHeaderMessage={setHeaderMessage}
                />
              </div>
              <div className="w-[100%] border-[1px] border-blackHeader" />
              <div className="flex flex-row justify-center gap-20 w-full">
                <MenuButton
                  label="Tanging Pagtitipon"
                  id="tangingPagtitipon"
                  isForOrganists={false}
                  setHeaderMessage={setHeaderMessage}
                />
                <MenuButton
                  label="Pamamahayag"
                  id="pamamahayag"
                  isForOrganists={false}
                  setHeaderMessage={setHeaderMessage}
                />
                <MenuButton
                  label="Bautismo"
                  id="bautismo"
                  isForOrganists={false}
                  setHeaderMessage={setHeaderMessage}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pb-32 pt-5 w-1/2">
            <span className="text-white text-2xl mb-20">Organista</span>
            <div className="flex flex-col items-center gap-14">
              <div className="flex flex-row justify-center gap-20 w-full">
                <MenuButton
                  label="Whole Week"
                  id="wholeWeekOrganist"
                  isForOrganists={true}
                  setHeaderMessage={setHeaderMessage}
                />
                <MenuButton
                  label="Single Worship Service"
                  id="singleWorshipService"
                  isForOrganists={true}
                  setHeaderMessage={setHeaderMessage}
                />
                <MenuButton
                  label="Children Worship Service"
                  id="childrenWorshipService"
                  isForOrganists={true}
                  setHeaderMessage={setHeaderMessage}
                />
              </div>
              <div className="w-[100%] border-[1px] border-blackHeader" />
              <div className="flex flex-row justify-center gap-20 w-full">
                <MenuButton
                  label="Tanging Pagtitipon"
                  id="tangingPagtitipon"
                  isForOrganists={true}
                  setHeaderMessage={setHeaderMessage}
                />
                <MenuButton
                  label="Pamamahayag"
                  id="pamamahayag"
                  isForOrganists={true}
                  setHeaderMessage={setHeaderMessage}
                />
                <MenuButton
                  label="Bautismo"
                  id="bautismo"
                  isForOrganists={true}
                  setHeaderMessage={setHeaderMessage}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex fle-row justify-center">
          <MenuButton
            label="Custom"
            id="custom"
            isForOrganists={false}
            setHeaderMessage={setHeaderMessage}
          />
        </div>
      </div>
    </>
  );
};

export default MainPage;
