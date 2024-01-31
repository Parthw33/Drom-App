'use client';

import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import EmptyState from "../components/EmptyState";

const Users = () => {
    return(
        <div className="hidden lg:block lg:pl-80 h-full">
            <EmptyState  />
        </div>
    );
}

export default Users;