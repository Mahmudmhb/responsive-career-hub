import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../LocalStorage/LocalStorage";
import TotalJob from "./TotalJob/TotalJob";
import { FaChevronDown } from "react-icons/fa";

const JobApplied = () => {
  const jobs = useLoaderData();
  const [jobStore, setJobStore] = useState([]);
  const [displayjob, setDisplayjob] = useState([]);

  const handleJobFilter = (filter) => {
    if (filter === "All") {
      setDisplayjob(jobStore);
    } else if (filter === "Remote") {
      const remoteJob = jobStore.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayjob(remoteJob);
    } else if (filter === "onsite") {
      const onsitejob = jobStore.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayjob(onsitejob);
    }
  };
  useEffect(() => {
    const storedJob = getLocalStorage();
    if (jobs.length) {
      const AppliedJob = [];
      for (const id of storedJob) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          AppliedJob.push(job);
        }
      }
      setJobStore(AppliedJob);
    }
    console.log(jobStore);
  }, [jobStore]);
  return (
    <div>
      <div className=" h-80  bg-[#f9f9ff] flex items-center justify-center font-extrabold">
        <h1 className="text-4xl">Job Details</h1>
      </div>
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-end">
          <details className="dropdown">
            <summary onClick={() => handleJobFilter("All")} className="m-1 btn">
              Fliter <FaChevronDown />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleJobFilter("All")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobFilter("Remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
        <div className=" grid gap-4 my-10">
          {displayjob.map((job) => (
            <TotalJob key={job.id} job={job}></TotalJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobApplied;
