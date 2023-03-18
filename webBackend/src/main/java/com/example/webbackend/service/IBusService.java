package com.example.webbackend.service;

import com.example.webbackend.model.bus.Bus;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;



public interface IBusService {
    Page<Bus> getPageAll(Pageable pageable);



    Bus findById(int id);

    void deleteById(int id);


    void update(int numberCar,String nameBus,String localFrom,String localEnd,int numberPhone,String email,String timeOut,String timeIn,int categoryId,int id);

    void addBus(int numberCar,String nameBus,String localFrom,String localEnd,int numberPhone,String email,String timeOut,String timeIn,int categoryId);
}
