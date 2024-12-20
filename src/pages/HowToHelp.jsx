const HowToHelp = () => {
  return (
    <section className="my-12 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          How You Can Help
        </h2>
        <p className="mb-12 max-w-2xl mx-auto text-center">
          Join us in making a difference! Whether by donating warm clothes,
          volunteering your time, spreading awareness, or contributing funds,
          every effort helps bring warmth and hope to those in need this winter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-light border border-secondary rounded-lg py-5 px-3 text-center">
            <div className="text-5xl mb-4 text-primary">👕</div>
            <h3 className="font-bold text-2xl text-gray-800 mb-2">
              Donate Items
            </h3>
            <p className="text-gray-600">
              You can donate warm clothes like blankets, jackets, and sweaters
              to support those in need during the winter season.
            </p>
          </div>
          <div className="bg-neutral-light border border-secondary  rounded-lg py-5 px-3 text-center">
            <div className="text-5xl mb-4 text-primary">👨‍👩‍👧‍👦</div>
            <h3 className="font-bold text-2xl text-gray-800 mb-2">
              Share Our Words
            </h3>
            <p className="text-gray-600">
              Share our mission on social media and encourage your friends and
              family to contribute to our campaigns.
            </p>
          </div>
          <div className="bg-neutral-light border border-secondary rounded-lg py-5 px-3 text-center">
            <div className="text-5xl mb-4 text-primary">👏</div>
            <h3 className="font-bold text-2xl text-gray-800 mb-2">
              Be a Volunteer
            </h3>
            <p className="text-gray-600">
              Help us to collect and distribute donations.
            </p>
          </div>
          <div className="bg-neutral-light border border-secondary rounded-lg py-5 px-3 text-center">
            <div className="text-5xl mb-4 text-primary">💰</div>
            <h3 className="font-bold text-2xl text-gray-800 mb-2">
              Donate Money
            </h3>
            <p className="text-gray-600">
              Support us financially to cover operational costs and help us to
              grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
