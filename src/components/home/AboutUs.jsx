const AboutUs = () => {
  return (
    <section className="max-w-6xl my-12 mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div className="space-y-6" data-aos="fade-up-right">
          <h1 className="text-2xl md:text-3xl lg:text-5xl  font-bold text-balance">
            Our Mission
          </h1>
          <div className="text-gray-500">
            At Harmony for Humanity Foundation, we strive to provide essential
            clothing to the under served communities of Bangladesh. By
            collecting and distributing gently used clothes, we aim to bring
            warmth and dignity to those in need, especially in areas facing
            poverty. Through the power of community support, we are working
            towards a future where everyone has access to the basic necessities
            they deserve.
          </div>
          <button className="min-w-36 btn bg-secondary text-neutral-lightest hover:bg-secondary-dark ">
            Join as Volunteer
          </button>
        </div>
        <img
          src="https://www.lebabi.net/mfupdata/1432371902froid1.jpg"
          alt="donate"
          className="w-full h-full rounded-md"
          data-aos="fade-left"
        />
      </div>
    </section>
  );
};

export default AboutUs;
