
import { Input } from "@/components/ui/input"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    } from "@/components/ui/avatar"
    import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function EditorsPage() {
    return (
        <div className="flex-col space-y-4 p-4">
<Input className="w-full" placeholder="Buscar" />
<div className="flex flex-col">
{
    [1,2,3,4,5,6,7,8,9,10].map((item) => (
        <div className="flex items-center justify-between border-b p-2">
            <div className="flex items-center">
                
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
                <div className="ml-4">
                    <p className="text-md leading-none font-medium">
                        Olivia Martin</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Button variant="outline">Editar</Button>
                <Button variant="outline">Eliminar</Button>
            </div>
        </div>
    ))
}
        </div>
        </div>
    )
}