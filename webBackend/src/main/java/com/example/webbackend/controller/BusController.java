package com.example.webbackend.controller;

import com.example.webbackend.model.bus.Bus;
import com.example.webbackend.repository.IBusRepository;
import com.example.webbackend.repository.ICategoryRepository;
import com.example.webbackend.service.IBusService;
import com.example.webbackend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("")
public class BusController {
    @Autowired
    private IBusService busService;
    @Autowired
    private ICategoryService categoryService;
    @GetMapping("/bus/page")
    public ResponseEntity<Page<Bus>> findPageAll(@PageableDefault(size = 2) Pageable pageable) {
        Page<Bus> busPage = busService.getPageAll(pageable);
        return new ResponseEntity<>(busPage, HttpStatus.OK);
    }

    @GetMapping("/bus/search")
    public ResponseEntity<Page<Bus>> searchByName(@RequestParam(name = "searchText",defaultValue = "") String searchText, @PageableDefault(size = 2) Pageable pageable) {
        Page<Bus> busPage = busService.searchByName(searchText,pageable);
        return new ResponseEntity<>(busPage, HttpStatus.OK);
    }

}
