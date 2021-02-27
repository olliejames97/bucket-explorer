A React app used in conjunction with bucket-explorer-api to view the contents of any private s3 bucket, or a deafault bucket (as set in the API).

Live here: https://frosty-hugle-afc89c.netlify.app/

# Using a custom bucket

1. On the site select the "change" button in the top right
2. Enter relevant bucket details in the panel, and press submit. These details can be stored in localStorage by checking the "Remeber these details?" checkbox

# Running Locally

1. `npm install`
2. Create ".env" in project root, with "REACT_APP_API_URL", the URL of the bucket-explorer-api's graphql server eg:

   ```
   REACT_APP_API_URL="https://kk1rtpcsn9.execute-api.eu-west-1.amazonaws.com/prod/graphql"

   ```

   This will use the currently live API.

3. `npm run start`
