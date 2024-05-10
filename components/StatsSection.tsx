import React from 'react'
import { IconType } from 'react-icons';

interface StatCardProps {
    name: string;
    value: string;
    icon?: IconType; 
} 
const StatCard: React.FC<StatCardProps> = ({ name, value }) => {
    return (
        <div className='flex flex-col justify-center bg-white text-slate-500 border-gray-200 border-2 shadow-sm rounded-2xl py-6 px-4'>
            <h1 className='text-2xl font-bold'>{value}</h1>
            <p className='text-md font-semibold'>{name}</p>
        </div>
    )
}

const StatsSection = () => {
    return (
        <div className='my-8 px-3'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <StatCard name='Today Sales' value='£120'/>
                <StatCard name='Orders' value='25'/>
                <StatCard name='Customers' value='63'/>
                <StatCard name='Transactions' value='12'/>

            </div>
        </div>

    )
}

export default StatsSection