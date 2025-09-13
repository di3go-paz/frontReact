import { Link } from "react-router-dom";

interface Props {
  to: string;
  label: string;
}

export default function MenuCard({ to, label }: Props) {
  return (
    <Link
      to={to}
      className="card-glass block p-6 border border-white/10 rounded-lg shadow-soft hover:bg-cardGlass hover:shadow-lg transition"
    >
      <span className="text-lg font-bold text-textMain tracking-tight">{label}</span>
    </Link>
  );
}