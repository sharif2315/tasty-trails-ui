import React from 'react'

const StatCard = () => {
    return (
        <div className='flex flex-col justify-center bg-blue-700 text-white font-semibold rounded-2xl p-8'>
            <h1>£120</h1>
            <p>Today Sales</p>
        </div>
    )
}

const StatsSection = () => {
    return (
        <div className='my-8'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
            </div>
        </div>

    )
}

export default StatsSection