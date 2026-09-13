package com.example.Employee_Management.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long EmpId;
    private String EmpName;
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
