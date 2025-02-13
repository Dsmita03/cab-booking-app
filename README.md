# Cab Booking Module - PlangoHub

## Overview
| Feature | Description |
|---------|------------|
| **User Authentication** | Users must log in to book a cab. |
| **Search Cabs** | Users can search for available cabs based on location and type. |
| **Book a Cab** | Allows users to select a cab and confirm the booking. |
| **Manage Bookings** | Users can view, cancel, or modify their bookings. |
| **Admin Dashboard** | Admin can view and manage cab bookings. |
| **Cab Details** | Displays fare, estimated time, and driver details. |
| **Mock Backend** | Uses `db.json` as a mock backend for storing data. |

## Technologies Used
| Technology | Purpose |
|------------|---------|
| **Angular 17** | Frontend framework |
| **TypeScript** | Programming language |
| **RxJS** | State management |
| **json-server** | Mock backend using `db.json` |

## Installation & Setup
| Step | Command |
|------|---------|
| **Clone Repository** | `git clone https://github.com/Dsmita03/cab-booking-app` |
| **Navigate to Directory** | `cd plangohub/cab-booking` |
| **Install Dependencies** | `npm install` |
| **Start Mock Backend** | `json-server --watch db.json --port 3000` |
| **Run Angular App** | `ng serve` |

## API Endpoints (Mock Backend)
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/cabs` | GET | Fetch all cabs |
| `/cabs/:id` | GET | Get cab by ID |
| `/bookings` | POST | Create booking |
| `/bookings` | GET | Get all bookings |
| `/bookings/:id` | DELETE | Cancel booking |

## Folder Structure
```plaintext
📦 cab-booking
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 components  # UI Components
 ┃ ┃ ┣ 📂 services    # API Calls
 ┃ ┃ ┣ 📂 models      # Interfaces
 ┃ ┃       
 ┃ ┣ 📜 main.ts
 ┣ 📜 angular.json
 ┣ 📜 package.json
 ┣ 📜 db.json (Mock Backend)
