import Cliente from "../page/cliente"

const cliente = new Cliente();

it("Open URL",async () => {
    await cliente.abrirFormulario();
})