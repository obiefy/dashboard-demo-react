import { Category } from "./Category"

export type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: Category,
  images: string[]
}