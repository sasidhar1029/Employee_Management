package com.example.Employee_Management.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Employee_Management.Entity.Employee;
import com.example.Employee_Management.Exception.EmployeeNotFoundException;
import com.example.Employee_Management.Repository.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    // Constructor Injection
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // =========================
    // INSERT EMPLOYEE
    // =========================

    public Employee insertEmployee(Employee emp) {

        return employeeRepository.save(emp);
    }

    // =========================
    // GET ALL EMPLOYEES
    // =========================

    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();
    }

    // =========================
    // GET EMPLOYEE BY ID
    // =========================

    public Employee getEmployeeById(Long id) {

        return employeeRepository.findById(id)
                .orElseThrow(() ->
                    new EmployeeNotFoundException(
                        "Employee not found with id: " + id
                    )
                );
    }

    // =========================
    // UPDATE EMPLOYEE
    // =========================

    public Employee updateEmployee(Long id, Employee emp) {

        Employee existingEmployee = employeeRepository
                .findById(id)
                .orElseThrow(() ->
                    new EmployeeNotFoundException(
                        "Cannot update. Employee not found with id: " + id
                    )
                );

        existingEmployee.setEmpName(emp.getEmpName());

        existingEmployee.setEmpSalary(emp.getEmpSalary());

        return employeeRepository.save(existingEmployee);
    }

    // =========================
    // DELETE EMPLOYEE
    // =========================

    public void deleteEmployee(Long id) {

        if (!employeeRepository.existsById(id)) {

            throw new EmployeeNotFoundException(
                "Cannot delete. Employee not found with id: " + id
            );
        }

        employeeRepository.deleteById(id);
    }
}