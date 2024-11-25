"use client"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react"

export default function ParticlesBackground() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, []);

    const options = useMemo(() => ({
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                }
            },
            modes: {
                push: {
                    quantity: 4,
                    
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        particles: {
            number: { value: 50 },
            size: {
                value: {
                    min: 1, max: 3
                }
            },
            move: {
                enable: true,
                speed: 2,
            },
            links: {
                enable: true,
                distance: 150,
                opacity: 0.5
            },
        },
    }), [])

    if (!init) (<></>)

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="fixed inset-0 -z-10 hidden sm:block"
        />
    )
}