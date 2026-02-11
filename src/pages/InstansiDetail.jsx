import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { instansi } from "../data/instansi";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Shield,
    Sparkles,
    Users,
    ScrollText,
} from "lucide-react";
import Footer from "../components/Footer";
import { Glass, Reveal, ShineButton } from "../components/ui";

function NotFound() {
    return (
        <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="rounded-[40px] border border-slate-200 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">
                <div className="text-2xl font-black text-slate-900">
                    Instansi tidak ditemukan
                </div>
                <p className="mt-2 text-slate-600">
                    Pastikan URL benar, atau kembali ke halaman instansi.
                </p>

                <Link
                    to="/instansi"
                    className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 font-extrabold text-white shadow-xl transition hover:scale-[1.03]"
                >
                    <ArrowLeft size={18} />
                    Kembali
                </Link>
            </div>
        </div>
    );
}

export default function InstansiDetail() {
    const { id } = useParams();

    const data = useMemo(() => instansi.find((x) => x.id === id), [id]);

    if (!data) return <NotFound />;

    return (
        <div className="pb-10">
            {/* HERO */}
            <section className="mx-auto max-w-6xl px-5 pt-14">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-[46px] border border-slate-200 bg-white/60 p-10 shadow-2xl backdrop-blur-xl md:p-12"
                >
                    <div
                        className={`pointer-events-none absolute -right-24 -top-24 h-[560px] w-[560px] rounded-full bg-gradient-to-br ${data.color} opacity-30 blur-3xl`}
                    />
                    <div className="pointer-events-none absolute -left-24 bottom-[-240px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-sky-500/25 to-fuchsia-600/25 blur-3xl" />

                    <div className="relative z-10">
                        <Link
                            to="/instansi"
                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03]"
                        >
                            <ArrowLeft size={18} />
                            Back to Instansi
                        </Link>

                        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                            {data.name}
                            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                {data.tagline}
                            </span>
                        </h1>

                        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
                            {data.short}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <ShineButton href={data.applyUrl}>
                                <span className="inline-flex items-center gap-2">
                                    Daftar Instansi
                                    <ArrowRight size={18} />
                                </span>
                            </ShineButton>

                            <a
                                href="https://discord.gg/mercyroleplay"
                                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 font-extrabold text-white shadow-xl transition hover:scale-[1.03]"
                            >
                                Join Discord
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto mt-12 max-w-6xl px-5">
                <div className="grid gap-5 lg:grid-cols-3">
                    {/* requirements */}
                    <Reveal>
                        <Glass className="p-7">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-slate-900">
                                        Requirements
                                    </div>
                                    <div className="text-xs font-bold text-slate-500">
                                        Syarat untuk join
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3">
                                {data.requirements.map((r) => (
                                    <div
                                        key={r}
                                        className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
                                    >
                                        <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                                            <Check size={16} />
                                        </div>
                                        <div className="text-sm font-semibold text-slate-800">
                                            {r}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Glass>
                    </Reveal>

                    {/* divisions */}
                    <Reveal delay={0.05}>
                        <Glass className="p-7">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-slate-900">
                                        Divisions
                                    </div>
                                    <div className="text-xs font-bold text-slate-500">
                                        Divisi / bagian
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3">
                                {data.divisions.map((d) => (
                                    <div
                                        key={d}
                                        className="rounded-3xl border border-slate-200 bg-white p-4 text-sm font-extrabold text-slate-900 shadow-sm"
                                    >
                                        {d}
                                    </div>
                                ))}
                            </div>
                        </Glass>
                    </Reveal>

                    {/* benefits */}
                    <Reveal delay={0.1}>
                        <Glass className="p-7">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-slate-900">
                                        Benefits
                                    </div>
                                    <div className="text-xs font-bold text-slate-500">
                                        Keuntungan join
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3">
                                {data.benefits.map((b) => (
                                    <div
                                        key={b}
                                        className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
                                    >
                                        <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                            <ArrowRight size={16} />
                                        </div>
                                        <div className="text-sm font-semibold text-slate-800">
                                            {b}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Glass>
                    </Reveal>
                </div>
            </section>

            {/* APPLY STEPS */}
            <section className="mx-auto mt-12 max-w-6xl px-5">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[46px] border border-slate-200 bg-white/60 p-10 shadow-2xl backdrop-blur-xl md:p-12">
                        <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/25 to-violet-600/25 blur-3xl" />

                        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
                            <div>
                                <div className="text-3xl font-black tracking-tight text-slate-900">
                                    Apply Process
                                </div>
                                <p className="mt-3 max-w-xl text-slate-600">
                                    Cara join instansi ini dibuat simpel, tapi tetap menjaga
                                    kualitas roleplay.
                                </p>
                            </div>

                            <div className="grid gap-3">
                                {[
                                    "Join Discord Mercy Roleplay",
                                    "Baca rules & requirement instansi",
                                    "Isi form apply dengan jujur",
                                    "Tunggu review dari staff",
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
                                    >
                                        <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-slate-900 text-white">
                                            <ScrollText size={16} />
                                        </div>
                                        <div className="text-sm font-semibold text-slate-800">
                                            {x}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <Footer />
        </div>
    );
}
