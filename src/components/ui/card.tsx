export default function Card({ className, children }: { className?:string, children: React.ReactNode }) {
  return (
    <div className={`px-6 py-6 rounded-lg border border-slate-200 ${className}`}>{children}</div>
  );
}