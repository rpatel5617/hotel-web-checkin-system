# 🏨 Hotel Web Check-in System (Master’s Project – Ongoing)

**Technologies:** React.js, Node.js, Express.js, MongoDB  
**Platform:** Visual Studio Code  

---

## 🧠 Overview
The **Hotel Web Check-in System** is a full-stack web application designed to automate hotel guest operations such as check-in, room assignment, guest data management, and check-out processing.  

Built with a **React.js frontend**, **Node.js + Express.js backend**, and **MongoDB** database, the system provides a seamless and secure experience for both guests and managers.  

The platform aims to reduce manual workload, prevent data entry errors, and enhance overall guest experience by enabling digital check-ins, automated billing, and structured record management.

---

## ⚙️ Functional Workflow

### 🧾 Guest Check-In Process
1. The guest begins by entering their **confirmation number** and **first name**.  
2. The system fetches all corresponding reservation details from the **MongoDB Compass database**.  
3. The guest then specifies whether they have a **pet**.  
   - If a pet is selected, a **pet fee of $35 per night per pet** is automatically added to the total.  
4. The guest selects the **card type**, enters the **card number** and **expiration date**, and the information is securely stored in the database using encrypted storage and masked display.  
5. Upon clicking **Check-In**, the system:
   - Assigns a **room number**  
   - Generates a **PIN code** for door access  
   - Displays **pool timings**, **breakfast hours**, and **room location** instructions  
6. If a guest who has already checked in enters the same details again, the system displays their existing check-in information (room number, PIN, and all instructions) without reprocessing payment or duplication.

---

### 🧑‍💼 Manager Dashboard
- Accessible only through manager credentials.  
- Displays all **checked-in guest records**, including room assignments, guest names, confirmation numbers, and pet details.  
- Helps management monitor occupancy, check-in activity, and guest details in real time.  

---

### 🏁 Guest Check-Out Process
1. The guest enters either their **room number** or **confirmation number**.  
2. The system verifies if the guest is eligible for check-out.  
3. If valid, it displays the **guest name**, **room number**, and **total charges**.  
4. The system then prompts for an **email address**, and upon confirmation, automatically sends a **receipt** of the stay to the guest’s email.  

---

🕓 Extend Stay Functionality

The Extend Stay feature allows guests to add additional nights to their reservation directly through the web application without visiting the front desk. The system verifies availability, updates the reservation, recalculates totals, and prevents overbooking — all automatically.

🔐 How Guests Extend Their Stay

To request an extension, the guest simply enters their confirmation number on the Extend Stay page.

The system then:

Fetches the reservation from MongoDB

Verifies eligibility (guest must be currently checked in)

Checks room availability for the new requested check-out date

Updates the reservation if rooms are available

Recalculates the total, including:

Base nightly room rate

Additional pet fees ($35 per pet per night, if applicable)

All changes are instantly reflected in the database and the guest sees the updated booking summary.

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js |
| **Backend** | Node.js with Express.js |
| **Database** | MongoDB Atlas / MongoDB Compass |
| **Platform / IDE** | Visual Studio Code |
| **Other Tools** | Mongoose ODM, JSON Web Tokens (JWT), Nodemailer, Crypto for encryption |

---


