import "./TopBar.css";

const TopBar = () => {
  return (
    <>
      <div className="bar w-full pl-5 bg-bg rounded-r-2xl py-5 flex items-center justify-between">
        <div className="input-row ">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-3xl pl-6 border-gray-200 py-3 bg-white w-2xl"
          />
        </div>

        <div className="greeting pr-5">
          <span>Luis G.</span>
        </div>
      </div>
    </>
  );
};

export default TopBar;
