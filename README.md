## Website Carbon Footprint Tracker
https://inst-377-final-project-nine.vercel.app 

This website is a Calculator of the carbon footprint of a website based on this API https://api.websitecarbon.com/ This website is made for a class and is intended as a learning project. For a professional website that does the same thing visit https://www.websitecarbon.com/ 

Target Browsers: Firefox on Windows

## Developer Manual
### How to install your application and all dependencies
1. Clone repository 
2. Install dependencies 
    @supabase/supabase-js": "^2.49.4",
    "express": "^5.1.0",
    "nodemon": "^3.1.10"
3. change to the cloned folder
4. run nodemon
### How to run your application on a server
1. Clone repository 
2. Install dependencies 
    @supabase/supabase-js": "^2.49.4",
    "express": "^5.1.0",
    "nodemon": "^3.1.10"
3. change to the cloned folder
4. run nodemon
### How to run any tests you have written for your software
No tests were developed
### The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do
endpoints
1. /search
This GET API endpoint searches the Suprabase database for URLs that have been entered to the website
example request: 'https://inst-377-final-project-nine.vercel.app/search?url=https://example.com
2. /add
This POST API endpoint adds a new website to the database.
example request:https://inst-377-final-project-nine.vercel.app/add body: {"url": https://example.com }

### A clear set of expectations around known bugs and a road-map for future development.
Known bugs: 
1. The API endpoints don't check if the URLs submitted are formatted correctly
2. The search function on the calculator page returns the entire JSON returned by the API instead of the URL name found

Future Developement: Fix these bugs
