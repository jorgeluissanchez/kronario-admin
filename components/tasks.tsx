import { DataTable } from "@/components/data-table";
import { columns } from "@/components/columns"
import { promises as fs } from "fs"
import path from "path"
import { z } from "zod"
import { taskSchema } from "@/data/schema"


// Simulate a database read for tasks.
async function getTasks() {
    const data = await fs.readFile(
      path.join(process.cwd(), "data/tasks.json"),
    )
  
    const tasks = JSON.parse(data.toString())
  
    return z.array(taskSchema).parse(tasks)
  }

export default async function Tasks() {
    const tasks = await getTasks()

    return (
          
        <DataTable data={tasks} columns={columns}  />

    )
}