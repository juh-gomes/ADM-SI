import { Router } from "express";
import { prisma } from "../prisma.js";


const router = Router();


router.get("/", async (req,res) => {
    
    const clientes = await prisma.cliente.findMany();

    res.json(); 
})

router.get("/hello", async (req, res) => {

    res.json("Olá");
})

router.post("/", async (req, res) => {
    const {nome, email, telefone} = req.body

    const cliente = await prisma.cliente.create({
        data:{
            nome,
            email,
            telefone
        }
    })

    res.json(cliente)
})

export default router 