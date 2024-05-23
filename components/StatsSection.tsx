import React from "react";
import { IconType } from "react-icons";

interface StatCardProps {
  name: string;
  value: string;
  icon?: IconType;
}
const StatCard: React.FC<StatCardProps> = ({ name, value }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-white border-gray-200 border-2 shadow-sm rounded-xl py-6 px-4">
      <h1 className="text-5xl md:text-4xl font-bold">{value}</h1>
      <p className="text-xl md: md:text-lg font-semibold text-slate-600">{name}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <StatCard name="Sales" value="£120" />
      <StatCard name="Orders" value="25" />
      <StatCard name="Products" value="63" />
      <StatCard name="Categories" value="12" />
    </div>
  );
};

export default StatsSection;
