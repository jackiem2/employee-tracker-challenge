INSERT INTO department (name)
VALUES ("engineering"),
    ("finance"),
    ("sales"),
    ("legal");

    SELECT * FROM DEPARTMENT;

INSERT INTO roles (title, salary, department_id)
VALUES ("software engineer", 120000, 1),
    ("lead engineer", 150000, 1),
    ("account manager", 160000, 2),
    ("accountant", 125000, 2),
    ("salesperson", 80000, 3),
    ("legal team lead", 250000, 4),
    ("lawyer", 190000, 4);

    SELECT * FROM roles

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Kevin", "Tupik", 1, 1 ),
    ("Ashley", "Rodriguez", 1, NULL),
    ("Kumal", "Sing", 2, NULL),
    ("Malia", "Brown", 2, 2),
    ("Mike", "Chan", 3, 2),
    ("Sarah", "Lourd", 4, NULL),
    ("Tom", "Allen", 4, 4);

    SELECT * FROM employee


