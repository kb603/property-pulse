import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTimes,
  FaCheck,
  FaMapMarker,
} from "react-icons/fa";

export default function PropertyDetails({ property }) {
  return (
    <main>
      <div className="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
        <div className="mb-4 text-gray-500">{property.type}</div>
        <h1 className="mb-4 text-3xl font-bold">{property.name}</h1>
        <div className="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
          <FaMapMarker className="mr-2 text-lg text-orange-700" />
          <p className="text-orange-700">
            {property.location.street} {property.location.city},{" "}
            {property.location.state} {property.location.zipcode}
          </p>
        </div>

        <h3 className="my-6 bg-gray-800 p-2 text-lg font-bold text-white">
          Rates & Options
        </h3>
        <div className="flex flex-col justify-around md:flex-row">
          <div className="mb-4 flex items-center justify-center border-b border-gray-200 pb-4 md:border-b-0 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Nightly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.nightly ? (
                `$${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className="fa fa-xmark text-red-700" />
              )}
            </div>
          </div>
          <div className="mb-4 flex items-center justify-center border-b border-gray-200 pb-4 md:border-b-0 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.weekly ? (
                `$${property.rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className="fa fa-xmark text-red-700" />
              )}
            </div>
          </div>
          <div className="mb-4 flex items-center justify-center pb-4 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">
              {" "}
              {property.rates.monthly ? (
                `$${property.rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className="fa fa-xmark text-red-700" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-lg font-bold">Description & Details</h3>
        <div className="mb-4 flex justify-center gap-4 space-x-9 text-xl text-blue-500">
          <p>
            <FaBed className="mr-2 inline-block" /> {property.beds}{" "}
            <span className="hidden sm:inline">Beds</span>
          </p>
          <p>
            <FaBath className="mr-2 inline-block" /> {property.baths}{" "}
            <span className="hidden sm:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="mr-2 inline-block" />
            {property.square_feet}{" "}
            <span className="hidden sm:inline">sqft</span>
          </p>
        </div>
        <p className="mb-4 text-center text-gray-500">{property.description}</p>
      </div>

      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-lg font-bold">Amenities</h3>

        <ul className="grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {property.amenities.map((amenity, index) => (
            <li key={index} className="mb-2 flex items-center">
              <FaCheck className="mr-2 text-green-500" /> {amenity}
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- Map --> */}
      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <div id="map"></div>
      </div>
    </main>
  );
}
