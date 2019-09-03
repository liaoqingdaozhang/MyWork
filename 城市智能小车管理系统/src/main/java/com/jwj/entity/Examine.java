package com.jwj.entity;

public class Examine {
    private Integer id;

    private String examinetime;

    private String examinetype;

    private String year;

    private Integer carId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getExaminetime() {
        return examinetime;
    }

    public void setExaminetime(String examinetime) {
        this.examinetime = examinetime == null ? null : examinetime.trim();
    }

    public String getExaminetype() {
        return examinetype;
    }

    public void setExaminetype(String examinetype) {
        this.examinetype = examinetype == null ? null : examinetype.trim();
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year == null ? null : year.trim();
    }

    public Integer getCarId() {
        return carId;
    }

    public void setCarId(Integer carId) {
        this.carId = carId;
    }
}