import React from "react";
import { IconType } from "react-icons";

interface StatCardProps {
  name: string;
  value: string;
  icon?: IconType;
}
const StatCard: React.FC<StatCardProps> = ({ name, value }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-white border-gray-200 border-2 shadow-sm rounded-xl py-6 px-4 text-center">
      <p className="text-xl md: md:text-lg font-semibold text-slate-600">{name}</p>
      <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold">{value}</h1>
      <p className="text-xs">
        <span className="bg-lime-100 text-lime-700 px-2 py-1 rounded-lg shadow-sm mr-0.5">+4.5%</span> from last week
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      <StatCard name="Total Revenue" value="£120" />
      <StatCard name="Average Order" value="£25" />
      <StatCard name="Total Orders" value="63" />
      <StatCard name="Total Sales" value="12" />
    </div>
  );
};

export default StatsSection;
