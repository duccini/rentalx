import { Category } from "../model/Category";
import {
  ICategoryService,
  ICreateCategoryDTO,
} from "./interface.category.service";

class CategoriesService implements ICategoryService {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoriesService };
