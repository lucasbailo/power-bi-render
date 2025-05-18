import axios from "axios";
import { useEffect, useState } from "react";

export default function InfoGastos() {

    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState(null)
    const [cabecalhos, setCabecalhos] = useState([])
    const [progresso, setProgresso] = useState(0);

    useEffect(() => {
        if (carregando) {
            const interval = setInterval(() => {
                setProgresso((prev) => {
                    if (prev >= 95) return prev; // trava em 95% até o Axios resolver
                    return prev + Math.floor(Math.random() * 5 + 1); // sobe lentamente
                });
            }, 200);

            return () => clearInterval(interval);
        }
    }, [carregando]);

    //https://docs.google.com/spreadsheets/d/1n70__--46-wfNh9CEyMQQHOTNWBrVnIQEhDNTR_d35s/edit?usp=sharing

    useEffect(() => {
        const sheetId = "1n70__--46-wfNh9CEyMQQHOTNWBrVnIQEhDNTR_d35s";
        const sheetName = "Planilha_Gastos";
        const url = `https://opensheet.vercel.app/${sheetId}/${sheetName}`;

        axios.get(url)
            .then((res) => {
                const linhasValidas = res.data.filter((linha) => Object.keys(linha).length > 0);
                setDados(linhasValidas);
                if (linhasValidas.length > 0) {
                    setCabecalhos(Object.keys(linhasValidas[0])); // ✅ pega os nomes das colunas
                }
                setCarregando(false)
                console.log(res.data)
            })
            .catch((err) => {
                setErro('Erro ao carregar dados')
                console.log(err)
                setCarregando(false)
            })
    }, [])

    if (carregando) {
        return (
            <div className="w-full h-svh max-w-md mx-auto my-20 text-center">
                <p className="mb-2 text-lg font-medium text-gray-700 animate-pulse">
                    Carregando... {progresso}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                        className="bg-blue-500 h-4 transition-all duration-300"
                        style={{ width: `${progresso}%` }}
                    />
                </div>
            </div>
        );
    }
    if (erro) return <p>{erro}</p>;

    return (
        <div className="p-8 h-screen">
            <h1 className="pb-8 text-2xl font-bold">
                Base de Gastos coletados
            </h1>
            <div className=" overflow-x-scroll">
                <table className="table-auto w-full border border-gray-300">
                    <thead>
                        <tr>
                            {cabecalhos.map((cab, index) => (
                                <th
                                    key={index}
                                    className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-white bg-blue-400"
                                >
                                    {cab}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((linha, i) => (
                            <tr key={i}>
                                {cabecalhos.map((cab, j) => (
                                    <td
                                        key={j}
                                        className="border border-gray-300 px-4 py-2 text-sm text-gray-800"
                                    >
                                        {linha[cab]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

