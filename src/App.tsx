import { Button } from "@/components/ui/button"

// function ArrowRightIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="m12 5 7 7-7 7" />
//     </svg>
//   )
// }

function OverlayButton({ name }: { name: string }, { iconPath }: { iconPath: string }) {
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
      transform active:scale-90
      select-none
      outline-none
      shadow-lg
      hover:shadow-xl
      transition-all
      duration-150
      ease-in-out
      ">
      <Icon path={ iconPath } />
      <p className="text-4xl">{ name }</p>
    </Button>
  )
}

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-row justify-center items-center space-x-20">
        <OverlayButton name="Overlay" />
        <OverlayButton name="Controller" />
        <OverlayButton name="In-game" />
    </div>
  )
}

