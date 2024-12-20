import { Handshake, LandPlot, PersonStanding, Sunset } from "lucide-react";
const Statistics = () => {
  return (
    <div className="my-12 max-w-6xl mx-auto px-4">
      <h2 className="animate__animated animate__slow animate__pulse animate__infinite text-4xl font-bold text-center text-secondary-dark mb-8">
        Glimpse of Our Platform
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="bg-neutral-light flex flex-col gap-4 items-center justify-center p-8 text-center rounded-xl border border-secondary">
          <LandPlot size={96} />
          <h2 className="text-4xl font-bold">22+</h2>
          <p>Successful Campaigns</p>
        </div>
        <div className="bg-neutral-light flex flex-col gap-4 items-center justify-center p-8 text-center rounded-xl border border-secondary">
          <PersonStanding size={96} />
          <h2 className="text-4xl font-bold">1000+</h2>
          <p>Volunteers</p>
        </div>
        <div className="bg-neutral-light flex flex-col gap-4 items-center justify-center p-8 text-center rounded-xl border border-secondary">
          <Sunset size={96} />
          <h2 className="text-4xl font-bold">5+</h2>
          <p>Years of Helping</p>
        </div>
        <div className="bg-neutral-light flex flex-col gap-4 items-center justify-center p-8 text-center rounded-xl border border-secondary">
          <Handshake size={96} />
          <h2 className="text-4xl font-bold">1M+</h2>
          <p>Donors</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
