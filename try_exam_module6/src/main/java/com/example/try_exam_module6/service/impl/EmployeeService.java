package com.example.try_exam_module6.service.impl;

import com.example.try_exam_module6.model.Employee;
import com.example.try_exam_module6.repository.IEmployeeRepository;
import com.example.try_exam_module6.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    IEmployeeRepository employeeRepository;

    @Override
    public Page<Employee> searchAllEmployee(Pageable pageable) {
        return employeeRepository.searchAll(pageable);
    }

    @Override
    public boolean addEmployee(Employee employee) {

        employeeRepository.save(employee);
        return true;
    }

    @Override
    public boolean updateEmployee(Employee employee) {
        if (!employeeRepository.findById(employee.getId()).isPresent()) {
            return false;
        }
        employeeRepository.save(employee);
        return true;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        return false;
    }
}
