package com.example.Employee_Management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Employee_Management.Entity.Employee;

public interface EmployeeRepository  extends JpaRepository<Employee, Long> {
    
}
