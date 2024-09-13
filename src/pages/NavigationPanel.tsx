import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"

import OverlayIcon from "../assets/nav-icons/overlay.svg?react"
import ControllerIcon from "../assets/nav-icons/controller.svg?react"
import IngameIcon from "../assets/nav-icons/ingame.svg?react"

function NavigationButton({ name, routePath, icon: Icon }: { name: string, routePath: string, icon: React.ElementType }) {
  const navigate = useNavigate()

  const gotoRoute = () => {
    navigate(routePath)
  }

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
      "
      onClick={gotoRoute}>
      <Icon className="w-48 h-48" />
      <p className="text-4xl">{ name }</p>
    </Button>
  )
}

export default function NavigationPanel() {
  return (
    <div className="
      h-screen
      w-screen
      flex
      flex-row
      justify-center
      items-center
      space-x-20
      ">
        <NavigationButton 
          name="Overlay" 
          routePath="/overlay"
          icon={OverlayIcon} 
        />
        <NavigationButton 
          name="Controller" 
          routePath="/controller"
          icon={ControllerIcon} 
        />
        <NavigationButton 
          name="In-game" 
          routePath="/ingame"
          icon={IngameIcon} 
        />
    </div>
  )
}
