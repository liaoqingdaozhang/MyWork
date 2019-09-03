package com.jwj.controller;

import com.github.pagehelper.PageInfo;
import com.jwj.entity.Moneyrecord;
import com.jwj.entity.Park;
import com.jwj.service.MoneyrecordService;
import com.jwj.service.ParkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/park")
public class ParkController {

    @Autowired
    private ParkService parkService;

    @RequestMapping("/insert")
    public int insert(@RequestBody Park park){
        if (park.equals("")|| park==null){
            return 0;
        }else {
            return parkService.insert(park);
        }
    }

    @RequestMapping("/delete")
    public int delete(@RequestBody Park park){
        if (park.equals("")||park==null||park.getId().equals("")){
            return 0;
        }else {
            return parkService.deleteByPrimaryKey(park.getId());
        }
    }

    @RequestMapping("/selectall")
    public PageInfo list(@RequestParam(name="page",required = true,defaultValue = "1")String page, @RequestParam(name="size",required = true,defaultValue = "2")String size){
        List<Park> parks = parkService.selectByExample(Integer.parseInt(page),Integer.parseInt(size));
        PageInfo pageInfo=new PageInfo(parks);
        return pageInfo;
    }

    @RequestMapping("/byid")
    public Park carbyid(@RequestBody Park park){
        if (park.equals("")||park==null||park.getId().equals("")){
            return null;
        }else {
            return parkService.selectByPrimaryKey(park.getId());
        }
    }

    @RequestMapping("/update")
    public int parkupdate(@RequestBody Park park){
        if (park.equals("")||park==null||park.getId().equals("")){
            return 0;
        }else {
            return parkService.updateByPrimaryKeySelective(park);
        }
    }

}
