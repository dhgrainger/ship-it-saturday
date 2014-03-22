require 'sinatra'
require 'CSV'
require 'shotgun'
require 'pry'

require_relative'order_class.rb'
file = 'orders.csv'

post '/order' do
  items = [params['milk'], params['apples'], params['coffee']]
  order = FoodOrder.new(params['name'], params['house'], items)
  order.write(file)
  redirect '/'
end


get '/' do
  erb :shipit
end

get '/orders' do

  @orders = FoodOrder.read(file)
  erb :order

end



