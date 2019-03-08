# Pollster

Pollster is a web app that allows user to create and share simple polls. After creating a poll (/new) the poll is saved with a short ID that is then returned to the user. Navigating to that short id (/`~shortID~`) displays the poll and allows users to vote on the various options, altering the percentages and votes counted in realtime.

## Setup

_Coming to firebase soon_

1. Clone from `https://github.com/ben-kirby/pollster.git`
2. In parent directory, run `$ npm install; npm run start`
3. In your browser, navigate to `localhost:8080`

## Structure

### UI

_coming soon_

### Componenet Tree

_coming soon_

## Features

- Can navigate to `/new` to create a new poll with unlimited options.
- If the user knows the poll ID beforehand (not implemented into UI yet) they can navigate to `/*Short_ID*` and poll info will diplay.

## Known Issues

- If a user goes to a URL path that does not correlate with an existing poll ID, there is no error, just sits on loading.
- No way for users to retreive a poll ID once a poll is made.
- Options do not display on poll screen.
- No navigation buttons. Users have to know the URL or use back/forward buttons.
- No UI.
- "Enter Poll Code" field on main screen does nothing.

## What's Next

- [] Come up with a voting system.
- [] Get votes to update in the database.
- [] Add UI/Styling
- [] Return a poll ID upon creation of a new poll.
- [] Better navigation