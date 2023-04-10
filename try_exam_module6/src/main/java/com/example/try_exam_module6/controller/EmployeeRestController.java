package com.example.try_exam_module6.controller;

import com.example.try_exam_module6.model.Department;
import com.example.try_exam_module6.model.Employee;
import com.example.try_exam_module6.model.Position;
import com.example.try_exam_module6.service.IDepartmentService;
import com.example.try_exam_module6.service.IEmployeeService;
import com.example.try_exam_module6.service.IPositionService;
import com.example.try_exam_module6.service.impl.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("employees")
public class EmployeeRestController {
    @Autowired
    private IEmployeeService employeeService;
    @Autowired
    private IPositionService positionService;
    @Autowired
    private IDepartmentService departmentService;

    @GetMapping("/page")
    public ResponseEntity<Page<Employee>> listEmployee(@PageableDefault(size = 2) Pageable pageable) {
        Page<Employee> employeePage = employeeService.searchAllEmployee(pageable);
        if (employeePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(employeePage, HttpStatus.OK);
    }

    @PostMapping("/create-employee")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        boolean added = employeeService.addEmployee(employee);
        if (!added) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }

    @GetMapping("list-position")
    public ResponseEntity<?> getAllPosition() {
        List<Position> positionList = positionService.getAllPosition();
        if (positionList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(positionList, HttpStatus.OK);
    }

    @GetMapping("list-department")
    public ResponseEntity<?> getAllDepartment() {
        List<Department> departmentList= departmentService.getAllDepartment();
        if (departmentList == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(departmentList, HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        if (!id.equals(employee.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        boolean updated = employeeService.updateEmployee(employee);
        if (!updated) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

}
