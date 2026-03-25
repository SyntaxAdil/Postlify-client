import axios from "axios";

const Posty = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mt-4">Create new post</h1>
      <div className="mt-8">
        <form
          className="max-w-md p-4 shadow rounded-md mx-auto"
          onSubmit={handleSubmit}
        >
          <input name="image" type="file" className="file-input w-full" />
          <input
            name="caption"
            type="text"
            placeholder="Enter your content"
            className="block input mt-5 w-full"
          />
          <button className="btn mt-5 w-full">Post</button>
        </form>
      </div>
    </div>
  );
};

export default Posty;
