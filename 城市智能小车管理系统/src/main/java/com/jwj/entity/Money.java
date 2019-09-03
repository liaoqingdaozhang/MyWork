package com.jwj.entity;

public class Money {

    /**
     * money : -100
     * type : 加油
     * car_id : 1
     * date : 2019/7/26 16:28:00
     */

    private int money;
    private String type;
    private int car_id;
    private String date;

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCar_id() {
        return car_id;
    }

    public void setCar_id(int car_id) {
        this.car_id = car_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
