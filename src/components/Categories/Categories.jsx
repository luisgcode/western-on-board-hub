import dummyImage from "../../assets/images/dummy-image.png";
import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <section className=" flex flex-wrap py-10 gap-10">
        <Link to="/tasks">
          <article className="categories-card  ">
            <img src={dummyImage} alt="dummy " className="w-sm rounded-t-2xl" />
            <div className="py-2 px-4">
              <h5>Daily Market Tasks</h5>
              <span>13 Document(s)</span>
            </div>
          </article>{" "}
        </Link>
        <Link to="/instrucctions">
          <article className="categories-card  ">
            <img src={dummyImage} alt="dummy " className="w-sm rounded-t-2xl" />
            <div className="py-2 px-4">
              <h5>Instrucctions</h5>
              <span>4 Document(s)</span>
            </div>
          </article>{" "}
        </Link>
        <Link to="/others">
          <article className="categories-card ">
            <img src={dummyImage} alt="dummy " className="w-sm rounded-t-2xl" />
            <div className="py-2 px-4">
              <h5>Others</h5>
              <span>3 Document(s)</span>
            </div>
          </article>
        </Link>
      </section>
    </div>
  );
};

export default Categories;
