import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AccountForm } from '@/components/account-form'

export default function page() {
  return (
    <Tabs defaultValue="account" className="w-full p-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Cuenta</TabsTrigger>
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
            <AccountForm />
        
        </TabsContent>

        <TabsContent value="profile">
            <AccountForm />
        </TabsContent>
    </Tabs>

  )
}
