"use client";
import { Search, Eye, MoreVertical, Download } from "lucide-react";
import { useState } from "react";

const ORDERS_DATA = [
  { id: "ORD-9921", date: "28 Avr 2026", client: "Mme Ngono", total: 15400, status: "Payé", items: 7 },
  { id: "ORD-9922", date: "28 Avr 2026", client: "Jean-Paul Etoa", total: 8500, status: "En attente", items: 3 },
  { id: "ORD-9923", date: "27 Avr 2026", client: "Mme Bella", total: 22000, status: "Livré", items: 10 },
  { id: "ORD-9924", date: "27 Avr 2026", client: "Inès Kamga", total: 12600, status: "Annulé", items: 5 },
];

export default function AdminOrders() {
  const [activeTab, setActiveTab] = useState("Toutes");

  return (
    <div className="p-8 space-y-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Commandes</h1>
          <p className="text-gray-500">Gérez les flux de ventes et les factures clients.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-100 px-6 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm">
          <Download size={18} /> Exporter en CSV
        </button>
      </div>

      {/* FILTRES RAPIDES */}
      <div className="flex items-center justify-between bg-white p-2 rounded-3xl border border-gray-50">
        <div className="flex gap-2">
          {["Toutes", "Payé", "En attente", "Livré"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                activeTab === tab ? "bg-leelou text-white shadow-md" : "text-gray-500 hover:text-leelou"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher une commande..." 
            className="pl-12 pr-6 py-2.5 bg-leelou-cream/50 rounded-2xl outline-none focus:bg-white border border-transparent focus:border-leelou transition-all"
          />
        </div>
      </div>

      {/* TABLEAU DES COMMANDES */}
      <div className="bg-white rounded-[40px] border border-gray-50 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 text-gray-400 text-[11px] uppercase tracking-[0.2em] font-black">
            <tr>
              <th className="px-8 py-5">N° Commande</th>
              <th className="px-8 py-5">Date</th>
              <th className="px-8 py-5">Client</th>
              <th className="px-8 py-5">Items</th>
              <th className="px-8 py-5">Total</th>
              <th className="px-8 py-5">Statut</th>
              <th className="px-8 py-5 text-right">Détails</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {ORDERS_DATA.map((order) => (
              <tr key={order.id} className="group hover:bg-leelou-soft/20 transition-colors">
                <td className="px-8 py-6">
                  <span className="font-mono font-bold text-gray-400 group-hover:text-leelou transition-colors">
                    {order.id}
                  </span>
                </td>
                <td className="px-8 py-6 text-gray-600 font-medium">{order.date}</td>
                <td className="px-8 py-6 font-bold text-gray-900">{order.client}</td>
                <td className="px-8 py-6">
                  <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold">
                    {order.items} produits
                  </span>
                </td>
                <td className="px-8 py-6 font-black text-gray-900">
                  {order.total.toLocaleString()} FCFA
                </td>
                <td className="px-8 py-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    order.status === "Payé" ? "bg-green-100 text-green-600" :
                    order.status === "En attente" ? "bg-orange-100 text-orange-600" :
                    order.status === "Livré" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-white rounded-xl text-gray-400 hover:text-leelou transition-all border border-transparent hover:border-gray-100 shadow-sm">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 hover:bg-white rounded-xl text-gray-400 hover:text-gray-900 transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER DE TABLEAU (PAGINATION) */}
      <div className="flex justify-between items-center px-4">
        <p className="text-sm text-gray-500 font-medium">Affichage de 4 sur 156 commandes</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold hover:bg-white">Précédent</button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold shadow-sm">Suivant</button>
        </div>
      </div>
    </div>
  );
}