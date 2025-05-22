import React from "react";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AddFeedBack = () => {
  const { user } = useAuth();
  console.log(user);

  const handleSubmit =async (e) => {
    e.preventDefault(); // prevent page reload

    const classTitle = e.target.classTitle.value;
    const feedback = e.target.feedback.value;
    const name = e.target.name.value;
    const imageURL = e.target.imageURL.value;

    const feedBackData = {
      classTitle,
      feedback,
      name,
      imageURL
    }

    const {data} = await axios.post(`${import.meta.env.VITE_API_KEY}/feedback`,feedBackData)
    toast.success("FeedBack Added Successfully")
    console.log(data)
    

    // TODO: send data to backend or do other logic here

    // e.target.reset(); 
  };

  return (
    <div className="max-w-md mx-auto bg-base-100 shadow-lg p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Submit Feedback</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Class Title */}
        <div className="form-control">
          <label className="label block">
            <span className="label-text">Class Title</span>
          </label>
          <input
            type="text"
            name="classTitle"           // added name
            placeholder="Class Title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Feedback Text */}
        <div className="form-control">
          <label className="label block">
            <span className="label-text">Feedback</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Your feedback"
            name="feedback"            // added name
            required
          ></textarea>
        </div>

        {/* Name */}
        <div className="form-control">
          <label className="label block">
            <span className="label-text">Your Name</span>
          </label>
          <input
            value={user?.displayName || ""}
            readOnly
            type="text"
            name="name"                // added name
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Image URL */}
        <div className="form-control">
          <label className="label block">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="imageURL"            // added name
            readOnly
            value={user?.photoURL || ""}
            placeholder="https://your-photo.jpg"
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button className="btn btn-primary w-full" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFeedBack;
