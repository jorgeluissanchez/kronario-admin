import { RecentChanges } from "@/components/recent-changes"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Building, Users, LibraryBig, BookCopy } from 'lucide-react';


export default function AdminPage() {
  return (
    <div className="flex flex-col max-h-full space-y-4 w-full overflow-auto p-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Instituciones
                    </CardTitle>
                    <Building
                      className="h-4 w-4 text-muted-foreground"/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">40</div>
                    <p className="text-xs text-muted-foreground">
                      +5 en el último trimestre
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Estudiantes
                    </CardTitle>
                    <Users
                      className="h-4 w-4 text-muted-foreground"/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2350</div>
                    <p className="text-xs text-muted-foreground">
                      +50 en el último mes
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Cursos</CardTitle>
                    <LibraryBig
                      className="h-4 w-4 text-muted-foreground"/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      +2 en el último mes
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Lecciones
                    </CardTitle>
                    <BookCopy
                      className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">120</div>
                    <p className="text-xs text-muted-foreground">
                      +20 en el último mes
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>
                      Actividad
                    </CardTitle>
                    <CardDescription>
                      Estas son las últimas acciones realizadas en la plataforma.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentChanges />
                  </CardContent>
                </Card>
              </div>
      </div>
  )
}