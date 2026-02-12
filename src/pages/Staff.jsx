import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    Crown,
    Shield,
    Wrench,
    Code2,
    Sparkles,
    Users,
    ArrowRight,
    BadgeCheck,
    LifeBuoy,
} from "lucide-react";

import Footer from "../components/Footer";
import { Glass, Reveal, SectionTitle, ShineButton, useTilt } from "../components/ui";
import { DISCORD_INVITE } from "../config";

function cx(...a) {
    return a.filter(Boolean).join(" ");
}

function Pill({ children, tone = "neutral" }) {
    const map = {
        neutral: "border-slate-200 bg-white text-slate-700",
        blue: "border-blue-200 bg-blue-50 text-blue-800",
        purple: "border-violet-200 bg-violet-50 text-violet-800",
        warn: "border-amber-200 bg-amber-50 text-amber-800",
        danger: "border-rose-200 bg-rose-50 text-rose-800",
        dark: "border-slate-900 bg-slate-900 text-white",
    };

    return (
        <span
            className={cx(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-extrabold shadow-sm",
                map[tone] || map.neutral
            )}
        >
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
            {children}
        </span>
    );
}

function StaffCard({ person, tone = "blue" }) {
    const { style, handlers } = useTilt();

    const toneMap = {
        blue: "from-blue-600 to-violet-600",
        purple: "from-violet-600 to-fuchsia-600",
        dark: "from-slate-900 to-slate-700",
        warn: "from-amber-500 to-orange-600",
    };

    return (
        <div
            onMouseMove={handlers.onMove}
            onMouseLeave={handlers.onLeave}
            style={style}
            className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1"
        >
            {/* glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/15 to-violet-600/15 blur-3xl opacity-0 transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute -left-24 bottom-[-160px] h-56 w-56 rounded-full bg-gradient-to-br from-sky-500/12 to-fuchsia-600/12 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex items-start gap-4">
                {/* PHOTO */}
                <div className="relative h-14 w-14 flex-none overflow-hidden rounded-2xl border border-white/40 bg-slate-100 shadow-lg">
                    {person.photo ? (
                        <img
                            src={person.photo}
                            alt={person.ic}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs font-black text-slate-400">
                            N/A
                        </div>
                    )}

                    {/* ring */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white/50" />
                </div>

                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="text-lg font-black text-slate-900">{person.ic}</div>

                        <span
                            className={cx(
                                "inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-extrabold text-white shadow-sm",
                                toneMap[tone] || toneMap.blue
                            )}
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                            VERIFIED
                        </span>
                    </div>

                    <div className="mt-1 text-sm font-extrabold text-slate-500">
                        {person.tag}
                    </div>

                    {person.note ? (
                        <div className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">
                            {person.note}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}


function Group({ title, icon: Icon, tone, desc, people, image }) {
    return (
        <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white/60 shadow-2xl backdrop-blur-xl">

            {/* TOP IMAGE (optional) */}
            {image ? (
                <div className="relative h-[220px] w-full overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-white/10" />
                    <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* header */}
                    <div className="absolute bottom-5 left-6 right-6 flex flex-wrap items-end justify-between gap-3">
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                <Icon size={20} />
                            </div>

                            <div>
                                <div className="text-2xl font-black tracking-tight text-slate-900">
                                    {title}
                                </div>
                                <div className="mt-1 text-sm font-semibold text-slate-700">
                                    {desc}
                                </div>
                            </div>
                        </div>

                        <Pill tone={tone}>{people.length} person</Pill>
                    </div>
                </div>
            ) : (
                /* header without image */
                <div className="flex flex-wrap items-end justify-between gap-3 p-7 md:p-9">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                            <Icon size={20} />
                        </div>

                        <div>
                            <div className="text-2xl font-black tracking-tight text-slate-900">
                                {title}
                            </div>
                            <div className="mt-1 text-sm font-semibold text-slate-600">
                                {desc}
                            </div>
                        </div>
                    </div>

                    <Pill tone={tone}>{people.length} person</Pill>
                </div>
            )}

            {/* BODY */}
            <div className="p-7 md:p-9">
                <div className="grid gap-5 md:grid-cols-2">
                    {people.map((p) => (
                        <Reveal key={p.tag}>
                            <StaffCard
                                person={p}
                                tone={tone === "danger" ? "dark" : tone === "warn" ? "warn" : "blue"}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default function Staff() {
    const data = useMemo(() => {
        return {
            owner: [
                { ic: "ROSE SANTI", tag: "OWNER", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
            ],


            developer: [
                { ic: "Maslex Maximilian", tag: "MPR - Maslex", note: "Developer / scripting & systems.", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
            ],

            modder: [
                { ic: "MRP - DK", tag: "Dhika Starheaven", note: "Modder / asset & city visuals.", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
            ],

            superAdmin: [
                { ic: "APTA R MAXIMILIAN", tag: "MRP - APT", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "MAMAT KHALEEL", tag: "MRP - MAMAT", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "RICHARD BECKER", tag: "MRP - OPUNG", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
            ],

            admin: [
                { ic: "DEON AWATARA", tag: "MRP - MASDE", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "LOKI LYSANDER", tag: "MRP - LER", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "BINTANG LAVENDRA", tag: "MRP - MULYO", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "MAX KENZIE", tag: "MRP - MAXXIE", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "ZUKII DELON", tag: "MRP - ZUKI", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "ALEX", tag: "MRP - A", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "DAENG", tag: "MRP - D", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
            ],

            helper: [
                { ic: "CLARA JASMINE", tag: "MRP - CLARA", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
                { ic: "KYNARA DACAMORA", tag: "MRP - KYN", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
            ],

            trial: [
                { ic: "HAYASHI JORDI", tag: "MRP - JORDI", photo: import.meta.env.BASE_URL + "staff/people/logoMercy.png" },
            ],
        };
    }, []);

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
                    <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />

                    <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                                Mercy Roleplay • Management & Staff
                            </div>

                            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                                City Staff
                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                    Mercy Management
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                                Staff Mercy Roleplay adalah penjaga kualitas roleplay, keamanan kota,
                                dan kenyamanan komunitas. Kalau ada masalah, jangan ribut OOC — cuma game geysszz.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <ShineButton href={DISCORD_INVITE}>
                                    <span className="inline-flex items-center gap-2">
                                        Open Support (Discord)
                                        <ArrowRight size={18} />
                                    </span>
                                </ShineButton>

                                <Link
                                    to="/rules"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03]"
                                >
                                    Baca Rules
                                </Link>

                                <Link
                                    to="/"
                                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 font-extrabold text-white shadow-xl transition hover:scale-[1.03]"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <Glass className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <Crown size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">
                                            Management System
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Structure • Discipline • Quality
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                    Semua keputusan staff tetap mengikuti rules kota. Jika ada laporan,
                                    segera laporkan kepada admin.
                                </p>
                            </Glass>

                            <Glass className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <LifeBuoy size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">
                                            Support First
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Ticket • Help • Resolution
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                    Jangan drama di chat. Kalau ada masalah, masuk layanan warga
                                    jelaskan kronologi. Staff akan handle sesuai prioritas.
                                </p>
                            </Glass>

                            <Glass className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <Sparkles size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">
                                            Quality Roleplay
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Respect • Immersion • Story
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                    Fokus utama Mercy adalah roleplay yang hidup. Staff ada untuk menjaga
                                    supaya story kota tetap berjalan.
                                </p>
                            </Glass>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* LIST */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <SectionTitle
                        kicker="Mercy Staff List"
                        title="Struktur Management & Support"
                        desc="Dibagi sesuai tugas: management, admin, helper, dan trial."
                    />
                </Reveal>

                <div className="mt-10 grid gap-8">
                    <Reveal>
                        <Group
                            title="Owner"
                            icon={Crown}
                            tone="dark"
                            desc="Pemegang keputusan tertinggi kota Mercy."
                            people={data.owner}
                        // image="/staff/owner.jpg"
                        />
                    </Reveal>

                    <Reveal>
                        <Group
                            title="Developer"
                            icon={Code2}
                            tone="purple"
                            desc="Pengembang server, scripting, dan optimasi server."
                            people={data.developer}
                        // image="/staff/owner.jpg"
                        />
                    </Reveal>

                    <Reveal>
                        <Group
                            title="Modder"
                            icon={Wrench}
                            tone="blue"
                            desc="Asset, map, visual, dan kebutuhan mod kota."
                            people={data.modder}
                        // image="/staff/owner.jpg"
                        />
                    </Reveal>

                    <Reveal>
                        <Group
                            title="Super Admin"
                            icon={Shield}
                            tone="danger"
                            desc="Penegak aturan & pengambil keputusan operasional."
                            people={data.superAdmin}
                        // image="/staff/owner.jpg"
                        />
                    </Reveal>

                    <Reveal>
                        <Group
                            title="Admin"
                            icon={Users}
                            tone="warn"
                            desc="Mengurus laporan, support, dan pengawasan roleplay."
                            people={data.admin}
                        // image="/staff/owner.jpg"
                        />
                    </Reveal>

                    <Reveal>
                        <Group
                            title="Helper"
                            icon={Sparkles}
                            tone="blue"
                            desc="Bantu pemain baru, support ringan, dan monitoring."
                            people={data.helper}
                        // image="/staff/owner.jpg"
                        />
                    </Reveal>

                    <Reveal>
                        <Group
                            title="Trial Helper"
                            icon={BadgeCheck}
                            tone="purple"
                            desc="Admin trainee. Masih dalam masa evaluasi."
                            people={data.trial}
                        // image="/staff/owner.jpg"
                        />
                    </Reveal>
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[46px] border border-slate-200 bg-white/60 p-10 text-center shadow-2xl backdrop-blur-xl md:p-12">
                        <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/35 to-violet-600/35 blur-3xl" />
                        <div className="pointer-events-none absolute -left-24 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/30 to-fuchsia-600/30 blur-3xl" />

                        <div className="relative">
                            <div className="text-3xl font-black text-slate-900">
                                Butuh bantuan?
                            </div>
                            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                                Support resmi hanya lewat Discord. Buka ticket dan jelaskan kronologi
                                supaya staff bisa bantu lebih cepat.
                            </p>

                            <div className="mt-7 flex flex-wrap justify-center gap-3">
                                <ShineButton href={DISCORD_INVITE}>
                                    <span className="inline-flex items-center gap-2">
                                        Open Support (Discord)
                                        <ArrowRight size={18} />
                                    </span>
                                </ShineButton>

                                <Link
                                    to="/instansi"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03]"
                                >
                                    Instansi Whitelist
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
