const DocumentCard = (props) => {
  return (
    <>
      <article className="article bg-bg rounded-2xl max-w-xl text-left p-10">
        <h4>{props.name}</h4>
        <span>{props.description}</span>
      </article>
    </>
  );
};

export default DocumentCard;
