import bannarPic from "../../Picture/images/user.png";
const Bannar = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto">
          <img src={bannarPic} className="md:max-w-lg " />
          <div>
            <h1 className="text-5xl font-bold">
              One Step Closer To Your{" "}
              <span className="text-[#9378ff]">Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn text-white bg-[#9378ff]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
