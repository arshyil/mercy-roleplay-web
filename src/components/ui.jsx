import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function Glass({ children, className = "" }) {
    return (
        <div
            className={
                "rounded-[30px] border border-slate-200 bg-white/70 shadow-2xl backdrop-blur-xl " +
                className
            }
        >
            {children}
        </div>
    );
}

export function SectionTitle({ kicker, title, desc }) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            {kicker ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                    {kicker}
                </div>
            ) : null}

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    {title}
                </span>
            </h2>

            {desc ? (
                <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                    {desc}
                </p>
            ) : null}
        </div>
    );
}

export function Reveal({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay }}
        >
            {children}
        </motion.div>
    );
}

export function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 25,
        mass: 0.2,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed left-0 top-0 z-[999] h-1 w-full origin-left bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
        />
    );
}

export function ShineButton({
    children,
    href = "#",
    className = "",
    target,
    rel,
}) {
    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className={
                "group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-extrabold text-white shadow-xl transition hover:scale-[1.03] " +
                className
            }
        >
            <span className="relative z-10">{children}</span>

            {/* shine */}
            <span className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="absolute -left-20 top-0 h-full w-24 rotate-12 bg-white/25 blur-xl transition-all duration-700 group-hover:left-[110%]" />
            </span>
        </a>
    );
}

export function OutlineButton({ children, to, onClick, className = "" }) {
    if (to) {
        return (
            <a
                href={to}
                onClick={onClick}
                className={
                    "inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03] " +
                    className
                }
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={
                "inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 font-extrabold text-slate-900 shadow-sm transition hover:scale-[1.03] " +
                className
            }
        >
            {children}
        </button>
    );
}

export function useTilt() {
    const [style, setStyle] = useState({});

    const handlers = useMemo(() => {
        const onMove = (e) => {
            const el = e.currentTarget;
            const rect = el.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rx = ((y / rect.height) - 0.5) * -8;
            const ry = ((x / rect.width) - 0.5) * 10;

            setStyle({
                transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`,
            });
        };

        const onLeave = () => {
            setStyle({
                transform: `perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)`,
            });
        };

        return { onMove, onLeave };
    }, []);

    return { style, handlers };
}

export function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 500);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-extrabold text-slate-900 shadow-xl backdrop-blur-xl transition hover:scale-[1.04]"
        >
            ↑ Top
        </button>
    );
}
