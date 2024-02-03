/* eslint-disable react/prop-types */

const Feature = ({ feature }) => {
  const {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = feature;
  return (
    <div>
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
      <div>
        <h3>{location}</h3>
        <h3>{salary}</h3>
      </div>
    </div>
  );
};

export default Feature;
