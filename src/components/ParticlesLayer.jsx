import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesLayer() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 -z-10">
            <Particles
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: { color: { value: "transparent" } },
                    fpsLimit: 60,
                    particles: {
                        number: { value: 55, density: { enable: true, area: 900 } },
                        color: { value: ["#3b82f6", "#6366f1", "#8b5cf6"] },
                        opacity: { value: 0.25 },
                        size: { value: { min: 1, max: 3 } },
                        move: { enable: true, speed: 0.6, direction: "none" },
                        links: {
                            enable: true,
                            distance: 150,
                            opacity: 0.15,
                            width: 1,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}
