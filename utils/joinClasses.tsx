export function joinClasses(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}
