import { Request, Response } from 'express'
import { ListCategoriesUseCase } from '../ListCategories/ListCategoriesUseCase'


class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }
    handle(request: Request, response: Response) {
        const all = this.listCategoriesUseCase.execute();

        return response.json(all)
    }
}


export { ListCategoriesController }