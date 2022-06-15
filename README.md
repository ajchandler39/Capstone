Video of my presentation:
https://www.youtube.com/watch?v=rS6CwDShNbY&ab_channel=AJ

Technical challenges:

Video upload - Video uploads were much more convoluted than I had imagined. To get a file uploaded to an HTML form, a none-traditional method is required to get it, whereas with other
values it's usually just a matter of getting the inputs value. This must be appended to a Form object, instead of just adding it as a value to a field in a JSON object.
When sent the the back-end it comes in a MultipartFile format, and must be converted to bytes to be saved as a BLOB object in the SQL database. It's best to do this conversion
in the controller, rather than within the setter of the object. I got the least amount of errors when keeping the entity as pure as possible. From here the video can be saved into
the database, and retreived by another controller that specifies to return the BLOB object in an MP4 format, within an annotation. I found it best to have a controller that
returns only a video, instead of a video and all other technique information. When only a video is returned, going to its mapping in one browser actually plays the video.

Creating POJO for customized query results - HQL joins are much more complex than I thought. I had to create a class that specified the data types I wanted in the query results.
Also, I had to join a table through its ManyToMany, etc, relationships, rather than using standard SQL syntax.

Fetch requests - Fetch requests were much more convoluted than I imaged. I learned that I must save the results in the components state, or else they won't be saved.
Some of the applications features require the program to wait for the results of the request. I learned I had to make the function that sent the requests async, and
add the await keyword to the request itself. This prevented it from being run on a different thread. I learned how it's important to handle request errors.
Changing app behavior depending on what status code is returned is essential. Combining these tools enabled me to get the frontend to behave exactly how I wanted it to.

Using React - I had very little experience with React before this project. There are other libraries one can use with React, 
but I focused on learning the basics, and learned how to use them together to create much more complex app behavior. Using component functions like
ComponentDidUpdate() was crucial, which allowed me to alter the page when data from fetch requests are returned.