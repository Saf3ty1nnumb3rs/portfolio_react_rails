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
wishkey = Project.create!(name: 'WISHkey', image: 'https://camo.githubusercontent.com/00d98fcbed281ef364ddcbbf75d3e287a9e33508/68747470733a2f2f63646e2e67656172706174726f6c2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031332f31302f74617374696e672d6e6f7465732d6a6170616e6573652d776869736b792d676561722d706174726f6c2d6c6561642d66756c6c2d76332e6a7067', grade: 103  , deploy_url: 'https://agile-fortress-58020.herokuapp.com/'   ,    git_url: 'https://github.com/Saf3ty1nnumb3rs/MENstackApp'  , description: 'This project will be my first project utilizing a MEN stack deployed with Heroku! WISHkey is an app that will provide a platform for users to declare their love of whisk(e)y! A user can list their favorites and add some great finds to our online database broken down by country or region. Almost like a pinterest for all of the whisky lovers. It\'s an online wish list for whisky from around the world. Have a favorite whisky? Sign up and add it on WISHkey!!!!!'    )
vagabond = Project.create!(name: 'Vagabond', image: 'https://camo.githubusercontent.com/20dd08b7b8ac9f2e1dfe53e1d51148519632909d/68747470733a2f2f6d656469612e62697a6a2e75732f766965772f696d672f333937323237312f736b796c696e652d6f662d61746c616e74612a313032347878313630302d3930302d302d313338342e6a7067' , grade: 100 , deploy_url: 'https://vonvagabondies.herokuapp.com/'  ,    git_url: 'https://github.com/Saf3ty1nnumb3rs/project_vagabond'  , description: 'This is WDI 14 Group Project Vagabond! Select destinations from around the globe to post events, comments, and see what other people around the globe think of your home or destinations!'   )
icon = Project.create!(name: 'iCon', image: 'https://camo.githubusercontent.com/eab1feec0f7b364209435d21f363a8074cbf17a8/687474703a2f2f7777772e706c616e77616c6c70617065722e636f6d2f7374617469632f696d616765732f313434343031343237352d31303664656539353130343230396262393433366436646632623664353134352e6a706567' , grade: 100 , deploy_url: 'https://calm-cove-34969.herokuapp.com/'  ,    git_url: 'https://github.com/Saf3ty1nnumb3rs/MERNapp'  , description: 'This project will be my first project utilizing a MERN stack deployed with Heroku! iCON is an app that will provide a platform for users to check out some of their favorite Cons around the country and add themselves to the attendee list of the conventions that they are attending! On each convention is a shout out page for people to share information, talk about what they are excited about, or just make some noise in anticipation of going to their favorite convention. Check out the users going to each con and see what your fellow con goers are all about.Making the rounds at DragonCon this year? Sign up on iCON and see who all is going to be marching down the streets as a Stormtrooper with you!!!!!'    )

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
