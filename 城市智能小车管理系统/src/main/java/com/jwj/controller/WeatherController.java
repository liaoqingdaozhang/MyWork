package com.jwj.controller;

import com.jwj.entity.Park;
import com.jwj.entity.User;
import com.jwj.entity.Weather;
import com.jwj.service.ParkService;
import com.jwj.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/weather")
public class WeatherController {
    @Autowired
    private WeatherService weatherService;

    @RequestMapping("/insert")
    public int insert(@RequestBody Weather weather){
        if (weather.equals("")|| weather==null){
            return 0;
        }else {
            return weatherService.insert(weather);
        }
    }

    @RequestMapping("/delete")
    public int delete(@RequestBody Weather weather){
        if (weather.equals("")||weather==null||weather.getId().equals("")){
            return 0;
        }else {
            return weatherService.deleteByPrimaryKey(weather.getId());
        }
    }

    @RequestMapping("/selectall")
    public List<Weather> list(){
        List<Weather> parks = weatherService.selectByExample();
        return parks;
    }

    @RequestMapping("/byid")
    public Weather carbyid(@RequestBody Weather weather){
        if (weather.equals("")||weather==null||weather.getId().equals("")){
            return null;
        }else {
            return weatherService.selectByPrimaryKey(weather.getId());
        }
    }

    @RequestMapping("/update")
    public int weatherupdate(@RequestBody Weather weather){
        if (weather.equals("")||weather==null||weather.getId().equals("")){
            return 0;
        }else {
            return weatherService.updateByPrimaryKeySelective(weather);
        }
    }

}
