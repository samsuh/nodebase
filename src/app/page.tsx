import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <div className={cn('text-red-500 font-bold')}>
      Hello NodeBase <Button>Clickable</Button>
    </div>
  )
}
