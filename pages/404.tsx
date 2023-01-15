import Heading from '@/components/ui/heading/heading'
import Meta from '@/utils/meta/Meta'
import React from 'react'

export default function Error404() {
    return (
        <Meta title="Page not found" description='page not found'>
            <Heading title="404 - page not found" /> 
        </Meta>
    )
}