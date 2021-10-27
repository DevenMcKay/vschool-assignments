employees = []

// 1. Instantiate three employees
function Employee (name, jobTitle, salary, status) {
  this.name = name
  this.jobTitle = jobTitle
  this.salary = salary
  this.status = "Full Time" 
}
// Adds a funtion to print info 
Employee.prototype.printEmployeeForm = function() {
  console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + "/hour, Salary: " + this.salary + ", Status: " + this.status)
}

let chris = new Employee("Chris", "Chef", 80000);
let john= new Employee("John", "Teacher", 40000);
let phil = new Employee("Phil", "Fisherman", 100000);

// 2. Override the status attribute of one of them to either "Part Time"
phil.status = "Part Time"

// 3. Call the `printEmployeeForm` method for each employee
chris.printEmployeeForm()
john.printEmployeeForm()
phil.printEmployeeForm()

// 4. Adds objects to array
employees.push(chris, john, phil)

console.log(employees)
// Access John's Job Title ie Object in Array
console.log(employees[1].jobTitle)