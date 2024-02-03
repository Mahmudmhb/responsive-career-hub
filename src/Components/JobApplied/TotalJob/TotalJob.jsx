import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const TotalJob = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    job_type,
    remote_or_onsite,
    salary,
    location,
  } = job;
  return (
    <div>
      <div className="md:flex border items-center justify-between p-4">
        <div className="md:flex items-center ">
          <div>
            <img className="w-60 mr-5" src={logo} alt="" />
          </div>
          <div>
            <h1 className="font-bold">{job_title}</h1>
            <h3>{company_name}</h3>
            <div className="my-2">
              <button className=" border px-4 py-1 text-primary mr-4 rounded-md">
                {remote_or_onsite}
              </button>
              <button className=" border px-4 py-1 text-primary mr-4 rounded-md">
                {job_type}
              </button>
            </div>
            <div className=" flex gap-3">
              <span className="flex items-center gap-2">
                <IoLocationSharp />
                {location}
              </span>
              <span className="flex items-center gap-2">
                {" "}
                <LuCircleDollarSign />
                {salary}
              </span>
            </div>
          </div>
        </div>
        <div className="my-5">
          <Link to={`/job/${id}`}>
            {" "}
            <button className="btn btn-primary ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalJob;
