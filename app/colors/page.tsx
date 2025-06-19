// This page demonstrates all available theme color classes from Tailwind and globals.css
// Each color is rendered as a block with its class name for visual reference
// Useful for design system review and QA

import Container from '@/components/layout/Container';

const colorSwatches = [
  // Backgrounds & Foregrounds
  { label: 'bg-background', className: 'bg-background text-foreground' },
  { label: 'bg-card', className: 'bg-card text-card-foreground' },
  { label: 'bg-popover', className: 'bg-popover text-popover-foreground' },
  { label: 'bg-primary', className: 'bg-primary text-primary-foreground' },
  { label: 'bg-secondary', className: 'bg-secondary text-secondary-foreground' },
  { label: 'bg-muted', className: 'bg-muted text-muted-foreground' },
  { label: 'bg-accent', className: 'bg-accent text-accent-foreground' },
  { label: 'bg-destructive', className: 'bg-destructive text-destructive-foreground' },
  { label: 'bg-sidebar', className: 'bg-sidebar text-sidebar-foreground' },
  { label: 'bg-sidebar-primary', className: 'bg-sidebar-primary text-sidebar-primary-foreground' },
  { label: 'bg-sidebar-accent', className: 'bg-sidebar-accent text-sidebar-accent-foreground' },
  // Text only
  { label: 'text-foreground', className: 'text-foreground' },
  { label: 'text-card-foreground', className: 'text-card-foreground' },
  { label: 'text-popover-foreground', className: 'text-popover-foreground' },
  { label: 'text-primary-foreground', className: 'text-primary-foreground' },
  { label: 'text-secondary-foreground', className: 'text-secondary-foreground' },
  { label: 'text-muted-foreground', className: 'text-muted-foreground' },
  { label: 'text-accent-foreground', className: 'text-accent-foreground' },
  { label: 'text-destructive-foreground', className: 'text-destructive-foreground' },
  { label: 'text-sidebar-foreground', className: 'text-sidebar-foreground' },
  { label: 'text-sidebar-primary-foreground', className: 'text-sidebar-primary-foreground' },
  { label: 'text-sidebar-accent-foreground', className: 'text-sidebar-accent-foreground' },
  // Borders & Rings
  { label: 'border-border', className: 'border-4 border-border' },
  { label: 'border-input', className: 'border-4 border-input' },
  { label: 'ring-ring', className: 'ring-4 ring-ring' },
  { label: 'border-sidebar-border', className: 'border-4 border-sidebar-border' },
  { label: 'ring-sidebar-ring', className: 'ring-4 ring-sidebar-ring' },
  // Chart colors (text)
  { label: 'text-chart-1', className: 'text-chart-1' },
  { label: 'text-chart-2', className: 'text-chart-2' },
  { label: 'text-chart-3', className: 'text-chart-3' },
  { label: 'text-chart-4', className: 'text-chart-4' },
  { label: 'text-chart-5', className: 'text-chart-5' },
];

export default function ColorsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Theme Color Classes Demo</h1>
      <div className="space-y-2">
        {colorSwatches.map((swatch) => (
          <div
            key={swatch.label}
            className={`rounded p-4 border flex items-center justify-between ${swatch.className}`}
          >
            <span className="font-mono text-sm">{swatch.label}</span>
            <span className="ml-4 text-xs opacity-70">Sample</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs text-muted-foreground">
        This page is for development/testing only. It shows all theme color classes as defined in globals.css and Tailwind config.
      </p>
    </Container>
  );
} 