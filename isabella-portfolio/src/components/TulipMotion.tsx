import { motion, easeInOut } from "framer-motion";
import { useMemo } from "react";
import Tulip1 from "./Tulip1";
import Tulip2 from "./Tulip2";

interface TulipMotionProps {
  theme: "light" | "dark";
}

type TulipType = "tulip1" | "tulip2";

interface Tulip {
  id: number;
  type: TulipType;
  style: React.CSSProperties;
  delay: number;
}

const floatTransition = {
  y: {
    duration: 2.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
};

export default function TulipMotion({ theme }: TulipMotionProps) {
  const tulips: Tulip[] = useMemo(() => {
    const rows = 6;
    const cols = 5;
    const list: Tulip[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const topOffset = 100 / rows;
        const leftOffset = 100 / cols;

        const top = row * topOffset + Math.random() * (topOffset * 0.4);
        const left = col * leftOffset + Math.random() * (leftOffset * 0.4);

        const isTulip1 = (row + col) % 2 === 0;

        list.push({
          id: row * cols + col,
          type: isTulip1 ? "tulip1" : "tulip2",
          style: {
            top: `${top}%`,
            left: `${left}%`,
            width: 25 + Math.random() * 20,
          },
          delay: Math.random() * 2.5,
        });
      }
    }

    return list;
  }, []);

  const getColorClass = (type: TulipType): string => {
    if (theme === "light") {
      return type === "tulip1" ? "text-lesbianGreen-dark" : "text-purple";
    } else {
      return type === "tulip1" ? "text-offwhite" : "text-lesbianGreen-light";
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {tulips.map(({ id, type, style, delay }) => {
        const TulipComponent = type === "tulip1" ? Tulip1 : Tulip2;
        const colorClass = getColorClass(type);

        return (
          <motion.div
            key={id}
            style={{
              position: "absolute",
              ...style,
              opacity: 0.3,
            }}
            animate={{ y: [0, -15] }}
            transition={{ ...floatTransition.y, delay, ease: easeInOut }}
          >
            <TulipComponent className={`${colorClass} w-full h-auto`} />
          </motion.div>
        );
      })}
    </div>
  );
}
