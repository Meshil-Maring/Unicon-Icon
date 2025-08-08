import { useNavigate } from "react-router-dom";

const AddIcon = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {};

    formData.forEach((value, index) => {
      data[index] = value;
    });

    try {
      const response = await fetch("http://localhost:5500/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const newdata = response.json();

      console.log(newdata);

      navigate("/home");
    } catch (err) {
      console.log("Something went wrong! ", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-xl flex flex-col items-start w-full p-8 bg-red-800"
    >
      <label className="text-2xl block mb-8 self-center">Add Icon</label>

      <label className="mr-2">Icon Name</label>
      <input
        name="name"
        type="text"
        placeholder=""
        className="border rounded w-full"
      />

      <label className="mr-2 block mt-8 relative">SVG Fromate</label>
      <aside className="w-full relative">
        <textarea
          name="svg-data"
          className="border rounded w-full min-h-[200px]"
          id=""
        ></textarea>

        <p className="text-[12px] absolute bg-blue-400 px-2 py-1 rounded-sm right-0 top-0">
          Paste
        </p>
      </aside>

      <button
        type="submit"
        className="mt-10 self-center hover:bg-amber-50 bg-amber-50 text-black px-20 py-2"
      >
        Add
      </button>
    </form>
  );
};

export default AddIcon;
