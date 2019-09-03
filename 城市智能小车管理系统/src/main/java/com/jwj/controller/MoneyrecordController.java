package com.jwj.controller;

import com.github.pagehelper.PageInfo;
import com.jwj.entity.Fuel;
import com.jwj.entity.IntList;
import com.jwj.entity.Moneyrecord;
import com.jwj.service.FuelService;
import com.jwj.service.MoneyrecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/moneyrecord")
public class MoneyrecordController {
    @Autowired
    private MoneyrecordService moneyrecordService;

    @RequestMapping("/insert")
    public int insert(@RequestBody Moneyrecord moneyrecord){
        if (moneyrecord.equals("")|| moneyrecord==null){
            return 0;
        }else {
            return moneyrecordService.insert(moneyrecord);
        }
    }

    @RequestMapping("/delete")
    public int delete(@RequestBody Moneyrecord moneyrecord){
        if (moneyrecord.equals("")||moneyrecord==null||moneyrecord.getId().equals("")){
            return 0;
        }else {
            return moneyrecordService.deleteByPrimaryKey(moneyrecord.getId());
        }
    }

    @RequestMapping("/selectall")
    public List<Moneyrecord> list(){
        List<Moneyrecord> moneyrecords = moneyrecordService.selectByExample();
        return moneyrecords;
    }

    @RequestMapping("/byid")
    public Moneyrecord carbyid(@RequestBody  Moneyrecord moneyrecord){
        if (moneyrecord.equals("")||moneyrecord==null||moneyrecord.getId().equals("")){
            return null;
        }else {
            return moneyrecordService.selectByPrimaryKey(moneyrecord.getId());
        }
    }
    @RequestMapping("/bycarid")
    public List<Moneyrecord> carbycarid(@RequestBody  Moneyrecord moneyrecord){
        if (moneyrecord.equals("")||moneyrecord==null||moneyrecord.getCarId().equals("")){
            return null;
        }else {
            return moneyrecordService.selectByCarId(moneyrecord.getCarId());
        }
    }
    @RequestMapping("/bylistcarid")
    public PageInfo carbylistcarid(@RequestBody IntList intList){
        if (intList.equals("")||intList==null||intList.getIntegers().equals("")){
            return null;
        }else {
            List<Moneyrecord> moneyrecords = moneyrecordService.selectByListCarId(intList);

            PageInfo pageInfo=new PageInfo(moneyrecords);
            return pageInfo;
        }
    }
    @RequestMapping("/update")
    public int moneyrecordupdate(@RequestBody Moneyrecord moneyrecord){
        if (moneyrecord.equals("")||moneyrecord==null||moneyrecord.getId().equals("")){
            return 0;
        }else {
            return moneyrecordService.updateByPrimaryKeySelective(moneyrecord);
        }
    }
}
