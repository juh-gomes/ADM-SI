import Router from "express"
import clientes from "./routes/clientes.js"
import produtos from "./routes/produtos.js"
import fornecedores from "./routes/fornecedor.js"
import compra from "./routes/compra.js"
import dashboard from "./routes/dashboard.js"
import pedidos from "./routes/pedidos.js"
import usuarios from "./routes/usuario.js"
import estoque from "./routes/estoque.js"

const routes = Router()



routes.use("/cliente", clientes)
routes.use("/produto", produtos)
routes.use("fornecedores", fornecedores)
routes.use("/compras", compra)
routes.use("/dashboard", dashboard)
routes.use("/pedidos", pedidos)
routes.use("/usuarios",usuarios)
routes.use("/estoque", estoque)


export default routes