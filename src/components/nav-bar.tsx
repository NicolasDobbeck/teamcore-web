interface NavBarProps {
    active: "dashboard" | "funcionarios" | "cargos"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-b-2 border-slate-50"

    return (
        <nav className="flex justify-between items-center p-6 bg-emerald-800">
            <h1 className="text-emerald-100 text-4xl font-bold">TeamCore</h1>
            <ul className="flex gap-4">
                <li className={active === "dashboard" ? classActive : ""}>
                    <a href="/dashboard" className="text-white text-[20px]">Dashboard</a>
                </li>
                <li className={active === "funcionarios" ? classActive : ""}>
                    <a href="/funcionarios" className="text-white text-[20px]">Funcionários</a>
                </li>
                <li className={active === "cargos" ? classActive : ""}>
                    <a href="/cargos" className="text-white text-[20px]">Cargos e Departamentos</a>
                </li>
            </ul>
            <img className="size-12 rounded-full" src="http://github.com/NicolasDobbeck.png" alt="" />
        </nav>
    )
}