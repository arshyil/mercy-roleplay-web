import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-200 bg-white/60 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-5 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
                                <Sparkles size={18} />
                            </div>
                            <div>
                                <div className="text-sm font-extrabold text-slate-900">
                                    Mercy Roleplay
                                </div>
                                <div className="text-xs text-slate-500">FiveM GTA V</div>
                            </div>
                        </div>

                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
                            Website resmi Mercy Roleplay. Kota dengan instansi lengkap,
                            komunitas aktif, dan pengalaman roleplay yang dibuat untuk terasa
                            hidup.
                        </p>
                    </div>

                    <div>
                        <div className="text-sm font-extrabold text-slate-900">Menu</div>
                        <div className="mt-3 grid gap-2 text-sm text-slate-600">
                            <a className="hover:text-slate-900" href="/mercy-roleplay-web">
                                Home
                            </a>
                            <a className="hover:text-slate-900" href="/mercy-roleplay-web/about">
                                About
                            </a>
                            <a className="hover:text-slate-900" href="/mercy-roleplay-web/rules">
                                Rules
                            </a>
                            <a className="hover:text-slate-900" href="/mercy-roleplay-web/instansi">
                                Instansi
                            </a>
                            <a className="hover:text-slate-900" href="/mercy-roleplay-web/staff">
                                Staff
                            </a>
                            <a className="hover:text-slate-900" href="#">
                                Gallery (coming soon)
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-extrabold text-slate-900">
                            Community
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            Join Discord untuk whitelist, event, dan update terbaru.
                        </p>

                        <a
                            href="https://discord.gg/mercyroleplay"
                            className="mt-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-extrabold text-white shadow-lg transition hover:scale-[1.03]"
                        >
                            Join Discord
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500">
                    <div>© {new Date().getFullYear()} Mercy Roleplay. All rights reserved.</div>
                    <div className="flex items-center gap-2">
                        Built with <Heart size={14} className="text-rose-500" /> by Mercy Team
                    </div>
                </div>
            </div>
        </footer>
    );
}
