import {useEffect, useState} from "react";
import {Address, fromNano, OpenedContract, toNano} from "ton-core";
import {BusinessCard} from "../wrappers/tact_BusinessCard";
import {useAsyncInitialize} from "./useAsyncInitialize";
import {useTonClient} from "./useTonClient";
import {useTonConnect} from "./useTonConnect";

export function useBusinessCardContract() {
    const {client} = useTonClient()
    const {wallet, sender} = useTonConnect()
    const [likes, setLikes] = useState<number | null>()

    const businessCardContract = useAsyncInitialize(async () => {
        if (!client || !wallet) return;
        const contract = BusinessCard.fromAddress(Address.parse(import.meta.env.VITE_CONTRACT_ADDRESS))
        return client.open(contract) as OpenedContract<BusinessCard>
    }, [client, wallet])


    async function getLikes() {
        if (!businessCardContract) {
            console.log('Contract is not initialized')
            return
        }
        setLikes(null)
        const likes = await businessCardContract.getLikes()
        setLikes(Number(likes))
    }

    async function sendLike() {
        await businessCardContract?.send(
            sender,
            {value: toNano("0.01")},
            {
                $$type: 'Like'
            }
        )
    }

    useEffect(() => {
        setInterval(() => {
            getLikes().catch(console.log);
        }, 5000)
        getLikes().catch(console.log)
    }, [businessCardContract])

    return {
        address: businessCardContract?.address.toString(),
        likes,
        sendLike
    }
}
