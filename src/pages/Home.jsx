import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { DISCORD_INVITE } from "../config";

import {
    ArrowRight,
    Shield,
    Siren,
    Wrench,
    Building2,
    ShoppingBag,
    Pill,
    Sparkles,
    Play,
    X,
    Crown,
    Globe,
    Users,
    Zap,
    ScrollText,
    Ghost,
} from "lucide-react";
import Footer from "../components/Footer";
import { Glass, Reveal, SectionTitle, ShineButton, useTilt } from "../components/ui";

const instansiPreview = [
    { title: "Pemerintah", icon: Building2 },
    { title: "Polisi", icon: Shield },
    { title: "EMS", icon: Siren },
    { title: "Mekanik", icon: Wrench },
    { title: "Pedagang", icon: ShoppingBag },
    { title: "Bengkel Dragon", icon: Wrench },
];

const highlights = [
    {
        icon: Crown,
        title: "Premium City Design",
        desc: "Kota dibangun untuk terasa hidup. Semua sistem dibuat supaya roleplay punya arah.",
    },
    {
        icon: Users,
        title: "Active Community",
        desc: "Komunitas aktif, staff responsif, dan event yang bikin kota ga pernah sepi.",
    },
    {
        icon: Zap,
        title: "Fast & Smooth",
        desc: "Kota yang ringan cocok untuk kalian dengan device mid range",
    },
];

const timeline = [
    {
        title: "Masuk ke Discord",
        desc: "Gabung komunitas Mercy. Dapat info WL, rules, dan update kota.",
        icon: Users,
    },
    {
        title: "Ambil Role Warga",
        desc: "Sebelum memasuki kota ini kamu harus ambil role warga dulu yaa",
        icon: Shield,
    },
    {
        title: "Tentukan Alur Cerita",
        desc: "Kamu dapat dengan bebas menentukan alur ceritamu sendiri",
        icon: ScrollText,
    },
    {
        title: "Bangun Story Karakter",
        desc: "Mulai perjalananmu di Mercy sesuai dengan karaktermu",
        icon: Sparkles,
    },
];

const faq = [
    {
        q: "Berapa warga di kota ini?",
        a: "Kota ini berisikan dengan kurang lebih 100 player aktif setiap harinya",
    },
    {
        q: "Kalau aku pemula roleplay, bisa join?",
        a: "Bisa. Justru disini tempat yang paling tepat untuk kamu memulai perjalanan",
    },
    {
        q: "Daftar instansi lewat mana?",
        a: "Bisa kunjungi discord kota ya, ada tombol 'Join Discord' bisa di klik saja",
    },
];

function Modal({ open, onClose, title, children }) {
    return (
        <AnimatePresence>
            {open ? (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center px-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 18, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 18, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full max-w-4xl overflow-hidden rounded-[34px] border border-white/20 bg-white/80 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                            <div className="text-sm font-black text-slate-900">{title}</div>
                            <button
                                onClick={onClose}
                                className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm transition hover:scale-[1.03]"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="p-6">{children}</div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

function InstansiMiniCard({ icon: Icon, title }) {
    const { style, handlers } = useTilt();

    return (
        <div
            onMouseMove={handlers.onMove}
            onMouseLeave={handlers.onLeave}
            style={style}
            className="group rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-xl backdrop-blur-xl transition"
        >
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg transition group-hover:scale-[1.03]">
                    <Icon className="h-5 w-5" />
                </div>

                <div className="text-sm font-black leading-tight text-slate-900">
                    {title}
                </div>
            </div>

            <div className="mt-3 text-xs leading-relaxed text-slate-600">
                Klik Instansi untuk lihat detail, requirement, dan tombol apply.
            </div>
        </div>
    );
}



export default function Home() {
    const [openTrailer, setOpenTrailer] = useState(false);
    const [openGallery, setOpenGallery] = useState(false);

    // TOTAL MEMBER TIDAK BISA DARI WIDGET
    // jadi lu isi manual aja dulu, nanti kalau mau bot baru bisa live
    const members = 3372;



    const gallery = useMemo(
        () => [
            { title: "Cinematic 01", tag: "Downtown" },
            { title: "Cinematic 02", tag: "Night City" },
            { title: "Cinematic 03", tag: "Highway" },
            { title: "Cinematic 04", tag: "Hospital" },
            { title: "Cinematic 05", tag: "Police" },
            { title: "Cinematic 06", tag: "Mechanic" },
        ],
        []
    );

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

                    <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
                        {/* left */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                                Mercy Roleplay • FiveM GTA V
                            </div>

                            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                                Mercy Roleplay
                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                    The City That Feels Alive
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                                Website resmi Mercy Roleplay. Instansi whitelist lengkap, sistem
                                kota hidup, dan komunitas yang aktif.
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
                                    Lihat Instansi
                                </Link>

                                <button
                                    onClick={() => setOpenTrailer(true)}
                                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 font-extrabold text-white shadow-xl transition hover:scale-[1.03]"
                                >
                                    <Play size={18} />
                                    Watch Trailer
                                </button>
                            </div>




                            {/* mini stats */}
                            <div className="mt-10 grid grid-cols-3 gap-3">
                                <Glass className="p-4 text-center">
                                    <div className="text-xs font-bold text-slate-500">Discord Members</div>
                                    <div className="mt-1 text-xl font-black text-slate-900">
                                        <CountUp end={3394} duration={1.2} separator="," />
                                    </div>
                                </Glass>

                                <Glass className="p-4 text-center">
                                    <div className="text-xs font-bold text-slate-500">Online</div>
                                    <div className="mt-1 text-xl font-black text-emerald-600">
                                        <CountUp end={642} duration={1.2} separator="," />
                                    </div>
                                </Glass>

                                <Glass className="p-4 text-center">
                                    <div className="text-xs font-bold text-slate-500">Instansi WL</div>
                                    <div className="mt-1 text-xl font-black text-slate-900">6</div>
                                </Glass>
                            </div>


                        </div>

                        {/* right */}
                        <div className="grid gap-4">
                            <Glass className="relative overflow-hidden p-6">
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r from-blue-600/25 to-violet-600/25 blur-2xl" />
                                <div className="relative">
                                    <div className="text-xl font-black text-slate-900">
                                        Whitelist Kota Mercy
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        Daftarkan dirimu ke whitelist yang ada di kota...
                                    </p>

                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                        {instansiPreview.map((x) => (
                                            <InstansiMiniCard
                                                key={x.title}
                                                icon={x.icon}
                                                title={x.title}
                                            />
                                        ))}
                                    </div>

                                    <Link
                                        to="/instansi"
                                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.02]"
                                    >
                                        Buka Semua Instansi
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </Glass>

                            <Glass className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <Globe size={18} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">
                                            Underworld Mode A
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Mystery • Crime • Street Stories
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                    Di Mercy, sisi gelap kota tetap ada. Tapi list gang tidak
                                    ditampilkan di website. Semua informasi crime ada di Discord.
                                </p>

                                <div className="mt-5 flex items-center gap-3">
                                    <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 shadow-sm">
                                        <Ghost size={16} />
                                        Underworld
                                    </div>
                                    <div className="text-sm text-slate-500">
                                        (via Discord only)
                                    </div>
                                </div>
                            </Glass>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <SectionTitle
                        kicker="Mercy Experience"
                        title="Designed for story-driven roleplay"
                        desc="Bukan cuma server, tapi kota yang dibuat untuk roleplay panjang. Semua instansi punya identitas, aturan, dan jalur story."
                    />
                </Reveal>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {highlights.map((x, i) => (
                        <Reveal key={x.title} delay={i * 0.05}>
                            <div className="group rounded-[32px] border border-slate-200 bg-white/70 p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg transition group-hover:scale-[1.03]">
                                    <x.icon size={20} />
                                </div>

                                <div className="mt-4 text-lg font-black text-slate-900">
                                    {x.title}
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    {x.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* TIMELINE */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <SectionTitle
                        kicker="How It Works"
                        title="Start your journey in 4 steps"
                        desc="Alur masuk Mercy dibuat simpel, tapi tetap menjaga kualitas roleplay."
                    />
                </Reveal>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {timeline.map((x, i) => (
                        <Reveal key={x.title} delay={i * 0.05}>
                            <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white/70 p-7 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1">
                                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-2xl transition group-hover:opacity-100" />

                                <div className="relative flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                        <x.icon size={20} />
                                    </div>

                                    <div>
                                        <div className="text-lg font-black text-slate-900">
                                            {i + 1}. {x.title}
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


            {/* TRAILER */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <SectionTitle
                        kicker="Cinematics"
                        title="A city you can feel"
                        desc="Trailer Mercy Roleplay."
                    />
                </Reveal>

                <div className="mt-10">
                    <Reveal>
                        <button
                            onClick={() => setOpenTrailer(true)}
                            className="group relative w-full overflow-hidden rounded-[42px] border border-slate-200 bg-white/70 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1"
                        >
                            {/* glow */}
                            <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/25 to-violet-600/25 blur-3xl" />
                            <div className="pointer-events-none absolute -left-24 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/20 to-fuchsia-600/20 blur-3xl" />

                            {/* 16:9 */}
                            <div className="relative aspect-video w-full">
                                {/* placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-violet-600/10" />

                                {/* subtle noise */}
                                <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:16px_16px]" />

                                {/* center */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-2xl transition group-hover:scale-[1.06]">
                                        <Play size={28} />
                                    </div>

                                    <div className="mt-6 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                                        Watch Mercy Roleplay Trailer
                                    </div>
                                    <div className="mt-2 max-w-xl text-sm font-semibold text-slate-600 md:text-base">
                                        Klik untuk lihat intro server. (Embed YouTube)
                                    </div>

                                    <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 shadow-sm transition group-hover:scale-[1.03]">
                                        Open Trailer
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Reveal>
                </div>
            </section>


            {/* FAQ MINI */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <SectionTitle
                        kicker="FAQ"
                        title="Quick answers"
                        desc="Beberapa pertanyaan populer."
                    />
                </Reveal>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {faq.map((x, i) => (
                        <Reveal key={x.q} delay={i * 0.05}>
                            <div className="rounded-[34px] border border-slate-200 bg-white/70 p-7 shadow-2xl backdrop-blur-xl">
                                <div className="text-sm font-black text-slate-900">{x.q}</div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {x.a}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="mx-auto mt-14 max-w-6xl px-5">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[46px] border border-slate-200 bg-white/60 p-10 shadow-2xl backdrop-blur-xl md:p-12">
                        <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/35 to-violet-600/35 blur-3xl" />
                        <div className="pointer-events-none absolute -left-24 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/30 to-fuchsia-600/30 blur-3xl" />

                        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-sm">
                                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                                    Ready?
                                </div>

                                <h3 className="mt-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                                    Start your story in Mercy Roleplay.
                                </h3>

                                <p className="mt-4 text-base leading-relaxed text-slate-600">
                                    Join Discord untuk mulai. Semua info whitelist, rules, dan
                                    update kota ada di sana.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 md:justify-end">
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
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <Footer />

            {/* MODALS */}
            <Modal
                open={openTrailer}
                onClose={() => setOpenTrailer(false)}
                title="Mercy Roleplay Trailer"
            >
                <div className="aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-slate-500">
                        COMING SOON! SSAABARRR
                    </div>
                </div>
            </Modal>

            <Modal
                open={openGallery}
                onClose={() => setOpenGallery(false)}
                title="Mercy Gallery"
            >
                <div className="grid gap-4 md:grid-cols-3">
                    {gallery.map((x) => (
                        <div
                            key={x.title}
                            className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                        >
                            <div className="flex h-full items-center justify-center text-xs font-bold text-slate-500">
                                {x.title}
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    );
}
