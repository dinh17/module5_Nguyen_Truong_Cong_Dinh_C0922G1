package com.example.try_exam_module6.repository;

import com.example.try_exam_module6.model.Department;
import com.example.try_exam_module6.model.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IPositionRepository extends JpaRepository<Position,Long> {
@Query(value = "select id,name from `position`",nativeQuery = true)
    List<Position> getAllPosition();


}
