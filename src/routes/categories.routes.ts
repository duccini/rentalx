import { Router } from "express";

import { CreateCategoryController } from "../controllers/create.category.controller";
import { CategoriesService } from "../services/categories.service";

const categoriesRoutes = Router();

const categoriesService = new CategoriesService();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryController = new CreateCategoryController(
    categoriesService
  );

  createCategoryController.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesService.list();

  return res.status(201).json(all);
});

export default categoriesRoutes;
