"use client";

import { useEffect } from "react";
import styles from "../styles/error.module.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <h2>Something went wrong!</h2>
      <div className={styles.errorMessage}>
        {error.message}
        {error.digest && <div>Error ID: {error.digest}</div>}
      </div>
      <button className={styles.retryButton} onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
