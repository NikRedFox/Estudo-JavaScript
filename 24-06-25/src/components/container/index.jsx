import './style.css'

const Component =()=>{
    return(
        <>
            <div class="container">
                <h1>🔍 Consulta de CEP</h1>

                <form id="cep-form">
                    <input  type="text" id="input_cep" placeholder="Digite o CEP" maxlength="9" required/>
                    <button type="submit" id="btn-cep">Buscar</button>
                </form>

                <div class="resultado" id="resultado">
                    <p><strong>Logradouro:</strong> <span id="logradouro">--</span></p>
                    <p><strong>Bairro:</strong> <span id="bairro">--</span></p>
                    <p><strong>Região:</strong> <span id="regiao">--</span></p>
                    <p><strong>Estado:</strong> <span id="estado">--</span></p>
                </div>
            </div>
        </>
    )
}
export default Component