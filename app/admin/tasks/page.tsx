import Tasks from "@/components/tasks"
import { Members } from "@/components/members"

export default function EditorsPage() {
    return (
        <div className="flex-col space-y-4 p-4">
            <Members />
          
        <Tasks  />
        </div>
    )
}