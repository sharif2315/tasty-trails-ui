'use client'

import HeadlessSlideOver from '@/components/HeadlessSlideOver'
import SlideOver from '@/components/base/SlideOver'
import React, { useState } from 'react'

const Page = () => {
    const [isSlideOverOpen, setSlideOverOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setSlideOverOpen(true)}>Open SlideOver</button>

            <HeadlessSlideOver 
                open={isSlideOverOpen} 
                setOpen={setSlideOverOpen} 
                title="SlideOver Title"
            >
                <p>This is the content of the SlideOver.</p>
            </HeadlessSlideOver>
        </div>

    )
}

export default Page