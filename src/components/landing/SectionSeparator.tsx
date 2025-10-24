import { Snowflake } from 'lucide-react';

export function SectionSeparator() {
  return (
    <div className="container flex items-center justify-center gap-4 py-8">
      <div className="h-px flex-1 bg-primary/10" />
      <Snowflake className="h-6 w-6 text-primary/50" />
      <div className="h-px flex-1 bg-primary/10" />
    </div>
  );
}
