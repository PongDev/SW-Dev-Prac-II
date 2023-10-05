import { useEffect } from "react";

export default function useWindowListener(
  eventType: keyof WindowEventMap,
  listener: EventListener
) {
  useEffect(() => {
    window.addEventListener(eventType, listener);

    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, []);
}
