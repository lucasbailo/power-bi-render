
function About() {

    return (
        <main className="h-[100vh]">
            <div className="flex-row px-6 py-2 xl:w-[75vw]">
                <h1 className="text-xl py-5 uppercase">Sobre o projeto</h1>
                <p className="py-5">
                    Este painel foi feito na utilizando a ferramenta chamada de PowerBI e renderizado em uma página web. Ou seja, apenas o resultado das conexões e cálculos estão sendo carregados aqui.
                </p>
                <p className="py-5">
                    O Power BI é uma coleção de serviços de software, aplicativos e conectores que trabalham juntos para transformar suas fontes de dados não relacionadas em informações coerentes, visualmente envolventes e interativas. Os dados podem estar em uma planilha do Excel ou em uma coleção de data warehouses híbridos locais ou baseados na nuvem. Com o Power BI, você pode se conectar facilmente a fontes de dados, visualizar e descobrir conteúdo importante e compartilhá-lo com todas as pessoas que quiser.
                </p>
                <p className="py-5">
                    As bases de dados utilizadas foram retiradas dos seguintes sites:
                </p>
                <ul className="italic">
                    <li className="hover:text-blue-500 transition">
                        <a href="https://dadosabertos.tse.jus.br/dataset/resultados-2024" target="_blank">
                            - Portal de dados abertos TSE
                        </a>
                    </li>
                    <li className="hover:text-blue-500 transition">
                        <a href="https://divulgacandcontas.tse.jus.br/divulga/#/candidato/CENTROOESTE/MS/2045202024" target="_blank">
                            - Divulgação de Candidaturas e Contas Eleitorais
                        </a>
                    </li>
                </ul>
                <p className="py-5">
                    Como o compartilhamento de dados não é um recurso gratuito no PowerBI você precisará de uma conta Pro para conseguir compartilhar os dados e, para acessá-los, precisará receber a permissão do criador dos relatórios.
                </p>
                <p className="py-5">
                    <strong>Obs:</strong> Todos os dados utilizados são públicos.
                </p>
            </div >
        </main >
    )
}

export default About

