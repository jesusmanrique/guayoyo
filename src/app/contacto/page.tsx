"use client";
import { animate, createScope, createSpring, createDraggable } from "animejs";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Page() {
  const root = useRef<HTMLDivElement | null>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      animate(".logo", {
        scale: [
          { to: 1.25, ease: "inOut(3)", duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 250,
      });

      // Make the logo draggable around its center
      createDraggable(".logo", {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 }),
      });

      // Register function methods to be used outside the useEffect
      self.add("rotateLogo", (i) => {
        animate(".logo", {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    };
  }, []);

  const handleClick = () => {
    setRotations((prev) => {
      const newRotations = prev + 1;
      // Animate logo rotation on click using the method declared inside the scope
      if (scope.current) {
        scope.current.methods.rotateLogo(newRotations);
      }
      return newRotations;
    });
  };

  return (
    <div>
      <div ref={root}>
        <Image
          src="/guayoyoSvgGold.svg"
          className="logo react"
          alt="React logo"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="medium row">
        <fieldset className="controls">
          <button onClick={handleClick}>rotations: {rotations}</button>
        </fieldset>
      </div>
    </div>
  );
}
