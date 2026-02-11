import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import {
    ArrowRight,
    Search,
    Filter,
    Sparkles,
    Shield,
    Siren,
    Wrench,
    Building2,
    ShoppingBag,
    Pill,
    Crown,
} from "lucide-react";
import { instansi } from "../data/instansi";
import Footer from "../components/Footer";
import { Glass, Reveal, SectionTitle, ShineButton, useTilt } from "../components/ui";

const categoryIcons = {
    Government: Building2,
    Emergency: Shield,
    Business: ShoppingBag,
    Private: Crown,
};

const categories = ["All", "Government", "Emergency", "Business", "Private"];

function Badge({ children, className = "" }) {
    return (
        <div
            className={
                "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-700 shadow-sm " +
                className
            }
        >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
            {children}
        </div>
    );
}

function DifficultyPill({ level }) {
    const map = {
        Easy: "bg-emerald-50 text-emerald-700 border-emerald-200",
        Medium: "bg-amber-50 text-amber-700 border-amber-200",
        Hard: "bg-rose-50 text-rose-700 border-rose-200",
    };

    return (
        <div
            className={
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-black " +
                (map[level] || "bg-slate-50 text-slate-700 border-slate-200")
            }
        >
            {level}
        </div>
    );
}

function InstansiCard({ item, index }) {
    const { style, handlers } = useTilt();
    const Icon = categoryIcons[item.category] || Sparkles;

    return (
        <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.04 }}
        >
            <div
                onMouseMove={handlers.onMove}
                onMouseLeave={handlers.onLeave}
                style={style}
                className="group relative overflow-hidden rounded-[38px] border border-slate-200 bg-white/70 p-7 shadow-2xl backdrop-blur-xl transition"
            >
                {/* glow */}
                <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-r ${item.color} opacity-25 blur-3xl transition group-hover:opacity-40`}
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-violet-600/5" />
                </div>

                <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl transition group-hover:scale-[1.05]`}
                            >
                                <Icon size={20} />
                            </div>

                            <div>
                                <div className="text-lg font-black text-slate-900">
                                    {item.name}
                                </div>
                                <div className="mt-0.5 text-xs font-bold text-slate-500">
                                    {item.category}
                                </div>
                            </div>
                        </div>

                        <DifficultyPill level={item.difficulty} />
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {item.short}
                    </p>

                    <div className="mt-5 text-xs font-bold text-slate-500">
                        {item.tagline}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                        <a
                            href={item.applyUrl}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-extrabold text-white shadow-xl transition hover:scale-[1.03]"
                        >
                            Daftar Instansi
                            <ArrowRight size={18} />
                        </a>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default function Instansi() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("All");

    const filtered = useMemo(() => {
        return instansi
            .filter((x) => {
                const okCat = cat === "All" ? true : x.category === cat;
                const okQuery =
                    q.trim().length === 0
                        ? true
                        : (x.name + " " + x.short + " " + x.tagline)
                            .toLowerCase()
                            .includes(q.toLowerCase());

                return okCat && okQuery;
            })
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [q, cat]);

    return (
        <div className="pb-10">
            {/* HERO */}
            <section className="mx-auto max-w-6xl px-5 pt-14">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[46px] border border-slate-200 bg-white/60 p-10 shadow-2xl backdrop-blur-xl md:p-12">
                        {/* glow */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/35 to-violet-600/35 blur-3xl" />
                        <div className="pointer-events-none absolute -left-24 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/30 to-fuchsia-600/30 blur-3xl" />

                        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
                            <div>
                                <Badge>
                                    <Filter size={14} />
                                    Whitelist Instansi
                                </Badge>

                                <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                                    Instansi Mercy
                                    <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                        Choose your path
                                    </span>
                                </h1>

                                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                                    Setiap instansi punya landing page sendiri: detail, requirement,
                                    divisi, benefit, dan tombol apply.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <ShineButton href="#">
                                        <span className="inline-flex items-center gap-2">
                                            Apply Whitelist
                                            <ArrowRight size={18} />
                                        </span>
                                    </ShineButton>

                                    <Link
                                        to="/"
                                        className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03]"
                                    >
                                        Back to Home
                                    </Link>
                                </div>
                            </div>

                            <Glass className="p-6">
                                <div className="text-sm font-black text-slate-900">
                                    Search Instansi
                                </div>

                                <div className="mt-4 flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                    <Search size={18} className="text-slate-500" />
                                    <input
                                        value={q}
                                        onChange={(e) => setQ(e.target.value)}
                                        placeholder="Cari: Polisi, EMS, Mekanik..."
                                        className="w-full bg-transparent text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    {categories.map((x) => {
                                        const Icon = categoryIcons[x] || Sparkles;
                                        const active = cat === x;

                                        return (
                                            <button
                                                key={x}
                                                onClick={() => setCat(x)}
                                                className={
                                                    "flex items-center gap-3 rounded-3xl border px-4 py-3 text-left text-sm font-extrabold shadow-sm transition hover:scale-[1.02] " +
                                                    (active
                                                        ? "border-slate-900 bg-slate-900 text-white"
                                                        : "border-slate-200 bg-white text-slate-900")
                                                }
                                            >
                                                <Icon size={18} />
                                                {x}
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="mt-5 text-xs font-bold text-slate-500">
                                    Showing:{" "}
                                    <span className="text-slate-900">{filtered.length}</span>{" "}
                                    instansi
                                </div>
                            </Glass>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* GRID */}
            <section className="mx-auto mt-12 max-w-6xl px-5">
                <Reveal>
                    <SectionTitle
                        kicker="Whitelist"
                        title="All official institutions"
                        desc="Klik detail untuk masuk ke landing page instansi. Tombol daftar akan mengarah ke form."
                    />
                </Reveal>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((x, i) => (
                        <InstansiCard key={x.id} item={x} index={i} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
