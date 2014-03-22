require'CSV'
require 'pry'

class FoodOrder
  attr_reader :name, :house, :items

  def initialize(name, house, items)
    @name = name
    @house = house
    @items = items
  end

  def write(file)
    unless File.exists?(file)
      CSV.open(file, 'ab'){|csv| csv << ["name", "house", "items"]}
    end


    CSV.open(file, 'ab') do |row|
    order_attrs = [@name, @house, @items.join('|')]
      row << order_attrs
    end
  end

  def self.read(file)
    orders = []
    CSV.foreach(file, headers: true) do |row|
      orders << {house: row["house"], name: row["name"], items: row["items"].split('|')}
    end
    orders
  end
end

