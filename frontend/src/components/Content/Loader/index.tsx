import { cn } from "@/lib/utils"
import { Spinner } from "./Spinner"

type Props = {
    state: boolean
    className?: string
    children: React.ReactNode
    color?: string
}

const Loader = ({
    children,
    state,
    className,
    color
}: Props) => {
  return state ? <div className={cn(className)}>
    <div className="flex flex-col gap-y-4">
    <Spinner color={color} />
    </div>
  </div> : (children)
}

export default Loader