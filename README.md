# 🌳 National Parks Digital Passport 🌳

## App Story

Since 1986, national park visitors have used the Passport To Your National Parks® program to preserve memories of their park travels, collecting ink stamps at every park they visit. These rubber stamps are fun to collect and are a great way to remember a trip to one of America's beautiful National Parks. However, it can be hard to remember to pack the passport for your trip and to get a stamp when you're at the park. Plus, what happens if your passport is lost, stolen, or destroyed by the elements?

The NPS Digital Passport is a way to ensure that no matter when you visit a park, you're able to record the memory forever in a virtual book. The app provides users with a colorful, beautiful, and special way to preserve their log of each park that they've visited, mark bucket list locations they want to see, and leave reviews of their favorite parks.

## Deliverables and Stretch Goals

- **MVP**: As a user, I can:
  - Log into the site
  - View a list of all National Park locations
  - Filter National Parks list by activities
  - Add a National Park stamp to my Digital Parks Passport (favorite)
  - Create a review for a National Park in my passport
  - Modify or delete a review that I left
  - Order a poster of a National Park that I've visited
  - Update details on my profile (location, bucket list, photo)
- **Stretch**: As a user, I can:
  - Toggle to Map View (as opposed to List View)
  - Upload a photo from a trip to a National Park in my passport
  - Add other users as friends
  - Tag friends in posts in my passport

## Models and Relationships / Wireframe

![db diagram](/public/dbdiagram.png)
![wireframe](/public/wireframe.png)

## Instructions for Testing/Updating Production

Start the server:

```console
rails s
```

Start the localhost React client:

```console
npm start --prefix client
```

Push to GitHub and Heroku:

```console
git add .
git commit -m 'message'
git push origin main
git push heroku main
```

