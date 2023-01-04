import { ICategoryService } from "../services/interface.category.service";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryController {
  constructor(private categoriesService: ICategoryService) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesService.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesService.create({ description, name });
  }
}

export { CreateCategoryController };
