SQL CASE Statement

Functionality of an IF-THEN-ELSE Statement.
Returns a value on a specific condition.
We can use case statement within a sql statement.
IF….ELSE, where only the maximum of one condition is allowed, CASE allows the user to apply multiple conditions to perform different sets of actions.
We can use CASE in statements such as SELECT, UPDATE and SET, and in clauses such as select_list, IN, WHERE, ORDER BY, and HAVING.

CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END


A simple CASE statement with a comparison operator:

SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;



Case Statement with ORDER BY clause:

SELECT CustomerName, City, Country
FROM Customers
ORDER BY
(CASE
    WHEN City IS NULL THEN Country
    ELSE City
END);
Case Statement with WHERE clause:
Query => Suppose we want to get all people from the Persons table whose persontype is either VC or IN.

SELECT FirstName, LastName, PersonType
FROM   Person.Person
WHERE  1 = CASE
              WHEN PersonType = 'VC' THEN 1
              WHEN PersonType = 'IN' THEN 1
              ELSE 0
           END

Case Statement in SQL with Group by clause:
Suppose we want to group employees based on their salary. We further want to calculate the minimum and maximum salary for a particular range of employees.

Select 
 CASE
WHEN Salary >=80000 AND Salary <=100000 THEN 'Director'
WHEN Salary >=50000 AND Salary <80000 THEN 'Senior Consultant'
Else 'Director'
END AS Designation,
Min(salary) as MinimumSalary,
Max(Salary) as MaximumSalary
from Employee
Group By
CASE
WHEN Salary >=80000 AND Salary <=100000 THEN 'Director'
WHEN Salary >=50000 AND Salary <80000 THEN 'Senior Consultant'
Else 'Director'
END


Update statement with a CASE statement:
UPDATE employee 
SET StateCode  = CASE StateCode
 WHEN 'Ar' THEN 'FL' 
 WHEN 'GE' THEN 'AL' 
  ELSE  'IN' 
 END


Insert statement with CASE statement:

Declare @EmployeeName varchar(100)
Declare @Gender int
Declare @Statecode char(2)
Declare @salary money
Set @EmployeeName='Raj'
Set @Gender=0
Set @Statecode='FL'
set @salary=52000
 
Insert into employee
values 
(@EmployeeName,
CASE @Gender
WHEN 0 THEN 'M'
WHEN 1 THEN 'F'
end,
@Statecode,
@salary)

