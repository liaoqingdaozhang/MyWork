package com.jwj.entity;

public class Weather {
    private Integer id;

    private String weathertime;

    private String weathertype;

    private Integer pm25;

    private Integer co2;

    private Integer temperature;

    private Integer lightintensity;

    private Integer humidity;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getWeathertime() {
        return weathertime;
    }

    public void setWeathertime(String weathertime) {
        this.weathertime = weathertime == null ? null : weathertime.trim();
    }

    public String getWeathertype() {
        return weathertype;
    }

    public void setWeathertype(String weathertype) {
        this.weathertype = weathertype == null ? null : weathertype.trim();
    }

    public Integer getPm25() {
        return pm25;
    }

    public void setPm25(Integer pm25) {
        this.pm25 = pm25;
    }

    public Integer getCo2() {
        return co2;
    }

    public void setCo2(Integer co2) {
        this.co2 = co2;
    }

    public Integer getTemperature() {
        return temperature;
    }

    public void setTemperature(Integer temperature) {
        this.temperature = temperature;
    }

    public Integer getLightintensity() {
        return lightintensity;
    }

    public void setLightintensity(Integer lightintensity) {
        this.lightintensity = lightintensity;
    }

    public Integer getHumidity() {
        return humidity;
    }

    public void setHumidity(Integer humidity) {
        this.humidity = humidity;
    }
}