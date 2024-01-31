import { useParams } from "next/navigation";
import { use, useMemo } from "react";

const useConversation = () => {
    const params = useParams();

    const conversationid = useMemo(() => {
        if(!params?.conversationId) {
            return '';
        };
        return params.conversationId as string;

    }, [params?.conversationid]);

    const isOpen = useMemo(() => !!conversationid, [conversationid]);

    return useMemo(() => ({
        isOpen,
        conversationid,
    }) , [isOpen, conversationid]);

};

export default useConversation;
