import { IconType } from "react-icons";
import { FaTags, FaBell } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { IoCalendarNumber, IoHome } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineBarChart, AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { FaBoxArchive } from "react-icons/fa6";


interface NavLinkProps {
    name: string;
    href?: string;
    icon: IconType;
}
const NavLink: React.FC<NavLinkProps> = ({ name, href='#', icon: Icon }) => {
    return (
        <li>
            <a
                href={href}
                className="group relative rounded-lg bg-white hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 flex gap-4 items-center justify-center sm:justify-start"
            >
                <div>
                    {Icon && <Icon className="inline-block text-gray-500 group-hover:text-gray-700" size={20} />}
                </div>

                <span
                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible sm:hidden block"
                >
                    {name}
                </span>

                <p className="font-semibold hidden sm:block text-gray-500 group-hover:text-gray-700">{name}</p>
            </a>
        </li>
    );
};

const AdminSidebar = () => {
    return (
        <div className="flex">
            <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">

                <div>


                    <div 
                        className="flex items-center justify-center py-4"
                        // className="inline-flex size-16 items-center justify-center"
                    >
                        <span
                            className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                        >
                            SA
                        </span>
                    </div>

                    <div className="px-2 border-t border-gray-100">
                        <ul className="space-y-1 grid gap-1">
                            <NavLink name="Dashboard" icon={IoHome}  />
                            <NavLink name="Products" icon={FaBoxArchive}  />
                            <NavLink name="Categories" icon={FaTags}  />
                            <NavLink name="Orders" icon={FaInbox}  />
                            <NavLink name="Calendar" icon={IoCalendarNumber}  />
                            <NavLink name="Notifications" icon={FaBell}  />
                            <NavLink name="Analytics" icon={AiOutlineBarChart}  />
                            <NavLink name="Profile" icon={MdAccountCircle}  />
                            <NavLink name="Settings" icon={AiOutlineSetting}  />
                        </ul>
                    </div>
                </div>

                {/* Logout Button */}
                <div 
                    // className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2"
                    className="flex justify-center items-center mb-2 px-2"
                >
                    <ul className="w-full">
                        <NavLink name="Logout" icon={AiOutlineLogout}  />
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default AdminSidebar