import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveLocalStorage } from "../LocalStorage/LocalStorage";

const ViewDetails = () => {
  //   const [jobsetApplied, setJobsetApplied] = useState([]);
  const jobs = useLoaderData();
  const { id } = useParams();
  const prsId = parseInt(id);
  const job = jobs.find((job) => job.id == id);
  //   console.log(job);
  //   setJobsetApplied(job);
  //   console.log(jobsetApplied);

  const handleApplyBtn = () => {
    saveLocalStorage(prsId);
    toast("you have done apply successfully");
    console.log(id);
  };
  return (
    <div className="">
      <div className=" h-80  bg-[#f9f9ff] flex items-center justify-center font-extrabold">
        <h1 className="text-4xl">Job Details</h1>
      </div>
      <div className="  md:max-w-6xl mx-auto md:flex my-5">
        <div className=" w-2/3  mr-10">
          <div className="my-10">
            <h3>
              <span className="text-1xl font-bold">Job Description:</span>{" "}
              <span> {job.job_description}</span>
            </h3>
          </div>
          <h3 className="my-10">
            <span className="text-1xl font-bold">Job Responsibility:</span>
            <span> {job.job_responsibility}</span>
          </h3>
          <h3 className="my-10">
            <span className="text-1xl font-bold">
              Educational Requirements:
            </span>
            <br />
            <span> {job.educational_requirements}</span>{" "}
          </h3>
          <h3 className="my-10">
            <span className="text-1xl font-bold"> Experiences: </span> <br />
            <span>{job.experiences}</span>
          </h3>
        </div>
        <div className="md:w-2/6 bg-[#f4f2ff] p-5">
          <h1 className="font-bold border-b py-4">Job Details</h1>
          <div>
            <h3 className="my-2 flex items-center gap-2">
              <CiDollar />
              <span className="font-bold"> Salary: </span>
              {job.salary}{" "}
            </h3>
            <h3 className="my-2 flex justify-start items-center gap-2">
              <FaCalendarAlt />

              <span className="font-bold">Job Title: </span>
              {job.job_title}
            </h3>
          </div>
          <h1 className="font-bold my-5 py-4 border-b"> Contact Information</h1>
          <div>
            <h3 className="my-2 flex items-center gap-2">
              <FaPhoneAlt />

              <span className="font-bold">Phone: </span>
              {job.contact_information.phone}
            </h3>
            <h3 className="my-2 flex items-center gap-2">
              <MdOutlineEmail />

              <span className="font-bold">Email: </span>
              {job.contact_information.email}
            </h3>
            <h3 className="my-2 flex items-center gap-2">
              <FaRegAddressCard />

              <span className="font-bold ">Address: </span>
              {job.contact_information.address}
            </h3>
          </div>
          <div
            onClick={handleApplyBtn}
            className="btn btn-primary w-full my-10"
          >
            <button>Apply now</button>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <Link to="/">
          <button className="btn btn-primary">back to home page</button>{" "}
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewDetails;
