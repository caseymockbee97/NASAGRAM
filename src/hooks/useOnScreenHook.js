import { useEffect, useState } from "react";

export default function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [isVisible, setVisible] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible];
}
