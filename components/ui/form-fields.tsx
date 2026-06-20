import { cn } from "@/lib/utils";

export function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      <span>{label}</span>
      {children}
      {error ? <span className="text-sm font-medium text-fuchsia">{error}</span> : null}
    </label>
  );
}

export const fieldClassName = cn(
  "min-h-11 w-full rounded-md border border-ink/15 bg-chalk px-3 py-2 text-base text-ink shadow-sm transition placeholder:text-ink/45",
  "focus:border-pine focus:outline-none focus:ring-4 focus:ring-pine/10"
);
