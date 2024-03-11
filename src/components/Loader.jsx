import { RotatingLines } from "react-loader-spinner";
import React from "react";

import styles from "../components/Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
}

export default Loader;
