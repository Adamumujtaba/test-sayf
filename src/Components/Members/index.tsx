import Records from './MemData';

function Members() {
  return (
    <section className="bg-[#fff] p-3">
      <div className=" p-4 text-center my-3">
        <h3 className="text-[#00d094] font-bold text-xl">Members</h3>
      </div>
      <div className=" grid gap-2 justify-center md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
        {Records.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#fff] mx-4 my-3 h-[500px] p-5 shadow-lg rounded-md md:w-[350px]">
              <img src={item.img} alt="img" className="h-[90%] w-full" />
              <div className="bg-[#00d094] text-center">
                <p className="font-medium">{item.name}</p>
                <p className="">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Members;
