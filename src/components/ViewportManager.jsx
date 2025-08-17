import { useEffect } from "react";

function ViewportManager() {
  useEffect(() => {
    const viewport = document.querySelector("meta[name=viewport]");
    const isMobile = window.innerWidth <= 480;

    if (viewport) {
      viewport.setAttribute(
        "content",
        isMobile
          ? "width=375, user-scalable=no"
          : "width=device-width, initial-scale=1"
      );
    }
  }, []);

  return null;
}

export default ViewportManager;