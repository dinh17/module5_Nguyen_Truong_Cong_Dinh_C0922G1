package com.example.webbackend.model.bus;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


import javax.validation.constraints.NotBlank;

public class BusDto implements Validator {
    private  int id;
    private int numberCar;

    private Category category;
    @NotBlank
    private  String nameBus;
    @NotBlank
    private String localFrom;
    @NotBlank
    private String localEnd;

    private int numberPhone;
    @NotBlank
    private String email;
    @NotBlank
    private String timeOut;
    @NotBlank
    private String timeIn;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumberCar() {
        return numberCar;
    }

    public void setNumberCar(int numberCar) {
        this.numberCar = numberCar;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getNameBus() {
        return nameBus;
    }

    public void setNameBus(String nameBus) {
        this.nameBus = nameBus;
    }

    public String getLocalFrom() {
        return localFrom;
    }

    public void setLocalFrom(String localFrom) {
        this.localFrom = localFrom;
    }

    public String getLocalEnd() {
        return localEnd;
    }

    public void setLocalEnd(String localEnd) {
        this.localEnd = localEnd;
    }

    public int getNumberPhone() {
        return numberPhone;
    }

    public void setNumberPhone(int numberPhone) {
        this.numberPhone = numberPhone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTimeOut() {
        return timeOut;
    }

    public void setTimeOut(String timeOut) {
        this.timeOut = timeOut;
    }

    public String getTimeIn() {
        return timeIn;
    }

    public void setTimeIn(String timeIn) {
        this.timeIn = timeIn;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        BusDto busDto = (BusDto) target;
        if(busDto.getTimeOut().compareTo(busDto.getTimeIn())>=1){
            errors.rejectValue("timeOut", "timeIn", "Ngày kết thúc phải lớn hơn ngày bắt đầu");
        }
    }
}
