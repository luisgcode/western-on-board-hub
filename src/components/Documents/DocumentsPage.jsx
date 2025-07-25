import DocumentCard from "./DocumentCard.jsx";
import companyDocuments from "../../data/companyDocuments.js";

const DocumentsPage = () => {
  return (
    <>
      <div className="flex gap-10 flex-wrap">
        {companyDocuments.map((item) => (
          <DocumentCard
            key={item.id}
            name={item.name}
            id={item.id}
            description={item.description}
            btn={item.filePath}
            category={item.category}
          />
        ))}
      </div>
    </>
  );
};

export default DocumentsPage;
