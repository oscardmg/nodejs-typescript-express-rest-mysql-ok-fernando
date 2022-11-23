import { Request, Response } from "express";
import UserService from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAll();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserService.get(id);
  if (user != null) {
    res.json(user);
  } else {
    res.status(404).json({
      msg: `user id ${id} not exists`,
    });
  }
};

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const user = await UserService.save(body);
    res.json(user);
  } catch (error: any) {
    res.status(400).json({
      msg: `${error.message}`,
    });
  }
};

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await UserService.update(body);
    res.json(user);
  } catch (error: any) {
    res.status(400).json({
      msg: `error ${error.message} id: ${id}`,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await UserService.delete(id);
    res.json({});
  } catch (error: any) {
    res.status(400).json({
      msg: `error ${error.message} id: ${id}`,
    });
  }
};
