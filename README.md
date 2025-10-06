# Employee Management System

A full-stack web application for managing employee records, built with modern technologies for efficient CRUD operations.

## 🚀 Features

- **Dashboard**: Overview of all employees with statistics
- **Add Employee**: Create new employee records
- **Edit Employee**: Update existing employee information
- **Search Employee**: Find employees by various criteria
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Notifications**: User-friendly feedback with toast notifications
- **Smooth Animations**: Enhanced user experience with Framer Motion

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **SQLite** - Database
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Framer Motion** - Animation library
- **React Hot Toast** - Notification system

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EmpManage
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

## 🚀 Usage

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production** (optional)
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

### Employee Data Structure
```json
{
  "id": "number",
  "name": "string",
  "email": "string",
  "position": "string"
}
```

## 📁 Project Structure

```
EmpManage/
├── backend/
│   ├── controllers/
│   │   └── employeeController.js
│   ├── models/
│   │   └── employeeModel.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── tests/
│   │   └── employee.test.js
│   ├── db.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DashboardButtons.jsx
│   │   │   ├── EmployeeCards.jsx
│   │   │   ├── EmployeeForm.jsx
│   │   │   ├── EmployeeTable.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── pages/
│   │   │   ├── AddEmployee.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── EditEmployee.jsx
│   │   │   └── SearchEmployee.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

[Dilee] - [Your GitHub Profile]

---

⭐ If you found this project helpful, please give it a star!
