// useClipboard.js
import { useState } from "react";

const useClipboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification();
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const showNotification = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Notification duration
  };

  return { copyToClipboard, isVisible };
};

export default useClipboard;
