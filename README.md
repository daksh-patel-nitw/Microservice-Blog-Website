# Event-Driven Microservices Blog Application

A fully functional **event-driven blog platform** built using **Node.js, Express, React, and Bootstrap**, demonstrating real-world **microservices architecture** with asynchronous communication via an **Event Bus**.

This project focuses on **loose coupling, scalability, and data consistency** using event-based workflows.

---

## Architecture Overview

The system is composed of independent services that communicate **only through events**.

- Each service owns its own data
- No direct service-to-service dependency
- Event Bus broadcasts events to all services
- Services can recover state by replaying events

---

## Services Overview

| Service | Port | Description |
|------|------|------------|
| Posts Service | 4000 | Handles creation and storage of posts |
| Comments Service | 4001 | Manages comments for posts |
| Query Service | 4002 | Aggregates posts and comments for frontend |
| Moderation Service | 4003 | Moderates comments automatically |
| Event Bus | 4005 | Central event distribution system |
| Client (React) | 5173 | User interface |

---

## Posts Service (4000)

### Responsibilities
- Create blog posts
- Store posts in memory
- Emit `PostCreated` events

### Events Emitted
- `PostCreated`

---

## Comments Service (4001)

### Responsibilities
- Create comments for posts
- Store comments per post
- Track comment status (`pending`, `approved`, `rejected`)
- Emit lifecycle events

### Events Emitted
- `CommentCreated`
- `CommentUpdated`

### Events Consumed
- `CommentModerated`

---

## Moderation Service (4003)

### Responsibilities
- Automatically moderate comments
- Apply content rules
- Decide comment approval

### Moderation Logic
- If comment contains **"orange"** → rejected
- Otherwise → approved

### Events Consumed
- `CommentCreated`

### Events Emitted
- `CommentModerated`

---

## Query Service (4002)

### Responsibilities
- Maintain a **read-optimized data model**
- Combine posts and comments
- Serve frontend data

### Events Consumed
- `PostCreated`
- `CommentCreated`
- `CommentUpdated`

### Special Feature
- **Event replay on startup** to rebuild state

---

## Event Bus (4005)

### Responsibilities
- Receive events from services
- Broadcast events to all services
- Store event history

### Endpoints
- `POST /events` – broadcast an event
- `GET /events` – retrieve all past events

---

## Event Flow Example

1. User creates a post
2. Posts service emits `PostCreated`
3. Event Bus broadcasts event
4. Query service stores post
5. User adds a comment
6. Comment is moderated
7. Status update propagates system-wide

---

## Frontend (React + Bootstrap)

- Built using **Vite + React**
- Styled with **Bootstrap 5**
- Off-white background for clean UI
- Responsive card-based layout
- Axios for API communication

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- Bootstrap 5

### Backend
- Node.js
- Express
- Axios
- Event-Driven Architecture

---

## Running the Project

Start each service in **separate terminals**:

```bash
npm install
npm start

