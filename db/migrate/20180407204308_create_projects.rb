class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :image
      t.integer :grade
      t.string :deploy_url
      t.string :git_url
      t.string :description

      t.timestamps
    end
  end
end
