<h1 align="center">💻 Fluent Hub Credentials API (template)</h1>
<h3 align="center">The API used to retrieve confidential info like clientId and clientSecret from GitHub</h3>

# How to use
First of all, this API was made with Node.js 15.x (works with 16.x) using [Express.js](https://expressjs.com/en/) and oficially uploaded to [Heroku](https://heroku.com/).

To be transparent, we need to tell you that **we can't expose** our official API URL for **the security** of the app and of our users.
  
The URL format that this API follows is : `https://yourURL.com/api/v1/<endpoint>`.

This API is divided by the **next two different endpoints**:

 1.  **Authentication and token retrieving**
 
		|ENDPOINT|METHOD|
		|-|-|
		|`/auth`|**POST**  |

		**Body** for the request:
		```json
		{
			"app": "THE NAME OF THE APP GOES HERE",
			"guid": "THE GUID OF YOUR APP GOES HERE"
		}
		```
		---
		**WARNING!** You need to change these values in the dummy data of the API. Yeah... we know that the API at the moment is not the best, but it's functional, so please, wait for future updates if you want to see it's evolution.

		---

		**Response of the API:**
		```json
		{
			"ok": "true/false",
			"token": "A long JWT token valid for only 15 minutes"
		}
		```

 2. **Confidential credentials retrieving** 

	|ENDPOINT|METHOD|
	|-|-|
	|`/credentials`|**GET**|

	In this request we need to use **headers** for providing the API the token that the first request gave to us. The header name is `x-auth-token`, and it's value, as we said before, will be the string with the token that the last request gave to us. 
	**REMEMBER**, It's only valid for **15 minutes**. Obviously you can change this in-code.

	The **header** needs to be like this: `x-auth-token // token`.

	After this, the API will return you the final credentials with an JSON schema like this:
	```json
	{
		"credentials": [
		{
			"id": {
				"value":  "YOUR clientId"
				},
			"secret": {
				"value":  "YOUR clientSecret"
				}
			}
		]
	}
	``` 
# Questions
If you have any question related to the API, please contact us by making an issue in this repository or [email](mailto:onein528@outlook.com) us.

**Thanks for choosing FluentHub!** and if is not a disturb, give us an star!
