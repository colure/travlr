# cs465-fullstack

## Architecture
The types of frontend development used in the full stack project include Express HTML, Javascript, and a Single-Page Application. Initially Express HTML was used to transition and enhance existing HTML. Its primary purpose is for backend, providing plugins and template compatibility as well as middleware packages and routing functionality. In a short time we were able to utilize templates with Express to populate the contents of multiple web pages to a similar layout. With Angular we were able to utilize these frameworks we created in Express and update them to create high performance layouts that populate from our databases. We use MongoDB as it allows for scalability and integration with methods and functions API using the same language Javascript. It also uses BSON, similar to JSON and Javascript objects.

## Functionality
JSON differs from Javascript in that JSON is the data-interchange format and Javascript is the programming language in which functions are written. JSON ties together the front and backend development pieces in that it is the format that data is sent in and retrieved. Data from raw HTML pages was moved into objects within our MongoDB database. Initially formatted to be called with Express, we recreated these as cards in a responsive webpage. Using templates as elements for data to be populated into allowed us to reflect updates to the database and requests made by customers for information more consistent without additional steps to hard code these new elements. The new pages are flexible, responsive, and scalable.

## Testing
Endpoints would include each page that needs to be checked and the POST, GET, DELETE function requests in HTTP. As additional layers are added there are more opportunities for there to be gaps or issues. For example, in the first attempt at this project there were issues checking requests and attempts in a tool called Postman and seeding requests later in the process. Security of these endpoints would include ensuring that there are authorization checks at each object access and function requests for appropriate permissions. We also included exceptions for unexpected behaviors.

## Reflection
This course has helped in reaching professional goals through touching on each point of development that I've built on throughout my time at SNHU and with independenct client work. I have been able to create a full program throughout the term touching on all points of the production process in the front and back end. This project in the MEAN stack has tied together concepts studied.
