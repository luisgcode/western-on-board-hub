import DocumentsPage from "../../components/Documents/DocumentsPage.jsx";

const HomePage = () => {
  return (
    <div>
      <section className="p-10">
        <h2>Documents.</h2>
        <p>Select what document you are looking for.</p>
        <DocumentsPage />
      </section>
    </div>
  );
};

export default HomePage;
