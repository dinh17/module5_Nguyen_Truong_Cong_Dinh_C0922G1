package com.example.try_exam_module6.repository;

import com.example.try_exam_module6.model.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;


@Transactional
public interface IEmployeeRepository  extends JpaRepository<Employee,Long> {

    @Query(value="select e.* from `employee` e  join `position` p on p.id = e.position_id join department d on d.id = e.department_id",nativeQuery = true)
    Page<Employee> searchAll(Pageable pageable);

}
