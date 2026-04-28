"use client";
import { MapPin, Phone, Package, Clock, CheckCircle2 } from "lucide-react";

const deliveries = [
  {
    id: "DLV-001",
    customer: "Mme. Arlette",
    address: "Bonamoussadi, Rue des Palmiers",
    city: "Douala",
    items: "3x Yaourt Mangue, 2x Compote Baobab",
    status: "En cours",
    courier: "Moussa",
    time: "14:30"
  },
  {
    id: "DLV-002",
    customer: "Dr. Sandrine",
    address: "Bastos, face Ambassade",
    city: "Yaoundé",
    items: "Pack Découverte 7 saveurs",
    status: "En attente",
    courier: "Eto'o Express",
    time: "Demain matin"
  },
  {
    id: "DLV-003",
    customer: "M. Tagne",
    address: "Akwa, Immeuble SOCAR",
    city: "Douala",
    items: "10x Yaourt Pomme Poire",
    status: "Livré",
    courier: "Moussa",
    time: "11:15"
  }
];

export default function DeliveriesPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Suivi des Livraisons</h1>
          <p className="text-gray-500 font-sans">Gérez vos expéditions et vos prestataires de transport.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white px-4 py-2 rounded-xl border border-gray-100 text-sm font-bold">
            Douala: <span className="text-leelou">12</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border border-gray-100 text-sm font-bold">
            Yaoundé: <span className="text-leelou">5</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {deliveries.map((dlv) => (
          <div 
            key={dlv.id} 
            className="bg-white rounded-[32px] p-8 border border-gray-50 hover:border-leelou/20 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* INFOS CLIENT & DESTINATION */}
              <div className="flex gap-6 items-start">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                  dlv.status === "Livré" ? "bg-green-50 text-green-500" : "bg-leelou-soft text-leelou"
                }`}>
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">{dlv.customer}</h3>
                  <p className="text-gray-500 flex items-center gap-1 text-sm mt-1">
                    <MapPin size={14} /> {dlv.address} ({dlv.city})
                  </p>
                  <div className="flex gap-4 mt-3">
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full uppercase tracking-tight">
                      <Package size={12} /> {dlv.items}
                    </span>
                  </div>
                </div>
              </div>

              {/* STATUT & COURSIER */}
              <div className="flex flex-col md:items-end gap-2">
                <span className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest ${
                  dlv.status === "Livré" ? "bg-green-100 text-green-600" : 
                  dlv.status === "En cours" ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"
                }`}>
                  {dlv.status}
                </span>
                <p className="text-sm font-medium text-gray-700 mt-2">Coursier: <span className="text-gray-900">{dlv.courier}</span></p>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock size={12} /> {dlv.time}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 border-t md:border-t-0 pt-4 md:pt-0">
                <button className="flex-1 md:flex-none bg-gray-900 text-white p-4 rounded-2xl hover:bg-gray-800 transition-colors">
                  <Phone size={20} />
                </button>
                {dlv.status !== "Livré" && (
                  <button className="flex-1 md:flex-none bg-leelou text-white px-6 py-4 rounded-2xl font-bold hover:bg-leelou-dark transition-all flex items-center gap-2">
                    <CheckCircle2 size={20} /> Marquer livré
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}