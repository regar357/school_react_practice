function Book(props) {
  const { title, author, description } = props.data;

  return (
    <article className="book">
      <h1>{title}</h1>
      <strong>{author}</strong>
      <p>{description}</p>
    </article>
  );
}

export default Book;
