# Test Repo 03: Established Full System

## Purpose
This test repository represents a **mature Next.js application** with a complete, well-maintained design system. It should trigger Buoy's **ESTABLISHED MODE** with a maturity score > 50.

## What This Tests
- Detection of comprehensive design tokens (colors, spacing, typography)
- Recognition of consistent component patterns
- Low drift detection (< 5 issues expected)
- Proper token usage across components

## Design System Features
- **50+ components** organized by atomic design principles
- **CSS Custom Properties** for all design tokens
- **Consistent naming conventions**
- **Documented patterns**

## Expected Buoy Behavior
- Should detect ESTABLISHED maturity level
- Should find minimal drift issues
- Should recognize the design system as comprehensive
- Maintenance mode suggestions rather than building mode

## Token Structure
```
--color-primary, --color-secondary, --color-accent
--color-gray-{50-900}
--color-success, --color-warning, --color-error

--space-xs, --space-sm, --space-md, --space-lg, --space-xl, --space-2xl

--font-size-xs through --font-size-4xl
--font-weight-normal, --font-weight-medium, --font-weight-semibold, --font-weight-bold
--line-height-tight, --line-height-normal, --line-height-relaxed
```
