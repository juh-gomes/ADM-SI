import { prisma } from "../prisma.js"
import type routes from "../routes.js"
import router from "./clientes.js"
import { Router } from "express"



const route = Router()

router.get("/", async (req, res) => {

    res.json({
        clientes:await prisma.cliente.count(),
        produtos:await prisma.produto.count(),
        fornecedores: await prisma.fornecedor.count(),
        pedidos:await prisma.pedido.count()

    })})

    
export default router 