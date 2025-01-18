import {
  Sheet as ShadCnSheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side: 'left' | 'right'
};

const Sheet = ({ trigger, children, className, side }: Props) => {
  return (
    <ShadCnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent side={side} className="">{children}</SheetContent>
    </ShadCnSheet>
  );
};

export default Sheet;
