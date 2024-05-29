import React from 'react'
import Table from './Table'
import CardList from './CardList'

const TableView = () => {
    return (
        <>
            <div className='hidden md:block'>
                <Table />
            </div>

            <div className="md:hidden">
                <CardList />
            </div>
        </>
    )
}

export default TableView