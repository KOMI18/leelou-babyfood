import { ArrowUpRight, Users, ShoppingCart, Banknote } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Ventes totales", value: "1,250,000 FCFA", icon: Banknote, color: "text-green-600", bg: "bg-green-50" },
    { label: "Commandes", value: "48", icon: ShoppingCart, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Nouveaux Clients", value: "+12", icon: Users, color: "text-leelou", bg: "bg-leelou-soft" },
  ];

  return (
    <div className="p-8 space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Bonjour, Naomi 👋</h1>
        <p className="text-gray-500">Voici l'activité de Leelou Baby Food aujourd'hui.</p>
      </header>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-[32px] border border-gray-50 flex items-center gap-5">
            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DERNIÈRES COMMANDES (SIMULATION) */}
      <div className="bg-white rounded-[40px] border border-gray-50 overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-xl font-bold">Commandes récentes</h2>
          <button className="text-leelou font-bold text-sm hover:underline">Voir tout</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-widest">
              <tr>
                <th className="px-8 py-4 font-semibold">Client</th>
                <th className="px-8 py-4 font-semibold">Produit</th>
                <th className="px-8 py-4 font-semibold">Montant</th>
                <th className="px-8 py-4 font-semibold">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { name: "Maman Marie", product: "Pack 7 saveurs", total: "15,400 FCFA", status: "Payé" },
                { name: "Mme Bella", product: "Yaourts x10", total: "25,000 FCFA", status: "En attente" },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5 font-bold">{order.name}</td>
                  <td className="px-8 py-5 text-gray-500">{order.product}</td>
                  <td className="px-8 py-5 font-medium">{order.total}</td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      order.status === "Payé" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}