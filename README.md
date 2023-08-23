# Challenge

This is a simple Vue app with Single File Components. The challenge will be to fix some bugs that are preventing the app from building and displaying properly. Then we will add some features to the app like loading data from an external API. 

## Running the project
- Open the terminal and enter `npm run start`. This will launch dev servers for both the frontend and the API. When you save a file, the app will rebuild and reload.  

## 1. Bugs
There are bugs! The app won't even build right now. Your mission is to get the app building and fix the bugs so that it looks like the following image:

<img src="image.png" width="600px"/>

Then, when the "Clear" button is clicked, it should clear the scores like so:

<img src="image-1.png" width="600px"/>

Pay close attention to the screenshots, the styles and colors need to match exactly. 

## 2. Features
Now that the bugs are fixes, we can add the new features. Right now, we are using static mok data that is hard-coded into the app. We need to replace this with data loaded from an API. Refer to [the API documentation](https://app.swaggerhub.com/apis-docs/samschurter/UserDataAPI/0.1) for instructions on accessing and using the API.

In any order, we need to accomplish the following:
- The app should display the list of users first, not the scores
- The list of users should be retrieved from the API
- Clicking a user's name should display that user's score
- The data for an individual user should be loaded from the API
- When viewing the scores for a particular user, clicking the "Cancel" button will return the app to the main list of users.

### Helpful notes:
- The API base URL changes with the name of the Codespaces container. It has been precalculated at the top of each `.vue` file, but in some environments that may not be correct. To find the base URL of the API, 
    - Press `Ctrl+Shift+P` to open the Command Palette, type `ports` and hit `Enter` to open the Ports panel
    - Locate the `backend (3000)` port
    - Hover over the Local Address and click the Copy to Clipboard button.
- If you are getting CORS errors when trying to access the API, the API port may not be set to public. Open the Ports panel as described above, right click on the `backend (3000) port, and select Port Visibility -> Public
- Hot reloading does not always work when some major changes hav been made. If the changes you are expecting do not appear in the preview, try reloading the page. If that does not work, kill and restart the dev server, then reload the page.
