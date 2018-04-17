# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# {

#     name: String,
#     image: String,
#     grade: Number,
#     deploy_url: String
#     git_url: String
#     description: String
    
#     }
    
#     comment model
    
#     {
    
#     name: String
#     comment: String
    
#     }

Comment.destroy_all
Project.destroy_all

# game = Project.create!(name: 'Mandalorian Hangman' , image: , grade: 93  , deploy_url:   ,    git_url:   , description:     )
wishkey = Project.create!(name: 'WISHkey', image: 'https://github.com/Saf3ty1nnumb3rs/portfolio_react_rails/raw/master/client/src/images/wishkey.jpg', grade: 103  , deploy_url: 'https://agile-fortress-58020.herokuapp.com/'   ,    git_url: 'https://github.com/Saf3ty1nnumb3rs/MENstackApp'  , description: 'This project will be my first project utilizing a MEN stack (Mongo and Mongoose, Express, Node) deployed with Heroku! WISHkey is an app that will provide a platform for users to declare their love of whisk(e)y! A user can list their favorites and add some great finds to our online database broken down by country or region. Almost like a pinterest for all of the whisky lovers. It\'s an online wish list for whisky from around the world. Have a favorite whisky? Sign up and add it on WISHkey!!!!!'    )
vagabond = Project.create!(name: 'Vagabond', image: 'https://github.com/Saf3ty1nnumb3rs/portfolio_react_rails/raw/master/client/src/images/vagabond.jpg' , grade: 100 , deploy_url: 'https://vonvagabondies.herokuapp.com/'  ,    git_url: 'https://github.com/Saf3ty1nnumb3rs/project_vagabond'  , description: 'This is WDI 14 Group Project Vagabond! Select destinations from around the globe to post events, comments, and see what other people around the globe think of your home or destinations!'   )
icon = Project.create!(name: 'iCon', image: 'https://github.com/Saf3ty1nnumb3rs/portfolio_react_rails/raw/master/client/src/images/icon.jpg' , grade: 100 , deploy_url: 'https://calm-cove-34969.herokuapp.com/'  ,    git_url: 'https://github.com/Saf3ty1nnumb3rs/MERNapp'  , description: 'This project is my first project utilizing a MERN stack (Mongo/Mongoose, Express, React, Node) deployed with Heroku! iCON is an app that will provide a platform for users to check out some of their favorite Cons around the country and add themselves to the attendee list of the conventions that they are attending! On each convention is a shout out page for people to share information, talk about what they are excited about, or just make some noise in anticipation of going to their favorite convention. Check out the users going to each con and see what your fellow con goers are all about. Making the rounds at DragonCon this year? Sign up on iCON and see who all is going to be marching down the streets as a Stormtrooper with you!!!!!'    )
daytrippr = Project.create!(name: 'Daytrippr', image: '', grade: 100, deploy_url: '', git_url: '', description: '')
Comment.create!(name: 'Mom' , comment: 'Lorem ipsum dolor amet single-origin coffee bicycle rights cardigan, williamsburg flannel kinfolk semiotics typewriter next level stumptown poke. Synth chambray shoreditch disrupt squid. Umami hella poke small batch hammock health goth, pour-over stumptown vexillologist vegan venmo microdosing retro. Tumeric occupy austin meditation actually ramps seitan mumblecore.
    ', project_id:  wishkey.id  )
Comment.create!(name: 'Jamie' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
'  , project_id:  wishkey.id  )
Comment.create!(name: 'SJ' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
' , project_id:  wishkey.id  )
Comment.create!(name: 'Blake' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
', project_id:  vagabond.id  )
Comment.create!(name: 'Potential Employer' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
', project_id:  vagabond.id  )
Comment.create!(name: 'Will' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
', project_id:  vagabond.id  )
Comment.create!(name: 'Owen' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
', project_id:  icon.id  )
Comment.create!(name: 'Cameron' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
', project_id:  icon.id  )
Comment.create!(name: 'Murph' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
', project_id:  icon.id  )
