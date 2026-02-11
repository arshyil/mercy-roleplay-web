import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const nav = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Rules", to: "/rules" },
    { label: "Instansi", to: "/instansi" },
    { label: "Staff", to: "/staff" },
];

export default function Navbar() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/65 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <Link to="/" className="group flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg transition group-hover:scale-[1.03]">
                        <Sparkles size={18} />
                    </div>
                    <div className="leading-tight">
                        <div className="text-sm font-extrabold tracking-tight text-slate-900">
                            Mercy Roleplay
                        </div>
                        <div className="text-xs text-slate-500">FiveM GTA V</div>
                    </div>
                </Link>

                <nav className="flex items-center gap-2">
                    {nav.map((x) => (
                        <NavLink
                            key={x.to}
                            to={x.to}
                            className={({ isActive }) =>
                                `rounded-2xl px-4 py-2 text-sm font-semibold transition ${isActive
                                    ? "bg-slate-900 text-white"
                                    : "text-slate-700 hover:bg-slate-100"
                                }`
                            }
                        >
                            {x.label}
                        </NavLink>
                    ))}

                    <a
                        href="https://discord.gg/mercyroleplay"
                        className="ml-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
                    >
                        Join Discord
                    </a>
                </nav>
            </div>
        </motion.header>
    );
}
