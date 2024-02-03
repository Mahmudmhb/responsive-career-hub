const Category = ({ category }) => {
  const { logo, availability, category_name } = category;
  return (
    <div>
      <div className=" md:w-72 h-60 bg-[#faf8ff] shadow-xl p-5  flex-row items-center	">
        <figure>
          <img className="w-14 my-3 " src={logo} alt="google" />
        </figure>
        <div className="">
          <h2 className="text-2xl">{category_name}</h2>
          <div className="">{availability}</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
