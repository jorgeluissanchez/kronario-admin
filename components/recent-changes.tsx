import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
    import Link from "next/link"
    
import { ScrollArea } from "@/components/ui/scroll-area"
  
  export function RecentChanges() {
    return (
        <ScrollArea className="h-56 px-4">
      <div className="space-y-8">
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="mx-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
                Ha creado un nuevo curso llamado "Introducción a la Biología"
            </p>
          </div>
          <Link className="ml-auto font-medium" href="/admin/courses/1">Ver</Link>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="mx-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
                Ha creado un nuevo curso llamado "Introducción a la Biología"
            </p>
          </div>
          <Link className="ml-auto font-medium" href="/admin/courses/1">Ver</Link>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="mx-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
                Ha creado un nuevo curso llamado "Introducción a la Biología"
            </p>
          </div>
          <Link className="ml-auto font-medium" href="/admin/courses/1">Ver</Link>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="mx-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
                Ha creado un nuevo curso llamado "Introducción a la Biología"
            </p>
          </div>
          <Link className="ml-auto font-medium" href="/admin/courses/1">Ver</Link>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="mx-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
                Ha creado un nuevo curso llamado "Introducción a la Biología"
            </p>
          </div>
          <Link className="ml-auto font-medium" href="/admin/courses/1">Ver</Link>
        </div>
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="mx-4 space-y-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
                Ha creado un nuevo curso llamado "Introducción a la Biología"
            </p>
          </div>
          <Link className="ml-auto font-medium" href="/admin/courses/1">Ver</Link>
        </div>
      </div>
        </ScrollArea>
    )
  }