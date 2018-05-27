class CreateAirports < ActiveRecord::Migration[5.1]
  def change
    create_table :airports do |t|
      t.string :name
      t.string :city
      t.string :country
      t.string :country_code
      t.string :airport_code
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
