import Categories from "../../Components/Categories/Categories";

const HomePage = () => {
  return (
    <div>
      <section className="p-10">
        <h2>Categories.</h2>
        <p>Select what documents you are looking for.</p>
        <Categories />
      </section>
    </div>
  );
};

export default HomePage;
