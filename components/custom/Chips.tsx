import { useRender } from "@base-ui/react/use-render"
import { type VariantProps } from "class-variance-authority"

import { Badge, badgeVariants } from '@/components/ui/badge';

import './Chips.css';

function BaseChip(props: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
    return (
        <Badge className="base-chip" {...props}>Placeholder</Badge>
    );
}

export {
    BaseChip,
}