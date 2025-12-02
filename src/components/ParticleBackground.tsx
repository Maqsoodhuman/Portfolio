"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleField() {
    const points = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (points.current) {
            // Slow rotation for the entire field
            points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    const particleCount = 5000;

    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            // Spread particles across a large volume
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Colors: Blue/Purple/White mix
            const colorType = Math.random();
            if (colorType > 0.8) {
                // White
                colors[i * 3] = 1;
                colors[i * 3 + 1] = 1;
                colors[i * 3 + 2] = 1;
            } else if (colorType > 0.4) {
                // Blue
                colors[i * 3] = 0.2;
                colors[i * 3 + 1] = 0.4;
                colors[i * 3 + 2] = 1;
            } else {
                // Purple
                colors[i * 3] = 0.5;
                colors[i * 3 + 1] = 0.2;
                colors[i * 3 + 2] = 0.8;
            }
        }
        return { positions, colors };
    }, []);

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

export default function ParticleBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-black">
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}
