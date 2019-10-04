# SE-PostUrlDump

This is a simple website that uses the [Stack Exchange API](http://api.stackexchange.com) to fetch a list of all of your own posts on the Stack Exchange Network.

Your posts are presented with their score and direct link to the post.

The website is accessible at http://shu8.github.io/SE-PostUrlDump/.

## Usage

The website requires your Network ID and an Access Token:

- To get an access token, visit this [application's authorisation page](https://stackexchange.com/oauth/dialog?client_id=6024&amp;redirect_uri=https://stackexchange.com/oauth/login_success) and grant access. This will redirect you to a page where the URL contains an `access_token` parameter. Paste this into the website
- To get your Network ID, visit your profile on the [main Stack Exchange website](https://stackexchange.com/users/current) and copy it from the address bar.

## Contributions

Issues and pull requests are more than welcome -- please let me know if there are any bugs or feature requests!

## Notes

This site was created as an answer to the MSE question: [Dump of my own Stack Exchange content](https://meta.stackexchange.com/q/269804).
