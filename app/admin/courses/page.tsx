import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Trash,
  Pen,
  Copy
 } from "lucide-react";

const itemLists = [
  [
    {
      name: "Historia de la computación",
      tags: [ { name: "Informática" }, { name: "Computación" } ],
    },
    {
      name: "Algoritmos y estructuras de datos",
      tags: [ { name: "Informática" }, { name: "Computación" } ],
    },
    {
      name: "Física Electricidad y Magnetismo",
      tags: [ { name: "Física" }, { name: "Electricidad" } ],
    },
    {
      name: "Cálculo Diferencial",
      tags: [ { name: "Matemáticas" } ],
    }
  ],
  [
    {
      name: "Calculo I",
      tags: [ { name: "Matemáticas" } ],
    },
    {
      name: "Matemáticas Discretas",
      tags: [ { name: "Matemáticas" }, { name: "Grafos" } ],
    },
    {
      name: "Escritura Creativa",
      tags: [ { name: "Literatura" }, { name: "Escritura" } ],
    },
    {
      name: "Introducción a la Biología",
      tags: [ { name: "Biología" } ],
    }
  ],
  [
    {
      name: "Estructuras discretas",
      tags: [ { name: "Computación" }, { name: "Matemáticas" } ],
    },
    {
      name: "Cálculo II",
      tags: [ { name: "Matemáticas" } ],
    },
    {
      name: "Física Mecánica",
      tags: [ { name: "Física" } ],
    },
    {
      name: "Introducción a la Química",
      tags: [ { name: "Química" } ],
    }
  ]
]


export default function EditorsPage() {
  return (
    <div className="flex-col space-y-4 p-4">
      <Input className="w-full" placeholder="Buscar" />
      <div className="grid md:grid-cols-3 gap-4">
        {itemLists.map((itemList, index) => (
          <div className="grid gap-4" key={"itemList-" + index}>
          {itemList.map((item) => (
            <ContextMenu key={item.name}>
              <ContextMenuTrigger className="border rounded-lg p-4 h-auto">
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <div className="flex flex-row space-x-2 mt-4">
                  {item.tags.map((tag) => (
                    <Badge key={tag.name}
                    >{tag.name}</Badge>
                  ))}
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  <Trash className="h-4 w-4 mr-2" />
                  Eliminar
                </ContextMenuItem>
                <ContextMenuItem>
                  <Pen className="h-4 w-4 mr-2" />
                  Editar
                </ContextMenuItem>
                <ContextMenuItem>
                  <Copy className="h-4 w-4 mr-2" />
                  Duplicar
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </div>
          ))}
        </div>

        </div>
  );
}
