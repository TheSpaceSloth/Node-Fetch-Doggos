# Node-Fetch-Doggos

### It's a Node JS script that uses the Fetch API to get photos of random dogs from the Dog CEO API and then saves them directly to your computer.

### Currently, the script writes the image files to your computer with a randomly generated string for a name.  Future editions will use the source filename.

### This script runs the fetch API ten times then stops.  I included setTimeout to slow the number of requests to avoid burderning the API.  


#### The loop determines how many fetch requests are made and also how quickly inbetween each successive call.
#### If you use this script with Dog CEO or any other free API image service, make sure to rate-limit your requests and don't be a jerk.
```javascript
async function getDogs() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      fetchTodos()
    }, 2000 + ( i * 1000))
  }
}
```
