import React from "react";
import { useContext } from "react";
import AuthContext from "../../Providers/AuthContext";
import axios from "axios";
import toast from 'react-hot-toast'

const AddClass = () => {
    const {user} = useContext(AuthContext)

    const handleSubmit = async(e) =>{
      e.preventDefault()
      const title = e.target.title.value;
      const name = e.target.name.value;
      const email= e.target.email.value;
      const price = e.target.price.value;
      const description = e.target.description.value;
      const image = e.target.image.value;
      const classData = {
        title,name,email,price,description,image
      }
      console.log(classData)

      const {data} = await axios.post(`${import.meta.env.VITE_API_KEY}/class`,classData)
      toast.success("Added Successful")
      console.log(data)

    }


    return (
        <div className="max-w-xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Add New Class</h2>

            <form onSubmit={handleSubmit} className="space-y-4 bg-base-200 p-6 rounded-lg shadow-md">
                <input
                    type="text"
                    placeholder="Title"
                    className="input input-bordered w-full"
                    name="title"
                />

                <input
                    type="text"
                    value={user?.displayName || ""}
                    readOnly
                    className="input input-bordered w-full"
                    name="name"
                />

                <input
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="input input-bordered w-full"
                    name="email"
                />

                <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered w-full"
                    name="price"
                />

                <textarea
                    placeholder="Description"
                    className="textarea textarea-bordered w-full"
                    name="description"
                ></textarea>

                <input
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    name="image"
                />

                <button type="submit" className="btn btn-primary w-full">
                    Add Class
                </button>
            </form>
        </div>
    );
};

export default AddClass;
