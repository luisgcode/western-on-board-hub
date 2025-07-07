import "./TopBar.css";

const TopBar = () => {
  return (
    <>
      <div className="bar w-full pl-5 bg-bg rounded-tr-2xl py-5 flex items-center justify-between">
        <div className="input-row ">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-3xl pl-6 border-gray-200 py-3 bg-white w-60  md:w-120 lg:w-3xl"
          />
        </div>

        <span id="user"></span>
      </div>
    </>
  );
};

export default TopBar;
