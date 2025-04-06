import { ReactNode } from "react";

export default function Redacted({ children }: { children: ReactNode }) {
  return <span title="Not my real name ofc" className="cursor-help">{children}</span>
}