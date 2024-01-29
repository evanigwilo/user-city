//  React.js modules
import React, { useEffect, useState } from "react";
// Styles
import styles from "styles/BackDrop.module.css";
// Constants, Helpers & Types
import { Props } from "utils/types";
import { flipRandomly } from "utils/helpers";

const BackDrop = ({ children }: Props) => {
  const [flip, setFlip] = useState<string[]>([]);

  useEffect(() => {
    setFlip(Array.from({ length: 2 }, () => flipRandomly()));
  }, []);

  return (
    <>
      {Array.from({ length: flip.length }, (_, idx) => {
        return (
          <div key={idx}>
            <div className={`${styles["clip-1"]} ${styles[flip[idx]]}`}></div>
            <div className={`${styles["clip-2"]} ${styles[flip[idx]]}`}></div>
            <div className={`${styles["clip-3"]} ${styles[flip[idx]]}`}></div>
          </div>
        );
      })}

      {children}
    </>
  );
};

export default BackDrop;
