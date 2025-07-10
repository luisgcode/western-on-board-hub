import Documents from "../../Components/Documents/Documents";

const HomePage = () => {
  return (
    <div>
      <section className="p-10">
        <h2>Documents.</h2>
        <p>Select what document you are looking for.</p>
        <Documents />
      </section>
    </div>
  );
};

export default HomePage;
