import Tasks from "@/components/tasks"
import { Members } from "@/components/members"

export default function EditorsPage() {
    return (
        <div className="p-4 flex-col space-y-4">
            <Members />
          
        <Tasks  />
        </div>
    )
}