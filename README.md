# CompanyWebsite (RealTrust)

## API Documentation

### Clients API

**Endpoint:** `/api/clients`

#### Get All Clients

*   **Method:** `GET`
*   **Description:** Retrieves a list of all clients.
*   **Response Body:** `application/json`
*   **Example:**
    ```json
    [
        {
            "name": "John Doe",
            "designation": "CEO",
            "description": "Experienced leader with a passion for innovation.",
            "imageUrl": "https://example.com/images/john-doe.jpg"
        }
    ]
    ```

#### Add a New Client

*   **Method:** `POST`
*   **Description:** Adds a new client to the database.
*   **Request Body:** `application/json`
    *   `name` (string): The name of the client.
    *   `designation` (string): The client's designation or title.
    *   `description` (string): A brief description of the client.
    *   `imageUrl` (string): The URL of the client's image.
*   **Example:**
    ```json
    {
        "name": "Jane Smith",
        "designation": "CTO",
        "description": "Technology enthusiast with a knack for problem-solving.",
        "imageUrl": "https://example.com/images/jane-smith.jpg"
    }
    ```

### Contacts API

**Endpoint:** `/api/contacts`

#### Get All Contacts

*   **Method:** `GET`
*   **Description:** Retrieves a list of all contacts.
*   **Response Body:** `application/json`
*   **Example:**
    ```json
    [
        {
            "fullName": "Peter Jones",
            "email": "peter.jones@example.com",
            "mobile": "123-456-7890",
            "city": "New York"
        }
    ]
    ```

#### Submit a New Contact

*   **Method:** `POST`
*   **Description:** Submits a new contact form entry.
*   **Request Body:** `application/json`
    *   `fullName` (string): The full name of the contact person.
    *   `email` (string): The email address of the contact.
    *   `mobile` (string): The mobile phone number.
    *   `city` (string): The city where the contact resides.
*   **Example:**
    ```json
    {
        "fullName": "Samuel Green",
        "email": "sam.green@example.com",
        "mobile": "098-765-4321",
        "city": "London"
    }
    ```

### Projects API

**Endpoint:** `/api/projects`

#### Get All Projects

*   **Method:** `GET`
*   **Description:** Retrieves a list of all projects.
*   **Response Body:** `application/json`
*   **Example:**
    ```json
    [
        {
            "name": "Project Alpha",
            "description": "A revolutionary new product.",
            "imageUrl": "https://example.com/images/project-alpha.jpg"
        }
    ]
    ```

#### Add a New Project

*   **Method:** `POST`
*   **Description:** Adds a new project to the database.
*   **Request Body:** `application/json`
    *   `name` (string): The name of the project.
    *   `description` (string): A brief description of the project.
    *   `imageUrl` (string): The URL of the project's image.
*   **Example:**
    ```json
    {
        "name": "Project Beta",
        "description": "An innovative solution for a common problem.",
        "imageUrl": "https://example.com/images/project-beta.jpg"
    }
    ```

### Subscriptions API

**Endpoint:** `/api/subscriptions`

#### Get All Subscriptions

*   **Method:** `GET`
*   **Description:** Retrieves a list of all email subscriptions.
*   **Response Body:** `application/json`
*   **Example:**
    ```json
    [
        {
            "email": "subscriber1@example.com"
        }
    ]
    ```

#### Subscribe to Newsletter

*   **Method:** `POST`
*   **Description:** Adds a new email to the subscription list.
*   **Request Body:** `application/json`
    *   `email` (string): The email address to subscribe.
*   **Example:**
    ```json
    {
        "email": "new.subscriber@example.com"
    }
    ```

