"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom blinking red dot icon
const blinkingDotIcon = L.divIcon({
  className: "blinking-dot-icon",
  html: `<div style="width: 16px; height: 16px; background-color: #ef4444; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(239,68,68,0.8); animation: pulse 1.5s infinite;"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

interface Store {
  name: string;
  city: string;
  district: string;
  type: string;
  address: string;
  phone: string;
  lat?: number | null;
  lng?: number | null;
}

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 12, { animate: true, duration: 1.5 });
  }, [center, map]);
  return null;
}

export default function StoreMap({ stores, cityFilter }: { stores: Store[], cityFilter: string }) {
  // Coordonnées par défaut : Douala
  let center: [number, number] = [4.07, 9.72];
  
  if (cityFilter === "Yaoundé") {
    center = [3.865, 11.516];
  } else if (cityFilter === "Douala") {
    center = [4.07, 9.72];
  }

  // Filter valid coordinates
  const validStores = stores.filter(s => s.lat != null && s.lng != null);

  return (
    <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-leelou/20 shadow-xl relative z-0">
      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .blinking-dot-icon { background: transparent; border: none; }
        .map-tiles {
          filter: grayscale(100%) opacity(0.8);
        }
        .leaflet-container {
          background-color: #f9fafb !important;
        }
        .leaflet-tooltip.custom-tooltip {
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 8px 12px;
        }
        .leaflet-tooltip-top.custom-tooltip::before {
          border-top-color: white;
        }
      `}</style>
      <MapContainer center={center} zoom={12} scrollWheelZoom={false} style={{ height: "100%", width: "100%", zIndex: 1 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        <MapUpdater center={center} />
        {validStores.map((store, idx) => (
          <Marker key={idx} position={[store.lat!, store.lng!]} icon={blinkingDotIcon}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1} className="custom-tooltip">
              <div className="text-center">
                <h4 className="font-bold text-gray-900 text-sm leading-tight">{store.name}</h4>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{store.district}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
