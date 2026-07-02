import { Router } from "express";
import { prisma } from "../prisma.js";
import type routes from "../routes.js";




const router = Router(); 

router.get("/", async (req, res) => {
    
    res.json(await  prisma.produto.findMany())
})

router.post("/", async (req, res) => {
    
    const produto = await prisma.produto.create({
        data: req.body 
    })

    res.json(produto)

})

export default router
 