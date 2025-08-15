import { Link } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

export default function MenuCard({ to, label }: Props) {
  return (
    <Link
      to={to}
      className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition"
    >
      <span className="text-lg font-medium text-gray-700">{label}</span>
    </Link>
  );
}