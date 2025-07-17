import DocumentCard from "./DocumentCard";
import companyDocuments from "../../data/companyDocuments";

const DocumentsPage = () => {
  return (
    <>
      <div className="flex gap-10 flex-wrap">
        {companyDocuments.map(function (item) {
          return (
            <DocumentCard
              name={item.name}
              id={item.id}
              description={item.description}
              btn={item.filePath}
              category={item.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default DocumentsPage;
