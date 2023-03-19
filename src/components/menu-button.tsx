import { useNavigate } from "react-router-dom";

interface IMenuButton {
  label: string;
  id: string;
  isForOrganists: boolean;
  setHeaderMessage: (value: string) => void;
}

const MenuButton = ({ label, id, setHeaderMessage }: IMenuButton) => {
  const navigate = useNavigate();
  const route = "sorting-page";

  function handleButtonAction() {
    navigate(route + "/" + id);
    setHeaderMessage("Let's Start Sorting");
  }

  return (
    <>
      <button
        className="rounded bg-blueDark text-white h-20 text-sm w-40 px-2 shadow-lg hover:bg-blueLight hover:font-bold"
        onClick={() => handleButtonAction()}
      >
        {label}
      </button>
    </>
  );
};

export default MenuButton;
