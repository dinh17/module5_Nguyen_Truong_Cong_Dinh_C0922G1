package com.example.try_exam_module6.service.impl;

import com.example.try_exam_module6.model.Position;
import com.example.try_exam_module6.repository.IPositionRepository;
import com.example.try_exam_module6.service.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService implements IPositionService {
   @Autowired
     private  IPositionRepository positionRepository;

    @Override
    public List<Position> getAllPosition() {
        return positionRepository.getAllPosition();
    }
}
