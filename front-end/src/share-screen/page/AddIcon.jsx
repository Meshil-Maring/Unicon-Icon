import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AddIcon = () => {
  const [svgData, setSvgData] = useState([]); // start as array so indexing won't crash
  const navigate = useNavigate();

  // Handler for submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const res = await fetch("http://localhost:5500/home", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        navigate("/");
      } else {
        console.error("Failed to save icon:", res.statusText);
      }
    } catch (err) {
      console.error("Something went wrong:", err);
    }
  };

  // svg render
  function SvgRenderer(svgString) {
    return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
  }

  useEffect(() => {
    fetch("http://localhost:5500")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched icons:", data);
        setSvgData(data);
      })
      .catch((err) => console.error("Error fetching the icons:", err));
  }, []);

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
        placeholder="Enter icon name"
        className="border rounded w-full"
        required
      />

      {/* Render the SVG only if it exists */}
      {svgData.length > 2 && svgData[2]?.data && SvgRenderer(svgData[2].data)}

      <label className="mr-2 block mt-8 relative">SVG Format</label>
      <aside className="w-full relative">
        <textarea
          name="svgText"
          className="border rounded w-full min-h-[200px]"
          placeholder="Paste your SVG code here"
          required
        ></textarea>

        <p className="text-[12px] absolute bg-blue-400 px-2 py-1 rounded-sm right-0 top-0">
          Paste
        </p>
      </aside>

      <button
        type="submit"
        className="mt-10 self-center hover:bg-amber-100 bg-amber-50 text-black px-20 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddIcon;
