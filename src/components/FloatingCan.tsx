"use client"

import { Float } from '@react-three/drei'
import { SodaCan, SodaCanProps } from '@/components/SodaCan'
import { forwardRef } from 'react'
import { Group } from 'three'

type FloatingCanProps = {
    flavor?: SodaCanProps['flavor'];
    floatSpeed?: number;
    rotationIntensity?: number;
    flatingIntersity?: number;
    floatingRange?: [number, number];
    children?: React.ReactNode
}

const FloatingCan = forwardRef<Group, FloatingCanProps>(
    ({
        flavor = "blackCherry",
        floatSpeed = 5,
        rotationIntensity = 1,
        flatingIntersity = 1,
        floatingRange = [-0.1, 0.1],
        children,
        ...props
    }, ref

    ) => {
        return (
            <group ref={ref} {...props}>
                <Float
                    speed={floatSpeed}
                    rotationIntensity={rotationIntensity}
                    floatIntensity={flatingIntersity}
                    floatingRange={floatingRange}

                >
                    {children}
                    <SodaCan flavor={flavor} />
                </Float>
            </group>
        )
    })


FloatingCan.displayName = 'FloatingCan'

export default FloatingCan