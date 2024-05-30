'use client'

import SlideOver from '@/components/base/SlideOver'
import React, { useState } from 'react'

const Page = () => {
    const [isSlideOverOpen, setSlideOverOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setSlideOverOpen(true)}>Open SlideOver</button>

            <SlideOver 
                open={isSlideOverOpen} 
                setOpen={setSlideOverOpen}
                direction='left' 
                title="SlideOver Title"
            >
                <p>This is the content of the SlideOver.</p>
            </SlideOver>

        </div>

    )
}

export default Page