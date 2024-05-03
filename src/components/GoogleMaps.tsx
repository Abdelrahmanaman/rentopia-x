"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

export default function GoogleMaps() {
  const [open, setOpen] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error("Google API key is not defined");
  }
  const position = {
    lat: 48.0061,
    lng: 0.1996,
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-80 w-full  md:w-96">
        <Map
          defaultZoom={15}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          className=""
        >
          <AdvancedMarker
            position={position}
            onClick={() => setOpen((prev) => !prev)}
          ></AdvancedMarker>
          {open && (
            <InfoWindow position={position}>
              Hello this is a fake mock pin, have a nice day
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
