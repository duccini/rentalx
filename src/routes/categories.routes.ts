import { Router } from "express";

import { CategoryService } from "../services/categories.service";

const categoriesRoutes = Router();

const categoryService = new CategoryService();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  categoryService.create({ name, description });

  return res.status(201).send();
});

export default categoriesRoutes;
