# 🏨 Hotel Web Check-in System

**Master’s Project – Applied Computer Science**  
**Status:** Completed  
**Tech Stack:** MERN (MongoDB, Express.js, React.js, Node.js)

---

## 🧠 Overview

The **Hotel Web Check-in System** is a full-stack web application designed to automate hotel guest operations such as **check-in, room assignment, guest data management, extend stay, and check-out processing**.

Built using **React.js** for the frontend, **Node.js with Express.js** for the backend, and **MongoDB Atlas** for the database, the system provides a secure, efficient, and user-friendly experience for both hotel guests and management.

The platform reduces front-desk workload, prevents manual data entry errors, ensures accurate room availability tracking, and enhances the guest experience through a fully digital workflow.

---

## ✨ Key Features

- Guest self check-in using confirmation number
- Automatic reservation lookup from MongoDB
- Dynamic pet fee calculation ($35 per pet per night)
- Secure payment card handling (encrypted storage & masked display)
- Automatic room assignment and PIN generation
- Real-time hotel information display (pool hours, breakfast time, room directions)
- Manager dashboard for monitoring checked-in guests
- Guest check-out with automated email receipt
- **Extend Stay functionality with availability validation**
- Overbooking prevention through availability synchronization

---

## 🏗 System Architecture

The application follows a **MERN architecture**:

- **Frontend (React.js):**
  - Guest check-in UI
  - Extend stay interface
  - Check-out flow
  - Manager dashboard

- **Backend (Node.js + Express.js):**
  - RESTful APIs for reservations, check-ins, extend stay, and check-outs
  - Business logic for availability validation and pricing

- **Database (MongoDB Atlas / MongoDB Compass):**
  - Reservation data
  - Room assignments
  - Availability tracking
  - Payment metadata
  - Manager authentication data

- **Supporting Tools:**
  - Mongoose ODM
  - JSON Web Tokens (JWT)
  - Node Crypto (encryption)
  - Nodemailer (email receipts)

---

## 🧩 Tech Stack

| Layer | Technology |
|-----|-----------|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| ORM / ODM | Mongoose |
| Authentication | JWT |
| Security | Crypto (encryption & masking) |
| Email | Nodemailer |
| IDE | Visual Studio Code |

---

## 🔄 Functional Workflows

### 🧾 Guest Check-In

1. Guest enters **confirmation number** and **first name**
2. System fetches reservation details from MongoDB
3. Guest selects pet option (if applicable)
4. Pet fees are automatically added to the total
5. Guest enters payment details
6. Card data is encrypted and masked before storage
7. System:
   - Assigns a room number
   - Generates a secure PIN code
   - Displays hotel instructions
8. If the guest is already checked in, existing details are shown without duplication or re-charging

---

### 🕓 Extend Stay Functionality

The **Extend Stay** feature allows guests to add additional nights to their reservation directly through the system without visiting the front desk.

#### How It Works:

1. Guest enters their **confirmation number**
2. System verifies:
   - Active check-in status
   - Reservation validity
3. Availability is checked for the same room type on the extended date(s)
4. If available:
   - Check-out date is updated
   - Total cost is recalculated
   - Pet fees are added if applicable
5. Reservation and availability data are updated atomically
6. Updated stay summary is displayed to the guest
7. Manager dashboard reflects the change automatically

This ensures **no overbooking, no data conflicts, and real-time accuracy**.

---

### 🏁 Guest Check-Out

1. Guest enters **room number** or **confirmation number**
2. System validates eligibility for check-out
3. Displays guest name, room number, and total charges
4. Guest enters an email address
5. System sends an automated receipt via email
6. Reservation status is updated accordingly

---

### 🧑‍💼 Manager Dashboard

- Secure access via manager credentials
- View all currently checked-in guests
- Monitor room assignments and occupancy
- Track extend stay updates in real time
- No manual intervention required

---

## 🔌 API Overview (Sample)

- `POST /api/checkin`
- `GET /api/checkin/:confirmationNumber`
- `POST /api/extend-stay`
- `POST /api/checkout/eligibility`
- `POST /api/checkout/confirm`
- `POST /api/manager/login`
- `GET /api/manager/checkins`

---

## 🗃 Database Collections

- **reservations**
- **roomAssignments**
- **availability**
- **payments**
- **managers**

Each collection is indexed to ensure fast lookups and prevent duplicate or conflicting entries.

---

## 🔐 Security & Privacy

- Payment card numbers are **never stored in plain text**
- Sensitive fields are encrypted using Node.js Crypto
- JWT-based authentication protects manager endpoints
- Environment variables are stored securely using `.env`
- `.env` and `node_modules` are excluded from version control

---

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS)
- npm
- MongoDB Atlas connection
- Git

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
cd client
npm install
