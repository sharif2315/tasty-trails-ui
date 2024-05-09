import SearchInput from "./SearchInput"

const Navbar = () => {
    return (
        <div className="flex gap-4 px-4 py-2 justify-between XXXbg-yellow-300">
            
            <div>Dashboard</div>

            {/* <div>Search</div> */}            
            <SearchInput/>

            <div>Profile</div>
        </div>
    )
} 

export default Navbar