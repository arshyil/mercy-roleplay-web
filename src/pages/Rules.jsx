import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import {
    ShieldAlert,
    HeartHandshake,
    Skull,
    Bug,
    Siren,
    Sparkles,
    ArrowRight,
    ChevronDown,
    Ban,
    Gavel,
    BookOpen,
} from "lucide-react";
import Footer from "../components/Footer";

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

function CompactRule({ rule, open, onToggle }) {
    const sev = rule.severity || "normal";

    const sevDot =
        sev === "danger"
            ? "bg-rose-600"
            : sev === "warn"
                ? "bg-amber-500"
                : "bg-gradient-to-r from-blue-600 to-violet-600";

    return (
        <div className="border-b border-slate-200 py-5">
            <button
                onClick={onToggle}
                className="group flex w-full items-start justify-between gap-6 text-left"
            >
                <div className="flex items-start gap-4">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full shadow-sm ring-4 ring-slate-100">
                        <div className={cx("h-full w-full rounded-full", sevDot)} />
                    </div>

                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="text-lg font-black text-slate-900">
                                {rule.title}
                            </div>

                            {rule.badge ? <Pill tone="purple">{rule.badge}</Pill> : null}

                            {rule.sanction ? (
                                <Pill
                                    tone={
                                        sev === "danger" ? "danger" : sev === "warn" ? "warn" : "blue"
                                    }
                                >
                                    Sanksi: {rule.sanction}
                                </Pill>
                            ) : null}
                        </div>

                        <div className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                            {rule.summary}
                        </div>
                    </div>
                </div>

                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition group-hover:scale-[1.03]">
                    <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.18 }}
                    >
                        <ChevronDown size={18} />
                    </motion.div>
                </div>
            </button>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="mt-4"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-lg backdrop-blur-xl">
                            {/* glow */}
                            <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-gradient-to-br from-blue-500/20 to-violet-600/20 blur-3xl" />
                            <div className="pointer-events-none absolute -left-24 bottom-[-140px] h-[260px] w-[260px] rounded-full bg-gradient-to-br from-sky-500/15 to-fuchsia-600/15 blur-3xl" />

                            <div className="relative grid gap-3">
                                {rule.points.map((p) => (
                                    <div
                                        key={p}
                                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm"
                                    >
                                        <span className="mt-[6px] h-2 w-2 flex-none rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                                        <span className="min-w-0">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}


export default function Rules() {
    const [tab, setTab] = useState("umum");
    const [openId, setOpenId] = useState(null);

    const data = useMemo(() => {
        return {
            pembukaan: {
                title: "Pembukaan Peraturan Kota Mercy Roleplay",
                summary:
                    "Landasan hukum tertinggi untuk menjaga kota yang aman, adil, tertib, dan roleplay berkualitas.",
                points: [
                    "Keadilan Sosial: hak & kewajiban setara di hadapan hukum.",
                    "Kedaulatan Hukum: semua tindakan tunduk pada aturan kota.",
                    "Keseimbangan: hak individu vs kepentingan umum.",
                    "Kemanusiaan & Keamanan: perlindungan kehidupan & hak warga.",
                ],
            },

            tabs: [
                { id: "umum", name: "Umum", icon: HeartHandshake },
                { id: "larangan", name: "Larangan Keras", icon: Ban },
                { id: "roleplay", name: "Roleplay", icon: Sparkles },
                { id: "illegal", name: "Cheat/Bug", icon: Bug },
                { id: "medis", name: "Medis", icon: Siren },
                { id: "ck", name: "CK", icon: Skull },
            ],

            rules: {
                umum: [
                    {
                        id: "respect",
                        title: "Respect",
                        summary:
                            "Wajib saling menghormati antar pemain (IC & OOC) dengan tata krama dan interaksi sopan.",
                        points: [
                            "Respect dalam IC: hargai karakter lain sesuai situasi roleplay.",
                            "Respect dalam OOC: hargai pemain lain di luar roleplay.",
                            "Dilarang merusak kenyamanan roleplay orang lain.",
                        ],
                        badge: "General",
                    },
                    {
                        id: "attitude",
                        title: "Attitude",
                        summary:
                            "Wajib punya sikap baik secara IC & OOC. Dilarang menghina atau berkata kasar OOC.",
                        points: [
                            "Dilarang menghina, memaki, atau berkata kasar kepada pemain lain secara OOC.",
                            "Jika ada konflik, selesaikan melalui jalur staff/ticket.",
                        ],
                        badge: "General",
                    },
                ],

                larangan: [
                    {
                        id: "pelecehan",
                        title: "Pelecehan Seksual",
                        summary:
                            "Dilarang melakukan tindakan pelecehan seksual secara IC maupun OOC.",
                        points: ["Tidak ada toleransi untuk pelecehan seksual dalam bentuk apapun."],
                        sanction: "Permanent",
                        severity: "danger",
                        badge: "Hard Rule",
                    },
                    {
                        id: "sara",
                        title: "SARA (Suku, Agama, Ras, Antar Golongan)",
                        summary: "Dilarang membawa unsur SARA ke dalam roleplay maupun OOC.",
                        points: [
                            "Tidak ada toleransi untuk ujaran kebencian.",
                            "Berlaku untuk IC maupun OOC.",
                        ],
                        sanction: "Permanent",
                        severity: "danger",
                        badge: "Hard Rule",
                    },
                    {
                        id: "flaming",
                        title: "Flaming & Taunting",
                        summary:
                            "Dilarang flaming/taunting kepada pemain lain yang sudah down/pingsan.",
                        points: [
                            "Flaming: bahasa kasar/menyindir/konflik verbal di luar konteks roleplay.",
                            "Taunting: merendahkan/memprovokasi lawan RP tanpa alur cerita yang sesuai.",
                        ],
                        sanction: "Ban 3 hari / 7 hari / 1 bulan",
                        severity: "warn",
                        badge: "Hard Rule",
                    },
                ],

                illegal: [
                    {
                        id: "illegal-bug",
                        title: "Program Illegal & Bug Abuse",
                        summary:
                            "Dilarang menggunakan program illegal (cheat) atau menyalahgunakan bug di dalam game.",
                        points: [
                            "Dilarang menggunakan cheat, mod ilegal, atau program ilegal apapun.",
                            "Dilarang bug abuse. Jika menemukan bug, laporkan ke staff.",
                        ],
                        sanction: "Ban 3 hari / 7 hari / 1 bulan",
                        severity: "danger",
                        badge: "Anti-Cheat",
                    },
                ],

                roleplay: [
                    {
                        id: "konsistensi",
                        title: "Konsistensi Karakter",
                        summary:
                            "Pertahankan konsistensi perilaku dan kepribadian karakter sepanjang roleplay.",
                        points: [
                            "Karakter harus punya latar belakang yang masuk akal.",
                            "Jangan mengubah sifat/tujuan karakter tanpa alasan story.",
                        ],
                        badge: "Quality",
                    },
                    {
                        id: "realisme",
                        title: "Realisme Roleplay",
                        summary:
                            "Bertindak sesuai alur cerita dan karakter. Hindari tindakan yang tidak masuk akal.",
                        points: [
                            "Jaga immersion roleplay, hindari tindakan tidak realistis.",
                            "Jangan membuat chaos tanpa alasan story.",
                        ],
                        badge: "Quality",
                    },
                    {
                        id: "metagaming",
                        title: "Tidak Metagaming",
                        summary: "Dilarang menggunakan informasi OOC untuk keuntungan IC.",
                        points: ["Informasi dari Discord/stream/OOC tidak boleh dipakai untuk IC."],
                        sanction: "Sanksi sesuai staff",
                        severity: "warn",
                        badge: "Quality",
                    },
                    {
                        id: "powergaming",
                        title: "Tidak Power Gaming",
                        summary:
                            "Dilarang memaksakan tindakan pada pemain lain tanpa persetujuan.",
                        points: [
                            "Jangan mengambil kendali berlebihan atas situasi.",
                            "Beri kesempatan lawan RP untuk bereaksi.",
                        ],
                        sanction: "Sanksi sesuai staff",
                        severity: "warn",
                        badge: "Quality",
                    },
                ],

                medis: [
                    {
                        id: "koma",
                        title: "Koma",
                        summary:
                            "Jika respawn di rumah sakit (koma), kamu wajib melupakan kejadian roleplay sebelumnya.",
                        points: [
                            "Dilarang melanjutkan roleplay kejadian yang sama setelah koma.",
                            "Karakter wajib melupakan kejadian sebelumnya (memory loss).",
                            "Contoh: tertembak kepala atau kondisi tidak tertolong.",
                        ],
                        sanction: "Sanksi sesuai staff",
                        severity: "warn",
                        badge: "Medical",
                    },
                    {
                        id: "mixing",
                        title: "Mixing",
                        summary:
                            "Dilarang berkomunikasi atau menyerap informasi OOC dan diterapkan di dalam IC.",
                        points: ["Dilarang memakai informasi OOC untuk keuntungan IC."],
                        sanction: "Sanksi sesuai staff",
                        severity: "warn",
                        badge: "Medical",
                    },
                ],

                ck: [
                    {
                        id: "ck",
                        title: "Character Kill (CK)",
                        summary:
                            "Karakter dinyatakan meninggal permanen jika tidak bisa diselamatkan dan dikonfirmasi rumah sakit.",
                        points: [
                            "CK = karakter meninggal secara permanen dalam story.",
                            "Mutlak: Koma 2x dalam 1 minggu dapat dinyatakan CK.",
                        ],
                        sanction: "CK (permanen karakter)",
                        severity: "danger",
                        badge: "Death",
                    },
                    {
                        id: "force-ck",
                        title: "Force CK",
                        summary:
                            "Dilarang melakukan force CK tanpa persetujuan kedua belah pihak.",
                        points: [
                            "CK harus melalui persetujuan kedua belah pihak atau keputusan staff.",
                        ],
                        sanction: "Sanksi sesuai staff",
                        severity: "danger",
                        badge: "Death",
                    },
                ],
            },
        };
    }, []);

    const list = data.rules[tab];

    return (
        <div className="pb-10">
            {/* HERO */}
            <section className="mx-auto max-w-6xl px-5 pt-14">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[46px] border border-slate-200 bg-white/60 p-10 shadow-2xl backdrop-blur-xl md:p-12"
                >
                    <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/30 to-violet-600/30 blur-3xl" />
                    <div className="pointer-events-none absolute -left-24 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-sky-500/25 to-fuchsia-600/25 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />

                    <div className="relative z-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">

                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 shadow-sm">
                                <BookOpen size={16} />
                                MERCY CITY CODEX
                            </div>

                            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                                City Rules
                                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                    Mercy Roleplay
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                                Ini hukum kota. Baca, pahami, dan patuhi. Pelanggaran akan diberi
                                sanksi sesuai keputusan staff.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="https://discord.gg/mercyroleplay"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-extrabold text-white shadow-xl transition hover:scale-[1.03]"
                                >
                                    Join Discord
                                    <ArrowRight size={18} />
                                </a>

                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03]"
                                >
                                    Back to Home
                                </a>
                            </div>

                        </div>

                        <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white/55 p-7 shadow-2xl backdrop-blur-xl">
                            {/* glow */}
                            <div className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-blue-500/25 to-violet-600/25 blur-3xl" />
                            <div className="pointer-events-none absolute -left-28 bottom-[-220px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-sky-500/20 to-fuchsia-600/20 blur-3xl" />

                            <div className="relative">
                                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-700 shadow-sm">
                                    <ShieldAlert size={16} />
                                    Enforcement Notice
                                </div>

                                <div className="mt-5 text-2xl font-black tracking-tight text-slate-900">
                                    Zero Tolerance
                                </div>
                                <div className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
                                    Beberapa pelanggaran termasuk kategori berat dan akan ditindak tegas.
                                </div>

                                <div className="mt-6 grid gap-3">
                                    {[
                                        {
                                            icon: Ban,
                                            title: "Pelecehan Seksual",
                                            badge: "Permanent",
                                            desc: "Zero tolerance",
                                        },
                                        {
                                            icon: ShieldAlert,
                                            title: "SARA",
                                            badge: "Permanent",
                                            desc: "Zero tolerance",
                                        },
                                        {
                                            icon: Bug,
                                            title: "Cheat / Bug Abuse",
                                            badge: "Ban berat",
                                            desc: "Zero tolerance",
                                        },
                                    ].map((x) => (
                                        <div
                                            key={x.title}
                                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/65 px-5 py-4 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-lg"
                                        >
                                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/15 to-violet-600/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

                                            <div className="relative flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                                                        <x.icon size={18} />
                                                    </div>

                                                    <div>
                                                        <div className="text-sm font-black text-slate-900">
                                                            {x.title}
                                                        </div>
                                                        <div className="text-xs font-bold text-slate-500">{x.desc}</div>
                                                    </div>
                                                </div>

                                                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-900 shadow-sm">
                                                    {x.badge}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-3xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm">
                                    <span className="font-black">Reminder:</span> Tidak ada alasan “ga tau
                                    rules”. Wajib baca sebelum main.
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </section>

            {/* Pembukaan */}
            <section className="mx-auto mt-10 max-w-6xl px-5">
                <div className="rounded-[34px] border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <div className="text-xl font-black text-slate-900">
                                {data.pembukaan.title}
                            </div>
                            <div className="mt-1 text-sm font-semibold text-slate-600">
                                {data.pembukaan.summary}
                            </div>
                        </div>
                        <Pill tone="dark">Mercy Management</Pill>
                    </div>

                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                        {data.pembukaan.points.map((p) => (
                            <div
                                key={p}
                                className="rounded-3xl border border-slate-200 bg-white p-4 text-sm font-semibold leading-relaxed text-slate-700 shadow-sm"
                            >
                                {p}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tabs */}
            <section className="mx-auto mt-10 max-w-6xl px-5">
                <div className="rounded-[34px] border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur-xl">
                    <div className="flex flex-wrap gap-2">
                        {data.tabs.map((t) => {
                            const Icon = t.icon;
                            const is = tab === t.id;
                            return (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setTab(t.id);
                                        setOpenId(null);
                                    }}
                                    className={cx(
                                        "inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-extrabold shadow-sm transition",
                                        is
                                            ? "border-slate-900 bg-slate-900 text-white"
                                            : "border-slate-200 bg-white text-slate-900 hover:scale-[1.02]"
                                    )}
                                >
                                    <Icon size={18} />
                                    {t.name}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-6 grid gap-4">
                        {list.map((r) => (
                            <CompactRule
                                key={r.id}
                                rule={r}
                                open={openId === r.id}
                                onToggle={() => setOpenId((p) => (p === r.id ? null : r.id))}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-12 max-w-6xl px-5">
                <div className="rounded-[34px] border border-slate-200 bg-white/70 p-10 text-center shadow-xl backdrop-blur-xl">
                    <div className="text-2xl font-black text-slate-900">
                        Siap masuk Kota Mercy?
                    </div>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                        Kalau kamu udah baca rules, sekarang waktunya join Discord dan mulai
                        roleplay yang bener-bener hidup.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <a
                            href="https://discord.gg/mercyroleplay"
                            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-extrabold text-white shadow-xl transition hover:scale-[1.03]"
                        >
                            Join Discord
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="/instansi"
                            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03]"
                        >
                            Lihat Instansi
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
