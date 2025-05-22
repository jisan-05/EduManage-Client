import axios from "axios";
import React, { useEffect, useState } from "react";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_KEY}/class`)
            .then((res) => setClasses(res.data))
            .catch(err=>{
              console.log(err)
            })
    }, []);
    console.log(classes)
    return <div>
      <h4 className="text-center">All Classes</h4>
    </div>;
};

export default Classes;
