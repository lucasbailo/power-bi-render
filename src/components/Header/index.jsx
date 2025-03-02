import brasao from "../../assets/Brasão_de_Mato_Grosso_do_Sul.png"

function Header() {

    return (
        <header className='flex justify-between bg-blue-400 py-2 xl:px-15 px-5 text-white uppercase text-xs items-center'>
            <div>
                <img src={brasao} alt="Brasão MS" className="w-12" />
            </div>
            <div className="flex justify-evenly xl:gap-8 items-center">
                <div className="w-[50%] md:w-full hover:scale-110 transition hover:text-amber-200">
                    <a href="/">
                        Painel Votação Mato Grosso do Sul
                    </a>
                </div>
                <div className="hover:scale-110 transition hover:text-amber-200">
                    <a href="/forms">
                        Tela de Cadastro
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
