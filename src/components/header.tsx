import { useNavigate } from "react-router-dom";

interface IPageHeader {
  message: string;
  setMessage: any;
}

const PageHeader = ({ message, setMessage }: IPageHeader) => {
  const navigate = useNavigate();

  function handleButtonAction() {
    setMessage("Welcome to The Hymn Sorter");
    navigate("");
  }
  return (
    <div className="flex flex-row w-full justify-center items-center h-[10%] bg-blackHeader text-white">
      <div className="text-4xl">{message}</div>
      <div className="flex flex-row justify-center">
        {message == "Let's Start Sorting" ? (
          <button
            className="bg-blueDark rounded p-2"
            onClick={() => handleButtonAction()}
          >
            Home
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PageHeader;
