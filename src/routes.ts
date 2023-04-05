import { Router } from 'express'
import productController from './Product/controller/productController'
import userController from './User/controller/userController'
import pokemonController from './Pokemon/controller/pokemonController'

const routes = Router()

routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.find)
routes.post('/users', userController.create)
routes.delete('/users/:id', userController.delete)
routes.put('/users/:id', userController.update)
routes.post('/products', productController.create)
routes.get('/products', productController.find)
routes.get('/products-stock', productController.findStock)
routes.get('/products-stock-value', productController.stockValue)
routes.post('/pokemons', pokemonController.createFile)
routes.get('/pokemons-list', pokemonController.find)

export default routes