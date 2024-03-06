'use client'

import Avatar from "@/app/components/Avatar";
import { FullMessageType } from "@/types";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import {format} from "date-fns";

interface MessageBoxProps {
    isLast?: boolean;
    data: FullMessageType;

}

const MessageBox:React.FC<MessageBoxProps> = ({
    isLast,
    data
}) => {

    const session = useSession();
    const isOwn = session?.data?.user?.email === data?.sender?.email;
    const seenlist = (data.seenByUsers || [])
    .filter((user)=>user.email !== data?.sender?.email)
    .map((user)=> user.name)
    .join(",");

    const container  = clsx(
        "flex gap-3 p-4",
        isOwn && "justify-end"
    );

    const avatar = clsx(isOwn && "order-2");

    const body = clsx(
        "flex flex-col gap-2",
        isOwn && "items-end"
    );

    const message = clsx(
        "text-sm w-fit overflow-hidden",
        isOwn ? "bg-sky-500 text-white" : "bg-gray-200",
        data.image ? "rounded-md p-0" : 'rounded-full py-2 px-2'

    );



    return (
        <div className={container}>
            <div className={avatar}>
                <Avatar user={data.sender}/>
            </div>
            <div className={body}>
                <div className="flex item-center gap-1">
                    <div className="text-sm text-gray-500">
                        {data.sender.name}
                    </div>
                    <div className="text-xs text-gray-400">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageBox;