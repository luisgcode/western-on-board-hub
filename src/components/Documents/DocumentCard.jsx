const DocumentCard = (props) => {
  return (
    <article className=" cursor-pointer bg-bg rounded-2xl max-w-sm p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-dark text-textLight rounded-full">
          {props.category}
        </span>
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>

      <h5 className="text-textDark font-semibold mb-3 leading-tight">
        {props.name}
      </h5>

      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {props.description}
      </p>

      <a
        href={props.btn || "#"}
        className="inline-flex items-center px-4 py-2  text-textLight rounded-lg    font-medium text-sm"
        download
      >
        Download Document
      </a>
    </article>
  );
};

export default DocumentCard;
