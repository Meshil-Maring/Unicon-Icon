const AddIcon = () => (
  <form method="POST" action={"/home"} className="bg-blue-950">
    <label>Name</label>
    <input
      className="block"
      name="name"
      type="text"
      placeholder="write your name here"
    ></input>

    <label>Age</label>

    <input
      className="block"
      name="age"
      type="text"
      placeholder="write your age here"
    ></input>

    <button type="submit" className="mt-28">
      Submit
    </button>
  </form>
);

export default AddIcon;
