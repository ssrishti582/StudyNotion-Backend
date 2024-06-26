# StudyNotion-Backend

![image](https://github.com/anshaneja5/StudyNotion-Frontend/assets/128882734/d664c685-4f28-424f-9df7-e3ce8bba60b3)


_StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS._
StudyNotion aims to provide:
•	A seamless and interactive learning experience for students, making education more accessible and engaging.
@@ -17,4 +20,35 @@ The database for the platform is built using MongoDB, which is a NoSQL database
Here is a high-level diagram that illustrates the architecture of the StudyNotion ed-tech platform:
![image](https://github.com/anshaneja5/StudyNotion-Backend/assets/128882734/d25a9594-f154-417c-959d-6de2efdc65ca)

### Data Models and Database Schema
![image](https://github.com/anshaneja5/StudyNotion-Frontend/assets/128882734/061561f7-5bf8-4b71-97a2-bc9a0b6dcbaf)

### API Design ###
The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

Sample list of API endpoints and their functionalities:
1.	/api/auth/signup (POST) - Create a new user (student or instructor) account.
2.	/api/auth/login (POST) – Log in using existing credentials and generate a JWT token.
3.	/api/auth/verify-otp (POST) - Verify the OTP sent to the user's registered email.
4.	/api/auth/forgot-password (POST) - Send an email with a password reset link to the registered email.
5.	/api/courses (GET) - Get a list of all available courses.
6.	/api/courses/:id (GET) - Get details of a specific course by ID.
7.	/api/courses (POST) - Create a new course.
8.	/api/courses/:id (PUT) - Update an existing course by ID.
9.	/api/courses/:id (DELETE) - Delete a course by ID.
10.	/api/courses/:id/rate (POST) - Add a rating (out of 5) to a course.

Sample API requests and responses:
1.	GET /api/courses: Get all courses
•	Response: A list of all courses in the database
2.	GET /api/courses/:id: Get a single course by ID
•	Response: The course with the specified ID
3.	POST /api/courses: Create a new course
•	Request: The course details in the request body
•	Response: The newly created course
4.	PUT /api/courses/:id: Update an existing course by ID
•	Request: The updated course details in the request body
•	Response: The updated course
5.	DELETE /api/courses/:id: Delete a course by ID
•	Response: A success message indicating that the course has been deleted.
