import { Router } from "express";
import { prisma } from "../prisma.js";
import type routes from "../routes.js";




const router = Router(); 

router.get("/", async (req, res) => {
    
    res.json(await  prisma.estoque.findMany({
        include:{
            produto:true 
        }
    }))
})

router.post("/", async (req, res) => {
    
    const estoque = await prisma.estoque.create({
        data: req.body 
    })

    res.json(estoque)

})

export default router
 