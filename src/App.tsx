import "react/jsx-runtime"
import "./index.css"
import { Button } from "@/components/ui/button"

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function OverlayButton() {
  return (
    <Button className="w-[400px] h-[400px] flex flex-col active:bg-gray-200 hover:bg-white hover:text-black transform active:scale-90 select-none outline-none shadow-lg hover:shadow-xl transition-shadow duration-150 ease-in transition-all duration-150 ease-in-out">
      <ArrowRightIcon className="h-600 w-600" />
      <p className="text-4xl">Overlay</p>
    </Button>
  )
}

export default function App() {
  return (
    <div className="flex flex-row space-x-20 justify-center items-center">
      <OverlayButton />
      <OverlayButton />
      <OverlayButton />
    </div>
  )
}
