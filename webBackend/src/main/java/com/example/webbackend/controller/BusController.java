package com.example.webbackend.controller;

import com.example.webbackend.model.bus.Bus;
import com.example.webbackend.model.bus.BusDto;
import com.example.webbackend.model.bus.Category;
import com.example.webbackend.service.IBusService;
import com.example.webbackend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/bus/{id}")
    public ResponseEntity<Bus> findById(@PathVariable int id) {
        Bus medicalRecord = busService.findById(id);
        return new ResponseEntity<>(medicalRecord, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> findAllCategory() {
        List<Category> categoryList = categoryService.getAll();
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }

    @DeleteMapping("/bus/{id}")
    public ResponseEntity<?> deleteById(@PathVariable int id) {
        busService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/bus")
    public ResponseEntity<?> updateById(@Validated @RequestBody Bus bus) {
        busService.update( bus.getNumberCar(), bus.getNameBus(), bus.getLocalFrom(), bus.getLocalEnd(),
                bus.getNumberPhone(), bus.getEmail(), bus.getTimeOut(), bus.getTimeIn(), bus.getCategory().getId(),bus.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/bus/update")
    public ResponseEntity<?> updateDto(@Validated @RequestBody BusDto busDto, BindingResult bindingResult) {
        busDto.validate(busDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        busService.update( busDto.getNumberCar(), busDto.getNameBus(), busDto.getLocalFrom(), busDto.getLocalEnd(),
                busDto.getNumberPhone(), busDto.getEmail(), busDto.getTimeOut(), busDto.getTimeIn(), busDto.getCategory().getId(),busDto.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/bus")
    public ResponseEntity<?> addBus(@RequestBody Bus bus) {
        busService.addBus(bus.getNumberCar(), bus.getNameBus(), bus.getLocalFrom(), bus.getLocalEnd(),
                bus.getNumberPhone(), bus.getEmail(), bus.getTimeOut(), bus.getTimeIn(), bus.getCategory().getId());

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/bus/create")
    public ResponseEntity<?> addBusDto(@Validated @RequestBody BusDto busDto, BindingResult bindingResult) {
        busDto.validate(busDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        busService.addBus(busDto.getNumberCar(), busDto.getNameBus(), busDto.getLocalFrom(), busDto.getLocalEnd(),
                busDto.getNumberPhone(), busDto.getEmail(), busDto.getTimeOut(), busDto.getTimeIn(), busDto.getCategory().getId());


        return new ResponseEntity<>(HttpStatus.OK);
    }

}
