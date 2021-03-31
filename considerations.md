# Assumptions made, TODOs & steps

## Assumptions
- That totalCount is an accurate representation of # of transactions in the db
- That there is not an overly large number of transactions (therefore no need to consider infinite scroll or pagination)
- That the alternate row colors are related to income vs expense (this would ideally be confirmed with a PM or designer)
- That currency & date are formatted according to en-US
- Fetch is limited in browser compatibility so if that is important consider axios

## Potential Ticket Breakdown
- Set up project
- Create wireframe components
- Set up API request
- Create shared utils
- Styling

## TODOs
- Better error handling
- Ideally this would have been designed using a mobile-first approach, this was outside the focus of this assignment
- Look into breaking out api calls into a store or context to better manage state & testability
