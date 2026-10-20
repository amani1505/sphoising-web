import { Label } from "@/components/ui/label";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

/** Label, optional hint and error message around one input. The input must set aria-describedby to `${id}-hint ${id}-error`. */
export function FormField({ id, label, hint, error, children }: FormFieldProps) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {hint ? (
        <p id={`${id}-hint`} className="text-fluid-xs text-fg-muted">
          {hint}
        </p>
      ) : null}
      {children}
      <p id={`${id}-error`} className="min-h-5 text-fluid-xs font-medium text-red-700 dark:text-red-300" aria-live="polite">
        {error}
      </p>
    </div>
  );
}
