import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loadmore, setLoadmore] = useState(4);

  useEffect(() => {
    const url = "/jobs.json";
    fetch(url)
      .then((res) => res.json())
      .then((features) => setFeatures(features));
  }, []);
  //   console.log(loadmore);
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <h1 className="text-5xl text-center font-semibold my-10">
          Featured Jobs
        </h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 mx-auto gap-4">
        {features.slice(0, loadmore).map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}
      </div>
      <div
        className={`${
          loadmore === features.length && "hidden "
        } text-center  my-10`}
      >
        <button
          onClick={() => setLoadmore(features.length)}
          className="btn- bg-[#9675ff] p-4 text-white rounded-xl m"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Features;
