package com.example.try_exam_module6.service;

import com.example.try_exam_module6.model.Department;
import com.example.try_exam_module6.model.Employee;
import com.example.try_exam_module6.model.Position;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IEmployeeService {
    Page<Employee> searchAllEmployee(Pageable pageable);
    boolean addEmployee(Employee employee);
    boolean updateEmployee(Employee employee);
    boolean deleteEmployee(Long id);
}
