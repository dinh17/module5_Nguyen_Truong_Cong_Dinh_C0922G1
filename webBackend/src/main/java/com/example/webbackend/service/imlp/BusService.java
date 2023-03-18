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
    public Bus findById(int id) {
        return busRepository.findById(id);
    }

    @Override
    public void deleteById(int id) {
        busRepository.deleteById(id);
    }

    @Override
    public void update(int numberCar, String nameBus, String localFrom, String localEnd,
                       int numberPhone, String email, String timeOut, String timeIn, int categoryId,int id) {
        busRepository.update(numberCar, nameBus, localFrom, localEnd, numberPhone, email, timeOut, timeIn, categoryId, id);
    }

    @Override
    public void addBus(int numberCar, String nameBus, String localFrom, String localEnd, int numberPhone, String email, String timeOut, String timeIn, int categoryId) {
        busRepository.add(numberCar, nameBus, localFrom, localEnd, numberPhone, email, timeOut, timeIn, categoryId);
    }


}
