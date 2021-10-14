import React from "react";

const DeliveryRoute = () => {
  return (
    <>
      <div>
        <h2>Map Route</h2>
      </div>
      <div>
        <iframe
          title="Route"
          width="600"
          height="450"
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/directions?key=${process.env.REACT_APP_GMAP_API_KEY}&origin="672635"&destination="General Assembly"`}
        ></iframe>
      </div>
    </>
  );
};

export default DeliveryRoute;