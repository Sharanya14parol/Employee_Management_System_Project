**Overview**

The Employee Task Management System is a web-based application built using React (Vite) that helps employees manage their daily tasks and track progress efficiently.

The system has two roles:
1.Employees – who can add, view, edit, and manage their tasks.
2.Admin – who can view all employees and their tasks to monitor progress.

**Features Implemented**

1.Employee Features
Login using predefined mock credentials.
Add new tasks with title, description, and deadline.
Edit or delete existing tasks.
Update task progress through dropdown (Pending → In Progress → Completed).
View tasks in a card-based layout.

2.Admin Features
View list of all employees and their tasks.
Filter or search tasks by employee name or task status.
Overview of all tasks categorized by completion status

**Running the Project Locally**

1.Clone the repository
git clone https://github.com/Sharanya14parol/Employee_Management_System_Project.git

2.Navigate into the project directory
cd employee-task-manager

3.Install dependencies
npm install

4.Start the local server
npm run dev

5.Open your browser at → http://localhost:5173/

**Application Flow**

1.Login Page
Users log in using mock credentials.
2.Employee Dashboard
Shows all tasks categorized by current status.
3.Tasks Page
Employees can add, edit, delete, or update task status.
4.Employees Page (Admin View)
Admin can see all employees and their task activities.
5.Employee Dashboard
Shows an the overall summary of all the employees and tasks status
6.Logout
Ends the session and redirects to login.

**Deployment**

The app is deployed on Vercel, linked to this GitHub repository.
Every new code push to the main branch automatically triggers a new build and deployment.

🔗 Live URL: [employee-management-system-project-n6zgmoh45.vercel.app](https://employee-management-system-project-n6zgmoh45.vercel.app
)
