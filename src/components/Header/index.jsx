import brasao from "../../assets/Brasão_de_Mato_Grosso_do_Sul.png"

function Header() {

    return (
        <header className='flex flex-col md:flex-row gap-4 justify-between bg-blue-400 py-2 xl:px-15 px-5 text-white uppercase text-xs items-center'>
            <div>
                <img src={brasao} alt="Brasão MS" className="w-12" />
            </div>
            <div className="flex flex-col md:flex-row justify-evenly md:gap-8 gap-4 items-center">
                <div className="hover:scale-110 transition hover:text-amber-200">
                    <a href="/">
                        Painel Votação Mato Grosso do Sul
                    </a>
                </div>
                <div className="hover:scale-110 transition hover:text-amber-200">
                    <a href="/forms">
                        Tela de Cadastro
                    </a>
                </div>
                <div className="hover:scale-110 transition hover:text-amber-200">
                    <a href="/gastos">
                        Gastos
                    </a>
                </div>
                <div className="hover:scale-110 transition hover:text-amber-200">
                    <a href="/base-contato">
                        Base Contato
                    </a>
                </div>
                <div className="hover:scale-110 transition hover:text-amber-200">
                    <a href="/base-gastos">
                        Base Gastos
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
