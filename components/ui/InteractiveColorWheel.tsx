"use client";

import React, { useRef, useState, useEffect } from "react";
import { colorData } from "../../data/colorData"; // Adjust the path to your color array

/**
 * Interactive color wheel component.
 * Allows the user to spin the wheel (via drag or using arrow buttons)
 * and displays the color at the top.
 */
const InteractiveColorWheel: React.FC = () => {
  const size = 300;
  const half = size / 2;
  const segments = colorData.length;
  const arcAngle = 360 / segments;

  const [angle, setAngle] = useState(0);
  const [currentColor, setCurrentColor] = useState<string>("");

  // Refs for handling dragging
  const isDraggingRef = useRef(false);
  const startAngleRef = useRef(0);
  const startPointerAngleRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update the current color based on the wheel's rotation.
  useEffect(() => {
    // We assume the pointer (arrow) is at the top (which is 270° in polar coordinates)
    const effectiveAngle = ((270 - angle) % 360 + 360) % 360;
    const index = Math.floor(effectiveAngle / arcAngle) % segments;
    const colorName = colorData[index]?.name || "";
    setCurrentColor(colorName);
  }, [angle, arcAngle, segments]);

  // Calculate the angle (in degrees) from the center of the wheel to the pointer event.
  const getPointerAngle = (clientX: number, clientY: number) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rad = Math.atan2(clientY - centerY, clientX - centerX);
    return rad * (180 / Math.PI);
  };

  // Start drag: record initial pointer angle and wheel angle.
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDraggingRef.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    startPointerAngleRef.current = getPointerAngle(clientX, clientY);
    startAngleRef.current = angle;
  };

  // During drag: compute the new angle based on the pointer’s current angle.
  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const currentPointerAngle = getPointerAngle(clientX, clientY);
    const diff = currentPointerAngle - startPointerAngleRef.current;
    setAngle(startAngleRef.current + diff);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Arrow button handlers (rotate by 30° per click)
  const rotateLeft = () => setAngle((prev) => prev - 30);
  const rotateRight = () => setAngle((prev) => prev + 30);

  // Create an array of paths for each sector.
  const paths = colorData.map((c, i) => {
    const start = arcAngle * i;
    const end = start + arcAngle;
    const startRad = (Math.PI / 180) * start;
    const endRad = (Math.PI / 180) * end;
    const x1 = half + half * Math.cos(startRad);
    const y1 = half + half * Math.sin(startRad);
    const x2 = half + half * Math.cos(endRad);
    const y2 = half + half * Math.sin(endRad);
    const pathData = [
      `M ${half} ${half}`,
      `L ${x1} ${y1}`,
      `A ${half} ${half} 0 0 1 ${x2} ${y2}`,
      "Z",
    ].join(" ");
    return <path key={i} d={pathData} fill={c.color} />;
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Vælg en fugefarve</h2>
      <div
        ref={containerRef}
        style={{
          width: size,
          height: size,
          margin: "20px auto",
          position: "relative",
          touchAction: "none", // Prevents default touch behaviors
        }}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
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
        {/* Fixed arrow indicator at the top */}
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
      {/* Arrow buttons for additional rotation control */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={rotateLeft} style={{ marginRight: "10px" }}>
          &#8592;
        </button>
        <button onClick={rotateRight}>&#8594;</button>
      </div>
      {currentColor && (
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{currentColor}</p>
      )}
    </div>
  );
};

export default InteractiveColorWheel;