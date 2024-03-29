import { ProductCartProps } from "@/stores/cart-store"
import { ProductProps } from "@/utils/data/products"

export function add(products: ProductCartProps[], newProduct: ProductProps) {
	const existingProduct = products.find((product) => product.id == newProduct.id)

	if (existingProduct) {
		return products.map((product) => existingProduct.id == product.id ? {...product, quantity: product.quantity + 1} : product)
	}

	return [...products, {...newProduct, quantity: 1}]
}

export function remove(products: ProductCartProps[], productRemovedId: string) {
	const updatedProducts = products.map((product) => productRemovedId == product.id ? { ...product, quantity: (product.quantity > 1 ? product.quantity - 1 : 0) } : product)
	return updatedProducts.filter((product) => product.quantity > 0)
}