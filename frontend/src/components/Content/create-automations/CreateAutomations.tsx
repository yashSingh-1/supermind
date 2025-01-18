import { Button } from "@/components/ui/button"
import Loader from "../Loader"
import { AutomationDuoToneWhite } from "@/icons"

const CreateAutomations = () => {
  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-60
    text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]">
        <Loader state={false}>
            <AutomationDuoToneWhite/>
            <p className="lg:inline hidden">
                Create an automation
            </p>
        </Loader>
    </Button>
  )
}

export default CreateAutomations