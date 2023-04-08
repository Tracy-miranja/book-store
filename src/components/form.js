function Form() {
  return (
    <>
      <h1>ADD NEW BOOK</h1>
      <form>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Category" />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default Form;
