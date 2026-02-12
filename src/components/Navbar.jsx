import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";


const nav = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Rules", to: "/rules" },
    { label: "Instansi", to: "/instansi" },
    { label: "Staff", to: "/staff" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/65 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                {/* LOGO */}
                <Link
                    to="/"
                    className="group flex items-center gap-3"
                    onClick={() => setOpen(false)}
                >
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-transparent transition group-hover:scale-[1.03]">
                        <img
                            src="/staff/people/logoMercy.png"
                            alt="Mercy Roleplay"
                            className="h-full w-full object-contain"
                        />
                    </div>


                    <div className="leading-tight">
                        <div className="text-sm font-extrabold tracking-tight text-slate-900">
                            Mercy Roleplay
                        </div>
                        <div className="text-xs text-slate-500">FiveM GTA V</div>
                    </div>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden items-center gap-2 md:flex">
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

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setOpen((s) => !s)}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm transition hover:scale-[1.03] md:hidden"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
                {open ? (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden"
                    >
                        <div className="mx-auto max-w-6xl px-5 pb-5">
                            <div className="rounded-[28px] border border-slate-200 bg-white/80 p-3 shadow-xl backdrop-blur-xl">
                                <div className="grid gap-2">
                                    {nav.map((x) => (
                                        <NavLink
                                            key={x.to}
                                            to={x.to}
                                            onClick={() => setOpen(false)}
                                            className={({ isActive }) =>
                                                `rounded-2xl px-4 py-3 text-sm font-extrabold transition ${isActive
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
                                        className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-center text-sm font-extrabold text-white shadow-lg transition hover:scale-[1.01]"
                                    >
                                        Join Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </motion.header>
    );
}
