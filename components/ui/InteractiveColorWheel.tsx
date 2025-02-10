"use client";

import React, { useRef, useState, useEffect } from "react";
import { colorData } from "../../data/colorData"; // Ajusta la ruta a donde tengas tu array de colores

/**
 * Componente de ruleta de colores que el usuario puede rotar manualmente
 * (drag & drop). Muestra el color que queda en la parte superior.
 */
const InteractiveColorWheel: React.FC = () => {
    // Tamaño del SVG
    const size = 300;
    const half = size / 2;

    // Número de sectores y tamaño angular de cada uno
    const segments = colorData.length;
    const arcAngle = 360 / segments; // en grados

    // Estado para almacenar el ángulo actual de la rueda (en grados).
    // 0° = estado inicial, negativo o positivo según arrastremos.
    const [angle, setAngle] = useState(0);

    // Para manejar la interacción con el ratón/táctil
    const isDraggingRef = useRef(false);
    const startAngleRef = useRef(0);   // Ángulo inicial al empezar a arrastrar
    const startDragCoordRef = useRef({ x: 0, y: 0 }); // Coordenadas de ratón/touchdown

    // Determina cuál es el color en la parte superior de la rueda
    // (en la parte superior consideramos que "arriba" es 0° del SVG)
    const [currentColor, setCurrentColor] = useState<string>("");

    // Calcula el color actual cada vez que cambie el ángulo
    useEffect(() => {
        // La flecha apunta hacia arriba. En coordenadas polares, el vector
        // que va desde el centro hasta la parte superior tiene un ángulo de -90° (o 270°).
        // Por ello, para saber qué sector se encuentra "arriba", calculamos:
        const effectiveAngle = ((270 - angle) % 360 + 360) % 360;
        // Dividimos el ángulo efectivo por el tamaño del sector para obtener el índice:
        const index = Math.floor(effectiveAngle / arcAngle) % segments;
        const colorName = colorData[index]?.name || "";
        setCurrentColor(colorName);
    }, [angle, arcAngle, segments]);

    // Evento: inicio de arrastre (mousedown o touchstart)
    const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
        isDraggingRef.current = true;

        // Coordenadas del puntero
        const { clientX, clientY } =
            "touches" in e ? e.touches[0] : e;

        startDragCoordRef.current = { x: clientX, y: clientY };
        startAngleRef.current = angle; // Guardamos el ángulo en el momento de iniciar drag
    };

    // Evento: movimiento de ratón/touch
    const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDraggingRef.current) return;

        const { clientX, clientY } =
            "touches" in e ? e.touches[0] : e;

        // Calculamos el desplazamiento en píxeles
        const dx = clientX - startDragCoordRef.current.x;
        const dy = clientY - startDragCoordRef.current.y;

        // Para convertir el desplazamiento en píxeles a grados,
        // usaremos un factor arbitario. Aquí, a modo de ejemplo,
        // 1 píxel horizontal = 1 píxel vertical = 0.5° de rotación.
        // Ajusta este factor a tu gusto para controlar la “sensibilidad”.
        const rotationFactor = 0.5;

        // Nuevo ángulo = ángulo inicial + desplazamiento en grados
        const newAngle = startAngleRef.current + (dx + dy) * rotationFactor;
        setAngle(newAngle);
    };

    // Evento: fin de arrastre (mouseup o touchend)
    const handlePointerUp = () => {
        isDraggingRef.current = false;
    };

    // Construimos el array de <path> para cada sector
    const paths = colorData.map((c, i) => {
        const start = arcAngle * i;
        const end = start + arcAngle;

        // Convertimos los ángulos a radianes
        const startRad = (Math.PI / 180) * start;
        const endRad = (Math.PI / 180) * end;

        // Coordenadas en el círculo (centro en half, half)
        const x1 = half + half * Math.cos(startRad);
        const y1 = half + half * Math.sin(startRad);
        const x2 = half + half * Math.cos(endRad);
        const y2 = half + half * Math.sin(endRad);

        // Path arc:
        // M (move to center),
        // L (line to x1,y1),
        // A (arc con radio=half) hasta x2,y2
        // Z (close path)
        const pathData = [
            `M ${half} ${half}`,
            `L ${x1} ${y1}`,
            `A ${half} ${half} 0 0 1 ${x2} ${y2}`,
            "Z",
        ].join(" ");

        return (
            <path key={i} d={pathData} fill={c.color} />
        );
    });

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Vælg en fugefarve</h2>

            <div
                style={{
                    width: size,
                    height: size,
                    margin: "20px auto",
                    position: "relative",
                }}
                // Manejadores de eventos para arrastre
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp} // Por si sale del área
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
            >
                <svg
                    width={size}
                    height={size}
                    style={{
                        transform: `rotate(${angle}deg)`,
                        transition: isDraggingRef.current ? "none" : "transform 0.2s ease-out",
                    }}
                >
                    {paths}
                </svg>

                {/* Flecha fija en la parte superior (overlay) */}
                <div
                    style={{
                        position: "absolute",
                        top: "-10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderBottom: "20px solid black",
                    }}
                ></div>
            </div>

            {currentColor && (
                <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    {currentColor}
                </p>
            )}
        </div>
    );
};

export default InteractiveColorWheel;