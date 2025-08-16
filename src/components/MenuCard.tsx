import { Link } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

export default function MenuCard({ to, label }: Props) {
  return (
    <Link
      to={to}
      className="block p-6 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
    >
      <span className="text-lg font-medium text-purple-400">{label}</span>
    </Link>
  );
}