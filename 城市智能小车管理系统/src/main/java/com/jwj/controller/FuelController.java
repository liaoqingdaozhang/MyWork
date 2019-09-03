package com.jwj.controller;

import com.jwj.entity.Examine;
import com.jwj.entity.Fuel;
import com.jwj.service.ExamineService;
import com.jwj.service.FuelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/fuel")
public class FuelController {
    @Autowired
    private FuelService fuelService;

    @RequestMapping("/insert")
    public int insert(@RequestBody Fuel fuel){
        if (fuel.equals("")|| fuel==null){
            return 0;
        }else {
            return fuelService.insert(fuel);
        }
    }

    @RequestMapping("/delete")
    public int delete(@RequestBody Fuel fuel){
        if (fuel.equals("")||fuel==null||fuel.getId().equals("")){
            return 0;
        }else {
            return fuelService.deleteByPrimaryKey(fuel.getId());
        }
    }

    @RequestMapping("/selectall")
    public List<Fuel> list(){
        List<Fuel> fuels = fuelService.selectByExample();
        return fuels;
    }
    @RequestMapping("/bycarid")
    public List<Fuel> carbycarid(@RequestBody  Fuel fuel){
        if (fuel.equals("")||fuel==null||fuel.getCarId().equals("")){
            return null;
        }else {
            return fuelService.selectBycaid(fuel.getCarId());
        }
    }

    @RequestMapping("/byid")
    public Fuel carbyid(@RequestBody  Fuel fuel){
        if (fuel.equals("")||fuel==null||fuel.getId().equals("")){
            return null;
        }else {
            return fuelService.selectByPrimaryKey(fuel.getId());
        }
    }
    @RequestMapping("/update")
    public int fuelupdate(@RequestBody Fuel fuel){
        if (fuel.equals("")||fuel==null||fuel.getId().equals("")){
            return 0;
        }else {
            return fuelService.updateByPrimaryKeySelective(fuel);
        }
    }
}
