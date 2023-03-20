import { useNavigate } from "react-router-dom";

interface IPageHeader {
  message: string;
  setMessage: any;
}

const PageHeader = ({ message }: IPageHeader) => {
  return (
    <div className="flex flex-row w-full justify-center items-center h-[10%] bg-blackHeader text-white">
      <div className="text-4xl">{message}</div>
    </div>
  );
};

export default PageHeader;
