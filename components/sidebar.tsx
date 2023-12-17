"use client";
import { cn } from "@/lib/utils"
import NavLinks from "./nav-links"
import {
  Home,
  ClipboardList,
  LibraryBig,
  Book,
  Users,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Inicio",
    href: "/admin",
    icon: Home,
  },
  {
    name: "Cursos",
    href: "/admin/courses",
    icon: LibraryBig,
  },
  {
    name: "Crear Curso",
    href: "/admin/courses/create",
    icon: Book,
  },
  {
    name: "Editores",
    href: "/admin/editors",
    icon: Users,
  },
  {
    name: "Tareas",
    href: "/admin/tasks",
    icon: ClipboardList,
  },
  {
    name: "Configuración",
    href: "/admin/settings",
    icon: Settings,
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}


export default function Sidebar({ className }: SidebarProps) {
  return (
    <nav className="p-3 flex space-y-1 w-full h-fit justify-between order-last border-t md:justify-start md:h-full md:w-64 md:flex-col md:border-none md:border-r md:order-first">
      <NavLinks links={links.slice(0, 5)} />
     <div className="w-fit md:w-full  md:flex md:flex-1 md:items-end">
      <NavLinks links={links.slice(5)} />
      </div> 
    </nav>
  )
}