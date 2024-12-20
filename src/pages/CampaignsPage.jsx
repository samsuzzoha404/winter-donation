import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/campaigns/CampaignCard";

const CampaignsPage = () => {
  const campaigns = useLoaderData();
  const activeCampaigns = campaigns.filter(
    (campaign) => campaign.status === "Active"
  );
  const finishedCampaigns = campaigns.filter(
    (campaign) => campaign.status === "Finished"
  );
  return (
    <div className="max-w-7xl mx-auto px-4">
      <section className="mt-6">
        <h2 className="text-3xl font-bold">Active Campaigns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {activeCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-3xl font-bold">Finished Campaigns</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {finishedCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CampaignsPage;
