package com.jwj.controller;

import com.github.pagehelper.PageInfo;
import com.jwj.entity.Carbypark;
import com.jwj.entity.IntList;
import com.jwj.service.CarbyparkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/carbypark")
public class CarByParkController {
    @Autowired
    private CarbyparkService carbyparkService;

    @RequestMapping("/insert")
    public int insert(@RequestBody Carbypark carbypark){
        if (carbypark.equals("")|| carbypark==null){
            return 0;
        }else {
            return carbyparkService.insert(carbypark);
        }
    }
    @RequestMapping("/delete")
    public int delete(@RequestBody Carbypark carbypark){
        if (carbypark.equals("")||carbypark==null||carbypark.getId().equals("")){
            return 0;
        }else {
            return carbyparkService.deleteByPrimaryKey(carbypark.getId());
        }
    }
    @RequestMapping("/selectall")
    public List<Carbypark> list(){
        List<Carbypark> carbyparkList = carbyparkService.selectByExample();
        return carbyparkList;
    }
    @RequestMapping("/bycarid")
    public List<Carbypark> listByCarId(@RequestBody Carbypark carbypark){
        if (carbypark.equals("")||carbypark==null||carbypark.getCarid().equals("")){
            return null;
        }else {
            return carbyparkService.selectByCarId(carbypark.getCarid());
        }
    }

    @RequestMapping("/bylistcarid")
    public PageInfo listByListCarId(@RequestBody IntList intList){
        if (intList.equals("")||intList==null||intList.getIntegers().equals("")){
            return null;
        }else {
            List<Carbypark> carbyparks = carbyparkService.selectByListCarId(intList);
            PageInfo pageInfo=new PageInfo(carbyparks);
            return pageInfo;
        }
    }

        @RequestMapping("/byparkid")
    public List<Carbypark> listByParkId(@RequestBody Carbypark carbypark){
        if (carbypark.equals("")||carbypark==null||carbypark.getParkid().equals("")){
            return null;
        }else {
            return carbyparkService.selectByParkId(carbypark.getParkid());
        }
    }

    @RequestMapping("/byid")
    public Carbypark carbyid(@RequestBody Carbypark carbypark){
        if (carbypark.equals("")||carbypark==null||carbypark.getId().equals("")){
            return null;
        }else {
            return carbyparkService.selectByPrimaryKey(carbypark.getId());
        }
    }
    @RequestMapping("/update")
    public int carbyparkupdate(@RequestBody Carbypark carbypark){
        if (carbypark.equals("")||carbypark==null||carbypark.getId().equals("")){
            return 0;
        }else {
            return carbyparkService.updateByPrimaryKeySelective(carbypark);
        }
    }

}
