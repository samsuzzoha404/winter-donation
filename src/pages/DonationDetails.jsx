import { Calendar, HeartHandshake, MapPin } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DonationDetails = () => {
  const campaignDetails = useLoaderData();
  const [items, setItems] = useState([{ itemType: "", quantity: "" }]);
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const handleAddItem = () => {
    setItems([...items, { itemType: "", quantity: "" }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: value,
    };
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success",
      text: "Thank you ! We will reach your destination soon",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Reset form
    setItems([{ itemType: "", quantity: "" }]);
    setLocation("");
    setNotes("");
  };
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Campaign Details Card */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <figure className="mb-4 max-h-[400px] rounded-xl">
              <img
                src={campaignDetails?.image}
                alt=""
                className="w-full h-full rounded-xl"
              />
            </figure>
            <h1 className="card-title text-3xl">{campaignDetails?.title}</h1>
            <p className="text-base-content/70">
              {campaignDetails?.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mask mask-squircle bg-primary/20 p-2">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Campaign Duration</p>
                    <p className="text-sm text-base-content/70">
                      {campaignDetails?.startDate} - {campaignDetails?.endDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mask mask-squircle bg-primary/20 p-2">
                    <HeartHandshake size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Donations Progress</p>
                    <p className="text-sm text-base-content/70">
                      {campaignDetails?.currentDonations} of{" "}
                      {campaignDetails?.targetDonations} items collected
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mask mask-squircle bg-primary/20 p-2">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Collection Point</p>
                    <p className="text-sm text-base-content/70">
                      {campaignDetails?.collectionPoint}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200">
                <div className="card-body">
                  <h3 className="font-semibold">Accepted Items</h3>
                  <ul className="list-disc list-inside text-base-content/70">
                    {campaignDetails?.acceptedItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <progress
                className="progress progress-primary w-full"
                value={campaignDetails?.currentDonations}
                max={campaignDetails?.targetDonations}
              ></progress>
              <p className="text-sm text-center mt-2 text-base-content/70">
                {Math.round(
                  (campaignDetails?.currentDonations /
                    campaignDetails?.targetDonations) *
                    100
                )}
                % of target reached
              </p>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Make a Donation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dynamic Items Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Donation Items</h3>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="btn text-neutral-light bg-secondary hover:bg-secondary-dark btn-sm"
                  >
                    Add Item
                  </button>
                </div>

                {items.map((item, index) => (
                  <div key={index} className="card bg-base-200">
                    <div className="card-body">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Item Type</span>
                          </label>
                          <select
                            className="select select-bordered w-full"
                            value={item.itemType}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "itemType",
                                e.target.value
                              )
                            }
                            required
                          >
                            <option value="">Select item type</option>
                            {campaignDetails?.acceptedItems.map((type, i) => (
                              <option key={i} value={type.toLowerCase()}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Quantity</span>
                          </label>
                          <input
                            type="number"
                            className="input input-bordered w-full"
                            value={item.quantity}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "quantity",
                                e.target.value
                              )
                            }
                            required
                            min="1"
                          />
                        </div>
                      </div>
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(index)}
                          className="btn btn-error btn-sm btn-outline mt-2"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pickup Location</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="House, Road, Area"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Additional Notes (Optional)
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows="3"
                />
              </div>

              <button
                type="submit"
                className="btn text-neutral-light bg-secondary hover:bg-secondary-dark w-full"
              >
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
