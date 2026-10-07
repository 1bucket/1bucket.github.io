import { useRender } from "@base-ui/react/use-render"
import { type VariantProps } from "class-variance-authority"
import { cn } from 'cn';

import { Badge, badgeVariants } from '@/components/ui/badge';

import './Chips.css';

type BadgeProps = useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function BaseChip({ children, className, ...props }: BadgeProps) {
    return (
        <Badge className={cn("chip-base", className)} {...props}>{children ? children : "Placeholder"}</Badge>
    );
}

// language chips

export function JavaChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-java", className)} {...props}>Java</BaseChip>
    )
}

export function PythonChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-python", className)} {...props}>Python</BaseChip>
    )
}

export function CChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-c-cpp", className)} {...props}>C/C++</BaseChip>
    )
}

export function GDScriptChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-gdscript", className)} {...props}>GDScript</BaseChip>
    )
}

export function JSTSChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-jsts", className)} {...props}><span className="js">JavaScript</span>/<span className="ts">TypeScript</span></BaseChip>
    )
}

export function SwiftChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-swift", className)} {...props}>Swift</BaseChip>
    )
}

// gamedev tool chips

export function GodotChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-godot", className)} {...props}>Godot</BaseChip>
    )
}

export function UnrealChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-unreal", className)} {...props}>Unreal Engine</BaseChip>
    )
}

export function ProcessingChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-processing", className)} {...props}>Processing</BaseChip>
    )
}

export function PygameChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-pygame", className)} {...props}>Pygame</BaseChip>
    )
}

export function AsepriteChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-aseprite", className)} {...props}>Aseprite</BaseChip>
    )
}

// webdev tool chips

export function HTMLCSSChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-html-css", className)} {...props}><span className="txt-html">HTML</span>/<span className="txt-css">CSS</span></BaseChip>
    )
}

export function TailwindChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-tailwind", className)} {...props}>TailwindCSS</BaseChip>
    )
}

export function ReactChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-react", className)} {...props}>React</BaseChip>
    )
}

export function ElectronChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-electron", className)} {...props}>Electron</BaseChip>
    )
}

export function NodeChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-node", className)} {...props}>Node.js</BaseChip>
    )
}

export function ExpressChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-express", className)} {...props}>Express.js</BaseChip>
    )
}

export function PostmanChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-postman", className)} {...props}>Postman</BaseChip>
    )
}

export function VercelChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-vercel", className)} {...props}>Vercel</BaseChip>
    )
}

export function MongoChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-mongo", className)} {...props}>MongoDB</BaseChip>
    )
}

export function SupabaseChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-supabase", className)} {...props}>Supabase</BaseChip>
    )
}

export function PostgreSQLChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-postgresql", className)} {...props}>PostgreSQL</BaseChip>
    )
}

// IDE chips

export function VSCChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-vscode", className)} {...props}>VSCode</BaseChip>
    )
}

export function VSChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-vs", className)} {...props}>Visual Studio</BaseChip>
    )
}

export function EclipseChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-eclipse", className)} {...props}>Eclipse</BaseChip>
    )
}

export function VimChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-vim", className)} {...props}>vim</BaseChip>
    )
}

export function XCodeChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-xcode", className)} {...props}>XCode</BaseChip>
    )
}

export function AndroidStudioChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-android-studio", className)} {...props}>Android Studio</BaseChip>
    )
}

// version control chips

export function GitChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-git", className)} {...props}>Git/GitHub</BaseChip>
    )
}

export function PerforceChip({ className, ...props }: BadgeProps) {
    return (
        <BaseChip className={cn("chip-perforce", className)} {...props}>Perforce</BaseChip>
    )
}
