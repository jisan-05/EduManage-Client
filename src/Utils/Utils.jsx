import axios from "axios"
import imageCompression from "browser-image-compression";

// save image function 
export const cloudinaryUploadLow = async (imageFile) => {
    const options = {
        maxSizeMB: 0.5, // ⚡ Compress to around 500KB or less
        maxWidthOrHeight: 800, // 🖼 Resize max width/height to 800px
        useWebWorker: true,
    };

    const compressedFile = await imageCompression(imageFile, options);

    const formData = new FormData();
    formData.append("file", compressedFile);
    formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await res.json();
    return data.secure_url;
};


// Save user in DB 
export const saveUser = async(user)=>{
  await axios.post(`${import.meta.env.VITE_API_KEY}/users/${user?.email}`,{
    name:user?.displayName,

    image:user?.photoURL,
    email:user?.email,
  })
}