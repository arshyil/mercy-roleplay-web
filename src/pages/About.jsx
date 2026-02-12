import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Glass, Reveal, SectionTitle, ShineButton } from "../components/ui";

import {
    ArrowRight,
    Crown,
    Sparkles,
    Shield,
    HeartHandshake,
    Ghost,
    Globe,
    ScrollText,
} from "lucide-react";

export default function About() {
    const pillars = [
        {
            icon: Crown,
            title: "Premium City Experience",
            desc: "Mercy bukan cuma server. Ini kota yang dibuat untuk story panjang, karakter yang berkembang, dan roleplay yang terasa hidup.",
        },
        {
            icon: HeartHandshake,
            title: "Respect & Quality",
            desc: "Kita jaga komunitas tetap sehat. Toxic, OOC chaos, dan tindakan merusak RP bakal ditindak tegas.",
        },
        {
            icon: Shield,
            title: "Instansi Whitelist",
            desc: "Pemerintah, Polisi, EMS, Mekanik, Pedagang, sampai Dragon Auto Shop — semuanya punya jalur roleplay sendiri.",
        },
        {
            icon: Ghost,
            title: "Underworld Mode A",
            desc: "Sisi gelap kota ada. Tapi list gang tidak ditampilkan di website. Semua info crime hanya lewat Discord.",
        },
    ];

    const values = [
        {
            title: "Serious Roleplay",
            desc: "Fokus ke cerita, immersion, dan interaksi yang masuk akal.",
        },
        {
            title: "Long-Term Story",
            desc: "Kota dibangun untuk roleplay panjang. Bukan cuma tembak-tembakan.",
        },
        {
            title: "Community Driven",
            desc: "Event, sistem, dan update berkembang bareng komunitas Mercy.",
        },
        {
            title: "Fair & Consistent Rules",
            desc: "Rules kota jadi fondasi. Semua warga setara di hadapan hukum Mercy.",
        },
    ];

    return (
        <div className="pb-10">
            {/* HERO */}
            <section className="mx-auto max-w-6xl px-5 pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75 }}
                    className="relative overflow-hidden rounded-[46px] border border-slate-200 bg-white/60 p-8 shadow-2xl backdrop-blur-xl md:p-12"
                >
                    {/* glow */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/35 to-violet-600/35 blur-3xl" />
                    <div className="pointer-events-none absolute -left-24 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/30 to-fuchsia-600/30 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />

                    <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm">
                                <Globe size={16} />
                                ABOUT MERCY ROLEPLAY
                            </div>

                            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                                Mercy is a City.
                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                    Not a Playground.
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                                Mercy Roleplay adalah FiveM GTA V Roleplay server yang fokus ke
                                story-driven roleplay, instansi whitelist, dan komunitas yang
                                dijaga kualitasnya.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <ShineButton href="https://discord.gg/mercyroleplay">
                                    <span className="inline-flex items-center gap-2">
                                        Join Discord
                                        <ArrowRight size={18} />
                                    </span>
                                </ShineButton>

                                <Link
                                    to="/instansi"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03]"
                                >
                                    Instansi Whitelist
                                </Link>

                                <Link
                                    to="/rules"
                                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 font-extrabold text-white shadow-xl transition hover:scale-[1.03]"
                                >
                                    Baca Rules
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <Glass className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <ScrollText size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">
                                            City Philosophy
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Mercy dibangun dengan prinsip: roleplay harus punya arah,
                                            bukan chaos. Setiap warga punya story, setiap instansi punya
                                            identitas.
                                        </p>
                                    </div>
                                </div>
                            </Glass>

                            <Glass className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <Ghost size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">
                                            Mode A (Underworld)
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Sisi gelap kota ada, tapi tidak dipamerkan di website.
                                            Semua informasi crime tersedia di Discord untuk menjaga
                                            immersion dan keamanan komunitas.
                                        </p>
                                    </div>
                                </div>
                            </Glass>

                            <Glass className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <Sparkles size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">
                                            Long-Term Story
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            Mercy dirancang untuk karakter berkembang: reputasi, relasi,
                                            karir, dan konsekuensi roleplay yang terasa nyata.
                                        </p>
                                    </div>
                                </div>
                            </Glass>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* PILLARS */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <SectionTitle
                        kicker="Mercy Identity"
                        title="What makes Mercy different"
                        desc="Bukan sekadar server RP. Mercy adalah kota yang dibangun untuk komunitas yang mau main dengan kualitas."
                    />
                </Reveal>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {pillars.map((x, i) => (
                        <Reveal key={x.title} delay={i * 0.05}>
                            <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white/70 p-7 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1">
                                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-600/20 blur-3xl opacity-0 transition group-hover:opacity-100" />

                                <div className="relative flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <x.icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black text-slate-900">
                                            {x.title}
                                        </div>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            {x.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* VALUES */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <SectionTitle
                        kicker="Core Values"
                        title="Rules are not limitations — they are protection"
                        desc="Rules bukan buat membatasi, tapi buat melindungi kualitas roleplay dan kenyamanan semua warga."
                    />
                </Reveal>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {values.map((v, i) => (
                        <Reveal key={v.title} delay={i * 0.05}>
                            <div className="rounded-[34px] border border-slate-200 bg-white/70 p-7 shadow-2xl backdrop-blur-xl">
                                <div className="text-sm font-black text-slate-900">
                                    {v.title}
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    {v.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[46px] border border-slate-200 bg-white/60 p-10 text-center shadow-2xl backdrop-blur-xl md:p-12">
                        <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/35 to-violet-600/35 blur-3xl" />
                        <div className="pointer-events-none absolute -left-24 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/30 to-fuchsia-600/30 blur-3xl" />

                        <div className="relative">
                            <div className="text-3xl font-black text-slate-900">
                                Welcome to Mercy.
                            </div>
                            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                                Kalau kamu cari roleplay yang punya kualitas, story panjang, dan
                                komunitas yang dijaga, Mercy adalah kota kamu.
                            </p>

                            <div className="mt-7 flex flex-wrap justify-center gap-3">
                                <ShineButton href="https://discord.gg/mercyroleplay">
                                    <span className="inline-flex items-center gap-2">
                                        Join Discord
                                        <ArrowRight size={18} />
                                    </span>
                                </ShineButton>

                                <Link
                                    to="/instansi"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03]"
                                >
                                    Lihat Instansi
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <Footer />
        </div>
    );
}
