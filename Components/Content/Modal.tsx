import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useLayoutEffect } from "react";

type ModalType = {
  lat: string;
  long: string;
  pharmacyName: string;
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({
  lat,
  long,
  pharmacyName,
  isVisible,
  setVisible,
}: ModalType) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    language: "tr",
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
  });
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: Number(lat), // Latitude of the location
    lng: Number(long), // Longitude of the location
  } as any;

  useLayoutEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (isVisible) {
    return (
      <div
        onClick={() => setVisible(false)}
        className="flexCenter fixed inset-0 z-40 h-full w-full bg-black/70 text-white shadow"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="pointer-none relative min-h-1/2 w-[90%] rounded-md bg-white text-black xl:w-1/2"
        >
          <div
            onClick={() => setVisible(false)}
            className="flexCenter absolute top-0 right-0 z-10 size-7 translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-black text-white"
          >
            X
          </div>

          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={16}
            >
              <Marker
                label={pharmacyName}
                // onClick={() => setMarkerId(item.Id)}
                position={center}
              ></Marker>
            </GoogleMap>
          ) : (
            <div className="flex h-full w-full items-center justify-center font-bold">
              Yükleniyor...
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
}
