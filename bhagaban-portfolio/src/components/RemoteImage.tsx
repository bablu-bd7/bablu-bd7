import { useState, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & { fallbackLabel?: string };

/** Image that degrades to a quiet text placeholder when the remote service fails. */
export function RemoteImage({ fallbackLabel, className, alt, ...rest }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center rounded-lg border border-dashed border-line px-3 py-6 text-center text-xs text-ink-3 ${className ?? ""}`}
      >
        {fallbackLabel ?? "This widget is unavailable right now."}
      </div>
    );
  }
  return <img {...rest} alt={alt} className={className} loading="lazy" onError={() => setFailed(true)} />;
}
