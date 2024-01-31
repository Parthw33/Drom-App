import { get } from "http"
import Sidebar from "../components/sidebar/Sidebar"
import getUsers from "../actions/getUsers"
import UserlList from "./components/UserList"

export default async function UserLayout({
    children
}:{
    children: React.ReactNode
}) {
    const users = await getUsers();
    return (
        // ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                <UserlList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}; 