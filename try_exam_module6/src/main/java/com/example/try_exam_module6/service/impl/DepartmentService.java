package com.example.try_exam_module6.service.impl;

import com.example.try_exam_module6.model.Department;
import com.example.try_exam_module6.repository.IDepartmentRepository;
import com.example.try_exam_module6.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService implements IDepartmentService {
    @Autowired
    private IDepartmentRepository departmentRepository;

    @Override
    public List<Department> getAllDepartment() {
        return departmentRepository.getAllDepartment();
    }
}
