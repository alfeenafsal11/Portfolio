import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    vx: number;
    vy: number;
    twinkleSpeed: number;
    twinklePhase: number;
}

const STAR_COUNT = 110;
const MAX_SPEED = 0.2; // increased drift speed

function createStar(width: number, height: number): Star {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.7 + 0.3,           // 0.3–1.0 px
        opacity: Math.random() * 0.45 + 0.15,         // 0.15–0.6
        vx: (Math.random() - 0.5) * MAX_SPEED,
        vy: (Math.random() - 0.5) * MAX_SPEED,
        twinkleSpeed: Math.random() * 0.004 + 0.001,  // very gentle twinkle
        twinklePhase: Math.random() * Math.PI * 2,
    };
}

export default function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let stars: Star[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-create stars on resize to fill new dimensions
            stars = Array.from({ length: STAR_COUNT }, () =>
                createStar(canvas.width, canvas.height)
            );
        };

        resize();
        window.addEventListener("resize", resize);

        let t = 0;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t += 1;

            for (const star of stars) {
                // Gentle twinkle
                const alpha =
                    star.opacity +
                    Math.sin(star.twinklePhase + t * star.twinkleSpeed) * 0.12;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, alpha))})`;
                ctx.fill();

                // Drift
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around edges
                if (star.x < -2) star.x = canvas.width + 2;
                if (star.x > canvas.width + 2) star.x = -2;
                if (star.y < -2) star.y = canvas.height + 2;
                if (star.y > canvas.height + 2) star.y = -2;
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            aria-hidden="true"
        />
    );
}
