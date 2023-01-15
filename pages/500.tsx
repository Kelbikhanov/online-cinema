import Heading from '@/components/ui/heading/heading'
import Meta from '@/utils/meta/Meta'
import React from 'react'

export default function Error500() {
    return (
        <Meta title="Page not found" description='page not found'>
            <Heading title="500 - server error" /> 
        </Meta>
    )
}