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

### 🕓 Upcoming Feature: Extend Stay Functionality
The next phase of development will introduce an **Extend Stay** option.  
- Guests can enter their **confirmation number** or **room number** on the check-out day to request an extension.  
- The system will automatically verify availability, update the **check-out date**, and recalculate total charges, including applicable pet fees.  
- This enhancement aims to make the system more flexible and guest-centric.

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js |
| **Backend** | Node.js with Express.js |
| **Database** | MongoDB Atlas / MongoDB Compass |
| **Platform / IDE** | Visual Studio Code |
| **Other Tools** | Mongoose ODM, JSON Web Tokens (JWT), Nodemailer, Crypto for encryption |

---


