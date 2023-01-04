import { Category } from "../model/Category";
import {
  ICategoryService,
  ICreateCategoryDTO,
} from "./interface.category.service";

class PostgresCategoriesService implements ICategoryService {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
}

export { PostgresCategoriesService };
