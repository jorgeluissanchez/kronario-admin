import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
export default function EditorsPage() {
  return (
    <div className="p-4 flex-col space-y-4">
      <Input className="w-full" placeholder="Buscar" />
      <div className="grid grid-cols-3 gap-4">
        <div className="grid gap-4">
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">
                Física Calor y Temperatura I
              </h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>{" "}
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">
                Física Electricidad y Magnetismo II
              </h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>{" "}
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">
                Física Calor y Temperatura III
              </h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>{" "}
        <div className="grid gap-4">
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">
                Música del siglo XXI y sus influencias en la sociedad actual
              </h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>{" "}
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">Biología</h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>{" "}
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">
                Física Calor y Temperatura III
              </h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>{" "}
        <div className="grid gap-4">
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">
                Física Mecánica de Fluidos I
              </h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>{" "}
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">
                Estructura de datos y algoritmos I
              </h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>{" "}
          <ContextMenu>
            <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
              <h1 className="text-xl font-semibold">
                Algoritmia y programación avanzada I
              </h1>
              <div className="flex flex-row space-x-2 mt-4">
                <Badge className="bg-primary text-white">Arte</Badge>
                <Badge className="bg-primary text-white">Historia</Badge>
                <Badge className="bg-primary text-white">Electiva</Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Eliminar
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Editar
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Duplicar
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>
    </div>
  );
}
