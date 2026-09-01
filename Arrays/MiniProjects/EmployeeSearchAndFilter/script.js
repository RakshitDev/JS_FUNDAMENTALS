const employees = [
  { name: "Rahul", role: "Developer", salary: 60000 },
  { name: "Priya", role: "Designer", salary: 50000 },
  { name: "Arun", role: "Developer", salary: 75000 },
  { name: "Sneha", role: "Tester", salary: 45000 },
];

// Select elements
const searchInput = document.querySelector(".Search-input");
const searchButton = document.querySelector(".search-btn");
const roleSelect = document.querySelector("#role");
const displayEmployeeContainer = document.querySelector(".displayContainer");

// Display employees------------------------------------------------>
const displayEmployee = function (employees) {
  displayEmployeeContainer.innerHTML = employees
    .map((employee) => {
      return `
        <div class="employee-card">
          <p>Name: ${employee.name}</p>
          <p>Salary: ₹${employee.salary}</p>
          <p>Role: ${employee.role}</p>
        </div>
      `;
    })
    .join("");
};

// Display all employees initially
displayEmployee(employees);

// Search employee by name------------------------------------------->
searchButton.addEventListener("click", function () {
  const name = searchInput.value.trim().toLowerCase();

  if (!name) {
    displayEmployeeContainer.innerHTML = `
      <div class="employee-card">
        <p>Please enter an employee name.</p>
      </div>
    `;
    return;
  }

  const employee = employees.find(
    (employee) => employee.name.toLowerCase() === name,
  );

  if (employee) {
    displayEmployee([employee]);
  } else {
    displayEmployeeContainer.innerHTML = `
      <div class="employee-card">
        <p>Employee not found by that name.</p>
      </div>
    `;
  }
});

// Display employees based on role------------------------------------>
roleSelect.addEventListener("change", function () {
  const role = roleSelect.value;

  if (role === "all") {
    displayEmployee(employees);
    return;
  }

  const employeeArray = employees.filter(
    (employee) => employee.role.toLowerCase() === role,
  );

  displayEmployee(employeeArray);
});
