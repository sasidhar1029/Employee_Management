package com.example.Employee_Management.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;

@Entity
@Table(name = "employees")
public class Employee {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long EmpId;

     @NotBlank(message = "Employee name is required")
    @Pattern(
        regexp = "^[A-Za-z ]+$",
        message = "Employee name should contain only letters"
    )
    private String EmpName;

      @NotNull(message = "Employee salary is required")
    @Positive(message = "Salary must be greater than 0")
    private Double EmpSalary;
    
    public Long getEmpId() {
        return EmpId;
    }
    public void setEmpId(Long empId) {
        EmpId = empId;
    }
    public String getEmpName() {
        return EmpName;
    }
    public void setEmpName(String empName) {
        EmpName = empName;
    }
    public Double getEmpSalary() {
        return EmpSalary;
    }
    public void setEmpSalary(Double empSalary) {
        EmpSalary = empSalary;
    }

}
