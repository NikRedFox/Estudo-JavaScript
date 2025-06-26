import './style.css'
import { useState } from 'react'

const Component = () => {
  const [dados, setDados] = useState({
    logradouro: '--',
    bairro: '--',
    regiao: '--',
    estado: '--'
  })

  const buscarCEP = (e) => {
    e.preventDefault()
    const cep = document.getElementById("input_cep").value.replace(/\D/g, "")
    if (cep.length !== 8) {
      alert("CEP inválido. Digite os 8 números.")
      return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          alert("CEP não encontrado")
          return
        }

        setDados({
          logradouro: data.logradouro,
          bairro: data.bairro,
          regiao: data.localidade,
          estado: data.uf
        })
      })
      .catch(() => alert("Erro ao buscar o CEP"))
  }

  return (
    <>
      <div className="container">
        <h1>🔍 Consulta de CEP</h1>

        <form id="cep-form" onSubmit={buscarCEP}>
          <input type="text" id="input_cep" placeholder="Digite o CEP" maxLength="9" required />
          <button type="submit" id="btn-cep">Buscar</button>
        </form>

        <div className="resultado" id="resultado">
          <p><strong>Logradouro:</strong> <span>{dados.logradouro}</span></p>
          <p><strong>Bairro:</strong> <span>{dados.bairro}</span></p>
          <p><strong>Região:</strong> <span>{dados.regiao}</span></p>
          <p><strong>Estado:</strong> <span>{dados.estado}</span></p>
        </div>
      </div>
    </>
  )
}

export default Component
