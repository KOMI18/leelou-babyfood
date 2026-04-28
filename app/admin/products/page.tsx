"use client";
import { Edit3, Trash2, Plus } from "lucide-react";

const products = [
  { id: 1, name: "Compote Baobab Corossol", type: "Petit Pot", price: 2200, stock: 45 },
  { id: 2, name: "Trio Corossol Banane Mangue", type: "Petit Pot", price: 2200, stock: 12 },
  { id: 4, name: "Yaourt Mangue Vanille", type: "Yaourt", price: 2500, stock: 0 }, // Rupture pour la démo
];

export default function AdminProducts() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold">Catalogue Produits</h1>
          <p className="text-gray-500">Gérez vos saveurs et vos niveaux de stock.</p>
        </div>
        <button className="bg-leelou text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-leelou-dark transition-all">
          <Plus size={20} /> Ajouter un produit
        </button>
      </div>

      <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-widest">
            <tr>
              <th className="px-8 py-4">Produit</th>
              <th className="px-8 py-4">Catégorie</th>
              <th className="px-8 py-4">Prix</th>
              <th className="px-8 py-4">Stock</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-leelou-soft/30 transition-colors">
                <td className="px-8 py-5 font-bold text-gray-900">{p.name}</td>
                <td className="px-8 py-5">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                    {p.type}
                  </span>
                </td>
                <td className="px-8 py-5 font-medium">{p.price.toLocaleString()} FCFA</td>
                <td className="px-8 py-5">
                  <span className={`font-bold ${p.stock <= 15 ? "text-red-500" : "text-green-600"}`}>
                    {p.stock} unités {p.stock === 0 && "(Rupture)"}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-white rounded-xl text-gray-400 hover:text-leelou transition-all border border-transparent hover:border-gray-100">
                      <Edit3 size={18} />
                    </button>
                    <button className="p-2 hover:bg-white rounded-xl text-gray-400 hover:text-red-500 transition-all border border-transparent hover:border-gray-100">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}