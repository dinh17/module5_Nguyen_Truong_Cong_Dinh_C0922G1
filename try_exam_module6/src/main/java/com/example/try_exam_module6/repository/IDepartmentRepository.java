package com.example.try_exam_module6.repository;

import com.example.try_exam_module6.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Transactional
public interface IDepartmentRepository extends JpaRepository<Department,Long> {


    @Query(value="select * from department ",nativeQuery = true)
    List<Department> getAllDepartment();
}
