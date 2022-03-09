import React from 'react'
import {useRouter} from 'next/router'

const Page = () => {
    const router = useRouter()
    const pageNo = router.query.page
    return (
        <div>
            <h1>This {pageNo } page</h1>
        </div>
    )
}

export default Page
