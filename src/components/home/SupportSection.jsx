const SupportSection = () => {
  return (
    <div className="max-w-6xl my-12 mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <img
          src="https://svdpli.org/wp-content/uploads/2023/07/iStock-1393245537-1_11zon-1024x683.jpg"
          alt="donate"
          className="w-full h-full rounded-md"
          data-aos="zoom-in"
        />
        <div className="space-y-6" data-aos="zoom-in">
          <h1 className="text-2xl md:text-3xl lg:text-5xl  font-bold text-balance">
            Supporting Those In Need
          </h1>
          <div className="text-gray-500">
            Winter can be harsh, especially for those without proper clothing.
            Many families in rural and low-income areas struggle to stay warm.
            Our platform connects generous donors with those in need, making it
            easy to share warmth and comfort. Your support can bring hope and
            protection to vulnerable communities this winter. Together, we can
            make a difference.
          </div>
          <button className="min-w-36 btn bg-secondary text-neutral-lightest hover:bg-secondary-dark ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
