import DocumentCard from "./DocumentCard";
import companyDocuments from "../../data/companyDocuments";

const DocumentsPage = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {companyDocuments.map(function (item) {
          return (
            <DocumentCard
              name={item.name}
              id={item.id}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default DocumentsPage;
