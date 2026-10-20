import type { UseFormRegisterReturn } from "react-hook-form";

import { PROJECT_TYPES } from "../constants";

type ProjectTypePickerProps = {
  registration: UseFormRegisterReturn<"projectType">;
  error?: string;
};

/** Pill-shaped choices built on native radio buttons, so keyboard and screen readers work as usual. */
export function ProjectTypePicker({ registration, error }: ProjectTypePickerProps) {
  return (
    <fieldset aria-describedby="projectType-error">
      <legend className="text-fluid-sm font-semibold text-fg">What are you planning? (optional)</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {PROJECT_TYPES.map((type) => {
          const id = `projectType-${type.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <div key={type}>
              <input id={id} type="radio" value={type} className="peer sr-only" {...registration} />
              <label
                htmlFor={id}
                className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-border bg-surface/70 px-4 text-fluid-sm font-medium text-fg-muted transition duration-200 select-none peer-checked:scale-105 peer-checked:border-action peer-checked:bg-action peer-checked:text-action-fg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-action hover:border-fg/40 hover:text-fg motion-reduce:transition-none"
              >
                {type}
              </label>
            </div>
          );
        })}
      </div>
      <p id="projectType-error" className="mt-1.5 min-h-5 text-fluid-xs font-medium text-red-700 dark:text-red-300" aria-live="polite">
        {error}
      </p>
    </fieldset>
  );
}
