
const employees = [
  {
    "id": 1,
    "firstName": "Muskan ",
    "email": "e@e.com",
    "password": "123",
    "taskCounts":{
       "active": 2,
        "newTask": 5,
        "completed": 2,
        "failed": 1
    },
    "tasks": [
      {
        // "taskNumber": 1,
        "taskTitle": "Submit Report",
        "taskDescription": "Prepare and submit the weekly performance report.",
        "taskDate": "2025-07-18",
        "category": "Reporting",
        "active": false,
        "newTask":true,
        "completed": false,
        "failed": true
      },
      {
        // "taskNumber": 2,
        "taskTitle": "Client Meeting",
        "taskDescription": "Meet with client to discuss project roadmap.",
        "taskDate": "2025-07-20",
        "category": "Meeting",
        "active": false,
        "newTask": 5,
        "completed": true,
        "failed": false
      },
      {
        // "taskNumber": 3,
        "taskTitle": "Bug Fix",
        "taskDescription": "Fix login page redirect issue.",
        "taskDate": "2025-07-17",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sneha",
    "email": "employee2@example.com",
    "password": "123",
      "taskCounts":{
       "active": 1,
        "newTask": 2,
        "completed": 2,
        "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Add tests for the user registration module.",
        "taskDate": "2025-07-19",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Design Mockups",
        "taskDescription": "Create mockups for the new dashboard.",
        "taskDate": "2025-07-21",
        "category": "Design",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Database Backup",
        "taskDescription": "Run a full backup of the production DB.",
        "taskDate": "2025-07-16",
        "category": "Maintenance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 4,
        "taskTitle": "Security Review",
        "taskDescription": "Review and patch security issues.",
        "taskDate": "2025-07-22",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
      "taskCounts":{
       "active":1,
        "newTask": 2,
        "completed": 5,
        "failed": 3
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests from team members.",
        "taskDate": "2025-07-18",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskNumber": 2,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update README and API docs.",
        "taskDate": "2025-07-17",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Deploy Hotfix",
        "taskDescription": "Deploy urgent hotfix to live server.",
        "taskDate": "2025-07-16",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 4,
        "taskTitle": "Test Deployment",
        "taskDescription": "Test the deployment process.",
        "taskDate": "2025-07-23",
        "category": "Testing",
        "active": true,
      }
    ]
  },
  {
    "id": 4,
    "firstName": "shaniya",
    "email": "employee4@example.com",
    "password": "123",
      "taskCounts":{
       "active": 1,
        "newTask": 2,
        "completed": 1,
        "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests from team members.",
        "taskDate": "2025-07-18",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update README and API docs.",
        "taskDate": "2025-07-17",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "taskTitle": "Deploy Hotfix",
        "taskDescription": "Deploy urgent hotfix to live server.",
        "taskDate": "2025-07-16",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 4,
        "taskTitle": "Test Deployment",
        "taskDescription": "Test the deployment process.",
        "taskDate": "2025-07-23",
        "category": "Testing",
        "active": true,
      }
    ]
  }
];



const admin = [
  {
    "id": 1,
   "email": "admin@me.com",
    "password": "123"
  }
];


export const setLocalstorage =() => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalstorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

 return {employees,admin}


}