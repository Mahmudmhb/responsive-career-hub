import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../LocalStorage/LocalStorage";
import TotalJob from "./TotalJob/TotalJob";

const JobApplied = () => {
  const [jobStore, setJobStore] = useState([]);
  const jobs = useLoaderData();
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
  }, []);
  return (
    <div>
      <div className=" h-80  bg-[#f9f9ff] flex items-center justify-center font-extrabold">
        <h1 className="text-4xl">Job Details</h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className=" grid gap-4 my-10">
          {jobStore.map((job) => (
            <TotalJob key={job.id} job={job}></TotalJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobApplied;
