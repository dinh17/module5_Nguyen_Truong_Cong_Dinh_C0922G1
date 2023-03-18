package com.example.webbackend.service.imlp;

import com.example.webbackend.model.bus.Category;
import com.example.webbackend.repository.ICategoryRepository;
import com.example.webbackend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;
    @Override
    public List<Category> getAll() {
        return categoryRepository.getAll();
    }
}
