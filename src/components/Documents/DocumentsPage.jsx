import DocumentCard from "./DocumentCard";
import companyDocuments from "../../data/companyDocuments";

const DocumentsPage = () => {
  return (
    <>
      {companyDocuments.map(function (item) {
        return <DocumentCard name={item.name} id={item.id} />;
      })}
    </>
  );
};

export default DocumentsPage;
