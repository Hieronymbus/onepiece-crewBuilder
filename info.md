CRUD

one piece crew + members

crud crew crud members

To build your Pirate-Crew system with proper functionality, here’s a list of APIs (routes) you would need:

### **Pirates API**

1. **Create Pirate**
   - **Method**: `POST`
   - **Endpoint**: `/api/pirates`
   - **Description**: Creates a new pirate document.
   - **Request Body**: Pirate details (e.g., name, age, rank, ship).
   - **Response**: Success message with the pirate object.
   ```json
   { "name": "Blackbeard", "age": 45, "rank": "Captain", "ship": "Queen Anne's Revenge" }
   ```

2. **Get All Pirates**
   - **Method**: `GET`
   - **Endpoint**: `/api/pirates`
   - **Description**: Fetches all pirates.
   - **Response**: List of pirates.
   ```json
   [
     { "id": 1, "name": "Blackbeard", "rank": "Captain" },
     { "id": 2, "name": "Anne Bonny", "rank": "First Mate" }
   ]
   ```

3. **Get Pirate by ID**
   - **Method**: `GET`
   - **Endpoint**: `/api/pirates/:pirateId`
   - **Description**: Fetches a specific pirate by ID.
   - **Response**: Pirate object.
   ```json
   { "id": 1, "name": "Blackbeard", "rank": "Captain" }
   ```

4. **Update Pirate**
   - **Method**: `PUT`
   - **Endpoint**: `/api/pirates/:pirateId`
   - **Description**: Updates an existing pirate's details.
   - **Request Body**: Partial or full pirate details.
   - **Response**: Success message with updated pirate object.
   ```json
   { "rank": "Captain", "ship": "New Ship" }
   ```

5. **Delete Pirate**
   - **Method**: `DELETE`
   - **Endpoint**: `/api/pirates/:pirateId`
   - **Description**: Deletes a pirate by ID.
   - **Response**: Success message.

### **Crews API**

1. **Create Crew**
   - **Method**: `POST`
   - **Endpoint**: `/api/crews`
   - **Description**: Creates a new crew document.
   - **Request Body**: Crew details (name, description).
   - **Response**: Success message with the created crew object.
   ```json
   { "name": "Dread Pirates", "description": "Feared crew of the seven seas." }
   ```

2. **Get All Crews**
   - **Method**: `GET`
   - **Endpoint**: `/api/crews`
   - **Description**: Fetches all crews.
   - **Response**: List of crew objects with their members (populated).
   ```json
   [
     { "id": 1, "name": "Dread Pirates", "members": [] },
     { "id": 2, "name": "Sea Wolves", "members": [] }
   ]
   ```

3. **Get Crew by ID**
   - **Method**: `GET`
   - **Endpoint**: `/api/crews/:crewId`
   - **Description**: Fetches a specific crew by ID with its members.
   - **Response**: Crew object with member details (populated).
   ```json
   {
     "id": 1,
     "name": "Dread Pirates",
     "members": [
       { "id": 1, "name": "Blackbeard", "rank": "Captain" },
       { "id": 2, "name": "Anne Bonny", "rank": "First Mate" }
     ]
   }
   ```

4. **Add Pirates to Crew**
   - **Method**: `PUT`
   - **Endpoint**: `/api/crews/:crewId/add-pirates`
   - **Description**: Adds pirates to a crew by passing an array of pirate IDs.
   - **Request Body**: List of pirate IDs to add.
   - **Response**: Success message with the updated crew object (with members populated).
   ```json
   { "pirateIds": ["id1", "id2"] }
   ```

5. **Remove Pirate from Crew**
   - **Method**: `PUT`
   - **Endpoint**: `/api/crews/:crewId/remove-pirate/:pirateId`
   - **Description**: Removes a pirate from the crew.
   - **Response**: Success message with the updated crew object.

6. **Delete Crew**
   - **Method**: `DELETE`
   - **Endpoint**: `/api/crews/:crewId`
   - **Description**: Deletes a crew by ID.
   - **Response**: Success message.

### **Summary of APIs**

#### Pirate APIs
- **POST** `/api/pirates` – Create Pirate
- **GET** `/api/pirates` – Get All Pirates
- **GET** `/api/pirates/:pirateId` – Get Pirate by ID
- **PUT** `/api/pirates/:pirateId` – Update Pirate
- **DELETE** `/api/pirates/:pirateId` – Delete Pirate

#### Crew APIs
- **POST** `/api/crews` – Create Crew
- **GET** `/api/crews` – Get All Crews
- **GET** `/api/crews/:crewId` – Get Crew by ID
- **PUT** `/api/crews/:crewId/add-pirates` – Add Pirates to Crew
- **PUT** `/api/crews/:crewId/remove-pirate/:pirateId` – Remove Pirate from Crew
- **DELETE** `/api/crews/:crewId` – Delete Crew

These APIs provide a full set of operations for creating, managing, and associating pirates with crews.