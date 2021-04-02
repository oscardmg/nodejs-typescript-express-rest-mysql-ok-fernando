import { Request, Response } from "express";
import Usuario from "../models/usuario";


export const getUsuarios = async (req: Request, res: Response) => {
    
    const usuarios = await Usuario.findAll();
    
    res.json( { usuarios });
}

export const getUsuario = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    if(usuario != null) {
        res.json(usuario);
    }else {
        res.status(404).json({
            msg: `No existe usuario con id ${id} `
        });
    }
}

export const postUsuario = async (req: Request, res: Response) => {
    
    const { body } = req;
    
    try {
        
        const existe = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if(existe != null) {
            throw new Error(`El usuario con email: ${body.email} ya existe`);
        }
        
        
        const usuario = Usuario.build(body);
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        res.status(400).json({
            msg: `ocurrio un problema ${error.message}`
        });
    }
    
}

export const putUsuario = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { body } = req;
    
    try {
        
        const usuario = await Usuario.findByPk(id);
        console.log('usuario:', usuario);
        
        if(!usuario) {
            throw new Error(`El usuario con id: ${id} no existe`);
        }
        
        await Usuario.update(body);
        
        res.json(usuario);
    } catch (error) {
        res.status(400).json({
            msg: `ocurrio un problema ${error.message} id: ${id}`
        });
    }
    
}

export const deleteUsuario = async(req: Request, res: Response) => {
    
    const { id } = req.params;
    
    
    const usuario = await Usuario.findByPk(id);
    if(usuario != null) {
        // ojo borra la tabla await Usuario.drop(usuario);
        await usuario.destroy();
        res.json({
            msg: 'se borro con exito'
        });
    }else {
        res.status(404).json({
            msg: `No existe usuario con id ${id} `
        });
    }
}

