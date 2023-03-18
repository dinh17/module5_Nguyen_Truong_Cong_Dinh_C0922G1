package com.example.webbackend.service;

import com.example.webbackend.model.bus.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IBusService {
    Page<Bus> getPageAll(Pageable pageable);

    Page<Bus> searchByName(String nameBus, Pageable pageable);
}
