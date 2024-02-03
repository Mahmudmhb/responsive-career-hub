/* eslint-disable react/prop-types */
import { IoLocationSharp } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
  const handleView = (id) => {
    console.log("clicked", id);
  };
  const {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
    id,
  } = feature;
  return (
    <div className="md:max-w-lg h-84 my-5 border p-7">
      <div>
        <img className="w-32" src={logo} alt="" />
        <h3 className="font-bold text-2xl py-3">{job_title}</h3>
        <h3 className="text-2xl">{company_name}</h3>
      </div>
      <div className="my-5">
        <button className=" border px-4 py-1 text-primary mr-4 rounded-md">
          {remote_or_onsite}
        </button>
        <button className=" border px-4 py-1 text-primary mr-4 rounded-md">
          {job_type}
        </button>
      </div>
      <div className=" flex gap-3">
        <h3 className="flex items-center gap-2">
          <IoLocationSharp />
          {location}
        </h3>
        <h3 className="flex items-center gap-2">
          {" "}
          <LuCircleDollarSign />
          {salary}
        </h3>
      </div>
      <div className="my-5">
        <Link to={`/job/${id}`}>
          {" "}
          <button
            onClick={() => handleView(feature.id)}
            className="btn btn-primary"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
