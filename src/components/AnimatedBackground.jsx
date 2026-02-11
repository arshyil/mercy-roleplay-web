export default function AnimatedBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
            {/* base */}
            <div className="absolute inset-0 bg-[#fbfbff]" />

            {/* mesh gradients */}
            <div className="absolute -left-40 -top-40 h-[680px] w-[680px] animate-[float_10s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-blue-500/35 to-violet-600/35 blur-3xl" />
            <div className="absolute -right-56 top-0 h-[760px] w-[760px] animate-[float_12s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-violet-500/35 to-indigo-600/35 blur-3xl" />
            <div className="absolute left-1/3 bottom-[-300px] h-[860px] w-[860px] animate-[float_14s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-sky-500/25 to-fuchsia-600/25 blur-3xl" />

            {/* vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/70" />

            {/* subtle grid */}
            <div className="absolute inset-0 opacity-[0.25] [background-image:linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>
    );
}
