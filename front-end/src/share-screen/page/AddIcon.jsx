import { useNavigate } from "react-router-dom";

const AddIcon = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const age = formData.get("age");

    console.log(name, age);
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="name" />
      <input name="age" type="number" placeholder="age" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddIcon;
