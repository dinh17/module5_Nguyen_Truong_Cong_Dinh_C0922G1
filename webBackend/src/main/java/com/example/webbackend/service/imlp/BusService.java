package com.example.webbackend.service.imlp;

import com.example.webbackend.model.bus.Bus;
import com.example.webbackend.repository.IBusRepository;
import com.example.webbackend.service.IBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



@Service
public class BusService implements IBusService {
  @Autowired
   private IBusRepository busRepository;

    @Override
    public Page<Bus> getPageAll(Pageable pageable) {
        return busRepository.getPageAll(pageable);
    }

    @Override
    public Page<Bus> searchByName(String nameBus, Pageable pageable) {
        return busRepository.searchByName(nameBus,pageable);
    }
}
