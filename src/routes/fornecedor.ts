import { Router } from "express";
import { prisma } from "../prisma.js";
import type routes from "../routes.js";




const router = Router(); 

router.get("/", async (req, res) => {
    
    res.json(await  prisma.fornecedor.findMany())
})

router.post("/", async (req, res) => {
    
    const fornecedor = await prisma.fornecedor.create({
        data: req.body 
    })

    res.json(fornecedor)

})

export default router
 