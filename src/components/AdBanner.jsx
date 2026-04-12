import { useEffect, useRef } from "react";

/**
 * AdBanner – reusable Google AdSense unit
 * Slot: 7796622789  |  Client: ca-pub-6820691540388182
 */
export default function AdBanner({ className = "" }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6820691540388182"
        data-ad-slot="7796622789"
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
}
