const DocumentCard = (props) => {
  return (
    <>
      <section>
        <span>{props.name}</span>
        <span>{props.id}</span>
      </section>
    </>
  );
};

export default DocumentCard;
