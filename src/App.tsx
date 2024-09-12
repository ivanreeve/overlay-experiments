import { Button } from "@/components/ui/button"
import OverlayIcon from "./assets/navicons/overlay.svg?react"
import ControllerIcon from "./assets/navicons/controller.svg?react"
import IngameIcon from "./assets/navicons/ingame.svg?react"

function NavButton({ name, icon: Icon }: { name: string, icon: React.ElementType }) {
  return (
    <Button className="
      w-[400px]
      h-[400px]
      flex
      flex-col
      justify-evenly
      active:bg-gray-200
      hover:bg-white
      hover:text-black
      hover:border-solid
      hover:border-4
      hover:border-black
      transform active:scale-90
      select-none
      outline-none
      shadow-lg
      hover:shadow-xl
      transition-all
      duration-150
      ease-in-out
      ">
       <Icon className="w-48 h-48" />
      <p className="text-4xl">{ name }</p>
    </Button>
  )
}

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center space-x-20">
        <NavButton name="Overlay" icon={OverlayIcon} />
        <NavButton name="Controller" icon={ControllerIcon} />
        <NavButton name="In-game" icon={IngameIcon} />
    </div>
  )
}
