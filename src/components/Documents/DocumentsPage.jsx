import dummyImage from "../../assets/images/dummy-image.png";
import "./Documents.css";
import DocumentCard from "./DocumentCard";
import companyDocuments from "../../data/companyDocuments";

const DocumentsPage = (props) => {
  return (
    <div>
      <section className=" flex flex-wrap py-10 gap-10">
        {companyDocuments.map(function (item) {
          return <DocumentCard key={item.id} name={item.name} />;
        })}
      </section>
    </div>
  );
};

export default DocumentsPage;
