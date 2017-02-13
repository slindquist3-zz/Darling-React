class ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.create(product_params)
    render json: @product.cart, serializer: CartSerializer
  end

  private
  def product_params
    params.require(:product).permit(:name, :price, :thumbnail, :cart_id)
  end

end
