import { useRouter } from "next/router"

const SubPage = () => {
    const router = useRouter()
    return (
        <div>
            <div>{router.query.subPage}</div>
        </div>
    )
} 

export default SubPage;