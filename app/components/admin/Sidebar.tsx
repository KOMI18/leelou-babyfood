"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Package, Truck, Settings, LogOut } from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Commandes", href: "/admin/orders", icon: ShoppingBag },
  { name: "Produits", href: "/admin/products", icon: Package },
  { name: "Livraisons", href: "/admin/deliveries", icon: Truck },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-100 p-6 flex flex-col">
      <div className="font-serif text-2xl font-bold text-leelou mb-10 px-4">
        <img src='/logo/leelou.png' className="h-12"/> <span className="text-xs block text-gray-400 font-sans tracking-widest uppercase">Admin Panel</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                isActive ? "bg-leelou text-white shadow-lg shadow-leelou/20" : "text-gray-500 hover:bg-leelou-soft hover:text-leelou"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-gray-50">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-500 transition-colors w-full">
          <LogOut size={20} />
          <span className="font-medium">Déconnexion</span>
        </button>
      </div>
    </div>
  );
}