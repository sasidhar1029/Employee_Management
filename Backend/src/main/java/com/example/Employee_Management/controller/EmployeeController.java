package com.example.Employee_Management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;
import com.example.Employee_Management.Entity.Employee;
import com.example.Employee_Management.Repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class EmployeeController {

    final EmployeeRepository employeeRepository;

    EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/insertEmp")
    public Employee insertEmployee(@Valid @RequestBody Employee emp) {
        return employeeRepository.save(emp);
    }

    @GetMapping("/getAllEmployees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/getEmployeeById/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    @PutMapping("/updateEmployee/{id}")
    public Employee updateEmployee(
            @PathVariable Long id,
           @Valid  @RequestBody Employee emp) {

        Employee existing = employeeRepository.findById(id).orElse(null);

        if (existing == null) {
            return null;
        }

        existing.setEmpName(emp.getEmpName());
        existing.setEmpSalary(emp.getEmpSalary());

        return employeeRepository.save(existing);
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
    }
}