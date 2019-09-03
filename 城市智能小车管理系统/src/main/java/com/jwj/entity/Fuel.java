package com.jwj.entity;

public class Fuel {
    private Integer id;

    private Integer fuelnumber;

    private String fuelstarttime;

    private String fuelendtime;

    private String fueldistance;

    private Integer carId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFuelnumber() {
        return fuelnumber;
    }

    public void setFuelnumber(Integer fuelnumber) {
        this.fuelnumber = fuelnumber;
    }

    public String getFuelstarttime() {
        return fuelstarttime;
    }

    public void setFuelstarttime(String fuelstarttime) {
        this.fuelstarttime = fuelstarttime == null ? null : fuelstarttime.trim();
    }

    public String getFuelendtime() {
        return fuelendtime;
    }

    public void setFuelendtime(String fuelendtime) {
        this.fuelendtime = fuelendtime == null ? null : fuelendtime.trim();
    }

    public String getFueldistance() {
        return fueldistance;
    }

    public void setFueldistance(String fueldistance) {
        this.fueldistance = fueldistance == null ? null : fueldistance.trim();
    }

    public Integer getCarId() {
        return carId;
    }

    public void setCarId(Integer carId) {
        this.carId = carId;
    }
}