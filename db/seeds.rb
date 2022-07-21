# User.create(username: "leigh", password_digest: "12345", location: "New York", image_url: "https://i.pravatar.cc/300")
# User.create(username: "kerry", password_digest: "12345", location: "Indianapolis", image_url: "https://i.pravatar.cc/300")

# Park.create(name: "Zion National Park", latitude:"55", longitude: "95", activities: "hiking, stargazing", states: "UT", designation: "National Park", description: "Great skies to stargaze under.", image_url: "https://upload.wikimedia.org/wikipedia/commons/1/10/Zion_angels_landing_view.jpg")
# Park.create(name: "Grand Canyon National Park", latitude:"35", longitude: "105", activities: "hiking, camping", states: "AZ", designation: "National Park", description: "The largest canyon in the US!", image_url: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg")

# BucketList.create(user_id: 1)
# BucketList.create(user_id: 2)

# BucketListPark.create(bucket_list_id: 1, park_id: 1)
# BucketListPark.create(bucket_list_id: 1, park_id: 2)

# UserPark.create(user_id: 2, park_id: 1)
# UserPark.create(user_id: 2, park_id: 2)

# Review.create(user_id: 2, park_id: 1, text: "I loved visiting Zion with my mom and sister!")
# Review.create(user_id: 2, park_id: 2, text: "I loved visiting the Grand Canyon with my class!")